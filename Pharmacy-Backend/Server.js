/***************************************************************************************
    Pharmacy Web Backend Server

    Integrates:
    - Neon PostgreSQL: Serverless database for subscribers and inquiries
    - Nodemailer + Brevo: Email automation (300 free emails/day)
    - Resend: Legacy email support (optional)

    Database Layer: Stores newsletter subscribers and customer inquiries
    Email System: Dual-engine approach with Brevo/Nodemailer as primary

    TO RUN THIS SERVER -- npm start
    TO INIT DATABASE -- npm run init-db

    SECURITY NOTES (read before deploying):
    - Admin routes now require an `x-api-key` header matching ADMIN_API_KEY in .env.
      Set a long, random value for ADMIN_API_KEY — this is your only protection on
      those routes right now. Treat it like a password.
    - Rate limiting requires the `express-rate-limit` package:
          npm install express-rate-limit
    - Security headers require the `helmet` package:
          npm install helmet
***************************************************************************************/

// Importing dependencies
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { Resend } from 'resend';

// Import database and email services
import pool from './db.js';
import {
  addNewsletterSubscriber,
  removeNewsletterSubscriber,
  getNewsletterSubscribers,
  addCustomerInquiry,
  getCustomerInquiry,
  getAllCustomerInquiries,
  updateInquiryStatus,
  logEmail,
} from './dbService.js';
import {
  sendEmail,
  sendNewsletterConfirmation,
  sendInquiryConfirmation,
  sendInquiryNotification,
} from './emailService.js';

// Injecting environment variables
dotenv.config();
const port = process.env.PORT || 3000; // Port number

// Fail fast if the admin key isn't set — better than silently running unprotected
if (!process.env.ADMIN_API_KEY) {
  console.warn('⚠️  WARNING: ADMIN_API_KEY is not set in .env — admin routes will reject all requests.');
}

const app = express();

// Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
app.use(helmet());

// CORS middleware to allow frontend requests
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:8080',
    'http://127.0.0.1:8080'
  ], // Vite dev server URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'x-api-key']
}));

// Limit request body size to prevent crude DoS via huge payloads
app.use(bodyParser.json({ limit: '100kb' }));

const resend = new Resend(process.env.RESEND_API_KEY); // Constructing resend with its API key


// ======================= SECURITY HELPERS =======================

// Escape HTML special characters so user-supplied text can never break out
// of the HTML email templates or inject markup/scripts.
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Reasonably strict (not perfect, but far better than includes('@')) email check
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) && email.length <= 254;
}

// Simple API-key gate for admin routes. Compares against ADMIN_API_KEY in .env.
function requireAdminKey(req, res, next) {
  const key = req.headers['x-api-key'];

  if (!process.env.ADMIN_API_KEY) {
    return res.status(503).json({
      success: false,
      message: 'Admin access is not configured on this server.'
    });
  }

  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized'
    });
  }

  next();
}

// ======================= RATE LIMITERS =======================

// Public-facing form endpoints: generous but bounded, to stop scripted abuse
const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,                  // 10 requests per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests from this device. Please try again later.'
  }
});

// Admin endpoints: looser on request count, but still capped
const adminLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again later.'
  }
});


// ======================= ROUTES =======================

// Test route to check if server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// ======================= CONTACT FORM ENDPOINT =======================
// Post route -- to send email data with database storage
app.post('/api/send-email', formLimiter, async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: name, email, subject, message"
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email address"
    });
  }

  // Sanitize free-text fields before they ever reach an HTML email template
  const safeName = escapeHtml(name).slice(0, 200);
  const safeSubject = escapeHtml(subject).slice(0, 300);
  const safeMessage = escapeHtml(message).slice(0, 5000);
  const safePhone = phone ? escapeHtml(phone).slice(0, 50) : null;

  try {
    // Store inquiry in database
    const inquiry = await addCustomerInquiry(safeName, email, safePhone, safeSubject, safeMessage);
    console.log('✓ Inquiry stored:', inquiry.id);

    // Send confirmation email to customer using Nodemailer + Brevo
    try {
      await sendInquiryConfirmation(email, safeName, inquiry.id);
      await logEmail(email, 'inquiry_confirmation', 'We received your inquiry', inquiry.id);
      console.log('✓ Confirmation email sent to customer');
    } catch (emailError) {
      console.error('Warning: Could not send customer confirmation email:', emailError.message);
      // Don't fail the entire request if email fails
    }

    // Send notification to pharmacy
    try {
      await sendInquiryNotification(safeName, email, safePhone || 'Not provided', safeSubject, safeMessage, inquiry.id);
      await logEmail(process.env.PHARMACY_EMAIL, 'inquiry_notification', `New inquiry: ${safeSubject}`, inquiry.id);
      console.log('✓ Notification sent to pharmacy');
    } catch (emailError) {
      console.error('Warning: Could not send pharmacy notification:', emailError.message);
    }

    res.status(200).json({
      success: true,
      message: "Your inquiry has been received and stored successfully!",
      inquiryId: inquiry.id
    });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    res.status(500).json({
      success: false,
      message: "Failed to process your inquiry. Please try again later."
    });
  }
});

