'use server';

import { Resend } from 'resend';

// Initialize Resend with API key if available, otherwise strict null check handled below
const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export type ActionState = {
    success?: boolean;
    error?: string;
    message?: string;
};

export async function submitLead(prevState: ActionState | null, formData: FormData): Promise<ActionState> {
    // Simulate network delay for better UX (prevent instant flicker)
    await new Promise(resolve => setTimeout(resolve, 1000));

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const role = formData.get('role') as string;
    const savings = formData.get('savings') as string;
    const timeline = formData.get('timeline') as string;

    // Basic validation
    if (!name || !email || !role) {
        return { error: 'Please fill in all required fields.' };
    }

    try {
        if (resend) {
            // Real Email Sending
            await resend.emails.send({
                from: 'QSBS Leads <onboarding@resend.dev>', // Update this if you have a custom domain
                to: 'delivered@resend.dev', // Replace with the owner's email
                subject: `New High-Value Lead: ${name} (~${savings})`,
                html: `
          <h1>New QSBS Advisor Request</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Est. Savings:</strong> ${savings}</p>
          <p><strong>Timeline:</strong> ${timeline}</p>
          <hr />
          <p><em>Sent from qsbsguide.com</em></p>
        `,
            });
            console.log('Lead sent via Resend:', email);
        } else {
            // Mock Sending (Log to Console)
            console.log('------------------------------------------------');
            console.log('⚠️ RESEND_API_KEY missing. Mocking email send.');
            console.log('LEAD RECEIVED:');
            console.log({ name, email, role, savings, timeline });
            console.log('------------------------------------------------');
        }

        return {
            success: true,
            message: 'Request received. We will be in touch shortly.'
        };
    } catch (error) {
        console.error('Lead submission error:', error);
        return { error: 'Something went wrong. Please try again.' };
    }
}
