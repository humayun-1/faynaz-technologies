// Case studies. These are ILLUSTRATIVE engagements — representative of the work we do,
// not named-client results. Replace with real, approved client stories as they land
// (keep the same shape and the hub/detail pages update automatically).

export interface CaseStudy {
  slug: string;
  sector: string;
  stat: string; // headline outcome we design toward (illustrative)
  statLabel: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: string;
  tech: string[];
  engagement: string;
  illustrative: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-operations-console",
    sector: "Fintech",
    stat: "1 console",
    statLabel: "replaced 4 manual tools",
    title: "An operations console that removes daily manual handoffs",
    summary: "Consolidating a fintech ops team's four disconnected tools into one console with automation.",
    challenge:
      "A fintech operations team was stitching together four separate tools by hand every day — slow, error-prone, and impossible to audit cleanly. Each handoff was a place for mistakes and lost time.",
    approach: [
      "Mapped the real workflow with the ops team before building anything",
      "Consolidated the four tools into a single, role-based console",
      "Automated the repetitive steps and added a clean audit trail",
      "Shipped in short cycles with QA and secure deployment on their cloud",
    ],
    outcome:
      "One console replaced four manual tools, daily handoffs were removed, and every action became auditable — the kind of operational lift we design these builds to deliver.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    engagement: "Managed service · ~8-week build",
    illustrative: true,
  },
  {
    slug: "saas-mvp-to-launch",
    sector: "SaaS",
    stat: "7 weeks",
    statLabel: "idea to launched MVP",
    title: "From idea to a launched SaaS MVP in weeks",
    summary: "Taking a founder's concept to a deployed, demo-ready product a funding round could stand on.",
    challenge:
      "A founder needed to validate a SaaS idea fast — a working product to show users and investors, not a slide deck — without hiring a full team first.",
    approach: [
      "Scoped a lean MVP around the single core value, cutting everything else",
      "Built with a senior full-stack engineer plus a fractional lead",
      "Set up auth, billing, and a clean dashboard from the start",
      "Deployed to the founder's cloud with CI/CD for fast iteration",
    ],
    outcome:
      "A deployed, demo-ready MVP the founder could put in front of users and investors — the outcome the Launch package is built to hit.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    engagement: "Launch package · ~7-week build",
    illustrative: true,
  },
  {
    slug: "ai-support-automation",
    sector: "AI automation",
    stat: "Tier-1",
    statLabel: "support auto-triaged",
    title: "AI triage that takes the repetitive support load off the team",
    summary: "An AI agent that reads, classifies, and drafts responses for common support requests.",
    challenge:
      "A growing product's support volume was scaling faster than headcount, and the team was spending its days on repetitive, low-complexity tickets instead of the hard ones.",
    approach: [
      "Started narrow: one high-volume ticket type, with a human in the loop",
      "Built an AI agent to classify, retrieve context, and draft replies",
      "Connected it to the existing support tools rather than replacing them",
      "Measured accuracy and widened autonomy as it proved out",
    ],
    outcome:
      "Common tickets get triaged and drafted automatically, freeing the team for complex cases — the type of leverage we build AI automation to create.",
    tech: ["Python", "LLM integration", "Vector DB", "REST APIs"],
    engagement: "Managed service · phased rollout",
    illustrative: true,
  },
];

export function relatedCases(currentSlug: string, limit = 2): CaseStudy[] {
  return caseStudies.filter((c) => c.slug !== currentSlug).slice(0, limit);
}
