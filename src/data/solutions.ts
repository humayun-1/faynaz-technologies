// pSEO engine #2 — {service} for {industry}. One entry -> one /solutions/{slug} page.
// Curated combinations (not full cartesian) so every page carries real, industry-specific value.

export interface Solution {
  slug: string;
  service: string;
  industry: string;
  h1: string;
  category: string;
  keyword: string;
  intro: string;
  pains: string[];
  deliverables: string[];
  faqs: { q: string; a: string }[];
  description: string;
}

export const solutions: Solution[] = [
  {
    slug: "devops-for-fintech",
    service: "DevOps",
    industry: "Fintech",
    h1: "DevOps for Fintech",
    category: "DevOps & cloud",
    keyword: "devops for fintech",
    intro:
      "Fintech runs on uptime, security, and compliance. Our DevOps engineers build the CI/CD, cloud, and reliability foundations that financial products depend on — so you ship fast without putting trust or transactions at risk.",
    pains: ["Downtime means lost money and lost trust", "Security and compliance demands (PCI-DSS, SOC 2)", "Unpredictable transaction spikes to scale for", "Slow, risky releases in a regulated environment"],
    deliverables: ["Hardened CI/CD with automated checks", "Secure, compliant cloud infrastructure as code", "High availability and disaster recovery", "Monitoring, alerting, and audit trails"],
    faqs: [
      { q: "Can you help us meet SOC 2 or PCI-DSS requirements?", a: "We build infrastructure and pipelines with those controls in mind — encryption, access control, audit logging, and infrastructure as code — and work alongside your compliance team or auditor." },
      { q: "How do you achieve zero-downtime deployments for a fintech app?", a: "With blue-green or canary deployments, automated rollbacks, and health checks, so releases ship without interrupting transactions." },
    ],
    description: "DevOps for fintech from a Dubai studio — secure, compliant CI/CD, cloud, and reliability for financial products. Dedicated team or managed service.",
  },
  {
    slug: "devops-for-saas",
    service: "DevOps",
    industry: "SaaS startups",
    h1: "DevOps for SaaS Startups",
    category: "DevOps & cloud",
    keyword: "devops for saas startups",
    intro:
      "SaaS startups need to ship fast without breaking production. We set up the CI/CD, cloud, and monitoring foundations that let a small team deploy confidently many times a day — and scale cleanly as users grow.",
    pains: ["Manual deploys that slow the team down", "No monitoring until something breaks", "Cloud costs creeping up unmanaged", "Scaling pains as the user base grows"],
    deliverables: ["CI/CD for fast, safe deploys", "Scalable cloud infrastructure as code", "Monitoring, alerting, and on-call setup", "Cost control and autoscaling"],
    faqs: [
      { q: "We're a small team — do we really need DevOps?", a: "Even small teams benefit: automated deploys and monitoring free your engineers to build product instead of firefighting, and they prevent expensive scaling problems later." },
      { q: "Can you set us up and then hand it over?", a: "Yes. We can deliver the setup as a fixed-scope engagement with documentation, or stay on as a dedicated retainer — your choice." },
    ],
    description: "DevOps for SaaS startups from a Dubai studio — CI/CD, scalable cloud, monitoring, and cost control so small teams ship confidently. Dedicated team or managed service.",
  },
  {
    slug: "ai-automation-for-saas",
    service: "AI automation",
    industry: "SaaS",
    h1: "AI Automation for SaaS",
    category: "AI automation",
    keyword: "ai automation for saas",
    intro:
      "SaaS teams win by shipping features and reducing churn — not doing manual ops. We automate the repetitive work (onboarding, support triage, billing ops) and add AI features that lift activation and retention.",
    pains: ["Support volume scales faster than headcount", "Manual onboarding slows time-to-value", "Churn from slow or generic experiences", "Ops work distracts engineers from the product"],
    deliverables: ["AI support triage and assistants", "Automated onboarding and lifecycle flows", "In-product AI features (search, summarize)", "Billing and operations automation"],
    faqs: [
      { q: "Can you add AI features to our existing SaaS product?", a: "Yes — most SaaS engagements add AI into an existing product, such as an in-app assistant, smart search, or automated support triage." },
      { q: "Will AI automation reduce our support costs?", a: "Typically yes. Automating triage and first-response for common tickets reduces load and speeds resolution, freeing your team for complex cases." },
    ],
    description: "AI automation for SaaS from a Dubai studio — support triage, onboarding, and in-product AI features that cut ops work and lift retention. Book a call.",
  },
  {
    slug: "cloud-migration-for-ecommerce",
    service: "Cloud migration",
    industry: "E-commerce",
    h1: "Cloud Migration for E-commerce",
    category: "DevOps & cloud",
    keyword: "cloud migration for ecommerce",
    intro:
      "E-commerce lives and dies on page speed and peak-season uptime. We migrate stores to scalable cloud infrastructure that stays fast under Black Friday load — and costs less the rest of the year.",
    pains: ["Site slows or crashes under traffic spikes", "Overpaying for always-on capacity", "Slow page speed hurting conversion and SEO", "Downtime during migration risks revenue"],
    deliverables: ["Zero-downtime cloud migration", "Autoscaling for peak events", "CDN and performance optimization", "Cost-optimized, right-sized infrastructure"],
    faqs: [
      { q: "Can you migrate our store without downtime?", a: "Yes — we migrate in stages with parallel environments and careful cutover planning, so customers never see an interruption." },
      { q: "Will migrating to the cloud speed up our store?", a: "Usually significantly — through autoscaling, CDN, caching, and right-sized infrastructure, which also improves conversion and SEO." },
    ],
    description: "Cloud migration for e-commerce from a Dubai studio — fast, autoscaling infrastructure that survives peak traffic and cuts cost. Dedicated team or managed service.",
  },
  {
    slug: "ai-automation-for-logistics",
    service: "AI automation",
    industry: "Logistics",
    h1: "AI Automation for Logistics",
    category: "AI automation",
    keyword: "ai automation for logistics",
    intro:
      "Logistics runs on coordination and paperwork. We automate the manual handoffs — order processing, tracking updates, document handling — and add AI to cut errors and delays across disconnected systems.",
    pains: ["Manual data entry across disconnected systems", "Delays from paperwork and handoffs", "Poor visibility into shipments and exceptions", "Errors that cascade into real cost"],
    deliverables: ["Order and document processing automation", "System integrations (ERP, WMS, carriers)", "Exception detection and alerting", "AI for document and data extraction"],
    faqs: [
      { q: "Can you automate our shipping documents?", a: "Yes — AI document extraction combined with rules-based routing turns manual paperwork into structured, automated flows." },
      { q: "Will automation connect our existing systems?", a: "Yes — most logistics automation is integration work, connecting ERP, WMS, and carrier systems into one clean flow." },
    ],
    description: "AI automation for logistics from a Dubai studio — order and document processing, system integration, and AI extraction to cut delays and errors. Book a call.",
  },
  {
    slug: "software-development-for-healthcare",
    service: "Software development",
    industry: "Healthcare",
    h1: "Software Development for Healthcare",
    category: "Full-stack",
    keyword: "software development for healthcare",
    intro:
      "Healthcare software must be secure, reliable, and privacy-first. We build web platforms, patient portals, and automations that respect patient data and fit real clinical and administrative workflows.",
    pains: ["Patient data privacy and compliance (HIPAA/GDPR)", "Legacy systems that don't talk to each other", "Manual, error-prone clinical and admin workflows", "Reliability requirements for care-critical systems"],
    deliverables: ["Secure patient portals and platforms", "Integrations (HL7/FHIR, EHR systems)", "Workflow and intake automation", "Privacy-first, auditable architecture"],
    faqs: [
      { q: "Do you build HIPAA or GDPR-compliant software?", a: "We build with privacy and compliance controls — encryption, access control, audit logging, and data minimization — aligned to your specific regulatory requirements." },
      { q: "Can you integrate with our EHR system?", a: "Yes, via standards such as HL7 and FHIR where supported, plus secure APIs for systems that expose them." },
    ],
    description: "Software development for healthcare from a Dubai studio — secure patient portals, EHR integration, and privacy-first platforms. Dedicated team or managed service.",
  },
];

export function relatedSolutions(currentSlug: string, limit = 3): Solution[] {
  return solutions.filter((s) => s.slug !== currentSlug).slice(0, limit);
}
