import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, OfficeNotice } from "@/components/site/blocks";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { ContactCard } from "@/components/site/ContactCard";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/book-appointment")({
  head: () => pageMeta("Book an Appointment | Arihant Properties Chittorgarh", "Book an appointment with Arihant Properties for property buying, selling, investment, verification or a site visit in Chittorgarh.", "/book-appointment"),
  component: () => (
    <>
      <PageHeader eyebrow="Appointments" title="Book an Appointment with Arihant Properties" intro="Choose a date and time and our team will confirm your visit or call." />
      <section className="container-site grid gap-10 py-14 lg:grid-cols-[1.5fr_1fr]">
        <EnquiryForm
          formType="appointment"
          submitLabel="Request Appointment"
          successText="Thank you. Your appointment request has been received. Our team will contact you shortly."
          fields={[
            { name: "name", label: "Name", required: true },
            { name: "mobile", label: "Mobile Number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "purpose", label: "Purpose", type: "select", required: true, options: ["Property Buying", "Property Selling", "Property Investment", "Property Consultation", "Property Verification", "Site Visit", "Commercial Property", "Residential Property", "Agricultural Land", "Other"] },
            { name: "preferred_date", label: "Preferred Date", type: "date" },
            { name: "preferred_time", label: "Preferred Time", type: "time" },
            { name: "message", label: "Message", type: "textarea" },
          ]}
        />
        <div className="space-y-6"><ContactCard /><OfficeNotice /></div>
      </section>
    </>
  ),
});
