import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ListingPage } from "@/components/site/ListingPage";
import { PROPERTIES } from "@/lib/properties";
import { PROPERTY_TYPES, LOCATIONS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/properties/")({
  validateSearch: (s: Record<string, unknown>) => ({
    type: typeof s.type === "string" ? s.type : undefined,
    location: typeof s.location === "string" ? s.location : undefined,
  }),
  head: () => pageMeta("Properties for Sale in Chittorgarh | Arihant Properties", "Browse residential plots, villas, flats, commercial shops and agricultural land in Chittorgarh with Arihant Properties.", "/properties"),
  component: Page,
});

function Page() {
  const { type, location } = Route.useSearch();
  const nav = useNavigate({ from: "/properties/" });
  const loc = location && location !== "Other Chittorgarh locations" ? location.toLowerCase() : "";
  const items = PROPERTIES.filter((p) => (!type || p.type === type) && (!loc || p.location.toLowerCase().includes(loc)));
  return (
    <>
      <div className="border-b bg-card">
        <div className="container-site flex flex-wrap gap-3 py-4">
          <select className="field max-w-xs" aria-label="Property type" value={type ?? ""} onChange={(e) => nav({ to: ".", search: (p) => ({ ...p, type: e.target.value || undefined }) })}>
            <option value="">All property types</option>
            {PROPERTY_TYPES.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select className="field max-w-xs" aria-label="Location" value={location ?? ""} onChange={(e) => nav({ to: ".", search: (p) => ({ ...p, location: e.target.value || undefined }) })}>
            <option value="">All locations</option>
            {LOCATIONS.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>
      <ListingPage eyebrow="All properties" title="Properties in Chittorgarh" intro="Residential, commercial and agricultural properties across Chittorgarh, Senthi, Bapu Nagar and Udaipur Road." items={items} />
    </>
  );
}
