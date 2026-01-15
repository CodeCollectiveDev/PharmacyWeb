/**********************************************************************************
 * TEST SCRIPT FOR API
 * Tests all backend endpoints including database operations
 * Imitating frontend calls in vanilla JavaScript
 * 
 * FEATURES:
 * - Test Contact Form (stores in DB)
 * - Test Newsletter Subscription (stores in DB)
 * - Test Newsletter Unsubscription
 * - Test Admin Endpoints
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

// Test 1: Send Email / Create Inquiry
async function testSendEmail() {
    try {
        console.log("\n🧪 Test 1: Sending Email (Contact Form with DB Storage)");
        console.log("─".repeat(50));
        const body = {
            "name": "Mike Prosper Kamanga",
            "email": "mikekamanga59@gmail.com",
            "phone": "+265981560292",
            "subject": "Prescriptions",
            "message": "I want to know if you offer prescriptions online?"
        };
        const result = await apiCall('api/send-email', 'POST', body);
        console.log("✓ Email sent successfully");
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to send email:", e.message);
    }
}

// Test 2: Subscribe to Newsletter
async function testNewsletterSubscribe() {
    try {
        console.log("\n🧪 Test 2: Subscribe to Newsletter (DB Storage)");
        console.log("─".repeat(50));
        const body = {
            "email": "subscriber@example.com"
        };
        const result = await apiCall('api/newsletter-subscribe', 'POST', body);
        console.log("✓ Subscribed successfully");
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to subscribe:", e.message);
    }
}

// Test 3: Unsubscribe from Newsletter
async function testNewsletterUnsubscribe() {
    try {
        console.log("\n🧪 Test 3: Unsubscribe from Newsletter");
        console.log("─".repeat(50));
        const body = {
            "email": "subscriber@example.com"
        };
        const result = await apiCall('api/newsletter-unsubscribe', 'POST', body);
        console.log("✓ Unsubscribed successfully");
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to unsubscribe:", e.message);
    }
}

// Test 4: Get All Newsletter Subscribers (Admin)
async function testGetSubscribers() {
    try {
        console.log("\n🧪 Test 4: Get All Newsletter Subscribers (Admin)");
        console.log("─".repeat(50));
        const result = await apiCall('api/admin/newsletter-subscribers', 'GET');
        console.log(`✓ Found ${result.count} active subscribers`);
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to fetch subscribers:", e.message);
    }
}

// Test 5: Get All Customer Inquiries (Admin)
async function testGetInquiries() {
    try {
        console.log("\n🧪 Test 5: Get All Customer Inquiries (Admin)");
        console.log("─".repeat(50));
        const result = await apiCall('api/admin/inquiries', 'GET');
        console.log(`✓ Found ${result.count} customer inquiries`);
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to fetch inquiries:", e.message);
    }
}

// Test 6: Get Specific Inquiry (Admin)
async function testGetSpecificInquiry(inquiryId) {
    try {
        console.log(`\n🧪 Test 6: Get Specific Inquiry #${inquiryId} (Admin)`);
        console.log("─".repeat(50));
        const result = await apiCall(`api/admin/inquiries/${inquiryId}`, 'GET');
        console.log("✓ Inquiry retrieved");
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to fetch inquiry:", e.message);
    }
}

// Test 7: Update Inquiry Status (Admin)
async function testUpdateInquiryStatus(inquiryId, status) {
    try {
        console.log(`\n🧪 Test 7: Update Inquiry #${inquiryId} Status to '${status}' (Admin)`);
        console.log("─".repeat(50));
        const body = { status };
        const result = await apiCall(`api/admin/inquiries/${inquiryId}/status`, 'PUT', body);
        console.log("✓ Inquiry status updated");
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to update inquiry status:", e.message);
    }
}

// Test 8: Get Inquiries by Status (Admin)
async function testGetInquiriesByStatus(status) {
    try {
        console.log(`\n🧪 Test 8: Get Inquiries with Status '${status}' (Admin)`);
        console.log("─".repeat(50));
        const result = await apiCall(`api/admin/inquiries?status=${status}`, 'GET');
        console.log(`✓ Found ${result.count} inquiries with status '${status}'`);
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Failed to fetch inquiries by status:", e.message);
    }
}

// Test 9: Test Server Connection
async function testServerConnection() {
    try {
        console.log("\n🧪 Test 9: Test Server Connection");
        console.log("─".repeat(50));
        const result = await apiCall('api/test', 'GET');
        console.log("✓ Server is running");
        console.log("Response:", JSON.stringify(result, null, 2));
        return result;
    } catch (e) {
        console.error("✗ Server connection failed:", e.message);
    }
}

// Run all tests
async function runAllTests() {
    console.log(`
╔═══════════════════════════════════════════════════════╗
║      🏥 Pharmacy Backend API Test Suite              ║
║      Database + Email Integration Tests               ║
╚═══════════════════════════════════════════════════════╝
    `);

    // Test server connection first
    await testServerConnection();
    
    // Test contact form
    const emailResult = await testSendEmail();
    
    // Test newsletter
    await testNewsletterSubscribe();
    
    // Test admin endpoints
    await testGetSubscribers();
    await testGetInquiries();
    
    // If we got an inquiry, test specific inquiry operations
    if (emailResult && emailResult.inquiryId) {
        await testGetSpecificInquiry(emailResult.inquiryId);
        await testUpdateInquiryStatus(emailResult.inquiryId, 'in-progress');
    }
    
    // Test status filtering
    await testGetInquiriesByStatus('new');
    await testGetInquiriesByStatus('in-progress');
    
    // Test unsubscribe
    await testNewsletterUnsubscribe();

    console.log(`
╔═══════════════════════════════════════════════════════╗
║      ✅ All Tests Completed                          ║
║      Check above for any failures                    ║
╚═══════════════════════════════════════════════════════╝
    `);
}

// Run tests
runAllTests();