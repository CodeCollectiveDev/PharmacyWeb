/***************************************************************************************
    Pharmacy Web Backend Server
    
    Integrates:
    - Neon PostgreSQL: Serverless database for subscribers and inquiries
    - Nodemailer + Brevo: Email automation (300 free emails/day)
    - Resend: Legacy email support (optional)
    
    Database Layer: Stores customer inquiries
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
  addCustomerInquiry,
  getCustomerInquiry,
  getAllCustomerInquiries,
  updateInquiryStatus,
  logEmail,
} from './dbService.js';
import {
  sendEmail,
  sendInquiryConfirmation,
  sendInquiryNotification,
} from './emailService.js';

// Injecting environment variables
dotenv.config();
const port = process.env.PORT || 3000; // Port number

const app = express(); 

// CORS middleware to allow frontend requests
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',').map(o => o.trim()).filter(Boolean)
  : [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:8080',
    'http://127.0.0.1:8080'
  ];
app.use(cors({
  origin: allowedOrigins,
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
  ╚═══════════════════════════════════════════════════════╝
  `);
});