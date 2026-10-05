import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, CalendarCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, SITE, waLink } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Arihant Properties home">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold font-display text-xl font-bold text-gold-foreground">
        A
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-semibold ${light ? "text-primary-foreground" : "text-primary"}`}>
          Arihant Properties
        </span>
        <span className={`block text-[10px] font-semibold uppercase tracking-[0.2em] ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          Chittorgarh · Since 1996
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" /> {SITE.address}
          </span>
          <span>Consulting is free of charge · Serving Chittorgarh since 1996</span>
        </div>
      </div>
      <div className="container-site flex h-18 items-center justify-between gap-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary"
              activeProps={{ className: "text-primary font-semibold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={SITE.phoneHref}><Phone /> Call Now</a>
          </Button>
          <Button asChild variant="whatsapp" size="sm">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a>
          </Button>
          <Button asChild variant="gold" size="sm">
            <Link to="/book-appointment"><CalendarCheck /> Book Appointment</Link>
          </Button>
        </div>
        <button
          className="rounded-md p-2 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t bg-background xl:hidden" aria-label="Mobile">
          <div className="container-site grid gap-1 py-4">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 font-medium hover:bg-muted">
                {n.label}
              </Link>
            ))}
            {[
              ["/request-property", "Request a Property"],
              ["/sell-property", "Sell Your Property"],
              ["/property-verification", "Paper Verification"],
              ["/blog", "Knowledge Center"],
            ].map(([to, l]) => (
              <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-muted-foreground hover:bg-muted">
                {l}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-2">
              <Link to="/book-appointment" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-background shadow-lift lg:hidden">
      <a href={SITE.phoneHref} className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-primary">
        <Phone className="h-5 w-5" /> Call
      </a>
      <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 bg-whatsapp py-2.5 text-xs font-semibold text-whatsapp-foreground">
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
      <Link to="/request-property" className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-primary">
        <CalendarCheck className="h-5 w-5" /> Enquire
      </Link>
    </div>
  );
}

export function SiteFooter() {
  const cols: [string, [string, string][]][] = [
    ["Properties", [["/properties", "All Properties"], ["/residential", "Residential"], ["/commercial", "Commercial"], ["/agricultural-land", "Agricultural Land"], ["/our-sites", "Our Sites"]]],
    ["Services", [["/services", "All Services"], ["/property-verification", "Paper Verification"], ["/request-property", "Request a Property"], ["/sell-property", "Sell Your Property"], ["/book-appointment", "Book Appointment"]]],
    ["Company", [["/about", "About Us"], ["/gallery", "Gallery"], ["/blog", "Knowledge Center"], ["/contact", "Contact"]]],
  ];
  return (
    <footer className="bg-navy-deep pb-24 text-primary-foreground lg:pb-0">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm text-primary-foreground/70">
            Trusted real estate company in Chittorgarh. Residential, commercial and agricultural property buying, selling and consulting since {SITE.established}.
          </p>
          <address className="mt-5 text-sm not-italic text-primary-foreground/80">
            {SITE.addressLines[0]}<br />{SITE.addressLines[1]}<br />
            <a href={SITE.phoneHref} className="mt-2 inline-block font-semibold text-gold">{SITE.phone}</a>
          </address>
        </div>
        {cols.map(([h, links]) => (
          <div key={h}>
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.18em] text-gold">{h}</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map(([to, l]) => (
                <li key={to}><Link to={to} className="text-primary-foreground/75 hover:text-primary-foreground">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} Arihant Properties, Chittorgarh. All rights reserved.</span>
          <span>Document verification is preliminary assistance only, not a legal opinion.</span>
        </div>
      </div>
    </footer>
  );
}
