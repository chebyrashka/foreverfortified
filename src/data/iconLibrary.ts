export type BrandIcon = {
  name: string;
  label: string;
  group: "Services" | "Trust" | "Actions";
  description: string;
  paths: string[];
};

export const brandIcons: BrandIcon[] = [
  {
    name: "roof",
    label: "Roofing",
    group: "Services",
    description: "Roofing, roofline, exterior protection",
    paths: ["M3.8 11.4 12 4.8l8.2 6.6", "M6.4 10.8V20h11.2v-9.2"]
  },
  {
    name: "siding",
    label: "Siding",
    group: "Services",
    description: "Exterior refresh, siding, cladding",
    paths: ["M5.5 5.5h13v13h-13Z", "M5.5 9.8h13", "M5.5 14.2h13"]
  },
  {
    name: "gutters",
    label: "Gutters",
    group: "Services",
    description: "Gutters, drainage, water movement",
    paths: ["M4.5 7h15v3.4a4.6 4.6 0 0 1-4.6 4.6H9.1a4.6 4.6 0 0 1-4.6-4.6Z"]
  },
  {
    name: "bathroom",
    label: "Bathroom",
    group: "Services",
    description: "Bathroom remodels, comfort, daily use",
    paths: ["M4.8 10.2h14.4v4.2a4.8 4.8 0 0 1-4.8 4.8H9.6a4.8 4.8 0 0 1-4.8-4.8Z", "M8.4 10.2V7.8a2.6 2.6 0 0 1 2.6-2.6h1.4"]
  },
  {
    name: "shield",
    label: "Protection",
    group: "Trust",
    description: "Weather-ready thinking, protection, durability",
    paths: ["M12 4.2 5.2 7v5.2c0 4.1 2.7 7.4 6.8 8.6 4.1-1.2 6.8-4.5 6.8-8.6V7Z"]
  },
  {
    name: "communication",
    label: "Communication",
    group: "Trust",
    description: "Clear updates, clean process, honest guidance",
    paths: ["M5 6.5h14v9H9.2L5 18.8Z"]
  },
  {
    name: "materials",
    label: "Materials",
    group: "Trust",
    description: "Material choices, performance, long-term value",
    paths: ["m12 4.5 8 4-8 4-8-4Z", "m4 13.2 8 4 8-4"]
  },
  {
    name: "home-care",
    label: "Home Care",
    group: "Trust",
    description: "Respect for the home, careful job sites",
    paths: ["M4.6 11.3 12 5l7.4 6.3", "M7 10.7V19h10v-8.3"]
  },
  {
    name: "quality",
    label: "Quality",
    group: "Trust",
    description: "Craftsmanship, finish quality, work done right",
    paths: ["m12 4.4 2.3 4.8 5.3.8-3.8 3.7.9 5.3-4.7-2.5-4.7 2.5.9-5.3L4.4 10l5.3-.8Z"]
  },
  {
    name: "fair-price",
    label: "Fair Price",
    group: "Trust",
    description: "Fair estimates, honest pricing, straightforward scope",
    paths: ["M4.8 5.2h7.6L19.2 12l-6.8 6.8H4.8Z", "M8.2 9h.1"]
  },
  {
    name: "estimate",
    label: "Estimate",
    group: "Actions",
    description: "Free estimates, proposal, next step",
    paths: ["M7 4.8h7.5L18 8.3v10.9H7Z", "M14.5 4.8v3.5H18"]
  },
  {
    name: "inspection",
    label: "Inspection",
    group: "Actions",
    description: "Walkthroughs, condition checks, project review",
    paths: ["M10.8 16.2a5.4 5.4 0 1 0 0-10.8 5.4 5.4 0 0 0 0 10.8Z", "m15 15 4.2 4.2"]
  },
  {
    name: "schedule",
    label: "Schedule",
    group: "Actions",
    description: "Appointments, timeline, project planning",
    paths: ["M5.5 6.5h13v12h-13Z", "M8 4.5v4", "M16 4.5v4"]
  },
  {
    name: "location",
    label: "Location",
    group: "Actions",
    description: "Minnesota local, service area, place",
    paths: ["M12 20.5s6-5.7 6-10.8a6 6 0 0 0-12 0c0 5.1 6 10.8 6 10.8Z", "M12 11.8a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z"]
  },
  {
    name: "phone",
    label: "Phone",
    group: "Actions",
    description: "Call, contact, request an estimate",
    paths: ["M7.3 4.8 9.5 9l-2 1.5a10.7 10.7 0 0 0 6 6l1.5-2 4.2 2.2-1.1 3.1c-.3.8-1.1 1.2-2 1A15.4 15.4 0 0 1 3.2 7.9c-.1-.9.3-1.7 1-2Z"]
  },
  {
    name: "email",
    label: "Email",
    group: "Actions",
    description: "Email, message, inquiry",
    paths: ["M4.8 6.8h14.4v10.4H4.8Z", "m5.2 7.2 6.8 5.4 6.8-5.4"]
  },
  {
    name: "article",
    label: "Article",
    group: "Actions",
    description: "Articles, homeowner guides, content",
    paths: ["M6.2 4.8h11.6v14.4H6.2Z", "M9 8.4h6", "M9 12h6", "M9 15.6h3.8"]
  },
  {
    name: "project",
    label: "Project",
    group: "Actions",
    description: "Recent work, portfolio, project proof",
    paths: ["M4.8 6.2h14.4v11.6H4.8Z", "M8 6.2l2-2h4l2 2"]
  }
];
