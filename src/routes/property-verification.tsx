import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Prose } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/property-verification")({
  head: () => pageMeta("Property Paper Verification in Chittorgarh | Arihant Properties", "Free preliminary property paper and document verification assistance in Chittorgarh before you pay an advance for a third-party property.", "/property-verification"),
  component: () => (
    <>
      <PageHeader eyebrow="Free assistance" title="Property Paper Verification" intro="Before giving advance payment for a third-party property, ask us about our free preliminary paper/document verification assistance." />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-2">
        <Prose>
          <h2>What we help you check</h2>
          <ul>
            <li>Sale deed / title documents</li>
            <li>Jamabandi and mutation entries</li>
            <li>Land conversion and patta, where applicable</li>
            <li>Approved layout details</li>
            <li>Match of papers with the property on site</li>
          </ul>
          <h2>Important note</h2>
          <p>This is preliminary assistance based on documents shared with us. It is not a legal opinion or title guarantee. For legal certainty, please consult a qualified advocate before purchase.</p>
        </Prose>
        <EnquiryForm
          formType="service"
          submitLabel="Request Verification Help"
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "mobile", label: "Mobile Number", type: "tel", required: true },
            { name: "property_location", label: "Property Location" },
            { name: "purpose", label: "Service", type: "select", options: ["Preliminary Document Verification"] },
            { name: "message", label: "Tell us about the property", type: "textarea" },
          ]}
        />
      </section>
    </>
  ),
});
