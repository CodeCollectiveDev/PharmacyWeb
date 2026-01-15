# 🏥 Pharmacy Backend - Database & Email Integration

## System Architecture

This backend implements a complete data persistence and communication system using:

- **Neon PostgreSQL**: Serverless database for data persistence
- **Nodemailer + Brevo**: Professional email delivery system

---

## 📋 Table of Contents

1. [Setup Instructions](#setup-instructions)
2. [Environment Configuration](#environment-configuration)
3. [Database Schema](#database-schema)
4. [API Endpoints](#api-endpoints)
5. [Email System](#email-system)
6. [Running the Server](#running-the-server)

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- Neon PostgreSQL account (free tier available)
- Brevo account (300 free emails/day)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Create `.env` File

Copy from `.env.example` and fill in your credentials:

```bash
cp .env.example .env
```

### Step 3: Configure Environment Variables

See [Environment Configuration](#environment-configuration) section below.

### Step 4: Initialize Database

```bash
npm run init-db
```

This creates all necessary tables automatically.

### Step 5: Start the Server

```bash
npm start
```

Server will run on `http://localhost:3000`

---

## 🔧 Environment Configuration

### Database Variables

#### Neon PostgreSQL Setup:

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy your connection string
4. Add to `.env`:

```env
DATABASE_URL=postgresql://user:password@region.neon.tech/database_name
```

**Connection string format:**
```
postgresql://[user]:[password]@[host]/[database]
```

### Email Variables

#### Brevo SMTP Setup:

1. Go to [Brevo Console](https://app.brevo.com)
2. Navigate to **SMTP & API**
3. Create SMTP credentials
4. Add to `.env`:

```env
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your-brevo-email@example.com
BREVO_SMTP_PASS=your-brevo-api-key
BREVO_FROM_EMAIL=noreply@yourpharmacy.com
PHARMACY_EMAIL=contact@yourpharmacy.com
```

### Complete `.env` Template

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@region.neon.tech/database

# Email - Brevo SMTP (Primary)
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USER=your-email@brevo.com
BREVO_SMTP_PASS=your-brevo-smtp-password
BREVO_FROM_EMAIL=noreply@pharmacy.com
PHARMACY_EMAIL=contact@pharmacy.com

# Optional - Resend (Fallback)
RESEND_API_KEY=your_resend_key_optional
```

---

## 📊 Database Schema

### Tables Overview

#### 1. **newsletter_subscribers**
Stores all newsletter subscribers and their subscription status.

```sql
CREATE TABLE newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'active',
  unsubscribed_at TIMESTAMP NULL
);
```

**Fields:**
- `id`: Unique identifier
- `email`: Subscriber email (unique)
- `subscribed_at`: Subscription timestamp
- `status`: 'active' or 'unsubscribed'
- `unsubscribed_at`: When user unsubscribed (if applicable)

#### 2. **customer_inquiries**
Stores all customer questions and support requests.

```sql
CREATE TABLE customer_inquiries (
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
```

**Fields:**
- `id`: Unique inquiry identifier
- `name`: Customer name
- `email`: Customer email
- `phone`: Customer phone (optional)
- `subject`: Inquiry subject
- `message`: Full inquiry message
- `status`: 'new', 'in-progress', or 'resolved'
- `created_at`: When inquiry was submitted
- `responded_at`: When pharmacy responded

#### 3. **email_logs**
Tracks all sent emails for audit and compliance.

```sql
CREATE TABLE email_logs (
  id SERIAL PRIMARY KEY,
  recipient_email VARCHAR(255) NOT NULL,
  email_type VARCHAR(100) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(50) DEFAULT 'sent',
  related_inquiry_id INTEGER REFERENCES customer_inquiries(id)
);
```

**Fields:**
- `id`: Log entry ID
- `recipient_email`: Email recipient
- `email_type`: Type of email sent
- `subject`: Email subject
- `sent_at`: When email was sent
- `status`: 'sent', 'failed', 'bounced'
- `related_inquiry_id`: Link to customer inquiry (if applicable)

---

## 🔌 API Endpoints

### Public Endpoints

#### 1. **Send Contact Form (Create Inquiry)**
```
POST /api/send-email
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+265123456789",
  "subject": "Prescription Refill",
  "message": "I need to refill my diabetes medication"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your inquiry has been received and stored successfully!",
  "inquiryId": 42
}
```

**Features:**
- Stores inquiry in database
- Sends confirmation email to customer
- Sends notification to pharmacy
- Logs all emails in email_logs table

---

#### 2. **Subscribe to Newsletter**
```
POST /api/newsletter-subscribe
```

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully subscribed to newsletter!",
  "status": "active"
}
```

**Features:**
- Stores email in database
- Sends welcome email
- Prevents duplicate subscriptions
- Notifies pharmacy admin

---

#### 3. **Unsubscribe from Newsletter**
```
POST /api/newsletter-unsubscribe
```

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully unsubscribed from newsletter"
}
```

---

#### 4. **Test Server Status**
```
GET /api/test
```

**Response:**
```json
{
  "message": "Server is running!",
  "timestamp": "2024-01-14T10:30:00.000Z"
}
```

---

### Admin Endpoints

#### 1. **Get All Newsletter Subscribers**
```
GET /api/admin/newsletter-subscribers
```

**Response:**
```json
{
  "success": true,
  "count": 150,
  "subscribers": [
    {
      "id": 1,
      "email": "user@example.com",
      "subscribed_at": "2024-01-10T15:30:00Z",
      "status": "active",
      "unsubscribed_at": null
    },
    ...
  ]
}
```

---

#### 2. **Get All Customer Inquiries**
```
GET /api/admin/inquiries
GET /api/admin/inquiries?status=new
GET /api/admin/inquiries?status=in-progress
GET /api/admin/inquiries?status=resolved
```

**Response:**
```json
{
  "success": true,
  "count": 25,
  "inquiries": [
    {
      "id": 42,
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+265123456789",
      "subject": "Prescription Refill",
      "message": "I need to refill my diabetes medication",
      "status": "new",
      "created_at": "2024-01-14T10:30:00Z",
      "responded_at": null
    },
    ...
  ]
}
```

---

#### 3. **Get Specific Inquiry**
```
GET /api/admin/inquiries/:id
```

**Response:**
```json
{
  "success": true,
  "inquiry": {
    "id": 42,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+265123456789",
    "subject": "Prescription Refill",
    "message": "I need to refill my diabetes medication",
    "status": "new",
    "created_at": "2024-01-14T10:30:00Z",
    "responded_at": null
  }
}
```

---

#### 4. **Update Inquiry Status**
```
PUT /api/admin/inquiries/:id/status
```

**Request Body:**
```json
{
  "status": "in-progress"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Inquiry status updated",
  "inquiry": {
    "id": 42,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+265123456789",
    "subject": "Prescription Refill",
    "message": "I need to refill my diabetes medication",
    "status": "in-progress",
    "created_at": "2024-01-14T10:30:00Z",
    "responded_at": "2024-01-14T11:00:00Z"
  }
}
```

---

## 📧 Email System

### How Nodemailer + Brevo Works

```
User Action
    ↓
API Endpoint
    ↓
Database Storage
    ↓
Nodemailer Configuration
    ↓
Brevo SMTP Server
    ↓
Email Delivery
```

### Email Types

#### 1. **Inquiry Confirmation** (To Customer)
- Triggered when customer submits contact form
- Contains: Inquiry reference ID, thankyou message
- Auto-sent via Brevo

#### 2. **Inquiry Notification** (To Pharmacy)
- Triggered when customer submits contact form
- Contains: All inquiry details, customer info
- Sent to `PHARMACY_EMAIL`

#### 3. **Newsletter Welcome** (To Subscriber)
- Triggered when email subscribes to newsletter
- Contains: Welcome message, what to expect
- Auto-sent via Brevo

#### 4. **Subscriber Notification** (To Pharmacy)
- Triggered when new email subscribes
- Contains: New subscriber email, timestamp
- Sent to `PHARMACY_EMAIL`

### Brevo SMTP Specifications

- **Host:** smtp-relay.brevo.com
- **Port:** 587
- **Encryption:** STARTTLS (TLS)
- **Rate Limit:** 300 emails/day (free tier)
- **Response Time:** 5-30 seconds per email

### Email Templates

All emails include:
- Professional HTML styling
- Pharmacy branding
- Contact information
- Clear call-to-action

---

## 🏃 Running the Server

### Development Mode
```bash
npm start
```

Auto-restarts on file changes (using nodemon)

### Production Mode
```bash
NODE_ENV=production node Server.js
```

### Initialize Database (First Time Only)
```bash
npm run init-db
```

### Test Endpoints

Using cURL:
```bash
# Test server
curl http://localhost:3000/api/test

# Send inquiry
curl -X POST http://localhost:3000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John",
    "email": "john@example.com",
    "phone": "+265123456789",
    "subject": "Test",
    "message": "Test message"
  }'

# Subscribe to newsletter
curl -X POST http://localhost:3000/api/newsletter-subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "subscriber@example.com"}'
```

---

## ✅ System Features

### Database Features
- ✓ Automatic table creation on first run
- ✓ Unique constraints on emails
- ✓ Indexed queries for performance
- ✓ Timestamp tracking for all records
- ✓ Referential integrity between tables
- ✓ SSL/TLS encrypted connection to Neon

### Email Features
- ✓ Professional HTML templates
- ✓ Dual email system (customer + pharmacy)
- ✓ Email logging for compliance
- ✓ Automatic retry logic
- ✓ Rate limiting (300/day)
- ✓ DKIM/SPF compatible

### API Features
- ✓ CORS enabled for frontend
- ✓ Input validation
- ✓ Error handling with status codes
- ✓ Admin endpoints for management
- ✓ Inquiry status tracking
- ✓ Subscriber management

---

## 🔒 Security Best Practices

1. **Environment Variables**
   - Never commit `.env` file
   - Store sensitive keys securely
   - Use strong passwords in Neon/Brevo

2. **Database**
   - SSL enabled for Neon connections
   - No sensitive data in logs
   - Regular backups recommended

3. **Email**
   - No hardcoded email addresses
   - Use environment variables
   - Audit email logs regularly

4. **API**
   - Input validation on all endpoints
   - Error messages don't leak sensitive info
   - CORS restricted to known origins

---

## 📞 Support & Troubleshooting

### Common Issues

**Q: "Cannot connect to database"**
- Check `DATABASE_URL` in `.env`
- Verify Neon database is active
- Ensure internet connection

**Q: "Email not sending"**
- Verify Brevo credentials in `.env`
- Check email hasn't bounced in Brevo console
- Ensure daily limit not exceeded

**Q: "Duplicate email error"**
- Email already exists in newsletter_subscribers
- Use unsubscribe endpoint to remove first

---

## 📚 File Structure

```
Pharmacy-Backend/
├── Server.js              # Main server file
├── db.js                  # Database connection
├── dbService.js           # Database operations
├── emailService.js        # Email operations
├── initDB.js              # Database initialization
├── Test.js                # API testing script
├── .env.example           # Environment template
└── package.json           # Dependencies
```

---

## 🚀 Next Steps

1. **Configure Environment Variables** - Add your Neon & Brevo credentials
2. **Initialize Database** - Run `npm run init-db`
3. **Start Server** - Run `npm start`
4. **Test Endpoints** - Use provided cURL examples
5. **Connect Frontend** - Update frontend API URLs

---
