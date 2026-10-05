import plots from "@/assets/plots.jpg";
import commercial from "@/assets/commercial.jpg";
import agri from "@/assets/agri.jpg";
import hero from "@/assets/hero.jpg";

export type Category = "residential" | "commercial" | "agricultural";
export type Status = "Available" | "Reserved" | "Sold";

export interface Property {
  id: string;
  title: string;
  category: Category;
  type: string;
  location: string;
  area: string;
  price: string;
  priceValue: number; // in rupees, for filtering
  facing?: string;
  roadWidth?: string;
  bedrooms?: number;
  bathrooms?: number;
  status: Status;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
}

/**
 * SAMPLE / DEMO LISTINGS — placeholder data only, clearly marked on the site.
 * Replace with real listings from Arihant Properties.
 */
export const PROPERTIES: Property[] = [
  {
    id: "AP-R-101",
    title: "Sample Residential Plot near Udaipur Road",
    category: "residential",
    type: "Residential Plot",
    location: "Udaipur Road, Chittorgarh",
    area: "1,500 sq ft",
    price: "Price on request",
    priceValue: 0,
    facing: "East",
    roadWidth: "30 ft",
    status: "Available",
    featured: true,
    images: [plots, hero],
    description:
      "Demo listing to illustrate how residential plots appear. Contact Arihant Properties for current available plots on Udaipur Road and nearby colonies.",
    amenities: ["Paved road", "Street lights", "Water connection nearby"],
  },
  {
    id: "AP-R-102",
    title: "Sample Independent Villa in Senthi",
    category: "residential",
    type: "Villa / House",
    location: "Senthi, Chittorgarh",
    area: "2,400 sq ft",
    price: "Price on request",
    priceValue: 0,
    facing: "North",
    roadWidth: "40 ft",
    bedrooms: 4,
    bathrooms: 4,
    status: "Available",
    featured: true,
    images: [hero, plots],
    description:
      "Demo listing showing how a villa or house is presented. Ask our team for genuine villas currently available in Senthi and Bapu Nagar.",
    amenities: ["Parking", "Garden", "Modular kitchen"],
  },
  {
    id: "AP-C-201",
    title: "Sample Commercial Shops on Main Road",
    category: "commercial",
    type: "Shop",
    location: "Bapu Nagar, Chittorgarh",
    area: "350 sq ft each",
    price: "Price on request",
    priceValue: 0,
    facing: "West",
    roadWidth: "60 ft",
    status: "Available",
    featured: true,
    images: [commercial],
    description:
      "Demo listing showing how commercial shops appear. Contact us for current commercial opportunities in Chittorgarh.",
    amenities: ["Main road frontage", "Parking space", "Glass shutters"],
  },
  {
    id: "AP-A-301",
    title: "Sample Agricultural Land near Chittorgarh",
    category: "agricultural",
    type: "Agricultural Land",
    location: "Near Chittorgarh",
    area: "5 Bigha",
    price: "Price on request",
    priceValue: 0,
    status: "Available",
    featured: true,
    images: [agri],
    description:
      "Demo listing showing how agricultural land is presented. Ask us about genuine agricultural land and preliminary document checks.",
    amenities: ["Road access", "Water source nearby"],
  },
];

export const CATEGORY_IMAGES = { residential: plots, commercial, agricultural: agri };

export function getProperty(id: string) {
  return PROPERTIES.find((p) => p.id === id);
}
