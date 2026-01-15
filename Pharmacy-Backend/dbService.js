/**
 * Database Service Layer
 * Functions for interacting with newsletter and inquiry database
 */

import pool from './db.js';

/**
 * Newsletter Subscribers Functions
 */

export const addNewsletterSubscriber = async (email) => {
  try {
    // Check if email already exists
    const existingSubscriber = await pool.query(
      'SELECT * FROM newsletter_subscribers WHERE email = $1',
      [email]
    );

    if (existingSubscriber.rows.length > 0) {
      const subscriber = existingSubscriber.rows[0];
      if (subscriber.status === 'active') {
        throw new Error('Email is already subscribed');
      }
      // Reactivate unsubscribed email
      await pool.query(
        'UPDATE newsletter_subscribers SET status = $1, unsubscribed_at = NULL WHERE email = $2',
        ['active', email]
      );
      return { email, status: 'resubscribed' };
    }

    // Add new subscriber
    const result = await pool.query(
      'INSERT INTO newsletter_subscribers (email) VALUES ($1) RETURNING *',
      [email]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error adding newsletter subscriber:', error);
    throw error;
  }
};

export const removeNewsletterSubscriber = async (email) => {
  try {
    const result = await pool.query(
      'UPDATE newsletter_subscribers SET status = $1, unsubscribed_at = CURRENT_TIMESTAMP WHERE email = $2 RETURNING *',
      ['unsubscribed', email]
    );

    if (result.rows.length === 0) {
      throw new Error('Email not found in subscribers');
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error removing newsletter subscriber:', error);
    throw error;
  }
};

export const getNewsletterSubscribers = async (status = 'active') => {
  try {
    const result = await pool.query(
      'SELECT * FROM newsletter_subscribers WHERE status = $1 ORDER BY subscribed_at DESC',
      [status]
    );

    return result.rows;
  } catch (error) {
    console.error('Error fetching newsletter subscribers:', error);
    throw error;
  }
};

/**
 * Customer Inquiries Functions
 */

export const addCustomerInquiry = async (name, email, phone, subject, message) => {
  try {
    const result = await pool.query(
      `INSERT INTO customer_inquiries (name, email, phone, subject, message) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [name, email, phone, subject, message]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error adding customer inquiry:', error);
    throw error;
  }
};

export const getCustomerInquiry = async (inquiryId) => {
  try {
    const result = await pool.query(
      'SELECT * FROM customer_inquiries WHERE id = $1',
      [inquiryId]
    );

    if (result.rows.length === 0) {
      throw new Error('Inquiry not found');
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error fetching customer inquiry:', error);
    throw error;
  }
};

export const getAllCustomerInquiries = async (status = null) => {
  try {
    let query = 'SELECT * FROM customer_inquiries';
    let params = [];

    if (status) {
      query += ' WHERE status = $1';
      params = [status];
    }

    query += ' ORDER BY created_at DESC';

    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    console.error('Error fetching customer inquiries:', error);
    throw error;
  }
};

export const updateInquiryStatus = async (inquiryId, status) => {
  try {
    const result = await pool.query(
      'UPDATE customer_inquiries SET status = $1, responded_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [status, inquiryId]
    );

    if (result.rows.length === 0) {
      throw new Error('Inquiry not found');
    }

    return result.rows[0];
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    throw error;
  }
};

/**
 * Email Logs Functions
 */

export const logEmail = async (recipientEmail, emailType, subject, relatedInquiryId = null) => {
  try {
    const result = await pool.query(
      `INSERT INTO email_logs (recipient_email, email_type, subject, related_inquiry_id) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [recipientEmail, emailType, subject, relatedInquiryId]
    );

    return result.rows[0];
  } catch (error) {
    console.error('Error logging email:', error);
    throw error;
  }
};

export const getEmailLogs = async (emailType = null, limit = 100) => {
  try {
    let query = 'SELECT * FROM email_logs';
    let params = [];

    if (emailType) {
      query += ' WHERE email_type = $1';
      params = [emailType];
    }

    query += ' ORDER BY sent_at DESC LIMIT $' + (params.length + 1);
    params.push(limit);

    const result = await pool.query(query, params);
    return result.rows;
  } catch (error) {
    console.error('Error fetching email logs:', error);
    throw error;
  }
};
