import globalContent from "@/cms/global.json";
import testimonialContent from "@/cms/testimonials.json";

export const global = globalContent;

export const heroCopyOptions = globalContent.brand.heroCopyOptions;

const activeHeroCopy =
  heroCopyOptions.find((option) => option.id === globalContent.brand.heroCopyActive) || heroCopyOptions[0];

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
  heroCopy: activeHeroCopy,
  intro: globalContent.brand.intro
};

export const socialLinks = globalContent.social;

export const navItems = [
  { label: "Roofing", href: "/roofing/" },
  { label: "Siding", href: "/siding/" },
  { label: "Gutters", href: "/gutters/" },
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
      "/images/service-photos/photo-bg-roof.jpg",
    cta: "Explore Roofing",
    highlights: ["Roof inspections", "Repairs and replacement", "Storm-ready materials"],
    problems: [
      "Leaks, missing shingles, and weather damage",
      "Aging roofs that need practical replacement guidance",
      "Unclear estimates or rushed recommendations"
    ],
    benefits: [
      {
        title: "Clear inspection findings",
        text: "You get a straightforward read on the roof condition, priority areas, and the next practical step."
      },
      {
        title: "Materials matched to the home",
        text: "Roofing options are discussed around durability, budget, appearance, and long-term performance."
      },
      {
        title: "A respectful job site",
        text: "The work is planned with clean communication, careful protection, and a finish that respects the home."
      }
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
      },
      {
        question: "What should I expect during the first roof visit?",
        answer:
          "The first visit should focus on the roof condition, trouble spots, attic or ventilation concerns when relevant, and a clear explanation of what needs attention now versus later."
      },
      {
        question: "Do you help compare roofing material options?",
        answer:
          "Yes. Material choices should balance appearance, durability, budget, warranty expectations, and how the roof needs to perform in Minnesota weather."
      },
      {
        question: "Can roof work include skylights or flashing details?",
        answer:
          "Yes. Flashing, skylights, chimneys, walls, and other roof penetrations are important details because they often determine how well the finished roof sheds water over time."
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
    image: "/images/service-photos/siding-hero-4k.jpg",
    cta: "Explore Siding",
    highlights: ["Exterior refresh", "Weather resistance", "Trim and detail work"],
    problems: [
      "Faded, cracked, warped, or high-maintenance siding",
      "Exterior details that make the home feel dated",
      "Uncertainty around material and color choices"
    ],
    benefits: [
      {
        title: "A cleaner exterior profile",
        text: "Siding, trim, and color decisions come together to give the whole home a sharper first impression."
      },
      {
        title: "Durable material choices",
        text: "Material recommendations are shaped around weather resistance, maintenance, budget, and the look you want."
      },
      {
        title: "Details handled with care",
        text: "Corners, trim, transitions, and finish work are treated as part of the project, not afterthoughts."
      }
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
      },
      {
        question: "How do I know when siding should be replaced?",
        answer:
          "Common signs include cracking, warping, water damage, loose panels, fading, frequent maintenance, or exterior details that are no longer protecting the home well."
      },
      {
        question: "Can siding work include trim and exterior details?",
        answer:
          "Yes. Trim, corners, window details, fascia, soffit, and transition points are often what make the finished exterior feel clean and complete."
      },
      {
        question: "Will new siding improve maintenance?",
        answer:
          "The right siding material can reduce ongoing maintenance and give the home a cleaner exterior profile, especially when paired with proper trim and installation details."
      }
    ]
  },
  {
    slug: "gutters",
    title: "Gutters",
    href: "/gutters/",
    eyebrow: "Gutters",
    headline: "Gutter systems that protect the roofline, siding, and foundation.",
    summary:
      "Move water away from the home with gutter work planned around rooflines, drainage, downspouts, and the exterior details that keep moisture from becoming damage.",
    image: "/images/service-photos/gutters-hero-4k.jpg",
    cta: "Explore Gutters",
    highlights: ["Gutter replacement", "Downspout planning", "Drainage improvements"],
    problems: [
      "Overflowing, leaking, sagging, or undersized gutters",
      "Water collecting near siding, fascia, walkways, or the foundation",
      "Exterior drainage that was never planned as part of the whole home"
    ],
    benefits: [
      {
        title: "Water moved away cleanly",
        text: "The goal is simple: guide rain where it belongs before it can create bigger issues around the home."
      },
      {
        title: "Sized to the roofline",
        text: "Gutters and downspouts are planned around the home's roof edges, pitch, drainage paths, and problem spots."
      },
      {
        title: "Finished exterior details",
        text: "The system should work well and look intentional against the roofline, fascia, siding, and trim."
      }
    ],
    faqs: [
      {
        question: "How do I know if my gutters need replacement?",
        answer:
          "Common signs include overflow during normal rain, sagging runs, leaks at seams, loose fasteners, and water collecting where it should be moving away from the home."
      },
      {
        question: "Can gutter work be paired with roofing or siding?",
        answer:
          "Yes. Gutter planning often makes the most sense alongside roofing or siding work because the roof edge, fascia, trim, and drainage path all affect the finished system."
      },
      {
        question: "What causes gutters to overflow?",
        answer:
          "Overflow can come from clogs, undersized runs, poor slope, loose sections, downspout issues, or rooflines that send too much water into one area."
      },
      {
        question: "Do downspouts matter as much as the gutters?",
        answer:
          "Yes. Downspouts are a major part of the system because they determine where water goes after it leaves the roofline."
      },
      {
        question: "Can gutters help protect siding and the foundation?",
        answer:
          "Yes. A well-planned gutter system moves water away from fascia, siding, walkways, landscaping, and the foundation so moisture is less likely to create larger issues."
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
    image: "/images/service-photos/bathroom-hero-4k.jpg",
    cta: "Explore Bathrooms",
    highlights: ["Walk-in showers", "Tile and fixtures", "Storage and layout"],
    problems: [
      "Bathrooms that feel cramped, dated, or hard to clean",
      "Poor storage, lighting, ventilation, or fixture layout",
      "A room that no longer fits the way the household uses it"
    ],
    benefits: [
      {
        title: "Better daily function",
        text: "Layout, storage, fixtures, and flow are considered around how the bathroom is actually used."
      },
      {
        title: "Durable, easy-care materials",
        text: "Finish choices are balanced for comfort, cleaning, moisture, slip resistance, and long-term wear."
      },
      {
        title: "A more personal room",
        text: "The finished space should feel calm, polished, and practical without losing the character of the home."
      }
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
      },
      {
        question: "Can a bathroom remodel improve daily function without changing everything?",
        answer:
          "Yes. Focused updates to fixtures, storage, lighting, ventilation, or shower layout can make the room work better without requiring a full redesign."
      },
      {
        question: "What should I think through before choosing finishes?",
        answer:
          "It helps to think about cleaning, durability, slip resistance, storage needs, lighting, and how the bathroom is used every day."
      },
      {
        question: "Can you help decide between a refresh and a larger remodel?",
        answer:
          "Yes. A walkthrough can help separate cosmetic updates from layout, moisture, ventilation, or fixture issues that may call for a deeper remodel."
      }
    ]
  }
];

