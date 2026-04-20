import globalContent from "@/cms/global.json";

export const global = globalContent;

export const company = {
  name: globalContent.brand.name,
  tagline: globalContent.brand.tagline,
  logoUrl: globalContent.brand.logoUrl,
  phone: globalContent.contact.phoneDisplay,
  phoneHref: globalContent.contact.phoneHref,
  email: globalContent.contact.email,
  location: globalContent.serviceArea.primaryRegion,
  estimateUrl: globalContent.contact.estimateUrl,
  heroImage: globalContent.brand.heroImage,
  intro: globalContent.brand.intro
};

export const socialLinks = globalContent.social;

export const navItems = [
  { label: "Roofing", href: "/roofing/" },
  { label: "Siding", href: "/siding/" },
  { label: "Bathrooms", href: "/bathroom-remodel/" },
  { label: "Articles", href: "/articles/" },
  { label: "About", href: "/about/" }
];

export const services = [
  {
    slug: "roofing",
    title: "Roofing",
    href: "/roofing/",
    eyebrow: "Roofing",
    headline: "Roofing built for weather, wear, and peace of mind.",
    summary:
      "From inspections and repairs to full replacement, Forever Fortified helps homeowners protect the structure that protects everything else.",
    image:
      "https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png",
    cta: "Explore Roofing",
    highlights: ["Roof inspections", "Repairs and replacement", "Storm-ready materials"],
    problems: [
      "Leaks, missing shingles, and weather damage",
      "Aging roofs that need practical replacement guidance",
      "Unclear estimates or rushed recommendations"
    ],
    benefits: [
      "Clear inspection findings and next steps",
      "Material options matched to your home and budget",
      "A clean, respectful job site from start to finish"
    ],
    faqs: [
      {
        question: "How do I know if I need a repair or full replacement?",
        answer:
          "The right answer depends on age, damage pattern, roof condition, and whether the issue is isolated. The estimate process should explain the options clearly before any commitment."
      },
      {
        question: "Can roofing work be planned around weather?",
        answer:
          "Yes. Roofing schedules should account for safe working conditions, material handling, and protection of the exposed home."
      }
    ]
  },
  {
    slug: "siding",
    title: "Siding",
    href: "/siding/",
    eyebrow: "Siding",
    headline: "Siding that strengthens your home from the outside in.",
    summary:
      "Refresh curb appeal, improve durability, and reduce maintenance with siding work that gives the whole exterior a cleaner, stronger presence.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Siding",
    highlights: ["Exterior refresh", "Weather resistance", "Trim and detail work"],
    problems: [
      "Faded, cracked, warped, or high-maintenance siding",
      "Exterior details that make the home feel dated",
      "Uncertainty around material and color choices"
    ],
    benefits: [
      "Sharper curb appeal and a cleaner exterior profile",
      "Durable material options with lower ongoing maintenance",
      "Trim, corners, and finish details handled with care"
    ],
    faqs: [
      {
        question: "Can new siding change the whole look of the house?",
        answer:
          "Yes. Siding, trim, color, and detail choices can make an older exterior feel dramatically cleaner and more current."
      },
      {
        question: "Do you help with color and material decisions?",
        answer:
          "A good siding consultation should help narrow the choices so the finished exterior matches the home, neighborhood, and long-term maintenance goals."
      }
    ]
  },
  {
    slug: "bathroom-remodel",
    title: "Bathroom Remodel",
    href: "/bathroom-remodel/",
    eyebrow: "Bathroom Remodel",
    headline: "Bathroom remodels that make everyday routines feel better.",
    summary:
      "Bring comfort, function, storage, and polish into one of the most-used rooms in the home with remodel work built around daily life.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Bathrooms",
    highlights: ["Walk-in showers", "Tile and fixtures", "Storage and layout"],
    problems: [
      "Bathrooms that feel cramped, dated, or hard to clean",
      "Poor storage, lighting, ventilation, or fixture layout",
      "A room that no longer fits the way the household uses it"
    ],
    benefits: [
      "More practical layouts and storage",
      "Materials selected for durability and easy care",
      "A finished room that feels warmer, calmer, and more personal"
    ],
    faqs: [
      {
        question: "Can a bathroom remodel stay practical without feeling basic?",
        answer:
          "Yes. The strongest remodels balance durable materials, smart layout choices, and a few high-impact finish details."
      },
      {
        question: "Do I need to know every finish before contacting you?",
        answer:
          "No. The first step can be a conversation about the room, your goals, budget comfort, and what needs to change most."
      }
    ]
  }
];

export const testimonials = [
  {
    quote:
      "The communication was clear from the first estimate, and the finished work made the whole house feel cared for again.",
    name: "Homeowner",
    location: "Minnesota",
    service: "Roofing"
  },
  {
    quote:
      "They helped us understand the options without pushing us into the most expensive route. That mattered.",
    name: "Client",
    location: "Twin Cities Area",
    service: "Siding"
  },
  {
    quote:
      "The remodel made our bathroom easier to use every day, but it also finally feels like it belongs with the rest of the home.",
    name: "Homeowner",
    location: "Minnesota",
    service: "Bathroom Remodel"
  }
];

export const processSteps = [
  {
    title: "Request an estimate",
    text: "Share the project type, location, and what you want to solve."
  },
  {
    title: "Walk the home",
    text: "Review the existing condition, priorities, options, and constraints."
  },
  {
    title: "Get a clear proposal",
    text: "Understand scope, materials, timing, and what happens next."
  },
  {
    title: "Build with care",
    text: "Complete the work with respect for the home and a final walkthrough."
  }
];

export const articles = [
  {
    slug: "roof-repair-or-replacement",
    title: "How to know when your roof needs more than a repair",
    category: "Roofing",
    readTime: "5 min read",
    excerpt:
      "The signs homeowners can look for before deciding whether to patch, repair, or start planning a replacement.",
    image:
      "https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png"
  },
  {
    slug: "before-replacing-siding",
    title: "What to consider before replacing siding",
    category: "Siding",
    readTime: "4 min read",
    excerpt:
      "Material, trim, color, and maintenance choices that shape how the finished exterior performs and feels.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "bathroom-remodel-comfort",
    title: "Bathroom remodel choices that improve daily comfort",
    category: "Bathroom Remodel",
    readTime: "6 min read",
    excerpt:
      "Small layout, lighting, storage, and finish decisions that can make a bathroom easier to use every day.",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
  }
];

export const featuredProject = {
  title: "Exterior refresh with a stronger first impression",
  category: "Siding and exterior detail",
  location: "Minnesota",
  text:
    "A focused exterior update can change how a home feels from the curb while adding better long-term protection from weather and wear.",
  image:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80"
};
