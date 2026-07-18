// Core service pillars — one entry generates one dedicated /services/{slug} page.
// These target high-intent commercial keywords each pillar deserves its own page for.

export interface ServicePillar {
  slug: string;
  name: string;
  h1: string;
  keyword: string;
  intro: string;
  deliverables: string[];
  tech: string[];
  faqs: { q: string; a: string }[];
  description: string;
}

export const servicePillars: ServicePillar[] = [
  {
    slug: "full-stack-development",
    name: "Full-stack development",
    h1: "Full-Stack Development Services",
    keyword: "custom software development company",
    intro:
      "We design and build web apps, SaaS platforms, MVPs, and APIs end to end — front-end, back-end, and everything between — with senior engineers who ship clean, maintainable code you own from day one.",
    deliverables: [
      "Web apps & SaaS platforms",
      "MVPs and product builds",
      "APIs & third-party integrations",
      "Performance & Core Web Vitals",
      "Ongoing feature delivery & maintenance",
    ],
    tech: ["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL"],
    faqs: [
      { q: "What kind of software do you build?", a: "Web applications, SaaS platforms, internal tools, MVPs, and APIs — for startups, SMEs, and enterprises across the UK, Europe, Australia, Singapore, and the US." },
      { q: "Can you build our MVP from scratch?", a: "Yes. A senior team can take an MVP from idea to a deployed, demo-ready product, and you own the codebase and infrastructure throughout." },
      { q: "Do we own the code and IP?", a: "Entirely — the repository, cloud accounts, and IP are yours from day one. We build on your accounts, so there is no lock-in." },
    ],
    description: "Full-stack development services from a Dubai studio — web apps, SaaS, MVPs, and APIs. Dedicated team or managed service. Book a call.",
  },
  {
    slug: "devops",
    name: "DevOps & cloud",
    h1: "DevOps & Cloud Consulting Services",
    keyword: "devops consulting services",
    intro:
      "We build the CI/CD, cloud, and reliability foundations that let your team ship faster and break less — from pipelines and Kubernetes to cloud migration and cost control, delivered as a dedicated hire or a fixed-scope engagement.",
    deliverables: [
      "CI/CD pipelines",
      "Kubernetes & containers",
      "Cloud migration (AWS / GCP / Azure)",
      "Infrastructure as code",
      "Monitoring, reliability & cost optimization",
    ],
    tech: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    faqs: [
      { q: "What does a DevOps engagement include?", a: "Typically CI/CD setup, cloud infrastructure as code, containers and Kubernetes, monitoring, and reliability — scoped to what your team needs most first." },
      { q: "Can you work in our existing cloud?", a: "Yes. We work inside your AWS, GCP, or Azure accounts and your existing tooling, so you keep full ownership and access." },
      { q: "Can you reduce our cloud costs?", a: "Often — a common first engagement is a cost and architecture review that finds savings through right-sizing, reserved capacity, and removing waste." },
    ],
    description: "DevOps & cloud consulting from a Dubai studio — CI/CD, Kubernetes, cloud migration, and reliability. Dedicated team or managed service. Book a call.",
  },
  {
    slug: "ai-automation",
    name: "AI automation",
    h1: "AI Automation Services",
    keyword: "ai automation agency",
    intro:
      "We remove repetitive manual work with practical AI — workflow automation, AI agents, and LLM integration that plug into your existing systems and actually do the job, not just demo well.",
    deliverables: [
      "Workflow & process automation",
      "AI agents & assistants",
      "LLM integration (Claude, GPT)",
      "Document & data extraction",
      "Business process automation",
    ],
    tech: ["OpenAI", "Anthropic Claude", "Python", "Vector databases", "REST APIs"],
    faqs: [
      { q: "Can you add AI into our existing product or tools?", a: "Yes — most engagements add AI into what you already run: a support assistant, smart search, document processing, or workflow automation, connected to your current systems." },
      { q: "How do you keep AI reliable?", a: "We start narrow on one high-value task, keep a human in the loop, measure accuracy, and widen autonomy only as it proves out — with clear guardrails and audit trails." },
      { q: "What does an AI automation project cost?", a: "A simple workflow automation is often US$2k–10k; custom AI agents and LLM integration typically range from US$10k–60k+, depending on integrations and accuracy needs." },
    ],
    description: "AI automation services from a Dubai studio — workflow automation, AI agents, and LLM integration that cut manual work. Book a call.",
  },
];

export function otherServices(currentSlug: string) {
  return servicePillars.filter((s) => s.slug !== currentSlug);
}
