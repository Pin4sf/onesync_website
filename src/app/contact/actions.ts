"use server";

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

const TO_EMAIL = process.env.CONTACT_EMAIL || "01nesync@gmail.com";

export async function submitContactForm(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = (formData.get("company") as string) || "Not provided";
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name || !email || !subject || !message) {
        return { success: false, error: "All required fields must be filled." };
    }

    const subjectLine = `[OneSync Contact] ${subject} — ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nSubject: ${subject}\n\nMessage:\n${message}`;

    if (!resend) {
        // No API key — log to server console so submissions aren't lost
        console.log("=== NEW CONTACT FORM SUBMISSION ===");
        console.log(body);
        console.log("===================================");
        return { success: true };
    }

    try {
        await resend.emails.send({
            from: "OneSync Contact <onboarding@resend.dev>",
            to: TO_EMAIL,
            replyTo: email,
            subject: subjectLine,
            text: body,
        });
        return { success: true };
    } catch (err) {
        console.error("Failed to send email:", err);
        return { success: false, error: "Failed to send. Please try again." };
    }
}
