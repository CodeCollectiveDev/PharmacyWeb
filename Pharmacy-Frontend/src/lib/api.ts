const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
    // Newsletter subscription
    subscribeToNewsletter: async (email: string) => {
        const response = await fetch(`${API_BASE_URL}/newsletter-subscribe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to subscribe to newsletter');
        }

        return response.json();
    },

    // Contact form submission (for future use)
    sendContactForm: async (formData: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
    }) => {
        const response = await fetch(`${API_BASE_URL}/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Failed to send message');
        }

        return response.json();
    },
};
