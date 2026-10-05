export const SITE = {
  name: "Arihant Properties",
  phone: "+91 94141 09331",
  phoneHref: "tel:+919414109331",
  waNumber: "919414109331",
  address: "19-A, Udaipur Rd, Senthi, Bapu Nagar, Chittorgarh, Rajasthan 312001",
  addressLines: ["19-A, Udaipur Rd, Senthi, Bapu Nagar,", "Chittorgarh, Rajasthan 312001, India"],
  established: 1996,
  mapEmbed:
    "https://www.google.com/maps?q=19-A+Udaipur+Rd+Senthi+Bapu+Nagar+Chittorgarh+Rajasthan+312001&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=19-A+Udaipur+Rd+Senthi+Bapu+Nagar+Chittorgarh+Rajasthan+312001",
};

export const DEFAULT_WA_MSG =
  "Hello Arihant Properties, I am interested in a property in Chittorgarh. Please share available properties.";

export function waLink(message: string = DEFAULT_WA_MSG) {
  return `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/agricultural-land", label: "Agricultural Land" },
  { to: "/our-sites", label: "Our Sites" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
] as const;

export const PROPERTY_TYPES = [
  "Residential Plot",
  "Flat / Apartment",
  "Villa / House",
  "Commercial Plot",
  "Shop",
  "Commercial Building",
  "Commercial Hall",
  "Commercial Land",
  "Agricultural Land",
];

export const LOCATIONS = ["Chittorgarh", "Senthi", "Bapu Nagar", "Udaipur Road", "Other Chittorgarh locations"];
