import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader, CtaBand } from "@/components/site/blocks";
import { pageMeta } from "@/lib/seo";
import plots from "@/assets/plots.jpg";

export const Route = createFileRoute("/our-sites")({
  head: () => pageMeta("Our Sites & Projects in Chittorgarh | Arihant Properties", "Residential and commercial sites and projects in Chittorgarh handled by Arihant Properties.", "/our-sites"),
  component: () => (
    <>
      <PageHeader eyebrow="Our sites" title="Sites & projects in Chittorgarh" intro="Details of our current sites will be published here soon." image={plots} />
      <section className="container-site py-16 text-center">
        <p className="mx-auto max-w-xl text-muted-foreground">We are preparing details of our sites. Meanwhile, contact us for layouts, available plots and site visits.</p>
        <Button asChild variant="gold" size="lg" className="mt-6"><Link to="/book-appointment">Book a Site Visit</Link></Button>
      </section>
      <CtaBand />
    </>
  ),
});
