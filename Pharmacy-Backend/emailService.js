/**
 * Email Configuration
 * Sets up Nodemailer with Brevo SMTP
 * Brevo provides 300 free emails per day
 */

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const escapeHtml = (value = '') => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const formatHtmlText = (value = '') => escapeHtml(value).replace(/\r?\n/g, '<br>');

// Create transporter for Brevo SMTP
const transporter = nodemailer.createTransport({
  host: process.env.BREVO_SMTP_HOST || 'smtp-relay.brevo.com',
  port: parseInt(process.env.BREVO_SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
});

// Verify connection configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('✗ Email configuration error:', error);
    // Helpful troubleshooting hints
    if (error && error.code === 'EAUTH') {
      console.error('→ Authentication failed (EAUTH). Check BREVO_SMTP_USER and BREVO_SMTP_PASS in your .env and ensure you are using the Brevo SMTP credentials (SMTP key), not your account password.');
      console.error('→ Also verify the SMTP user is correct (Brevo commonly uses username `apikey`).');
    }
  } else {
    console.log('✓ Email service ready');
  }
});

/**
 * Send email function
 * @param {Object} mailOptions - Email configuration
 * @returns {Promise} - Email sending result
 */
export const sendEmail = async (mailOptions) => {
  try {
    const defaultOptions = {
      from: process.env.BREVO_FROM_EMAIL || process.env.BREVO_SMTP_USER,
      ...mailOptions,
    };

    const result = await transporter.sendMail(defaultOptions);
    console.log('✓ Email sent:', result.messageId);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Send newsletter subscription confirmation
 */
export const sendNewsletterConfirmation = async (email) => {
  return sendEmail({
    to: email,
    subject: 'Welcome to Our Pharmacy Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #2c5f2d; margin-bottom: 20px;">Welcome to Our Pharmacy!</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Thank you for subscribing to our newsletter. You'll now receive updates about:
          </p>
          <ul style="font-size: 16px; color: #555; line-height: 1.8;">
            <li>New medicines and products</li>
            <li>Health tips and wellness advice</li>
            <li>Special offers and promotions</li>
            <li>Important health alerts</li>
          </ul>
          <p style="font-size: 14px; color: #999; margin-top: 20px;">
            If you wish to unsubscribe, you can do so by clicking the unsubscribe link in future emails.
          </p>
        </div>
      </div>
    `,
  });
};

/**
 * Send inquiry received confirmation to customer
 */
export const sendInquiryConfirmation = async (customerEmail, name, inquiryId) => {
  const safeName = formatHtmlText(name);

  return sendEmail({
    to: customerEmail,
    subject: 'We received your inquiry',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <h2 style="color: #2c5f2d; margin-bottom: 20px;">Thank you for reaching out!</h2>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Hi ${safeName},
          </p>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            We have received your inquiry and will get back to you as soon as possible. 
          </p>
          <p style="font-size: 14px; color: #999;">
            <strong>Inquiry Reference ID:</strong> #${inquiryId}
          </p>
          <p style="font-size: 16px; color: #333; line-height: 1.6;">
            Our pharmacy team typically responds within 24 business hours.
          </p>
          <p style="font-size: 14px; color: #999; margin-top: 20px;">
            Thank you for choosing us!
          </p>
        </div>
      </div>
    `,
  });
};

/**
 * Send inquiry notification to pharmacy admin
 */
export const sendInquiryNotification = async (name, email, phone, subject, message, inquiryId) => {
  const safeName = formatHtmlText(name);
  const safeEmail = formatHtmlText(email);
  const safePhone = formatHtmlText(phone || 'Not provided');
  const safeSubject = formatHtmlText(subject);
  const safeMessage = formatHtmlText(message);

  return sendEmail({
    to: process.env.PHARMACY_EMAIL,
    subject: `New Customer Inquiry: ${String(subject).replace(/[\r\n]/g, ' ')}`,
    html: `
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="text-align: center; color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Customer Inquiry</h2>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
          <p style="margin: 0 0 10px;"><strong>Inquiry ID:</strong> #${inquiryId}</p>
          <p style="margin: 0 0 10px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 10px;"><strong>Email:</strong> <span style="color: #007bff;">${safeEmail}</span></p>
          <p style="margin: 0 0 10px;"><strong>Phone:</strong> ${safePhone}</p>
          <p style="margin: 0 0 10px;"><strong>Subject:</strong> ${safeSubject}</p>
          <p style="margin: 0;"><strong>Message:</strong></p>
          <div style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px;">
            <p style="margin: 0;">${safeMessage}</p>
          </div>
        </div>
      </div>
    `,
  });
};

export default transporter;
