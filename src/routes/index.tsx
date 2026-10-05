import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, CalendarCheck, ShieldCheck, Handshake, MapPinned, BadgeIndianRupee, FileSearch, Building2, Home, Trees, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHead, PropertyCard, CtaBand, OfficeNotice } from "@/components/site/blocks";
import { PROPERTIES, CATEGORY_IMAGES } from "@/lib/properties";
import { PROPERTY_TYPES, LOCATIONS, waLink } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta(
      "Arihant Properties | Real Estate & Property Dealer in Chittorgarh",
      "Arihant Properties — trusted real estate services in Chittorgarh since 1996. Buy and sell residential plots, flats, villas, commercial properties and agricultural land.",
      "/",
    ),
  component: Index,
});

const TRUST = [
  { icon: ShieldCheck, t: "Serving since 1996", d: "Decades of local experience in the Chittorgarh property market." },
  { icon: Handshake, t: "Consulting is free", d: "Talk to our team about buying, selling or investing at no charge." },
  { icon: FileSearch, t: "Paper verification help", d: "Free preliminary document checks before you pay an advance." },
  { icon: MapPinned, t: "Local market knowledge", d: "Senthi, Bapu Nagar, Udaipur Road and across Chittorgarh." },
];

function Index() {
  const nav = useNavigate();
  const [q, setQ] = useState({ type: "", location: "" });
  const featured = PROPERTIES.filter((p) => p.featured);

  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <img src={hero} alt="Premium residence in Chittorgarh at sunset" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="container-site flex min-h-[88vh] flex-col justify-end pb-12 pt-24 text-primary-foreground">
          <p className="eyebrow">Your local real estate partner since 1996</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
            Trusted Real Estate & Property Services in Chittorgarh Since 1996
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/85">
            Residential, commercial & agricultural properties in Chittorgarh — find the right property with experienced local consultants.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><Link to="/properties">View Properties <ArrowRight /></Link></Button>
            <Button asChild variant="whatsapp" size="lg"><a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
            <Button asChild variant="glass" size="lg"><Link to="/book-appointment"><CalendarCheck /> Book Appointment</Link></Button>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              nav({ to: "/properties", search: { type: q.type || undefined, location: q.location || undefined } });
            }}
            className="mt-10 grid gap-3 rounded-2xl bg-card p-4 text-foreground shadow-lift md:grid-cols-[1fr_1fr_1fr_auto]"
            aria-label="Property search"
          >
            <select className="field" aria-label="Looking for" defaultValue="Buy">
              {["Buy", "Sell", "Rent", "Investment"].map((o) => <option key={o}>{o}</option>)}
            </select>
            <select className="field" aria-label="Property type" value={q.type} onChange={(e) => setQ({ ...q, type: e.target.value })}>
              <option value="">Any property type</option>
              {PROPERTY_TYPES.map((o) => <option key={o}>{o}</option>)}
            </select>
            <select className="field" aria-label="Location" value={q.location} onChange={(e) => setQ({ ...q, location: e.target.value })}>
              <option value="">Any location</option>
              {LOCATIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
            <Button type="submit" variant="navy" size="lg">Search</Button>
          </form>
        </div>
      </section>

      <section className="container-site grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST.map(({ icon: I, t, d }) => (
          <div key={t} className="rounded-2xl border bg-card p-6 shadow-card">
            <I className="h-8 w-8 text-gold" />
            <h3 className="mt-4 text-lg font-semibold text-primary">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="container-site py-12">
        <SectionHead eyebrow="Property categories" title="What are you looking for?" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { to: "/residential", icon: Home, t: "Residential", d: "Plots, flats, villas & houses", img: CATEGORY_IMAGES.residential },
            { to: "/commercial", icon: Building2, t: "Commercial", d: "Shops, halls, buildings & land", img: CATEGORY_IMAGES.commercial },
            { to: "/agricultural-land", icon: Trees, t: "Agricultural Land", d: "Farmland in & around Chittorgarh", img: CATEGORY_IMAGES.agricultural },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group relative isolate block aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[3/4]">
              <img src={c.img} alt={c.t} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="hero-scrim absolute inset-0 -z-10" />
              <div className="flex h-full flex-col justify-end p-7 text-primary-foreground">
                <c.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-3 text-3xl font-semibold">{c.t}</h3>
                <p className="mt-1 text-primary-foreground/80">{c.d}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">Explore <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead eyebrow="Featured properties" title="Properties in Chittorgarh" intro="Listings shown are sample entries for illustration. Contact us for currently available properties." />
            <Button asChild variant="navy"><Link to="/properties">View all <ArrowRight /></Link></Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      <section className="container-site grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHead eyebrow="Buy · Sell · Consult" title="One local team for every property decision" intro="From finding a residential plot to listing your shop or checking land papers, Arihant Properties guides you at every step." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              ["/request-property", "Request a property", BadgeIndianRupee],
              ["/sell-property", "Sell your property", Handshake],
              ["/property-verification", "Paper verification", FileSearch],
              ["/services", "All services", ShieldCheck],
            ].map(([to, l, I]) => {
              const Icon = I as typeof ShieldCheck;
              return (
                <Link key={to as string} to={to as string} className="flex items-center gap-3 rounded-xl border bg-card p-4 font-semibold text-primary shadow-card hover:border-gold">
                  <Icon className="h-5 w-5 text-gold" /> {l as string}
                </Link>
              );
            })}
          </div>
        </div>
        <OfficeNotice />
      </section>

      <CtaBand />
    </>
  );
}
