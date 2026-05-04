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
      "https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png",
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
        image: "https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png"
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

export const articles = [
  {
    slug: "roof-repair-or-replacement",
    title: "How to know when your roof needs more than a repair",
    category: "Roofing",
    readTime: "9 min read",
    excerpt:
      "The signs homeowners can look for before deciding whether to patch, repair, or start planning a replacement.",
    image:
      "https://foreverfortified.com/wp-content/themes/foreverfortified/assets/img/photo-bg-roof.png",
    intro: [
      "A roof problem rarely arrives at a convenient time. Most homeowners notice a stain on the ceiling, a few shingles in the yard, a drip near a bathroom fan, or a damp spot after a storm and immediately wonder how serious it is.",
      "The hard part is that roofs do not always fail in obvious ways. A small leak can come from one loose flashing detail, or it can be the first visible sign that the roof system is wearing out across several areas. Two homes can have the same ceiling stain and need very different solutions.",
      "This guide is meant to help homeowners understand the difference between a roof that needs a targeted repair and a roof that may be ready for replacement planning. It is not a substitute for an inspection, but it can help you ask better questions and feel more prepared during the estimate."
    ],
    sections: [
      {
        title: "Start with the pattern of the problem",
        paragraphs: [
          "A single missing shingle after a storm can be a repair. A roof with repeated leaks, widespread granule loss, soft decking, or curling shingles is usually asking for a larger conversation.",
          "The important thing is not just where water shows up inside the home. It is why the roof failed there and whether the surrounding system is still doing its job.",
          "That is why a useful roof estimate should look beyond the obvious leak. The roof surface, flashing, valleys, vents, gutters, fascia, attic ventilation, and decking can all affect whether a repair will hold or whether the same problem is likely to come back."
        ]
      },
      {
        title: "Common signs a repair may not be enough",
        paragraphs: [
          "Homeowners do not need to diagnose every roof issue, but these signs are worth taking seriously before paying for another small patch.",
          "One of these issues does not automatically mean the roof needs to be replaced. Several of them together usually mean it is time to compare the cost of ongoing repairs against the value of a planned replacement."
        ],
        bullets: [
          "Leaks showing up in more than one area",
          "Shingles that are brittle, cracked, curled, or missing across multiple slopes",
          "Dark streaking, moss, or trapped debris that has been sitting for a long time",
          "Soft spots, sagging, or visible decking concerns",
          "Flashing, valleys, or roof edges that have failed more than once"
        ]
      },
      {
        title: "Age matters, but condition matters more",
        paragraphs: [
          "Many homeowners ask whether a roof should be replaced based on age alone. Age is helpful context, but condition is what should drive the recommendation. A younger roof with poor installation details can fail early, while an older roof that was installed well and maintained carefully may still have useful life left.",
          "A contractor should be able to explain what they are seeing in plain language. If the roof is aging but stable, a repair or maintenance plan may be reasonable. If the roof is aging and showing broad failure, replacement planning may save money and stress over time."
        ]
      },
      {
        title: "Look at the roof as a system, not a surface",
        paragraphs: [
          "A roof is more than shingles. It is a system of materials and details that work together to shed water, manage airflow, protect the structure, and move moisture away from vulnerable areas. That includes underlayment, flashing, roof vents, pipe boots, drip edge, valleys, decking, fascia, and gutters.",
          "When a leak appears, the visible damage may be several feet away from the actual failure point. Water can travel along framing, underlayment, or insulation before it finally stains a ceiling. That is why a quick patch over the visible area does not always solve the problem.",
          "A better inspection looks for the source and the pattern. If a pipe boot is cracked but the surrounding shingles and decking are sound, a repair may be appropriate. If the roof has repeated failures in valleys, edges, and penetrations, the issue may be broader than one detail."
        ]
      },
      {
        title: "Minnesota weather makes small roof issues bigger",
        paragraphs: [
          "Minnesota homes deal with heavy rain, snow, freeze-thaw cycles, wind, hail, ice buildup, and long stretches of moisture. A roof that might limp along in a milder climate can deteriorate faster when water repeatedly freezes, melts, and moves through the same weak spots.",
          "Ice and snow can also hide roof problems until the damage has already moved inside. A small flashing issue, poor attic ventilation, or a vulnerable roof edge may show up as staining, peeling paint, damp insulation, or recurring winter leaks.",
          "For homeowners, this means timing matters. If the roof is already showing signs of failure in the fall, waiting through another winter can increase the risk of interior damage. A repair may still be enough, but the decision should be based on condition and season, not hope."
        ]
      },
      {
        title: "When a targeted repair still makes sense",
        paragraphs: [
          "Repairs can be the right call when the roof is generally in good condition and the problem is isolated. Examples include storm damage in one area, a loose flashing detail, a small puncture, or a localized gutter or fascia issue affecting the roof edge.",
          "A good estimate should explain what can be repaired, what risk remains, and whether the repair is likely to buy meaningful time. The answer should feel practical, not like pressure to turn every small problem into a full replacement."
        ]
      },
      {
        title: "The cost question is really a timing question",
        paragraphs: [
          "Most homeowners do not want to replace a roof earlier than necessary, and that is reasonable. The question is whether repair spending is protecting the home or simply delaying a replacement that is already close.",
          "A repair that buys several more useful years can be a smart decision. A repair that only addresses one symptom on a failing roof may create a cycle of service calls, ceiling repairs, and stress every time the weather changes.",
          "This is where a clear estimate helps. It should separate immediate needs from long-term planning. Homeowners should understand whether they are making a small maintenance decision, a short-term stabilization decision, or a replacement decision."
        ]
      },
      {
        title: "When replacement becomes the cleaner option",
        paragraphs: [
          "Replacement becomes easier to justify when the roof has widespread wear, repeated leaks, or multiple weak points that are likely to fail one after another. At that point, repair money can start disappearing into temporary fixes without improving the overall roof system.",
          "A planned replacement also gives the homeowner a chance to address the roof as a complete assembly. That can include better underlayment, improved flashing details, ventilation review, cleaner edges, new drip edge, and stronger coordination with gutters or fascia."
        ]
      },
      {
        title: "What a replacement conversation should include",
        paragraphs: [
          "If replacement is on the table, the conversation should be specific. The homeowner should know what materials are being recommended, how the old roof will be removed, what happens if damaged decking is found, and how the home will be protected during the work.",
          "Ventilation should also be part of the discussion. Poor ventilation can shorten roof life and contribute to moisture problems. If a roof is being replaced, it is a natural time to review intake, exhaust, and attic conditions.",
          "Cleanup and workmanship matter too. Roof replacement is disruptive by nature, but the process should still be organized. A homeowner should know how landscaping will be protected, how debris will be handled, and what the final walkthrough includes."
        ]
      },
      {
        title: "What to ask during the estimate",
        paragraphs: [
          "Ask what caused the issue, how much of the roof was inspected, and whether the recommendation is based on age, condition, or active failure. If replacement is recommended, ask what parts of the system are included, such as decking review, underlayment, flashing, ventilation, drip edge, cleanup, and warranty details.",
          "The goal is to leave the estimate with a clear next step. That might be a small repair, a bigger repair with known limitations, or a replacement plan that can be scheduled before the roof creates larger damage inside the home."
        ],
        bullets: [
          "What is causing the leak or visible damage?",
          "Is the issue isolated or part of a broader pattern?",
          "How long should the recommended repair reasonably last?",
          "What would be included in a replacement scope?",
          "How will cleanup, protection, and workmanship warranty be handled?"
        ]
      },
      {
        title: "A practical way to decide",
        paragraphs: [
          "The best decision is usually the one that matches the roof's actual condition and the homeowner's timeline. If the roof is mostly sound and the problem is isolated, repair it properly and keep an eye on it. If the roof is failing in several areas, replacement planning is often the more responsible path.",
          "What homeowners should avoid is paying for repairs without understanding the larger picture. A good contractor should be willing to explain what they see, show where the risk is, and help the homeowner make a decision that fits the home rather than pushing the biggest possible scope."
        ]
      }
    ],
    closing: [
      "The right roof decision should feel understandable. Whether the answer is a repair, a replacement, or a plan to monitor the roof for a little longer, you should know why that recommendation fits your home.",
      "When the estimate explains the condition, the risks, the materials, and the next step in plain language, the project becomes easier to trust."
    ]
  },
  {
    slug: "before-replacing-siding",
    title: "What to consider before replacing siding",
    category: "Siding",
    readTime: "10 min read",
    excerpt:
      "Material, trim, color, and maintenance choices that shape how the finished exterior performs and feels.",
    image: "/images/service-photos/siding-hero-4k.jpg",
    intro: [
      "Siding replacement is one of the biggest visual changes a homeowner can make to the exterior of a house. It can make a tired home feel sharper, clean up years of wear, and improve how the exterior handles weather.",
      "But siding is not just a color decision. It touches windows, doors, trim, soffit, fascia, gutters, light fixtures, utility penetrations, and the wall assembly underneath. If those details are not planned carefully, even good siding material can look unfinished.",
      "Before starting a siding project, it helps to understand the decisions that shape both appearance and performance. The goal is not to make the project more complicated. The goal is to make the finished exterior feel complete."
    ],
    sections: [
      {
        title: "Siding is more than the field material",
        paragraphs: [
          "Replacing siding changes the whole exterior, not just the flat wall surface. Trim, corners, window surrounds, soffit transitions, gutters, lighting blocks, and door details all affect how finished the home feels.",
          "The best siding projects are planned around the entire exterior so the new material looks intentional instead of simply attached to the house.",
          "That planning matters because siding touches so many other parts of the home. A siding project can expose hidden moisture, reveal trim issues, affect gutter lines, and change how windows, doors, and exterior lighting relate to the rest of the facade."
        ]
      },
      {
        title: "Decisions to make before work begins",
        paragraphs: [
          "A siding estimate should help narrow down the practical choices before crews arrive. That includes performance needs, maintenance expectations, and the level of finish the homeowner wants.",
          "It is usually easier to make these decisions before the project starts than to make them in a hurry while work is underway. The more the plan accounts for details, the cleaner the finished exterior tends to feel."
        ],
        bullets: [
          "Material type and expected maintenance",
          "Color, profile, and how the siding works with the roof",
          "Trim style around windows, doors, and corners",
          "Whether fascia, soffit, or gutters should be updated at the same time",
          "How existing damage or hidden moisture will be handled if discovered"
        ]
      },
      {
        title: "Material choice should match the home and the homeowner",
        paragraphs: [
          "There is no single siding material that is right for every house. Some homeowners care most about low maintenance. Others care about a specific profile, texture, color range, or long-term curb appeal. Budget, exposure, shade, tree coverage, and neighborhood character all matter.",
          "A helpful contractor should explain the tradeoffs without burying the homeowner in product jargon. The right recommendation should connect the material to the way the home actually performs in Minnesota weather."
        ]
      },
      {
        title: "Start with why the siding is being replaced",
        paragraphs: [
          "Some siding projects begin because the exterior looks tired. Others begin because the home has damage, moisture concerns, loose panels, fading, cracking, or repeated maintenance issues. The reason for the project should shape the plan.",
          "If the main goal is curb appeal, color, profile, trim, and visual balance may drive the conversation. If the goal is performance, the estimate should spend more time on wall condition, water management, weather barriers, flashing details, and how problem areas will be addressed.",
          "Many projects are a mix of both. Homeowners want the exterior to look better, but they also want confidence that the work behind the siding is being handled correctly."
        ]
      },
      {
        title: "Do not skip the wall condition conversation",
        paragraphs: [
          "Siding covers the wall, but it does not erase what is happening behind it. If there has been water intrusion, pest damage, poor flashing, or old installation work, those issues need to be accounted for before new siding goes on.",
          "A responsible estimate should explain what can be seen now and what may only be discovered once old material is removed. Homeowners should know how hidden damage is documented, priced, and approved if it comes up during the project.",
          "This is one of the reasons transparent communication matters. No one wants surprise costs, but it is better to address hidden problems correctly than to cover them and have the new exterior fail early."
        ]
      },
      {
        title: "Why trim and transitions matter",
        paragraphs: [
          "Most homeowners notice siding problems at the edges first. Uneven trim, awkward utility blocks, poor caulk lines, and messy transitions can make a new exterior feel unfinished.",
          "Planning those details early helps the finished project look cleaner and can reduce surprises during installation. Window trim, door casing, corner boards, frieze details, and the transition into soffit or fascia all shape the final look.",
          "This is also where workmanship shows. Straight lines, clean edges, thoughtful blocks, and consistent reveals can make the difference between a siding replacement that looks basic and one that feels deliberately finished."
        ]
      },
      {
        title: "Color choices should be tested in real light",
        paragraphs: [
          "Siding color can look very different on a sample board than it does across an entire house. Sunlight, shade, roof color, window trim, landscaping, and neighboring homes all affect how the color reads.",
          "Before making a final choice, homeowners should look at samples outside at different times of day. A color that feels warm in the morning can feel flat in shade, and a bold choice can become much stronger once it covers a large wall.",
          "Trim color matters just as much. High contrast can make the home feel crisp and architectural. Lower contrast can feel quieter and more classic. The right answer depends on the style of the home and how much attention the homeowner wants the trim to carry."
        ]
      },
      {
        title: "Think through gutters, fascia, and exterior details",
        paragraphs: [
          "Siding work often overlaps with gutters, fascia, soffit, and other exterior details. If those pieces are worn, mismatched, or poorly placed, updating siding alone may not give the home the finished look the homeowner expects.",
          "This does not mean every related item has to be replaced. It does mean the estimate should identify what will stay, what should be repaired, and what would be easier to handle while the siding project is already underway."
        ]
      },
      {
        title: "Plan for disruption before the project starts",
        paragraphs: [
          "Siding replacement affects the exterior of the home for days or weeks depending on scope. Homeowners should understand where materials will be staged, how access around the home will work, and what areas need to be kept clear.",
          "It is also worth asking about pets, gates, landscaping, outdoor furniture, lighting, cameras, and anything attached to the house. A little planning before installation can prevent avoidable stress once crews are working.",
          "Good project management shows up in these details. The homeowner should know who to contact, what the sequence looks like, and how questions will be handled during the job."
        ]
      },
      {
        title: "Think about long-term curb appeal",
        paragraphs: [
          "A siding project is a good time to step back and look at the home as a whole. The right combination of siding, trim, gutters, and roof color can make the exterior feel sharper while still fitting the neighborhood and the homeowner's taste.",
          "Before finalizing the plan, look at the roof color, window color, landscaping, masonry, and front entry. Siding is a large visual surface, so a small color or trim decision can change the whole feel of the home."
        ],
        bullets: [
          "Ask to review material samples in natural light",
          "Consider whether trim should contrast or blend",
          "Plan around the roof color and gutter color",
          "Confirm how utility penetrations and light blocks will be handled",
          "Make sure repair allowances and hidden damage procedures are clear"
        ]
      },
      {
        title: "The finished exterior should feel complete",
        paragraphs: [
          "A siding project should not leave the homeowner feeling like the walls were updated but the rest of the exterior was forgotten. The best results come from thinking about the home as one composition: siding, trim, roof, gutters, windows, doors, lighting, and landscaping.",
          "That does not always mean doing everything at once. It means making siding decisions that will still make sense as other exterior improvements happen over time. A good plan can improve the home now while leaving room for future upgrades."
        ]
      }
    ],
    closing: [
      "A successful siding replacement should feel like more than new panels. It should make the whole exterior look more intentional, protect the home better, and reduce the maintenance issues that made the project necessary in the first place.",
      "When the scope includes materials, trim, transitions, wall condition, and project communication, homeowners can move forward with a clearer picture of what they are buying and why it matters."
    ]
  },
  {
    slug: "bathroom-remodel-comfort",
    title: "Bathroom remodel choices that improve daily comfort",
    category: "Bathroom Remodel",
    readTime: "10 min read",
    excerpt:
      "Small layout, lighting, storage, and finish decisions that can make a bathroom easier to use every day.",
    image: "/images/service-photos/bathroom-hero-4k.jpg",
    intro: [
      "A bathroom remodel has to do more than look better. It has to work better during rushed mornings, quiet evenings, cleaning days, guest visits, and everything in between.",
      "That is why comfort is such an important word in bathroom planning. Comfort can mean easier shower access, brighter lighting, warmer finishes, better storage, less clutter, simpler cleaning, or a room that finally feels calm instead of frustrating.",
      "This guide looks at the choices that make a bathroom easier to live with every day. Some are design choices, some are practical construction choices, and many are small details that homeowners only notice after the project is complete."
    ],
    sections: [
      {
        title: "Comfort starts with how the room is used",
        paragraphs: [
          "A bathroom remodel does not have to be oversized to make daily life better. The biggest improvements often come from fixing the small frustrations homeowners deal with every morning and evening.",
          "Before choosing tile or fixtures, it helps to name what is not working: poor lighting, cramped movement, hard-to-clean surfaces, weak ventilation, limited storage, or a shower that no longer fits the way the household uses the room.",
          "That conversation keeps the remodel grounded. A beautiful bathroom still needs to drain properly, ventilate well, clean easily, store daily items, and feel comfortable for the people who use it."
        ]
      },
      {
        title: "Updates that make a practical difference",
        paragraphs: [
          "The right scope depends on the room, but these choices tend to have an immediate effect on comfort and usability.",
          "Even when the footprint stays the same, thoughtful choices can make the bathroom feel calmer and easier to live with."
        ],
        bullets: [
          "Better lighting at the mirror, shower, and general room level",
          "A shower layout that is easier to enter, clean, and maintain",
          "Storage that keeps daily items close without cluttering the counter",
          "Durable surfaces that handle water, cleaning, and regular use",
          "Ventilation and moisture planning to protect the finished work"
        ]
      },
      {
        title: "Begin with the problems, not the products",
        paragraphs: [
          "It is easy to start a bathroom remodel by looking at tile, faucets, vanities, and inspiration photos. Those choices matter, but they should come after the homeowner understands what the room needs to solve.",
          "A bathroom that feels cramped may need a better layout or a different shower entry. A bathroom that feels messy may need more functional storage. A bathroom that feels cold or dim may need better lighting, fan placement, or finish choices that brighten the room.",
          "When the project starts with real problems, the finished bathroom is more likely to feel better in daily use, not just better in photos."
        ]
      },
      {
        title: "Plan the shower around real daily use",
        paragraphs: [
          "The shower is often the center of the remodel. Size, entry style, controls, shelving, tile, glass, and waterproofing all affect how the room works after the project is complete.",
          "A good shower plan should consider who uses the bathroom, whether easier entry is important, where products will go, how the shower will be cleaned, and how water will be managed behind the finished surfaces."
        ],
        bullets: [
          "Shower entry height and door or curtain preference",
          "Control placement that is easy to reach",
          "Built-in niches or shelves for daily products",
          "Tile, panel, or surface choices based on cleaning expectations",
          "Waterproofing and ventilation details"
        ]
      },
      {
        title: "Choose materials for maintenance as well as style",
        paragraphs: [
          "Bathroom finishes live in a demanding environment. They deal with water, steam, cleaning products, personal care products, and daily use. A material that looks beautiful but is difficult to maintain may not be the right fit for every household.",
          "Tile size, grout lines, shower glass, vanity tops, flooring, and wall finishes all affect cleaning. Some homeowners are happy to maintain more detailed finishes. Others want surfaces that are simple, durable, and forgiving.",
          "Neither choice is wrong. The important thing is to be honest about how the bathroom will be used and cleaned after the remodel."
        ]
      },
      {
        title: "Do not overlook the details you touch every day",
        paragraphs: [
          "Faucets, shower controls, towel locations, niches, shelves, door swings, and outlet placement all shape how the bathroom feels in real life. These details are easy to rush, but they are often what homeowners appreciate most after the remodel is complete.",
          "Storage deserves the same attention. A vanity with drawers, a recessed medicine cabinet, or a better linen solution can reduce countertop clutter and make the room easier to reset at the end of the day."
        ]
      },
      {
        title: "Storage should be designed around routines",
        paragraphs: [
          "Storage is often treated as a secondary detail, but it can change how a bathroom feels every day. A beautiful vanity does not help much if the items people use most often still end up scattered across the counter.",
          "Think through where towels, hair tools, medicine, cleaning supplies, extra paper products, and shower items will go. The best storage plan is not always the largest one. It is the one that puts the right things in the right places.",
          "For smaller bathrooms, this may mean drawers instead of doors, a recessed cabinet, shower niches, or vertical storage that does not crowd the room."
        ]
      },
      {
        title: "Lighting and ventilation are comfort features",
        paragraphs: [
          "Lighting is not just decorative. Bathrooms need useful task lighting at the mirror, enough general light for cleaning, and thoughtful placement so the room does not feel harsh or shadowy.",
          "Ventilation is just as important. Moisture control protects paint, cabinetry, trim, and the wall assembly behind the finished surfaces. If a bathroom has felt damp, musty, or slow to dry, the remodel should address that directly."
        ]
      },
      {
        title: "Accessibility can be subtle",
        paragraphs: [
          "Homeowners do not need to be planning for a medical need to care about easier access. A lower shower curb, better lighting, a handheld shower, blocking for future grab bars, or more comfortable clearances can make the room easier to use without making it feel clinical.",
          "These choices are especially worth discussing if the homeowner plans to stay in the home long term. Small decisions during a remodel can make the bathroom more flexible for guests, family members, and future needs."
        ]
      },
      {
        title: "Match the project size to the goal",
        paragraphs: [
          "Some bathrooms need a full redesign. Others need a focused refresh with better fixtures, cleaner finishes, improved storage, and a more durable shower. A good estimate should help separate must-haves from nice-to-haves so the project stays aligned with the homeowner's priorities.",
          "Before approving the scope, decide what the remodel needs to solve first. Comfort, easier cleaning, safer access, better storage, and a cleaner look are all valid goals, but they can lead to different project sizes."
        ],
        bullets: [
          "Name the daily frustrations the remodel should solve",
          "Separate must-have changes from cosmetic preferences",
          "Confirm how moisture protection will be handled",
          "Review fixture placement before work begins",
          "Choose finishes that fit the cleaning and maintenance you want"
        ]
      },
      {
        title: "A bathroom should feel calm after the work is done",
        paragraphs: [
          "The best bathroom remodels are not only about new finishes. They reduce daily friction. The room is easier to move through, easier to clean, easier to light, easier to ventilate, and easier to keep organized.",
          "That kind of result comes from practical planning. When the estimate connects design choices to real routines, the homeowner can make decisions with more confidence and fewer surprises."
        ]
      }
    ],
    closing: [
      "The best bathroom remodel is the one that makes the room easier to use long after the excitement of new finishes wears off.",
      "When layout, storage, lighting, surfaces, ventilation, and daily routines are planned together, the finished bathroom can feel cleaner, calmer, and more comfortable every day."
    ]
  }
];

export const featuredProject = {
  title: "A closer look at the work",
  category: "Past Projects",
  location: "Minnesota",
  text:
    "Take a look at some of our past projects and see how the details come together, from smart material choices to clean finish work and clear communication along the way.",
  image: "/images/service-photos/featured-project-metal-roof.jpg"
};
