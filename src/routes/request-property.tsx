import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ContactCard } from "@/components/site/ContactCard";
import { PROPERTY_TYPES, LOCATIONS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/request-property")({
  head: () => pageMeta("Request a Property in Chittorgarh | Arihant Properties", "Tell Arihant Properties what property you are looking for in Chittorgarh — budget, location and type — and we will find options for you.", "/request-property"),
  component: () => (
    <>
      <PageHeader eyebrow="Buyer requirement" title="Tell Us What Property You Are Looking For" intro="Share your requirement and our consultants will shortlist suitable properties in Chittorgarh." />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          formType="request"
          submitLabel="Find My Property"
          fields={[
            { name: "name", label: "Full Name", required: true },
            { name: "mobile", label: "Mobile Number", type: "tel", required: true },
            { name: "whatsapp", label: "WhatsApp Number", type: "tel" },
            { name: "email", label: "Email", type: "email" },
            { name: "looking_for", label: "I am looking for", type: "select", options: ["Residential", "Commercial", "Agricultural"] },
            { name: "property_type", label: "Property Type", type: "select", options: PROPERTY_TYPES },
            { name: "preferred_location", label: "Preferred Location", type: "select", options: LOCATIONS },
            { name: "required_area", label: "Required Area", placeholder: "e.g. 1500 sq ft / 5 bigha" },
            { name: "min_budget", label: "Minimum Budget", placeholder: "e.g. 20 Lakh" },
            { name: "max_budget", label: "Maximum Budget", placeholder: "e.g. 50 Lakh" },
            { name: "purpose", label: "Purpose", type: "select", options: ["Self Use", "Investment", "Business", "Other"] },
            { name: "message", label: "Message", type: "textarea" },
          ]}
        />
        <ContactCard />
      </section>
    </>
  ),
});
