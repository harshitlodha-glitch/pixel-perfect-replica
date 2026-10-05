import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitEnquiry, enquirySchema, type EnquiryInput } from "@/lib/enquiry.functions";
import { SITE, waLink } from "@/lib/site";

export type Field =
  | { name: string; label: string; type?: "text" | "tel" | "email" | "date" | "time" | "number"; required?: boolean; placeholder?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean; placeholder?: string };

const CORE = new Set(["name", "mobile", "whatsapp", "email", "preferred_date", "preferred_time", "purpose", "message"]);

export function EnquiryForm({
  formType,
  fields,
  submitLabel,
  successText = "Thank you. Your request has been received. Our team will contact you shortly.",
  hidden = {},
  footer,
}: {
  formType: EnquiryInput["form_type"];
  fields: Field[];
  submitLabel: string;
  successText?: string;
  hidden?: { property_id?: string; property_name?: string; property_url?: string };
  footer?: ReactNode;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = { form_type: formType, details: {} as Record<string, string> };
    for (const [k, v] of fd.entries()) {
      if (typeof v !== "string" || !v) continue;
      if (CORE.has(k)) payload[k] = v;
      else (payload.details as Record<string, string>)[k] = v;
    }
    if (hidden.property_id) payload.property_id = hidden.property_id;
    if (hidden.property_name) payload.property_name = hidden.property_name;
    if (hidden.property_url) (payload.details as Record<string, string>).property_url = hidden.property_url;
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setState("sending");
    try {
      await submitEnquiry({ data: parsed.data });
      setState("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-card" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-whatsapp" />
        <p className="mt-4 font-display text-xl font-semibold text-primary">{successText}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline"><a href={SITE.phoneHref}><Phone /> Call Now</a></Button>
          <Button asChild variant="whatsapp"><a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border bg-card p-6 shadow-card sm:grid-cols-2 md:p-8" noValidate>
      {fields.map((f) => {
        const id = `${formType}-${f.name}`;
        const wide = f.type === "textarea";
        return (
          <div key={f.name} className={wide ? "sm:col-span-2" : ""}>
            <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-primary">
              {f.label} {f.required && <span className="text-gold">*</span>}
            </label>
            {f.type === "select" ? (
              <select id={id} name={f.name} required={f.required} className="field" defaultValue="">
                <option value="" disabled>Select…</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === "textarea" ? (
              <textarea id={id} name={f.name} rows={4} required={f.required} placeholder={f.placeholder} maxLength={2000} className="field" />
            ) : (
              <input id={id} name={f.name} type={f.type ?? "text"} required={f.required} placeholder={"placeholder" in f ? f.placeholder : undefined} maxLength={200} className="field" />
            )}
          </div>
        );
      })}
      {error && <p className="text-sm font-medium text-destructive sm:col-span-2" role="alert">{error}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={state === "sending"}>
          {state === "sending" ? "Sending…" : submitLabel}
        </Button>
        {footer}
      </div>
    </form>
  );
}

export const BASIC_FIELDS: Field[] = [
  { name: "name", label: "Name", required: true },
  { name: "mobile", label: "Mobile Number", type: "tel", required: true },
  { name: "email", label: "Email", type: "email" },
  { name: "message", label: "Message", type: "textarea" },
];
