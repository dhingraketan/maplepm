export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  included: string[];
  benefits: string[];
  relatedSlugs: string[];
};

export const COMPANY = {
  name: "Maple Property Maintenance",
  phone: "(778) 723-2529",
  phoneHref: "tel:+17787232529",
  email: "info@maplepm.ca",
  emailHref: "mailto:info@maplepm.ca",
  serviceArea:
    "Serving Vancouver, Burnaby, Surrey, Richmond, Langley, Abbotsford, Chilliwack & the Vancouver Island",
} as const;

export const services: Service[] = [
  {
    slug: "roof-cleaning",
    title: "Roof Cleaning & Moss Treatment",
    shortDescription:
      "Gentle moss removal and treatment to protect shingles and restore curb appeal.",
    description:
      "Roof moss holds moisture against your shingles and can shorten roof life. We use proven soft-brush techniques and targeted treatments to remove growth safely, then apply professional-grade moss control to help slow regrowth—without aggressive high-pressure washing that can damage roofing materials.",
    image: "/images/services/roof.png",
    included: [
      "Roof surface assessment and photo documentation",
      "Manual moss removal with care around flashings and vents",
      "Targeted treatment application for moss and algae",
      "Gutter line cleanup where debris commonly collects",
      "Post-service walkthrough and maintenance recommendations",
    ],
    benefits: [
      "Helps prevent moisture damage and premature shingle wear",
      "Improves appearance for resale and neighborhood pride",
      "Clear communication on what your roof needs (and what it doesn’t)",
      "Fully insured team with respectful site practices",
    ],
    relatedSlugs: ["gutter-cleaning", "house-soft-wash", "exterior-property-maintenance"],
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription:
      "Complete debris removal and flow testing to protect fascia, siding, and foundations.",
    description:
      "Clogged gutters overflow in heavy rain, which can stain siding, rot fascia, and saturate foundations. We clear debris by hand and flush downspouts to confirm drainage, flagging common issues like poor slope or loose hangers when we see them.",
    image: "/images/services/gutter.png",
    included: [
      "Hand removal of leaves, needles, and compacted buildup",
      "Downspout flushing and basic flow verification",
      "Bagging debris and tidy ground cleanup",
      "Visual check for obvious leaks, sagging, or separation",
      "Photos available upon request for strata or property managers",
    ],
    benefits: [
      "Reduces overflow-related staining and water intrusion risk",
      "Helps extend gutter life by reducing weight and standing water",
      "Fast scheduling options during peak fall and spring seasons",
      "Professional crew that respects landscaping and walkways",
    ],
    relatedSlugs: ["roof-cleaning", "seasonal-cleanup", "window-cleaning"],
  },
  {
    slug: "house-soft-wash",
    title: "House Soft Wash",
    shortDescription:
      "Low-pressure washing that safely removes grime, algae, and organic buildup on siding.",
    description:
      "Soft washing uses controlled pressure and appropriate detergents to clean delicate exterior finishes. It’s ideal for vinyl, fiber cement, and painted surfaces where high pressure can cause damage. We rinse thoroughly and protect nearby plantings.",
    image: "/images/services/softwash.png",
    included: [
      "Pre-wash inspection and plant/property protection as needed",
      "Application of siding-safe cleaning solution",
      "Low-pressure rinse to lift organic staining",
      "Detail rinse around windows, corners, and trim",
      "Final walkthrough to confirm an even, clean finish",
    ],
    benefits: [
      "Safer for siding and paint than aggressive pressure blasting",
      "Brightens exteriors and improves first impressions",
      "Great pairing before painting or listing a home",
      "Consistent, detail-oriented finish across elevations",
    ],
    relatedSlugs: ["window-cleaning", "pressure-washing", "exterior-property-maintenance"],
  },
  {
    slug: "pressure-washing",
    title: "Pressure Washing",
    shortDescription:
      "Concrete, stone, and durable surfaces cleaned with the right pressure and technique.",
    description:
      "Driveways, walkways, and patios collect oil, algae, and grime over time. We match pressure and tips to the surface type to lift staining effectively while minimizing the risk of etching or striping on concrete and hardscape.",
    image: "/images/services/pressure.png",
    included: [
      "Surface evaluation and method selection",
      "Pre-treatment for common organic staining where appropriate",
      "Controlled washing of driveways, walkways, and patios",
      "Post-clean rinse and debris tidy-up",
      "Recommendations for sealing or seasonal maintenance",
    ],
    benefits: [
      "Restores curb appeal for entrances and entertaining spaces",
      "Reduces slippery algae on shaded walkways",
      "Professional equipment operated by trained technicians",
      "Clear scope so you know exactly what areas are included",
    ],
    relatedSlugs: ["house-soft-wash", "window-cleaning", "seasonal-cleanup"],
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDescription:
      "Streak-focused exterior glass cleaning with attention to frames, tracks, and screens.",
    description:
      "Clean windows change how natural light feels inside your home. We focus on streak-free glass, wipe down frames and sills, and can include screen cleaning so the whole opening looks refreshed—not just the center of the pane.",
    image: "/images/services/window.png",
    included: [
      "Exterior glass cleaning with professional tools and techniques",
      "Frame and sill wipe-down (as accessible)",
      "Screen brushing/wash (service option can be noted on quote)",
      "Hard water spot treatment where reasonable and safe",
      "Final inspection from multiple angles for streaks",
    ],
    benefits: [
      "More light, sharper views, and a polished exterior detail",
      "Ideal before hosting, listing, or seasonal transitions",
      "Careful ladder and access practices",
      "Friendly scheduling for homes and select commercial storefronts",
    ],
    relatedSlugs: ["house-soft-wash", "gutter-cleaning", "exterior-property-maintenance"],
  },
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    shortDescription:
      "Mowing, edging, and tidy-ups that keep turf healthy and your property looking sharp.",
    description:
      "Consistent lawn care keeps growth even, edges crisp, and beds neat. We provide dependable mowing routes with sharp lines, careful trimming, and blower cleanup so driveways and walkways look finished when we leave.",
    image: "/images/services/lawn.png",
    included: [
      "Weekly or bi-weekly mowing (based on season and agreement)",
      "String trimming around obstacles, beds, and borders",
      "Edging along walks and driveways where applicable",
      "Blower cleanup of clippings from hard surfaces",
      "Basic seasonal adjustments for growth and weather",
    ],
    benefits: [
      "Predictable scheduling you can count on",
      "Uniform cut height for a healthier-looking lawn",
      "Less weekend yard work for busy households",
      "Professional appearance for corners, cul-de-sacs, and frontage",
    ],
    relatedSlugs: ["seasonal-cleanup", "exterior-property-maintenance", "pressure-washing"],
  },
  {
    slug: "exterior-property-maintenance",
    title: "Exterior Property Maintenance",
    shortDescription:
      "Bundled exterior upkeep for busy owners—small repairs, cleaning touchpoints, and seasonal checks.",
    description:
      "Some properties need a steady set of eyes on the outside: tightening loose trim, clearing cobwebs, touching up problem areas, and coordinating cleaning tasks. We tailor recurring maintenance plans to your priorities and property type.",
    image: "/images/services/exterior.png",
    included: [
      "Custom checklist built around your property’s needs",
      "Scheduled exterior walkthroughs with photo notes (as agreed)",
      "Coordination of seasonal cleaning tasks (gutters, washing, etc.)",
      "Minor upkeep items within agreed scope",
      "Single point of contact for scheduling and questions",
    ],
    benefits: [
      "Helps catch small issues before they become costly repairs",
      "Great for rentals, estates, and seasonal homes",
      "Keeps curb appeal consistent year-round",
      "Local team that understands Lower Mainland weather patterns",
    ],
    relatedSlugs: ["house-soft-wash", "gutter-cleaning", "window-cleaning"],
  },
  {
    slug: "seasonal-cleanup",
    title: "Seasonal Cleanup",
    shortDescription:
      "Spring and fall tidy-ups: beds, debris, leaves, and exterior refresh projects.",
    description:
      "Seasonal transitions are the right time to reset beds, remove winter debris, and prepare drainage paths before heavy rain or summer growth. We work efficiently and leave your property looking intentionally maintained—not “almost done.”",
    image: "/images/services/seasonal.png",
    included: [
      "Bed edging and weed removal (scope-dependent)",
      "Leaf and debris removal from beds and hard surfaces",
      "Pruning of small shrubs within agreed limits",
      "Cleanup and disposal/bagging of collected material",
      "Optional add-ons like gutter cleaning or washing",
    ],
    benefits: [
      "Improves drainage visibility and reduces slip hazards",
      "Prepares landscaping for growing season or winter storms",
      "Flexible packages for single visits or seasonal pairs",
      "Professional finish that shows from the street",
    ],
    relatedSlugs: ["lawn-maintenance", "gutter-cleaning", "pressure-washing"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}
