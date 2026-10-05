import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, waLink } from "@/lib/site";

export function ContactCard() {
  return (
    <div className="rounded-2xl bg-primary p-7 text-primary-foreground">
      <h2 className="text-2xl font-semibold">Arihant Properties</h2>
      <p className="mt-4 flex gap-2 text-sm text-primary-foreground/85"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><span>{SITE.addressLines[0]}<br />{SITE.addressLines[1]}</span></p>
      <p className="mt-3 text-sm">Phone & WhatsApp: <a href={SITE.phoneHref} className="font-semibold text-gold">{SITE.phone}</a></p>
      <div className="mt-6 grid gap-2">
        <Button asChild variant="gold"><a href={SITE.phoneHref}><Phone /> Call Now</a></Button>
        <Button asChild variant="whatsapp"><a href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp Us</a></Button>
        <Button asChild variant="glass"><a href={SITE.mapLink} target="_blank" rel="noopener noreferrer"><MapPin /> Get Directions</a></Button>
      </div>
    </div>
  );
}