const serviceEnhancements: Record<string, any> = {
  roofing: {
    overview: {
      title: "Roofing work built on durable protection.",
      body:
        "Whether you are dealing with a leak, storm damage, aging shingles, or a roof that needs a second look, Forever Fortified helps you understand the condition, compare the right options, and move forward with work built to protect the home.",
      points: ["Inspection-first recommendations", "Repair and replacement planning", "Flashing, skylight, and ventilation details"]
    },
    showBrands: false,
    brands: ["GAF", "Owens Corning", "CertainTeed", "IKO", "VELUX"],
    brandPages: [
      {
        title: "Brava Roof Tile",
        summary:
          "Composite cedar shake, old world slate, and Spanish tile roofing for homes that need premium character with durable, recycled-material performance.",
        href: "/roofing/brava/",
        logo: "/images/brands/brava/brava-logo.svg"
      }
    ],
    showGallery: false,
    subServicesTitle: "Let us help you with your roofing project",
    showSubServiceLinks: false,
    gallery: [
      {
        title: "Roof replacement planning",
        text: "Full roof projects show how planning, prep, flashing, and final cleanup support the finished result.",
        image: "/images/service-photos/photo-bg-roof.jpg"
      },
      {
        title: "Flashing and roofline details",
        text: "Careful edge, wall, chimney, and penetration details help keep water moving where it belongs.",
        image: "https://images.unsplash.com/photo-1632759145353-1d592919f522?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Skylight and chimney work",
        text: "Skylights and chimneys need precise flashing so the finished roof looks clean and sheds water correctly.",
        image: "https://images.unsplash.com/photo-1622015663319-e97e697503ee?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    subServices: [
      {
        slug: "roof-replacement",
        title: "Roof Replacement",
        summary: "A closer look at full roof replacement, material choices, timelines, and what makes the finished system last."
      },
      {
        slug: "roof-repair",
        title: "Roof Repair",
        summary: "Focused help for leaks, missing shingles, flashing issues, and smaller roof problems that need a clear fix."
      }
    ]
  },
  siding: {
    overview: {
      title: "Siding that sharpens curb appeal and strengthens the exterior.",
      body:
        "Forever Fortified helps homeowners make confident exterior updates with siding, trim, color, and material choices that improve curb appeal, reduce upkeep, and strengthen the home against Minnesota weather.",
      points: ["Siding replacement and repair", "Trim, corners, and exterior details", "Color and material planning"]
    },
    subServicesTitle: "Let us help you with your siding project",
    showSubServiceLinks: false,
    showBrands: false,
    brands: ["James Hardie", "LP SmartSide", "CertainTeed", "Mastic", "Versetta Stone"],
    showGallery: false,
    gallery: [
      {
        title: "Whole-home siding refresh",
        text: "New siding can reset the full exterior with cleaner lines, stronger protection, and a more finished presence.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Trim and detail work",
        text: "Window, corner, soffit, fascia, and transition details make a siding project feel complete.",
        image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Exterior color updates",
        text: "Color and material choices help the home feel current without losing what already works.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    subServices: [
      {
        slug: "siding-replacement",
        title: "Siding Replacement",
        summary: "Replacement siding planned around material choice, trim details, installation quality, and a cleaner exterior."
      },
      {
        slug: "trim-and-exterior-detail",
        title: "Trim and Exterior Detail",
        summary: "Finish work for the corners, trim, transitions, and exterior details that make the final result feel intentional."
      }
    ]
  },
  gutters: {
    overview: {
      title: "Gutter work that moves water where it belongs.",
      body:
        "Forever Fortified plans gutter work around the whole exterior, from roofline and fascia details to downspout placement, so rainwater moves away from siding, walkways, landscaping, and the foundation.",
      points: ["Gutter replacement and repair", "Downspout placement", "Drainage and overflow planning"]
    },
    subServicesTitle: "Let us help you with your gutter project",
    showSubServiceLinks: false,
    showBrands: false,
    brands: ["Spectra Metals", "Ply Gem", "LeafBlaster Pro", "GutterRX", "RainDrop"],
    showGallery: false,
    gallery: [
      {
        title: "Gutter replacement",
        text: "Fresh gutter runs help the exterior look cleaner while moving water away from vulnerable areas.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Downspout planning",
        text: "Downspouts are placed to guide water away from walkways, landscaping, siding, and the foundation.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Roofline finishing",
        text: "Clean gutter lines should feel integrated with the fascia, roof edge, and exterior trim.",
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    subServices: [
      {
        slug: "gutter-replacement",
        title: "Gutter Replacement",
        summary: "Replacement for old, leaking, sagging, or undersized gutter systems that are no longer moving water well."
      },
      {
        slug: "gutter-repair",
        title: "Gutter Repair",
        summary: "Targeted help for leaks, loose sections, poor slope, overflow, and downspouts that need attention."
      }
    ]
  },
  "bathroom-remodel": {
    overview: {
      title: "Bathroom remodels that make daily routines easier.",
      body:
        "Forever Fortified helps turn worn or frustrating bathrooms into cleaner, more comfortable rooms with practical layouts, durable finishes, thoughtful storage, and details that make everyday routines easier.",
      points: ["Walk-in showers and fixtures", "Tile, surfaces, and finishes", "Storage, lighting, and layout updates"]
    },
    subServicesTitle: "Let us help you with your bathroom remodel project",
    showSubServiceLinks: false,
    showBrands: false,
    brands: ["Kohler", "Delta", "Moen", "Schluter", "MSI Surfaces"],
    showGallery: false,
    gallery: [
      {
        title: "Bathroom refresh",
        text: "Focused updates can make a bathroom feel cleaner, easier to use, and more comfortable day to day.",
        image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Shower and fixture updates",
        text: "Shower, faucet, tile, and fixture choices bring durability and polish into the everyday routine.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
      },
      {
        title: "Storage and layout improvements",
        text: "Better storage, lighting, and fixture placement can make the same room work much harder.",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
      }
    ],
    subServices: [
      {
        slug: "walk-in-showers",
        title: "Walk-in Showers",
        summary: "Shower replacements planned around access, comfort, tile, fixtures, moisture control, and daily use."
      },
      {
        slug: "bathroom-refresh",
        title: "Bathroom Refresh",
        summary: "Focused updates to fixtures, finishes, storage, and usability without making the project larger than it needs to be."
      }
    ]
  }
};

for (const service of services) {
  Object.assign(service, serviceEnhancements[service.slug] || {});
}

export const subServicePages = services.flatMap((service) => {
  const subServices = (service as any).subServices || [];

  return subServices.map((subService: any) => ({
    service,
    subService,
    href: `${service.href}${subService.slug}/`
  }));
});

export const testimonials = testimonialContent;

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

export { articles } from "@/cms/articles";

export const featuredProject = {
  title: "A closer look at the work",
  category: "Past Projects",
  location: "Minnesota",
  text:
    "Take a look at some of our past projects and see how the details come together, from smart material choices to clean finish work and clear communication along the way.",
  image: "/images/service-photos/featured-project-metal-roof.jpg"
};
