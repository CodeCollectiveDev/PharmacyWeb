# 🚀 Quick Start Guide - Pharmacy Backend

## In 5 Minutes

### Step 1: Create `.env` File

Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

### Step 2: Add Your Credentials

Edit `.env` with:

**Neon PostgreSQL:**
- Get connection string from [https://console.neon.tech](https://console.neon.tech)
- Paste into `DATABASE_URL`

**Brevo SMTP:**
- Get SMTP credentials from [https://app.brevo.com/smtp-api](https://app.brevo.com/smtp-api)
- Paste into `BREVO_SMTP_USER` and `BREVO_SMTP_PASS`
- Update email addresses

```env
DATABASE_URL=postgresql://username:password@host/database
BREVO_SMTP_USER=your-email@brevo.com
BREVO_SMTP_PASS=your-smtp-password
BREVO_FROM_EMAIL=noreply@yourpharmacy.com
PHARMACY_EMAIL=contact@yourpharmacy.com
```

### Step 3: Initialize Database

First time only:
```bash
npm run init-db
```

### Step 4: Start Server

```bash
npm start
```

Expected output:
```
╔═══════════════════════════════════════════════════════╗
║    🏥 Pharmacy Web Backend Server Started             ║
║    Server running on port 3000                        ║
║    Database: Neon PostgreSQL                          ║
║    Email Service: Nodemailer + Brevo SMTP             ║
╚═══════════════════════════════════════════════════════╝
```

### Step 5: Test It

In another terminal:
```bash
node Test.js
```

---

## 📦 What's Included

### Files Created

| File | Purpose |
|------|---------|
| `db.js` | PostgreSQL connection pool |
| `dbService.js` | Database operations |
| `emailService.js` | Brevo SMTP configuration |
| `initDB.js` | Create database tables |
| `BACKEND_GUIDE.md` | Full documentation |
| `.env.example` | Environment template |

### API Endpoints

**Public:**
- `POST /api/send-email` - Contact form (stores in DB)
- `POST /api/newsletter-subscribe` - Subscribe (stores in DB)
- `POST /api/newsletter-unsubscribe` - Unsubscribe
- `GET /api/test` - Server health check

**Admin:**
- `GET /api/admin/newsletter-subscribers` - List all subscribers
- `GET /api/admin/inquiries` - List all inquiries
- `GET /api/admin/inquiries/:id` - Get specific inquiry
- `PUT /api/admin/inquiries/:id/status` - Update status

---

## 🗄️ Database Tables

### Newsletter Subscribers
- Stores email & subscription status
- Auto-indexed for performance
- Prevents duplicate emails

### Customer Inquiries  
- Stores name, email, phone, subject, message
- Tracks inquiry status (new → in-progress → resolved)
- Links to email logs

### Email Logs
- Audit trail of all sent emails
- Tracks delivery status
- References related inquiries

---

## 📧 How Emails Work

1. **User submits contact form**
   ↓
2. **Data stored in database**
   ↓
3. **Confirmation email sent to customer** (via Brevo)
   ↓
4. **Notification sent to pharmacy** (via Brevo)
   ↓
5. **All emails logged in database**

**Brevo Benefits:**
- 300 free emails/day
- Reliable delivery
- Professional SMTP
- No rate limiting

---

## 🔧 Troubleshooting

### Database won't connect
```bash
# Check your DATABASE_URL is correct
# Format: postgresql://user:password@host/database
# Test with: psql "YOUR_DATABASE_URL"
```

### Emails not sending
```bash
# Check BREVO_SMTP credentials
# Verify daily limit not exceeded in Brevo console
# Check logs: Server.js will show email errors
```

### Server won't start
```bash
# Port 3000 already in use?
# Change PORT in .env
# Or kill existing process: lsof -ti:3000 | xargs kill -9
```

---

## 💡 Frontend Integration

### Send Contact Form

```javascript
fetch('http://localhost:3000/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+265123456789',
    subject: 'Question about services',
    message: 'Do you deliver to my area?'
  })
})
.then(res => res.json())
.then(data => console.log(data.inquiryId)) // Get inquiry ID
```

### Subscribe to Newsletter

```javascript
fetch('http://localhost:3000/api/newsletter-subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'subscriber@example.com'
  })
})
.then(res => res.json())
.then(data => console.log('Subscribed!'))
```

---

## 📚 Full Documentation

See `BACKEND_GUIDE.md` for:
- Complete setup instructions
- All API endpoints with examples
- Database schema details
- Security best practices
- Troubleshooting guide

---

## ✅ Checklist

- [ ] Neon account created
- [ ] Database URL copied to `.env`
- [ ] Brevo account created
- [ ] SMTP credentials added to `.env`
- [ ] `.env` file created
- [ ] `npm run init-db` executed
- [ ] Server running on port 3000
- [ ] Test script passed
- [ ] Frontend connected to API

---

**Next:** Update frontend URLs to point to `http://localhost:3000` (or your production server)
