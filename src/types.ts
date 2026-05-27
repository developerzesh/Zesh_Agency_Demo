export interface Solution {
  id: string;
  title: string;
  subheading: string;
  description: string;
  features: string[];
  link: string;
  detailedOverview?: string;
  scope?: { title: string; description: string }[];
  roadmap?: { period: string; task: string; details: string }[];
  expectedOutcomes?: string;
  category: "search" | "engineering" | "specialty" | "consulting";
}

export interface Industry {
  id: string;
  name: string;
  title: string;
  subheading: string;
  description: string;
  challenges: string[];
  opportunities: string;
  roadmap: { period: string; task: string; details: string }[];
  metrics: {
    traffic: string;
    pipeline: string;
    rankings: string;
  };
}

export interface CaseStudy {
  id: string;
  title: string;
  clientContext: string;
  problem: string;
  whatWasBroken: string;
  strategicShift: string;
  execution: string[];
  outcomes: string[];
  keyInsight: string;
}

export interface Resource {
  id: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  content: string;
}

export interface JobRole {
  id: string;
  title: string;
  description: string;
  autonomyLevel: string;
}

export type ViewType =
  | "home"
  | "about"
  | "solutions"
  | "industries"
  | "insights"
  | "careers"
  | "contact"
  | "solution-detail"
  | "industry-detail";
