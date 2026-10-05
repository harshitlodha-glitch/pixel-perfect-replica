export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  body: { h?: string; p?: string; list?: string[] }[];
}

export const POSTS: Post[] = [
  {
    slug: "documents-to-check-before-buying-property-in-rajasthan",
    title: "Documents to Check Before Buying Property in Rajasthan",
    excerpt: "A practical list of papers every buyer should review before paying an advance.",
    body: [
      { p: "Buying land or a plot in Rajasthan is a big decision. Before you pay any advance, make sure the key documents are in order. This is general guidance, not legal advice — consult a qualified advocate for a legal opinion." },
      { h: "Key documents", list: ["Sale deed / title deed of the current owner", "Jamabandi (record of rights)", "Mutation (namantaran) entries", "Land conversion order, if the land is used for residential or commercial purposes", "Approved layout / patta, where applicable", "Encumbrance and loan status", "Latest property tax and electricity receipts"] },
      { h: "Visit before you pay", p: "Always visit the site and our office once. Arihant Properties offers free preliminary document verification assistance for third-party properties in Chittorgarh." },
    ],
  },
  {
    slug: "what-is-jamabandi",
    title: "What Is Jamabandi and Why Is It Important?",
    excerpt: "Understanding the land record that shows ownership and cultivation details.",
    body: [
      { p: "Jamabandi is the record of rights maintained by the revenue department. It shows the owner, the khasra number, area and type of land." },
      { h: "Why it matters", list: ["Confirms who is recorded as owner", "Shows shares if there are multiple owners", "Helps match the land being sold with official records"] },
      { p: "Checking jamabandi is one of the first steps before buying agricultural land in Rajasthan." },
    ],
  },
  {
    slug: "things-to-check-before-buying-a-plot",
    title: "Things to Check Before Buying a Plot in Chittorgarh",
    excerpt: "Location, road width, approvals and documents — a simple checklist.",
    body: [
      { h: "Checklist", list: ["Road width and access", "Facing and plot dimensions on site", "Layout approval and conversion", "Water and electricity availability", "Nearby development and schools", "Clear title documents"] },
      { p: "Our team can guide you on residential plots in Senthi, Bapu Nagar, Udaipur Road and other parts of Chittorgarh." },
    ],
  },
  {
    slug: "how-to-sell-property-in-chittorgarh",
    title: "How to Sell Property in Chittorgarh",
    excerpt: "Prepare documents, set the right price and reach genuine buyers.",
    body: [
      { h: "Steps", list: ["Keep title documents ready", "Get a realistic price idea from local experts", "Take clear photos of the property", "List with a trusted local consultant"] },
      { p: "You can list your property with Arihant Properties through our Sell Your Property form or by visiting our office." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