// ======================= NEWSLETTER ENDPOINTS =======================

// Subscribe to newsletter endpoint
app.post('/api/newsletter-subscribe', formLimiter, async (req, res) => {
  const { email } = req.body;

  // Basic validation
  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address"
    });
  }

  try {
    // Add subscriber to database
    const subscriber = await addNewsletterSubscriber(email);
    console.log('✓ Newsletter subscriber added:', email);

    // Send welcome email
    try {
      await sendNewsletterConfirmation(email);
      await logEmail(email, 'newsletter_confirmation', 'Welcome to Our Pharmacy Newsletter!');
      console.log('✓ Welcome email sent');
    } catch (emailError) {
      console.error('Warning: Could not send welcome email:', emailError.message);
      // Don't fail if email fails, subscriber is already saved
    }

    // Notify pharmacy of new subscriber
    try {
      await sendEmail({
        to: process.env.PHARMACY_EMAIL,
        subject: 'New Newsletter Subscription',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        `,
      });
      await logEmail(process.env.PHARMACY_EMAIL, 'subscriber_notification', 'New newsletter subscriber');
    } catch (emailError) {
      console.error('Warning: Could not send pharmacy notification:', emailError.message);
    }

    res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter!",
      status: subscriber.status
    });
  } catch (error) {
    if (error.message.includes('already subscribed')) {
      return res.status(400).json({
        success: false,
        message: "This email is already subscribed to our newsletter"
      });
    }
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to subscribe. Please try again later."
    });
  }
});

// Unsubscribe from newsletter
app.post('/api/newsletter-unsubscribe', formLimiter, async (req, res) => {
  const { email } = req.body;

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address"
    });
  }

  try {
    await removeNewsletterSubscriber(email);
    console.log('✓ Newsletter subscriber removed:', email);

    res.status(200).json({
      success: true,
      message: "Successfully unsubscribed from newsletter"
    });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to unsubscribe. Please try again later."
    });
  }
});

// ======================= ADMIN ENDPOINTS (PROTECTED) =======================
// All routes below require a valid x-api-key header matching ADMIN_API_KEY.

// Get newsletter subscribers (admin endpoint)
app.get('/api/admin/newsletter-subscribers', adminLimiter, requireAdminKey, async (req, res) => {
  try {
    const subscribers = await getNewsletterSubscribers('active');
    res.status(200).json({
      success: true,
      count: subscribers.length,
      subscribers
    });
  } catch (error) {
    console.error('Error fetching subscribers:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch subscribers"
    });
  }
});

// ======================= CUSTOMER INQUIRY ENDPOINTS (PROTECTED) =======================

// Get all customer inquiries (admin endpoint)
app.get('/api/admin/inquiries', adminLimiter, requireAdminKey, async (req, res) => {
  try {
    const status = req.query.status || null;
    const inquiries = await getAllCustomerInquiries(status);

    res.status(200).json({
      success: true,
      count: inquiries.length,
      inquiries
    });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch inquiries"
    });
  }
});

// Get specific inquiry
app.get('/api/admin/inquiries/:id', adminLimiter, requireAdminKey, async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid inquiry id"
    });
  }

  try {
    const inquiry = await getCustomerInquiry(id);

    res.status(200).json({
      success: true,
      inquiry
    });
  } catch (error) {
    console.error('Error fetching inquiry:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch inquiry"
    });
  }
});

// Update inquiry status
app.put('/api/admin/inquiries/:id/status', adminLimiter, requireAdminKey, async (req, res) => {
  const { status } = req.body;
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid inquiry id"
    });
  }

  if (!status) {
    return res.status(400).json({
      success: false,
      message: "Status is required"
    });
  }

  try {
    const inquiry = await updateInquiryStatus(id, status);

    res.status(200).json({
      success: true,
      message: "Inquiry status updated",
      inquiry
    });
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    res.status(500).json({
      success: false,
      message: "Failed to update inquiry status"
    });
  }
});

// Server Listening on the port value
app.listen(port, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════╗
  ║    🏥 Pharmacy Web Backend Server Started             ║
  ║    Server running on port ${port}                        ║
  ║    Database: Neon PostgreSQL                          ║
  ║    Email Service: Nodemailer + Brevo SMTP             ║
  ║    Endpoints Ready:                                   ║
  ║    ✓ /api/send-email (Contact Form)                 ║
  ║    ✓ /api/newsletter-subscribe                      ║
  ║    ✓ /api/newsletter-unsubscribe                    ║
  ║    ✓ /api/admin/* (Protected — x-api-key required)  ║
  ╚═══════════════════════════════════════════════════════╝
  `);
});