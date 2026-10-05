import { createFileRoute } from "@tanstack/react-router";
import { ListingPage } from "@/components/site/ListingPage";
import { PROPERTIES } from "@/lib/properties";
import { pageMeta } from "@/lib/seo";
import img from "@/assets/plots.jpg";

export const Route = createFileRoute("/residential")({
  head: () => pageMeta("Residential Property in Chittorgarh | Arihant Properties", "Residential plots, flats, villas and houses in Chittorgarh, Senthi, Bapu Nagar and Udaipur Road.", "/residential"),
  component: () => (
    <ListingPage eyebrow="Residential Property" title="Residential Property in Chittorgarh" intro="Residential plots, flats, villas and houses in Chittorgarh, Senthi, Bapu Nagar and Udaipur Road." image={img} items={PROPERTIES.filter((p) => p.category === "residential")}>
      <h2>Why buy with Arihant Properties?</h2>
      <p>Arihant Properties has served Chittorgarh since 1996. Our consultants know the local market, guide you on location, documents and fair pricing, and consulting is free of charge.</p>
      <p>Before purchase, please visit our office once at 19-A, Udaipur Rd, Senthi, Bapu Nagar, Chittorgarh.</p>
    </ListingPage>
  ),
});
