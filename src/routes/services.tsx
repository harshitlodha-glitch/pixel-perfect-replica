import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader, CtaBand } from "@/components/site/blocks";
import { waLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const SERVICES = [
  ["Property Buying Assistance", "Shortlisting, site visits and guidance until registration."],
  ["Property Selling Assistance", "Reach genuine buyers with proper presentation of your property."],
  ["Residential Property Consultation", "Plots, flats, villas and houses across Chittorgarh."],
  ["Commercial Property Consultation", "Shops, halls, buildings and commercial land."],
  ["Agricultural Land Consultation", "Farmland purchase guidance and land record basics."],
  ["Property Investment Consultation", "Local insight on locations and long-term potential."],
  ["Site Visit Assistance", "Accompanied visits to understand the property on ground."],
  ["Property Search Service", "Tell us your requirement; we find matching options."],
  ["Preliminary Third-Party Document Verification", "Free preliminary check of papers before you pay an advance."],
  ["Property Listing Assistance", "List your property with us for sale."],
  ["Negotiation Assistance", "Support in reaching a fair deal for both sides."],
  ["Transaction Coordination", "Coordination between buyer, seller and documentation."],
];

export const Route = createFileRoute("/services")({
  head: () => pageMeta("Real Estate Services in Chittorgarh | Arihant Properties", "Property buying, selling, investment consultation, site visits and preliminary document verification in Chittorgarh. Consulting is free of charge.", "/services"),
  component: () => (
    <>
      <PageHeader eyebrow="Our services" title="Real estate services in Chittorgarh" intro="Consulting is free of charge. Experienced property consultants since 1996." />
      <section className="container-site grid gap-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([t, d]) => (
          <div key={t} className="flex flex-col rounded-2xl border bg-card p-6 shadow-card">
            <CheckCircle2 className="h-7 w-7 text-gold" />
            <h2 className="mt-4 text-xl font-semibold text-primary">{t}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{d}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm" variant="navy"><Link to="/request-property">Request Service</Link></Button>
              <Button asChild size="sm" variant="whatsapp"><a href={waLink(`Hello Arihant Properties, I need help with: ${t}.`)} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
              <Button asChild size="sm" variant="outline"><Link to="/book-appointment">Book Appointment</Link></Button>
            </div>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  ),
});
