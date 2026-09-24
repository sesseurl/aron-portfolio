import React from 'react';
import Icon from './Icon';
import { projects } from '../data/portfolio';
import type { Project as ProjectType } from '../types';

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-primary">{project.name}</h3>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-muted hover:text-accent transition-colors"
          >
            <Icon name="github" className="w-4 h-4" />
          </a>
        )}
      </div>
      <p className="text-sm text-secondary mb-4 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5 rounded bg-surface text-muted border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="pt-3 border-t border-border">
        <ul className="space-y-1">
          {project.contributions.map((c) => (
            <li key={c} className="text-xs text-muted flex items-start gap-2">
              <span className="text-accent mt-0.5">→</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
      {project.demoUrl && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-accent hover:text-accent-hover flex items-center gap-1 mt-3 transition-colors"
        >
          View Demo <Icon name="external-link" className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container-section">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-10">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Professional contributions and work</p>
        </div>
        <div className="text-sm text-secondary leading-relaxed">
          <p>
            A selection of professional projects and contributions. Each represents real-world
            software engineering work within financial and enterprise environments.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
