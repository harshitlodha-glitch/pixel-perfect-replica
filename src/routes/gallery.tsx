import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, CtaBand } from "@/components/site/blocks";
import { pageMeta } from "@/lib/seo";
import hero from "@/assets/hero.jpg";
import plots from "@/assets/plots.jpg";
import commercial from "@/assets/commercial.jpg";
import agri from "@/assets/agri.jpg";

const IMGS = [[hero, "Residential villa"], [plots, "Residential plots"], [commercial, "Commercial shops"], [agri, "Agricultural land"]];

export const Route = createFileRoute("/gallery")({
  head: () => pageMeta("Gallery | Arihant Properties Chittorgarh", "Photos of residential, commercial and agricultural properties in and around Chittorgarh.", "/gallery"),
  component: () => (
    <>
      <PageHeader eyebrow="Gallery" title="Property gallery" intro="Representative images. Real site photos will be added here." />
      <section className="container-site grid gap-4 py-14 sm:grid-cols-2">
        {IMGS.map(([src, alt]) => (
          <figure key={alt} className="overflow-hidden rounded-2xl">
            <img src={src} alt={alt} loading="lazy" className="aspect-[3/2] w-full object-cover" />
            <figcaption className="bg-card px-4 py-3 text-sm font-semibold text-primary">{alt}</figcaption>
          </figure>
        ))}
      </section>
      <CtaBand />
    </>
  ),
});
