import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "@/components/site/ListingPage";
import { PROPERTIES } from "@/lib/properties";
import { pageMeta } from "@/lib/seo";
import img from "@/assets/commercial.jpg";

export const Route = createFileRoute("/commercial")({
  head: () => pageMeta("Commercial Property in Chittorgarh | Arihant Properties", "Shops, commercial plots, halls, buildings and commercial land in Chittorgarh.", "/commercial"),
  component: () => (
    <ListingPage eyebrow="Commercial Property" title="Commercial Property in Chittorgarh" intro="Shops, commercial plots, halls, buildings and commercial land in Chittorgarh." image={img} items={PROPERTIES.filter((p) => p.category === "commercial")}>
      <h2>Why buy with Arihant Properties?</h2>
      <p>Arihant Properties has served Chittorgarh since 1996. Our consultants know the local market, guide you on location, documents and fair pricing, and consulting is free of charge.</p>
      <p>Before purchase, please visit our office once at 19-A, Udaipur Rd, Senthi, Bapu Nagar, Chittorgarh.</p>
    </ListingPage>
  ),
});
