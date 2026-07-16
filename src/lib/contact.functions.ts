"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(4000),
});

export async function submitContact(input: unknown) {
  const data = contactSchema.parse(input);
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { error } = await supabaseAdmin.from("contact_submissions").insert({
    name: data.name,
    email: data.email,
    company: data.company || null,
    message: data.message,
  });

  if (error) {
    console.error("[submitContact] insert failed:", error);
    throw new Error("Could not save your message. Please try again.");
  }

  return { ok: true as const };
}
