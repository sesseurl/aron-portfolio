import React from 'react';
import { skillCategories, engineeringCapabilities } from '../data/portfolio';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="container-section">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I've worked with professionally</p>
        </div>
        <div className="space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg bg-surface-elevated text-secondary border border-border hover:border-accent/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-6 border-t border-border">
            <h3 className="text-xs uppercase tracking-wider text-muted mb-3 font-medium">
              Engineering Capabilities
            </h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {engineeringCapabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-sm text-secondary flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-accent" />
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
