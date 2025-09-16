/***************************************************************************************
    This script is for fowarding emails from frontend conctact form to the pharmacy mail
    by utilising Resend (third party tool) through their module package

    ----------------------------------------------------------------------
    API EndPoint ==> api/send-email
    
    HOW IT WORKS
    -- Using their API, we make a post request to them, and they foward it to the verified reciever
    The verified reciever is the account opened with them and the verified sender is their default domain 
    which can also be changed. (Of course I also registered the API key to access their API)

    --------------------------------------------------------------------
    TO RUN THIS SERVER -- npm start
***************************************************************************************/

// Importing dependencies  
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Injecting environment variables
dotenv.config();
const port = 3000; // Port number

const app = express(); 

// CORS middleware to allow frontend requests
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://127.0.0.1:5173',
    'http://localhost:8080', 
    'http://127.0.0.1:8080'
  ], // Vite dev server URLs
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json()); // Middleware to parse all request and responses to json files

const resend = new Resend(process.env.RESEND_API_KEY); // Constructing resend with its API key


// Routes

// Test route to check if server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!', timestamp: new Date().toISOString() });
});

// Post route -- to send email data to Resend 
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Wrapped in Try catch to catch errors faster
  try {
    await resend.emails.send({
        // Email contents
        from: "onboarding@resend.dev", // Verified sender email (in Resend)
        to: "codecollective.dev@gmail.com", // Verified Reciever (in Resend)
        subject: `Contact form from ${name}`, // Subject
        html: ` 
            <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="text-align: center; color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Form Submission</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px;">
                <p style="margin: 0 0 10px;"><strong>Email:</strong> <span style="color: #007bff;">${email}</span></p>
                <p style="margin: 0 0 10px;"><strong>Description:</strong> ${subject}</p>
                <p style="margin: 0 0 10px;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin: 0;"><strong>Message:</strong></p>
                <div style="background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 4px; margin-top: 5px;">
                <p style="margin: 0;">${message}</p>
                </div>
            </div>
            </div>
            `, // Email body content 
        });
        res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Newsletter subscription endpoint
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
    // Check if RESEND_API_KEY exists
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️  No RESEND_API_KEY found. Simulating email sending...');
      console.log(`📧 Would send welcome email to: ${email}`);
      console.log(`📧 Would notify pharmacy about new subscription: ${email}`);
      
      res.status(200).json({ 
        success: true, 
        message: "Successfully subscribed to newsletter! (Demo mode - check server console for logs)" 
      });
      return;
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Welcome to Metmma Pharmacy Newsletter!",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">Welcome to Our Newsletter!</h2>
          <p>Thank you for subscribing to Metmma Pharmacy's newsletter. You'll receive:</p>
          <ul style="margin: 20px 0; padding-left: 20px;">
            <li>Health tips and medication advice</li>
            <li>Pharmacy updates and new services</li>
            <li>Special offers and promotions</li>
            <li>Important health announcements</li>
          </ul>
          <p>We respect your privacy and you can unsubscribe at any time.</p>
          <p style="margin-top: 30px; font-size: 14px; color: #666;">Best regards,<br>The Metmma Pharmacy Team</p>
        </div>
      `,
    });

    // Also notify pharmacy about new subscription
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "codecollective.dev@gmail.com",
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="text-align: center; color: #1a1a1a; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed to newsletter!" 
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to subscribe. Please try again later." 
    });
  }
});

// Server Listening on the port value
app.listen(port, () => console.log(`Server running on port ${port}`));