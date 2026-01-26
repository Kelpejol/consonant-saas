import { Resend } from 'resend';
import { WelcomeEmail } from '@/components/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string, name: string) {
    if (!process.env.RESEND_API_KEY) {
        console.log(`[EMAIL SIMULATION] To: ${to}, From: Consonant <onboarding@resend.dev>, Subject: Welcome to Consonant, Content: Welcome Email for ${name}`);
        return { success: true, simulated: true };
    }

    try {
        const data = await resend.emails.send({
            from: 'Consonant <onboarding@resend.dev>',
            to: [to],
            subject: 'Welcome to Consonant',
            react: WelcomeEmail({ name }),
        });

        return { success: true, data };
    } catch (error) {
        console.error('Failed to send welcome email:', error);
        return { success: false, error };
    }
}
