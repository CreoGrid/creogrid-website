"use server";

import { connectDB } from "@/lib/mongodb";
import Lead from "@/models/Lead";

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);


export type LeadFormState = {
    success: boolean;
    message: string;
};

export interface LeadInput {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message?: string;
    source: "demo" | "contact";
    product?: "torqone" | "custom";
}

export async function submitLead(
    _previousState: LeadFormState,
    data: LeadInput,
): Promise<LeadFormState> {
    try {
        await connectDB();

        const lead = await Lead.create({
            name: data.name.trim(),
            email: data.email.trim().toLowerCase(),
            phone: data.phone.trim(),
            company: data.company?.trim() || undefined,
            message: data.message?.trim() || undefined,
            source: data.source,
            product: data.product ?? "torqone",
        });

        await resend.emails.send({
            from: "CreoGrid Website <hello@creogrid.co.in>",
            to: ["arunsudhakaran01@gmail.com"],
            replyTo: data.email,
            subject: `New TorqOne Inquiry — ${data.name}`,
            text: `
A new inquiry has been submitted through the CreoGrid website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company || "Not provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MESSAGE

${data.message || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUBMITTED
${lead.createdAt.toISOString()}

You can reply directly to this email to contact ${data.name}.
  `.trim(),
        });

        return {
            success: true,
            message: "Thanks for reaching out. We'll get back to you soon!",
        };
    } catch (error) {
        console.error("Error submitting lead:", error);

        return {
            success: false,
            message: "Something went wrong. Please try again.",
        };
    }
}
