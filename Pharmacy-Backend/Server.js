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
***************************************************************************************/

// Importing dependencies  
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
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

const app = express(); 

// CORS middleware to allow frontend requests
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://127.0.0.1:5173',
    'http://localhost:8080', 
    'http://127.0.0.1:8080'
  ], // Vite dev server URLs
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json()); // Middleware to parse all request and responses to json files

const resend = new Resend(process.env.RESEND_API_KEY); // Constructing resend with its API key


// ======================= ROUTES =======================

// Test route to check if server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// ======================= CONTACT FORM ENDPOINT =======================
// Post route -- to send email data with database storage
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      message: "Missing required fields: name, email, subject, message" 
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({ 
      success: false, 
      message: "Invalid email address" 
    });
  }

  try {
    // Store inquiry in database
    const inquiry = await addCustomerInquiry(name, email, phone || null, subject, message);
    console.log('✓ Inquiry stored:', inquiry.id);

    // Send confirmation email to customer using Nodemailer + Brevo
    try {
      await sendInquiryConfirmation(email, name, inquiry.id);
      await logEmail(email, 'inquiry_confirmation', 'We received your inquiry', inquiry.id);
      console.log('✓ Confirmation email sent to customer');
    } catch (emailError) {
      console.error('Warning: Could not send customer confirmation email:', emailError.message);
      // Don't fail the entire request if email fails
    }

    // Send notification to pharmacy
    try {
      await sendInquiryNotification(name, email, phone || 'Not provided', subject, message, inquiry.id);
      await logEmail(process.env.PHARMACY_EMAIL, 'inquiry_notification', `New inquiry: ${subject}`, inquiry.id);
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
app.post('/api/newsletter-subscribe', async (req, res) => {
  const { email } = req.body;

  // Basic validation
  if (!email || !email.includes('@')) {
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
            <p><strong>Email:</strong> ${email}</p>
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
app.post('/api/newsletter-unsubscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ 
      success: false, 
      message: "Please provide a valid email address" 
    });
  }

  try {
    const subscriber = await removeNewsletterSubscriber(email);
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

// Get newsletter subscribers (admin endpoint)
app.get('/api/admin/newsletter-subscribers', async (req, res) => {
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

// ======================= CUSTOMER INQUIRY ENDPOINTS =======================

// Get all customer inquiries (admin endpoint)
app.get('/api/admin/inquiries', async (req, res) => {
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
app.get('/api/admin/inquiries/:id', async (req, res) => {
  try {
    const inquiry = await getCustomerInquiry(parseInt(req.params.id));
    
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
app.put('/api/admin/inquiries/:id/status', async (req, res) => {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ 
      success: false, 
      message: "Status is required" 
    });
  }

  try {
    const inquiry = await updateInquiryStatus(parseInt(req.params.id), status);
    
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
  ║    ✓ /api/admin/* (Admin endpoints)                 ║
  ╚═══════════════════════════════════════════════════════╝
  `);
});