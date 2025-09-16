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
import dotenv from 'dotenv';
import { Resend } from 'resend';

// Injecting environment variables
dotenv.config();
const port = 3000; // Port number

const app = express(); 
app.use(bodyParser.json()); // Middleware to parse all request and responses to json files

const resend = new Resend(process.env.RESEND_API_KEY); // Constructing resend with its API key


// Routes

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

// Server Listening on the port value
app.listen(port, () => console.log(`Server running on port ${port}`));