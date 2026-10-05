import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/blocks";
import { EnquiryForm, BASIC_FIELDS } from "@/components/site/EnquiryForm";
import { ContactCard } from "@/components/site/ContactCard";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => pageMeta("Contact Arihant Properties | Udaipur Road, Chittorgarh", "Visit or call Arihant Properties at 19-A, Udaipur Rd, Senthi, Bapu Nagar, Chittorgarh. Phone & WhatsApp +91 94141 09331.", "/contact"),
  component: () => (
    <>
      <PageHeader eyebrow="Contact" title="Visit our office in Chittorgarh" intro="Before purchase, please visit our office once. Consulting is free of charge." />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm formType="contact" fields={BASIC_FIELDS} submitLabel="Send Enquiry" />
        <ContactCard />
      </section>
      <section className="container-site pb-16">
        <iframe title="Arihant Properties location map" src={SITE.mapEmbed} loading="lazy" className="h-[420px] w-full rounded-2xl border" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </>
  ),
});
