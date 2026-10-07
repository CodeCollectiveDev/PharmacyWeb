const API_BASE_URL = 'http://localhost:3000/api';

export const api = {
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
