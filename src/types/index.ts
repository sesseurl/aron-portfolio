export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  contributions: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
