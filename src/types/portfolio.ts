export type ProjectCategory = 'All' | 'Generative AI & Agents' | 'Computer Vision & ML' | 'Full-Stack & Systems';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface TechStackGroup {
  category: string;
  items: string[];
}

export interface TechnicalDecision {
  title: string;
  rationale: string;
  tradeoff: string;
}

export interface ArchitectureStep {
  step: number;
  title: string;
  desc: string;
  type: 'client' | 'api' | 'ai' | 'db';
}

export interface RealVsSimulated {
  real: string[];
  simulated: string[];
  limitations: string[];
}

export interface CodeSnippet {
  language: string;
  filename: string;
  code: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Generative AI & Agents' | 'Computer Vision & ML' | 'Full-Stack & Systems';
  featured: boolean;
  role: string;
  teamSize?: number;
  summary: string;
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
  keyMetrics: ProjectMetric[];
  whatProblemItSolves: string;
  whatIBuilt: string[];
  myRoleContribution: string;
  actualTechStack: TechStackGroup[];
  technicalDecisions: TechnicalDecision[];
  architectureFlow: ArchitectureStep[];
  realVsSimulated: RealVsSimulated;
  codeSnippet?: CodeSnippet;
}

export interface SkillItem {
  name: string;
  level: 'Core' | 'Applied' | 'Proficient';
  featured?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  code: string;
  status: string;
  badge: string;
  topics: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Role' | 'Hackathon Award' | 'Hackathon Participant';
  description: string;
  highlights: string[];
  badge?: string;
}

export interface AdditionalRepo {
  name: string;
  language: string;
  description: string;
  githubUrl: string;
  stars?: number;
}
