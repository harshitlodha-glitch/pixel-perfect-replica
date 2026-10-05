import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, CalendarCheck, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge, OfficeNotice, PropertyCard } from "@/components/site/blocks";
import { EnquiryForm, BASIC_FIELDS } from "@/components/site/EnquiryForm";
import { getProperty, PROPERTIES } from "@/lib/properties";
import { SITE, waLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const p = getProperty(params.id);
    if (!p) throw notFound();
    return { id: p.id, title: p.title, location: p.location };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? pageMeta(`${loaderData.title} | Arihant Properties`, `${loaderData.title} in ${loaderData.location}. Contact Arihant Properties, Chittorgarh for details and site visits.`, `/properties/${params.id}`, "product")
      : { meta: [{ title: "Property not found | Arihant Properties" }] },
  notFoundComponent: () => (
    <div className="container-site py-24 text-center">
      <h1 className="text-3xl font-semibold text-primary">Property not found</h1>
      <Button asChild variant="gold" className="mt-6"><Link to="/properties">Browse properties</Link></Button>
    </div>
  ),
  errorComponent: () => <div className="container-site py-24 text-center">Could not load this property.</div>,
  component: Page,
});

function Page() {
  const { id } = Route.useLoaderData();
  const p = getProperty(id)!;
  const [active, setActive] = useState(0);
  const [full, setFull] = useState(false);
  const wa = waLink(`Hello Arihant Properties, I am interested in ${p.title} (ID: ${p.id}). Please share details.`);
  const info = [
    ["Property Type", p.type], ["Area", p.area], ["Price", p.price], ["Location", p.location],
    ["Facing", p.facing ?? "—"], ["Road Width", p.roadWidth ?? "—"], ["Status", p.status],
  ];
  return (
    <>
      <section className="container-site py-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2"><StatusBadge status={p.status} /><span className="text-xs font-semibold text-muted-foreground">ID: {p.id} · Sample listing</span></div>
            <h1 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">{p.title}</h1>
            <p className="mt-2 flex items-center gap-1.5 text-muted-foreground"><MapPin className="h-4 w-4" /> {p.location}</p>
          </div>
          <p className="font-display text-2xl font-semibold text-primary">{p.price}</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <button onClick={() => setFull(true)} className="block w-full overflow-hidden rounded-2xl" aria-label="Open full-screen image">
              <img src={p.images[active]} alt={p.title} className="aspect-[16/10] w-full object-cover" />
            </button>
            {p.images.length > 1 && (
              <div className="mt-3 flex gap-3">
                {p.images.map((img, i) => (
                  <button key={i} onClick={() => setActive(i)} className={`h-20 w-28 overflow-hidden rounded-lg border-2 ${i === active ? "border-gold" : "border-transparent"}`} aria-label={`Show image ${i + 1}`}>
                    <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {info.map(([k, v]) => (
                <div key={k} className="rounded-xl border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1 font-semibold text-primary">{v}</p>
                </div>
              ))}
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-primary">About this property</h2>
            <p className="mt-3 leading-relaxed text-foreground/85">{p.description}</p>
            {p.amenities.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">{p.amenities.map((a) => <li key={a} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{a}</li>)}</ul>
            )}
            <div className="mt-8"><OfficeNotice /></div>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
            <div className="grid grid-cols-2 gap-2">
              <Button asChild variant="navy" size="lg"><a href={SITE.phoneHref}><Phone /> Call Now</a></Button>
              <Button asChild variant="whatsapp" size="lg"><a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button>
              <Button asChild variant="gold" size="lg" className="col-span-2"><Link to="/book-appointment"><CalendarCheck /> Book Site Visit</Link></Button>
            </div>
            <h2 className="pt-2 text-xl font-semibold text-primary">Request details</h2>
            <EnquiryForm
              formType="property"
              fields={BASIC_FIELDS}
              submitLabel="Request Details"
              hidden={{ property_id: p.id, property_name: p.title, property_url: `/properties/${p.id}` }}
            />
          </aside>
        </div>
      </section>

      <section className="container-site pb-16">
        <h2 className="text-2xl font-semibold text-primary">Similar properties</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.filter((x) => x.id !== p.id).slice(0, 3).map((x) => <PropertyCard key={x.id} p={x} />)}
        </div>
      </section>

      {full && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-navy-deep/95 p-4" role="dialog" aria-modal="true" onClick={() => setFull(false)}>
          <button className="absolute right-4 top-4 text-primary-foreground" aria-label="Close"><X className="h-8 w-8" /></button>
          <img src={p.images[active]} alt={p.title} className="max-h-[90vh] max-w-full cursor-zoom-in rounded-lg object-contain" />
        </div>
      )}
    </>
  );
}
