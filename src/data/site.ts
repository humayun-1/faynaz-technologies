export const site = {
  name: "Faynaz Technologies",
  legalName: "Faynaz Technologies",
  // Canonical production domain (used for SEO canonical URLs, sitemap, JSON-LD)
  url: "https://faynaztech.com",
  // Search-intent-tuned defaults (targets: hire developers, DevOps, AI automation, full-stack)
  title:
    "Faynaz Technologies — Hire DevOps, AI Automation & Full-Stack Engineers",
  description:
    "Dubai-based software studio. Hire senior DevOps, AI automation, and full-stack engineers as a dedicated team or a managed service. Book a discovery call.",
  tagline: "Software, DevOps & AI automation — shipped and run for you.",
  ogImage: "/assets/img/favicon.png",
  logo: "/assets/img/favicon.png",
  email: "contact@faynaztech.com",
  phoneUae: "+971 568718307",
  phonePakistan: "+92 3222333170",
  address: {
    street: "Cluster X, Jumeirah Bay X1 Tower, Jumeirah Lake Towers",
    city: "Dubai",
    region: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
  },
  // Markets we target (GEO/SEO entity signal)
  areaServed: [
    "United Kingdom", "Australia", "Netherlands", "Sweden", "Denmark",
    "Norway", "Singapore", "United States", "Canada", "United Arab Emirates",
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/faynaz-technologies/",
    clutch: "https://clutch.co/profile/faynaz-technologies",
  },
  // Every external profile that references the brand strengthens the entity for SEO + GEO
  sameAs: [
    "https://www.linkedin.com/company/faynaz-technologies/",
    "https://clutch.co/profile/faynaz-technologies",
  ],
};

export type Site = typeof site;
