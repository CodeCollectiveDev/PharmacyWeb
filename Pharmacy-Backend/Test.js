/**********************************************************************************
 * TEST SCRIPT FOR API
 * This script is written to test the api, if its working
 * Imitating a frontend call in vanilla js
 * 
 *********************************************************************************/

// Base URL
const base_url = "http://localhost:3000";

// General API call function 
async function apiCall(endpoint, method, body) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };
    // Checking if the request has a body
    if (body) {
        options.body = JSON.stringify(body);
    }
    // Try catch block for error handling
    try {
        const response = await fetch(`${base_url}/${endpoint}`, options);

        // Check for HTTP errors (4xx, 5xx)
        if (!response.ok) {
            // Get the error message from the response body if available.
            const error = await response.json().catch(() => ({}));
            // Throw a new error with a descriptive message.
            throw new Error(error.message || `API call failed with status ${response.status}`);
        }

        // Return the JSON response for successful calls.
        return await response.json();

    } catch (error) {
        // Re-throw the error to be caught by the calling function.
        console.error("API call failed:", error);
        throw error;
    }
}

async function sendEmail() {
    try {
        const body = {
            "name": "Mike Prosper Kamanga",
            "email": "mikekamanga59@gmail.com",
            "phone": "+265981560292",
            "subject": "Prescriptions",
            "message": "I want to know if you offer prescriptions online?"
        };
        const result = await apiCall('api/send-email', 'POST', body);
        console.log("Email sent successfully:", result);
    } catch (e) {
        console.error("Failed to send email:", e.message);
    }
}

sendEmail();