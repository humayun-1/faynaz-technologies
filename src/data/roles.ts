// pSEO engine data, one entry generates one /hire/{slug} page.
// Each role has distinct skills/deliverables/FAQs so pages are genuinely useful (not thin).

export interface Role {
  slug: string;
  role: string; // plural noun, e.g. "DevOps engineers"
  h1: string; // e.g. "Hire DevOps Engineers"
  category: string;
  keyword: string;
  intro: string;
  skills: string[];
  builds: string[];
  faqs: { q: string; a: string }[];
  description: string;
}

export const roles: Role[] = [
  {
    slug: "devops-engineers",
    role: "DevOps engineers",
    h1: "Hire DevOps Engineers",
    category: "DevOps & cloud",
    keyword: "hire devops engineers",
    intro:
      "Hire senior DevOps engineers to automate your delivery pipeline, tame your cloud infrastructure, and keep production reliable. They join your team on a monthly retainer, or deliver a fixed-scope engagement, with real timezone overlap from Dubai.",
    skills: ["CI/CD (GitHub Actions, GitLab, Jenkins)", "Kubernetes & Docker", "Terraform & infrastructure as code", "AWS, GCP & Azure", "Monitoring & observability (Prometheus, Grafana)"],
    builds: ["Automated CI/CD pipelines", "Kubernetes & container platforms", "Infrastructure as code", "Reliability & incident response"],
    faqs: [
      { q: "How much does it cost to hire a DevOps engineer?", a: "A senior DevOps engineer through an offshore studio typically ranges from about US$4,000–US$9,000 per month, depending on seniority and cloud stack." },
      { q: "Can a DevOps engineer work with our existing cloud setup?", a: "Yes. Our engineers work inside your AWS, GCP, or Azure accounts and your existing tooling, you keep full ownership and access." },
    ],
    description: "Hire senior DevOps engineers from a Dubai studio, CI/CD, Kubernetes, cloud, and IaC. Dedicated team or managed service, with real timezone overlap. Book a call.",
  },
  {
    slug: "react-developers",
    role: "React developers",
    h1: "Hire React Developers",
    category: "Full-stack",
    keyword: "hire react developers",
    intro:
      "Hire senior React developers to build fast, modern web interfaces and single-page apps. They join your team as dedicated engineers, or deliver a fixed-scope front-end build, senior-only, with clean, maintainable code.",
    skills: ["React & Next.js", "TypeScript", "State management (Redux, Zustand)", "REST & GraphQL APIs", "Testing (Jest, Playwright)"],
    builds: ["SPAs & dashboards", "Next.js websites & apps", "Component libraries & design systems", "API-driven front-ends"],
    faqs: [
      { q: "Can your React developers work with our existing codebase?", a: "Yes. They join your repository and follow your conventions, or start clean if you prefer, either way you own all the code." },
      { q: "Do your React developers also do Next.js?", a: "Yes. Our React engineers are fluent in Next.js for server-rendered and statically generated apps, which is often the better choice for SEO and performance." },
    ],
    description: "Hire senior React & Next.js developers from a Dubai studio. Dedicated team or fixed-scope build, clean, maintainable front-ends. Book a call.",
  },
  {
    slug: "nodejs-developers",
    role: "Node.js developers",
    h1: "Hire Node.js Developers",
    category: "Full-stack",
    keyword: "hire node js developers",
    intro:
      "Hire senior Node.js developers to build scalable back-ends, APIs, and real-time services. Bring them onto your team as dedicated engineers, or hand us a fixed-scope back-end build.",
    skills: ["Node.js & Express/NestJS", "TypeScript", "REST & GraphQL APIs", "PostgreSQL & MongoDB", "Microservices & message queues"],
    builds: ["Backend APIs", "Real-time services (WebSockets)", "Microservices", "Third-party integrations"],
    faqs: [
      { q: "Can Node.js developers build our entire backend?", a: "Yes, from database design and APIs to authentication, integrations, and deployment. They can also pair with your existing back-end team." },
      { q: "Do you use TypeScript for Node.js?", a: "By default, yes. TypeScript makes Node back-ends more reliable and easier to maintain, though we adapt to your stack if you prefer plain JavaScript." },
    ],
    description: "Hire senior Node.js developers from a Dubai studio, APIs, real-time services, and microservices. Dedicated team or managed service. Book a call.",
  },
  {
    slug: "python-developers",
    role: "Python developers",
    h1: "Hire Python Developers",
    category: "Full-stack",
    keyword: "hire python developers",
    intro:
      "Hire senior Python developers for back-ends, APIs, data work, and automation. They plug into your team on a retainer, or deliver a defined build end-to-end.",
    skills: ["Python (Django, FastAPI, Flask)", "REST APIs", "Data pipelines & scripting", "PostgreSQL", "Async & task queues (Celery)"],
    builds: ["Backends & APIs", "Data & automation tooling", "ML-adjacent services", "System integrations"],
    faqs: [
      { q: "Can Python developers help with data and automation, not just web?", a: "Yes. Our Python engineers build APIs and web back-ends as well as data pipelines, scripts, and automation, often the bridge into AI and machine-learning work." },
      { q: "Which Python frameworks do you use?", a: "Most often Django and FastAPI, chosen to fit the project, Django for full-featured apps, FastAPI for lightweight, high-performance APIs." },
    ],
    description: "Hire senior Python developers from a Dubai studio, Django, FastAPI, APIs, data, and automation. Dedicated team or managed service. Book a call.",
  },
  {
    slug: "full-stack-developers",
    role: "full-stack developers",
    h1: "Hire Full-Stack Developers",
    category: "Full-stack",
    keyword: "hire full stack developers",
    intro:
      "Hire senior full-stack developers who can own a feature from database to interface. Ideal for startups and lean teams that need one capable engineer to ship end-to-end, as a dedicated hire or a managed build.",
    skills: ["React/Next.js front-end", "Node.js or Python back-end", "TypeScript", "SQL & NoSQL databases", "Cloud deployment & CI/CD"],
    builds: ["End-to-end web apps", "SaaS platforms", "MVPs", "Full features (UI + API + data)"],
    faqs: [
      { q: "When should I hire a full-stack developer instead of specialists?", a: "Full-stack developers are ideal for MVPs, startups, and small teams where one senior engineer shipping end-to-end is faster and cheaper than coordinating separate front-end and back-end hires." },
      { q: "Can a full-stack developer build my MVP from scratch?", a: "Yes. A senior full-stack engineer can take an MVP from idea to a deployed product, and you own the codebase and infrastructure throughout." },
    ],
    description: "Hire senior full-stack developers from a Dubai studio, React, Node/Python, and cloud. Ship MVPs and SaaS end-to-end. Dedicated team or managed service.",
  },
  {
    slug: "aws-cloud-engineers",
    role: "AWS cloud engineers",
    h1: "Hire AWS Cloud Engineers",
    category: "DevOps & cloud",
    keyword: "hire aws cloud engineers",
    intro:
      "Hire senior AWS cloud engineers to architect, migrate, and optimize your infrastructure on Amazon Web Services. They work directly in your AWS account as a dedicated hire or a fixed-scope engagement.",
    skills: ["AWS core (EC2, S3, RDS, Lambda)", "Infrastructure as code (Terraform, CDK)", "Serverless architecture", "Networking & security (VPC, IAM)", "Cost optimization"],
    builds: ["Cloud architecture", "Migrations to AWS", "Serverless applications", "Well-Architected reviews"],
    faqs: [
      { q: "Can you reduce our AWS bill?", a: "Often, yes. A common first engagement is a cost and architecture review that finds savings through right-sizing, reserved capacity, and removing waste, frequently paying for itself." },
      { q: "Do you build with infrastructure as code?", a: "Yes. We define AWS infrastructure in Terraform or AWS CDK so it is version-controlled, repeatable, and owned entirely by you." },
    ],
    description: "Hire senior AWS cloud engineers from a Dubai studio, architecture, migration, serverless, and cost optimization. Dedicated team or managed service.",
  },
  {
    slug: "ai-ml-engineers",
    role: "AI & ML engineers",
    h1: "Hire AI & ML Engineers",
    category: "AI automation",
    keyword: "hire ai ml engineers",
    intro:
      "Hire senior AI and machine-learning engineers to build practical AI features, assistants, RAG systems, and LLM integrations that do real work. Available as a dedicated hire or a defined build.",
    skills: ["LLM integration (OpenAI, Anthropic)", "RAG & vector databases", "Python & PyTorch", "MLOps & deployment", "Prompt & AI agent design"],
    builds: ["AI features & assistants", "Retrieval-augmented (RAG) systems", "Model & API integration", "AI-driven automation"],
    faqs: [
      { q: "Can you integrate AI into our existing product?", a: "Yes. Most engagements add AI features to an existing product, a support assistant, document search, or automation, rather than building a model from scratch." },
      { q: "Do you build with the latest LLMs?", a: "Yes. We integrate current models such as Anthropic's Claude and OpenAI's GPT, choosing per use case for quality, latency, and cost." },
    ],
    description: "Hire senior AI & ML engineers from a Dubai studio, LLM integration, RAG, and AI agents that do real work. Dedicated team or managed service. Book a call.",
  },
  {
    slug: "kubernetes-engineers",
    role: "Kubernetes engineers",
    h1: "Hire Kubernetes Engineers",
    category: "DevOps & cloud",
    keyword: "hire kubernetes engineers",
    intro:
      "Hire senior Kubernetes engineers to run containerised workloads reliably at scale. They set up, migrate, and operate production clusters as a dedicated hire or a fixed-scope engagement.",
    skills: ["Kubernetes administration", "Helm & operators", "Service mesh (Istio, Linkerd)", "CI/CD to Kubernetes", "Autoscaling & observability"],
    builds: ["Production Kubernetes clusters", "Migrations to Kubernetes", "Helm charts & GitOps", "Scaling & reliability setups"],
    faqs: [
      { q: "Should we move to Kubernetes?", a: "Not always, Kubernetes is powerful but adds operational complexity. Our engineers will tell you honestly whether it fits your scale, or whether a simpler platform serves you better." },
      { q: "Can you manage Kubernetes on any cloud?", a: "Yes, EKS on AWS, GKE on Google Cloud, AKS on Azure, or self-managed clusters, all defined as code and owned by you." },
    ],
    description: "Hire senior Kubernetes engineers from a Dubai studio, production clusters, migrations, Helm, and reliability. Dedicated team or managed service. Book a call.",
  },
];

export function relatedRoles(currentSlug: string, limit = 4): Role[] {
  return roles.filter((r) => r.slug !== currentSlug).slice(0, limit);
}
