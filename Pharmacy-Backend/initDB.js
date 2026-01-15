/**
 * Database Schema Setup
 * Creates necessary tables for newsletter subscribers and customer inquiries
 * Run this once to initialize the database
 */

import pool from './db.js';

const createTables = async () => {
  try {
    console.log('Creating database tables...');

    // Create newsletter_subscribers table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS newsletter_subscribers (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'active',
        unsubscribed_at TIMESTAMP NULL
      );
    `);
    console.log('✓ newsletter_subscribers table created');

    // Create customer_inquiries table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS customer_inquiries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        subject VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        responded_at TIMESTAMP NULL
      );
    `);
    console.log('✓ customer_inquiries table created');

    // Create email_logs table for tracking sent emails
    await pool.query(`
      CREATE TABLE IF NOT EXISTS email_logs (
        id SERIAL PRIMARY KEY,
        recipient_email VARCHAR(255) NOT NULL,
        email_type VARCHAR(100) NOT NULL,
        subject VARCHAR(255) NOT NULL,
        sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'sent',
        related_inquiry_id INTEGER REFERENCES customer_inquiries(id)
      );
    `);
    console.log('✓ email_logs table created');

    // Create indexes for better query performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);
      CREATE INDEX IF NOT EXISTS idx_inquiry_email ON customer_inquiries(email);
      CREATE INDEX IF NOT EXISTS idx_inquiry_status ON customer_inquiries(status);
      CREATE INDEX IF NOT EXISTS idx_email_log_type ON email_logs(email_type);
    `);
    console.log('✓ Indexes created');

    console.log('✓ Database schema initialized successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error creating tables:', error);
    process.exit(1);
  }
};

createTables();
