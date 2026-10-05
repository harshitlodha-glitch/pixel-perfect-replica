import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const mobile = z
  .string()
  .trim()
  .regex(/^[+\d][\d\s-]{8,15}$/, "Enter a valid mobile number");

export const enquirySchema = z.object({
  form_type: z.enum(["contact", "appointment", "property", "request", "sell", "service"]),
  name: z.string().trim().min(2, "Enter your name").max(100),
  mobile,
  whatsapp: z.string().trim().max(20).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  preferred_date: z.string().max(20).optional(),
  preferred_time: z.string().max(20).optional(),
  purpose: z.string().max(100).optional(),
  property_id: z.string().max(40).optional(),
  property_name: z.string().max(200).optional(),
  details: z.record(z.string().max(500)).optional(),
  message: z.string().trim().max(2000).optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("enquiries").insert({
      ...data,
      whatsapp: data.whatsapp || null,
      email: data.email || null,
      details: data.details ?? {},
    });
    if (error) {
      console.error("enquiry insert failed", error.message);
      throw new Error("Could not submit right now. Please call or WhatsApp us.");
    }
    return { ok: true };
  });
