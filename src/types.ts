export interface EvidenceArtifact {
  title: string;
  caption: string;
  imageBg?: string;
  imageUrl?: string;
  type: string;
  codeSnippet?: string;
}

export interface Project {
  id: string;
  caseNo: string;
  title: string;
  subtitle: string;
  summary: string;
  category: 'Web App' | 'E-Commerce' | 'AI & ML' | 'Mobile' | 'Enterprise';
  year: string;
  exhibitLabel?: string;
  evidenceCaption?: string;
  timeline?: string;
  investigationSummaryParagraphs?: string[];
  problem: string;
  solution: string;
  constraints?: string[];
  researchFindings?: string[];
  architecture: string[];
  engineeringDecisions?: { decision: string; justification: string }[];
  accessibilityNotes?: string;
  performanceOptimizations?: string[];
  lessonsLearned?: string;
  evidenceGallery?: EvidenceArtifact[];
  context?: string;
  research?: string;
  technologyChoices?: { tech: string; reason: string }[];
  techStack: string[];
  challenges: string[];
  impact: string;
  metrics?: { label: string; value: string }[];
  liveDemoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  imageBg: string;
  imageUrl?: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Mobile' | 'Backend & DB' | 'Design & Motion';
  level: string;
  description: string;
  featured: boolean;
}

export interface JourneyMilestone {
  year: string;
  headline: string;
  role: string;
  organization: string;
  description: string;
  highlights: string[];
}

export interface EditorialArticle {
  id: string;
  issueNo: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  content: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  date: string;
}
