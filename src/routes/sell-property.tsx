import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ContactCard } from "@/components/site/ContactCard";
import { PROPERTY_TYPES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/sell-property")({
  head: () => pageMeta("Sell Your Property in Chittorgarh | Arihant Properties", "List your plot, house, shop or agricultural land for sale with Arihant Properties, Chittorgarh's experienced property consultants since 1996.", "/sell-property"),
  component: () => (
    <>
      <PageHeader eyebrow="Sellers & landowners" title="Sell Your Property with Arihant Properties" intro="Share your property details. Photos and documents can be sent to us on WhatsApp after submitting." />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          formType="sell"
          submitLabel="List My Property"
          fields={[
            { name: "name", label: "Owner Name", required: true },
            { name: "mobile", label: "Mobile", type: "tel", required: true },
            { name: "whatsapp", label: "WhatsApp", type: "tel" },
            { name: "property_type", label: "Property Type", type: "select", options: PROPERTY_TYPES },
            { name: "property_location", label: "Property Location" },
            { name: "property_area", label: "Property Area" },
            { name: "expected_price", label: "Expected Price" },
            { name: "property_description", label: "Property Description", type: "textarea" },
            { name: "message", label: "Message", type: "textarea" },
          ]}
        />
        <ContactCard />
      </section>
    </>
  ),
});
