// Core service pillars — one entry generates one dedicated /services/{slug} page.
// These target high-intent commercial keywords each pillar deserves its own page for.

export interface ServicePillar {
  slug: string;
  name: string;
  h1: string;
  keyword: string;
  intro: string;
  overview: string;
  deliverables: string[];
  useCases: string[];
  whenToHire: string;
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
    overview:
      "Full-stack development means one team owns your product from end to end — the interface your users touch, the back-end and database behind it, and the deployment pipeline that ships it. Instead of coordinating separate front-end and back-end vendors and losing time between hand-offs, you work with senior engineers who build cohesive, maintainable software and move faster because nothing falls through the gaps. We work as a dedicated team embedded with you, or as a fixed-scope managed build — and you keep the code, the cloud accounts, and the IP throughout.",
    deliverables: [
      "Web apps & SaaS platforms",
      "MVPs and product builds",
      "APIs & third-party integrations",
      "Performance & Core Web Vitals",
      "Ongoing feature delivery & maintenance",
    ],
    useCases: [
      "Launching a new SaaS product or MVP",
      "Rebuilding a slow or dated web application",
      "Adding a customer portal or admin dashboard",
      "Building an internal tool to replace spreadsheets",
      "Exposing a public or partner API",
      "Modernising a legacy system without a full rewrite",
    ],
    whenToHire:
      "You need full-stack development when you're building or rebuilding a web product and want one accountable team rather than stitching specialists together. It's the right fit for founders shipping an MVP, teams modernising a legacy app, and businesses turning a manual process into real software. If speed, code quality, and clear ownership matter, a senior full-stack team is usually the most direct path.",
    tech: ["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL"],
    faqs: [
      { q: "What kind of software do you build?", a: "Web applications, SaaS platforms, internal tools, MVPs, and APIs — for startups, SMEs, and enterprises across the UK, Europe, Australia, Singapore, and the US." },
      { q: "How long does it take to build a web app?", a: "It depends on scope, but a focused MVP is typically 6–10 weeks and a full product build runs a few months. You get a fixed timeline after a short discovery." },
      { q: "Can you take over an existing project?", a: "Yes — we regularly pick up and improve existing codebases, starting with a review to understand the current state before we change anything." },
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
    overview:
      "DevOps and cloud engineering is the work that lets a team ship software quickly and reliably: automated pipelines that build, test, and deploy code, cloud infrastructure defined as version-controlled code, and monitoring that catches problems before customers do. Done well, it turns releases from risky, manual events into routine, safe ones — and keeps your cloud spend under control as you grow. Our engineers work inside your own AWS, GCP, or Azure accounts, so you keep full ownership and visibility of everything we set up.",
    deliverables: [
      "CI/CD pipelines",
      "Kubernetes & containers",
      "Cloud migration (AWS / GCP / Azure)",
      "Infrastructure as code",
      "Monitoring, reliability & cost optimization",
    ],
    useCases: [
      "Setting up CI/CD from scratch",
      "Migrating to AWS, GCP, or Azure",
      "Moving workloads to Kubernetes",
      "Reducing a rising cloud bill",
      "Improving uptime and incident recovery",
      "Adding monitoring, alerting, and audit trails",
    ],
    whenToHire:
      "You need DevOps help when deployments are slow or scary, environments drift, outages take too long to recover from, or your cloud bill is climbing without a clear reason. Bringing in experienced DevOps engineers — as dedicated hires or a fixed-scope engagement — is usually the fastest way to get pipelines, infrastructure, and reliability under control so your product team can focus on shipping features.",
    tech: ["AWS", "GCP", "Azure", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
    faqs: [
      { q: "What does a DevOps engagement include?", a: "Typically CI/CD setup, cloud infrastructure as code, containers and Kubernetes, monitoring, and reliability — scoped to what your team needs most first." },
      { q: "What is the difference between DevOps and cloud engineering?", a: "Cloud engineering focuses on building and running infrastructure on a provider like AWS; DevOps is the broader practice of automating the whole path from code to production. In practice they overlap heavily, and our engineers cover both." },
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
    overview:
      "AI automation combines workflow automation with practical AI to take repetitive, judgement-light work off your team. That can mean connecting your tools so data flows automatically, or building AI agents that read, decide, and act — triaging support tickets, processing documents, or answering questions from your own data — always with the guardrails that keep them reliable. We focus on automations that pay for themselves: start with one high-volume process, prove the time saved, then expand. Everything is built into your systems and accounts, so you own it.",
    deliverables: [
      "Workflow & process automation",
      "AI agents & assistants",
      "LLM integration (Claude, GPT)",
      "Document & data extraction",
      "Business process automation",
    ],
    useCases: [
      "Automating a manual, repetitive workflow",
      "Adding an AI assistant to your product",
      "Triaging and drafting support responses",
      "Extracting data from documents at scale",
      "Connecting disconnected tools and systems",
      "Answering internal questions from your own docs",
    ],
    whenToHire:
      "You need AI automation when a process eats hours of your team's week, when support or operations can't scale with headcount, or when you want AI features in your product but don't have the in-house expertise to build them reliably. The right first project is narrow and high-volume — we keep a human in the loop, measure accuracy, and widen autonomy only as it proves out.",
    tech: ["OpenAI", "Anthropic Claude", "Python", "Vector databases", "REST APIs"],
    faqs: [
      { q: "Can you add AI into our existing product or tools?", a: "Yes — most engagements add AI into what you already run: a support assistant, smart search, document processing, or workflow automation, connected to your current systems." },
      { q: "Which AI models do you use?", a: "We use current leading models such as Anthropic's Claude and OpenAI's GPT, chosen per use case for quality, latency, and cost — and we can run within your own accounts." },
      { q: "Is AI automation reliable enough for real work?", a: "When it's scoped well, yes. We start narrow, keep a human in the loop at first, add validation and audit trails, and widen autonomy only once accuracy is proven." },
      { q: "What does an AI automation project cost?", a: "A simple workflow automation is often US$2k–10k; custom AI agents and LLM integration typically range from US$10k–60k+, depending on integrations and accuracy needs." },
    ],
    description: "AI automation services from a Dubai studio — workflow automation, AI agents, and LLM integration that cut manual work. Book a call.",
  },
  {
    slug: "quality-assurance",
    name: "QA & release",
    h1: "QA & Software Testing Services",
    keyword: "software testing services",
    intro:
      "We add QA and release discipline so your software ships on schedule and holds up in production — automated testing, manual QA, and release checks, as a dedicated hire or a fixed-scope engagement.",
    overview:
      "Quality assurance and release engineering is what keeps software working as it grows — automated tests that catch regressions before users do, manual and exploratory testing that finds what automation misses, and a release process that ships changes safely. It's the difference between confident, frequent releases and slow, anxious ones. We can stand QA up from scratch, embed testers in your team, or run release management for an existing product, and we wire everything into your CI/CD so quality is checked automatically on every change.",
    deliverables: [
      "Automated testing (unit, integration, end-to-end)",
      "Manual & exploratory QA",
      "CI/CD test integration",
      "Release management & pre-launch checks",
      "Bug triage & regression suites",
    ],
    useCases: [
      "Setting up automated testing from scratch",
      "Adding QA to a fast-moving product team",
      "Stabilising a buggy or fragile product",
      "Building a regression test suite",
      "Integrating tests into your CI/CD pipeline",
      "Managing releases and pre-launch checks",
    ],
    whenToHire:
      "You need QA when bugs keep reaching production, releases feel risky, or your team is moving too fast to test properly. Dedicated QA — as engineers embedded in your team or a fixed-scope engagement — gives you the coverage to ship often without breaking things, and the automated safety net that lets your developers move quickly with confidence.",
    tech: ["Playwright", "Cypress", "Jest", "Selenium", "GitHub Actions"],
    faqs: [
      { q: "Do you provide QA as a standalone service?", a: "Yes — we can run QA and release for an existing product, or embed QA engineers in your team, without you needing us for the full build." },
      { q: "What kinds of testing do you do?", a: "Automated unit, integration, and end-to-end tests, plus manual and exploratory QA, wired into your CI/CD so every release is checked before it ships." },
      { q: "Can you set up automated testing from scratch?", a: "Yes — we build the test suites, integrate them into your pipeline, and hand over documentation so your team can maintain them." },
      { q: "How soon do results show?", a: "A regression and smoke-test suite on your most critical flows can be in place within a few weeks, catching the bugs that cost the most first." },
    ],
    description: "QA & software testing services from a Dubai studio — automated testing, manual QA, and release discipline. Dedicated team or managed service.",
  },
];

export function otherServices(currentSlug: string) {
  return servicePillars.filter((s) => s.slug !== currentSlug);
}
