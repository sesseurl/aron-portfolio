import React, { useState } from 'react';
import { experience } from '../data/portfolio';
import type { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceType; isLeft: boolean }> = ({ item, isLeft }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`relative flex ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block md:w-1/2" />
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border">
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-surface border-2 border-accent" />
      </div>
      <div className={`ml-10 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <div className="card p-5 cursor-pointer" onClick={() => setExpanded(!expanded)}>
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="text-base font-semibold text-primary">{item.role}</h3>
              <p className="text-accent text-sm">{item.company}</p>
            </div>
            <span className="text-xs text-muted whitespace-nowrap">{item.period}</span>
          </div>
          <p className="text-sm text-secondary mb-3">{item.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-0.5 rounded bg-surface text-muted border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
          {expanded && (
            <ul className="mt-3 pt-3 border-t border-border space-y-1">
              {item.highlights.map((h) => (
                <li key={h} className="text-xs text-secondary flex items-start gap-2">
                  <span className="text-accent mt-0.5">→</span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="container-section">
      <div className="text-center mb-16">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle mx-auto">Professional journey through software engineering</p>
      </div>
      <div className="space-y-6">
        {experience.map((item, i) => (
          <ExperienceCard key={`${item.company}-${item.period}`} item={item} isLeft={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
