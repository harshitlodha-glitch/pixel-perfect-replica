import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, CalendarCheck, MapPin, Maximize2, Compass } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";
import type { Property } from "@/lib/properties";

export function PageHeader({ eyebrow, title, intro, image }: { eyebrow: string; title: string; intro?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
      <div className="container-site relative py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-primary md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function StatusBadge({ status }: { status: Property["status"] }) {
  const cls =
    status === "Available" ? "bg-whatsapp text-whatsapp-foreground" : status === "Reserved" ? "bg-gold text-gold-foreground" : "bg-muted-foreground text-primary-foreground";
  return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider ${cls}`}>{status}</span>;
}

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-lift">
      <Link to="/properties/$id" params={{ id: p.id }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={p.images[0]} alt={p.title} loading="lazy" width={1200} height={800} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute left-3 top-3 flex gap-2">
            <StatusBadge status={p.status} />
            <span className="rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">Sample</span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">{p.type}</p>
          <h3 className="mt-1.5 text-lg font-semibold text-primary">{p.title}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> {p.location}</p>
          <div className="mt-4 flex items-center justify-between border-t pt-4 text-sm">
            <span className="flex items-center gap-1.5 text-muted-foreground"><Maximize2 className="h-4 w-4" /> {p.area}</span>
            {p.facing && <span className="flex items-center gap-1.5 text-muted-foreground"><Compass className="h-4 w-4" /> {p.facing}</span>}
          </div>
          <p className="mt-3 font-display text-lg font-semibold text-primary">{p.price}</p>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-2 px-5 pb-5">
        <Button asChild variant="outline" size="sm"><a href={SITE.phoneHref}><Phone /> Call</a></Button>
        <Button asChild variant="whatsapp" size="sm">
          <a href={waLink(`Hello Arihant Properties, I am interested in ${p.title} (ID: ${p.id}). Please share details.`)} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
        </Button>
      </div>
    </article>
  );
}

export function CtaBand({ title = "Looking for the right property in Chittorgarh?", text = "Consulting is free of charge. Tell us your requirement or visit our office at Udaipur Road." }: { title?: string; text?: string }) {
  return (
    <section className="container-site py-16">
      <div className="grid gap-8 rounded-3xl bg-primary p-8 text-primary-foreground md:p-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow">Serving Chittorgarh since 1996</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-3 text-primary-foreground/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Button asChild variant="gold" size="lg"><Link to="/request-property">Request Property</Link></Button>
          <Button asChild variant="glass" size="lg"><Link to="/sell-property">Sell Property</Link></Button>
          <Button asChild variant="glass" size="lg"><Link to="/book-appointment"><CalendarCheck /> Book Appointment</Link></Button>
        </div>
      </div>
    </section>
  );
}

export function OfficeNotice() {
  return (
    <aside className="rounded-2xl border-l-4 border-gold bg-accent p-6 text-accent-foreground">
      <p className="font-display text-lg font-semibold">Before proceeding with a property purchase</p>
      <p className="mt-2 text-sm leading-relaxed">
        We recommend visiting our office once so our team can understand your requirement, explain the property details and guide you on documents. Before giving advance payment for a third-party property, ask us about our <strong>free preliminary paper/document verification assistance</strong>.
      </p>
    </aside>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 leading-relaxed text-foreground/85 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc">{children}</div>;
}
