import { PageHeader, PropertyCard, CtaBand, Prose } from "@/components/site/blocks";
import type { Property } from "@/lib/properties";
import type { ReactNode } from "react";

export function ListingPage({ eyebrow, title, intro, image, items, children }: { eyebrow: string; title: string; intro: string; image?: string; items: Property[]; children?: ReactNode }) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} image={image} />
      <section className="container-site py-14">
        <p className="mb-6 rounded-lg bg-accent px-4 py-3 text-sm text-accent-foreground">
          Listings marked “Sample” are demo entries. Call or WhatsApp us for currently available properties.
        </p>
        {items.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map((p) => <PropertyCard key={p.id} p={p} />)}</div>
        ) : (
          <p className="text-muted-foreground">No properties match right now. Tell us your requirement and we will find options for you.</p>
        )}
        {children && <div className="mt-16 max-w-3xl"><Prose>{children}</Prose></div>}
      </section>
      <CtaBand />
    </>
  );
}
