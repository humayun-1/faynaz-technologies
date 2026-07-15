// Single source of truth for /insights guides.
// The hub page, RSS feed, and RelatedGuides internal-linking all read from here —
// add one entry and every surface updates automatically.

export interface Guide {
  href: string;
  tag: "Cost guide" | "Comparison" | "Glossary" | "How-to";
  heading: string;
  blurb: string;
  description: string;
  published: string; // ISO date
}

export const guides: Guide[] = [
  {
    href: "/insights/cost-to-hire-a-developer",
    tag: "Cost guide",
    heading: "How much does it cost to hire a developer in 2026?",
    blurb: "Rates by engagement model and region, and the best-value way to hire senior engineers.",
    description:
      "A clear 2026 breakdown of what it costs to hire a software developer — by engagement model and region, with typical rate ranges.",
    published: "2026-07-16",
  },
  {
    href: "/insights/ai-automation-cost",
    tag: "Cost guide",
    heading: "How much does AI automation cost in 2026?",
    blurb: "From simple workflow automations to custom AI agents — typical price ranges and ROI.",
    description:
      "What AI automation costs in 2026 — from simple workflow automations to custom AI agents and LLM integrations, plus the factors that move the price.",
    published: "2026-07-16",
  },
  {
    href: "/insights/offshore-vs-nearshore-development",
    tag: "Comparison",
    heading: "Offshore vs nearshore software development",
    blurb: "Cost, timezone overlap, and quality compared — and a simple rule for choosing.",
    description:
      "Offshore vs nearshore development compared — cost, timezone overlap, communication, and quality — plus a simple rule for choosing in 2026.",
    published: "2026-07-16",
  },
  {
    href: "/insights/staff-augmentation-vs-managed-services",
    tag: "Comparison",
    heading: "Staff augmentation vs managed services",
    blurb: "Who manages the work, who owns the outcome, and which model fits your project.",
    description:
      "Staff augmentation vs managed services compared — who manages the work, who owns the outcome, cost, and control — plus a simple rule for choosing.",
    published: "2026-07-16",
  },
  {
    href: "/insights/what-is-devops",
    tag: "Glossary",
    heading: "What is DevOps?",
    blurb: "DevOps explained in plain terms — the core practices, the benefits, and when you need it.",
    description:
      "DevOps explained in plain terms: what it is, the core practices (CI/CD, IaC, monitoring), the business benefits, and when your team needs it.",
    published: "2026-07-16",
  },
];

/** Return up to `limit` guides other than `currentHref` (for internal linking). */
export function relatedGuides(currentHref: string, limit = 3): Guide[] {
  return guides.filter((g) => g.href !== currentHref).slice(0, limit);
}
