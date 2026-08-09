"use server";

import { Resend } from "resend";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const company = String(formData.get("company") ?? "").trim();
    const body = String(formData.get("body") ?? "").trim();

    // Validation
    if (!name || !email || !body) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      };
    }

    if (name.length > 100) {
      return {
        success: false,
        message: "Name is too long.",
      };
    }

    if (email.length > 254) {
      return {
        success: false,
        message: "Email address is too long.",
      };
    }

    if (company.length > 150) {
      return {
        success: false,
        message: "Company name is too long.",
      };
    }

    if (body.length > 5000) {
      return {
        success: false,
        message: "Message is too long.",
      };
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      };
    }

    // Connect to MongoDB
    await connectDB();

    // Save lead
    const contact = await Contact.create({
      name,
      email,
      company: company || undefined,
      body,
    }); 

    // Send notification email
    await resend.emails.send({
      from: "CreoGrid Website <hello@creogrid.co.in>",
      to: ["arunsudhakaran01@gmail.com"],
      replyTo: email,
      subject: `New CreoGrid Contact Form Message — ${name}`,
      text: `
New message received from the CreoGrid website.

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}

Message:
${body}

Submitted:
${contact.createdAt.toISOString()}
      `.trim(),
    });

    return {
      success: true,
      message: "Thanks for reaching out. We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}