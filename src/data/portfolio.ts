import type { Experience, Project, SkillCategory, SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/sesseurl',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aron-chaves/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:aron.ribeiro.chaves@gmail.com',
    icon: 'mail',
  },
];

export const experience: Experience[] = [
  {
    company: 'F1RST Digital Services',
    role: 'Software Engineer',
    period: 'May 2025 – 2026',
    description:
      'Worked on enterprise banking software associated with Santander, focusing on backend development, internal APIs, API integrations, and feature development within a large-scale engineering environment.',
    technologies: ['Java', 'Spring', 'REST APIs', 'AI-Assisted Development'],
    highlights: [
      'Backend development for banking systems',
      'Internal API design and integration',
      'AI-assisted development workflows',
    ],
  },
  {
    company: 'Bradesco',
    role: 'Software Engineer',
    period: '2023 – 2024',
    description:
      'Developed microservices for Bradesco Investment Portal, building scalable backend services handling financial data and operations.',
    technologies: ['Java', 'Go', 'Spring', 'Kafka', 'MySQL'],
    highlights: [
      'Microservices architecture',
      'Event-driven systems with Kafka',
      'Financial data services',
    ],
  },
  {
    company: 'IBM',
    role: 'Software Engineer',
    period: '2021 – 2024',
    description:
      'Full-stack software engineering for major financial institutions, working across backend, frontend, and mobile applications in enterprise environments.',
    technologies: ['Java', 'Spring', 'Kafka', 'React', 'TypeScript', 'AWS', 'iOS'],
    highlights: [
      'Enterprise financial software',
      'Full-stack and mobile development',
      'AWS cloud infrastructure',
    ],
  },
  {
    company: 'Banco do Brasil',
    role: 'Software Engineer',
    period: '2021 – 2023',
    description:
      'Worked on a data platform for large-volume data visualization and storage, and an iOS investment application.',
    technologies: ['React', 'Go', 'AWS', 'Swift', 'Java'],
    highlights: [
      'Data platform for large volumes',
      'Cloud infrastructure on AWS',
      'iOS investment application',
    ],
  },
  {
    company: 'Sovereign Prime',
    role: 'Software Engineer / Project Manager',
    period: '2020 – 2021',
    description:
      'Developed a cross-platform blockchain application and coordinated project tasks, working closely with leadership on technical decisions and team facilitation.',
    technologies: ['TypeScript', 'Rust', 'React Native', 'Node.js'],
    highlights: [
      'Blockchain application development',
      'Project coordination',
      'Product-level decision making',
    ],
  },
  {
    company: 'Freelance Developer',
    role: 'Web Developer',
    period: '2016 – 2019',
    description:
      'Built websites and e-commerce projects for clients, gaining hands-on experience with React, JavaScript, and dynamic web applications.',
    technologies: ['React', 'JavaScript'],
    highlights: [
      'Client-facing web development',
      'E-commerce solutions',
      'Independent project delivery',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Enterprise Banking APIs',
    description:
      'Backend APIs and integrations for a large-scale banking environment, focusing on reliability and security.',
    stack: ['Java', 'Spring', 'REST', 'Microservices'],
    contributions: ['API development', 'Integration patterns', 'Feature delivery'],
  },
  {
    name: 'Investment Portal Microservices',
    description:
      'Scalable microservices for financial investment platforms, handling data persistence and event-driven communication.',
    stack: ['Java', 'Go', 'Kafka', 'MySQL'],
    contributions: ['Microservices', 'Event-driven architecture', 'Database design'],
  },
  {
    name: 'Financial Data Platform',
    description:
      'Platform for storing and visualizing large volumes of data, combining cloud infrastructure with full-stack development.',
    stack: ['React', 'Go', 'AWS'],
    contributions: ['Cloud architecture', 'Data visualization', 'Backend services'],
  },
  {
    name: 'iOS Investment Application',
    description: 'Native iOS application for investment management with focus on performance and user experience.',
    stack: ['Swift', 'iOS'],
    contributions: ['Mobile development', 'Performance optimization', 'UI improvements'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Java', 'Go', 'TypeScript', 'JavaScript', 'Swift', 'Rust', 'Python', 'SQL'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Angular', 'React Native', 'SwiftUI'],
  },
  {
    title: 'Backend',
    skills: ['Spring', 'Node.js', 'REST APIs', 'Microservices', 'Kafka'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL Databases', 'NoSQL Databases'],
  },
  {
    title: 'Cloud / DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Git', 'Azure DevOps'],
  },
  {
    title: 'Mobile',
    skills: ['iOS', 'Swift', 'SwiftUI', 'React Native'],
  },
  {
    title: 'AI / Dev Tools',
    skills: ['GitHub Copilot', 'Windsurf', 'Claude', 'Devin'],
  },
];

export const engineeringCapabilities = [
  'API Development & Integration',
  'Microservices Architecture',
  'Full-Stack Development',
  'Cloud Development (AWS)',
  'Enterprise Software Engineering',
  'Rapid Learning & Adaptation',
  'AI-Assisted Engineering',
  'Cross-functional Collaboration',
  'Technical Problem Solving',
  'Scalable Systems Design',
];

export const education = {
  institution: 'UNIBTA – Centro Universitário',
  degree: "Bachelor's Degree in Software Engineering",
  period: '2021 – 2025',
};
