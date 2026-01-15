/**
 * Database Configuration
 * Connects to Neon PostgreSQL serverless database
 */

import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

// Create connection pool for Neon PostgreSQL
let connectionString = process.env.DATABASE_URL || '';

// Sanitize common accidental prefixes (e.g., `psql 'postgresql://...'` copied from docs)
if (/^psql\s+['\"]/.test(connectionString)) {
  const match = connectionString.match(/^psql\s+['\"](.+)['\"]$/);
  if (match && match[1]) {
    connectionString = match[1];
    console.warn('⚠️  DATABASE_URL contained a `psql` wrapper — sanitized automatically. Please remove the wrapper from your .env file.');
  }
}

// Basic validation warning
if (!/^postgres(ql)?:\/\//.test(connectionString)) {
  console.warn('⚠️  DATABASE_URL does not appear to be a valid PostgreSQL connection string. Please verify your .env');
}

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Connection event handlers
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

// Test the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('✓ Database connected successfully');
  }
});

export default pool;
