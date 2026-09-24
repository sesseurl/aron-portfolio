import React from 'react';
import Icon from './Icon';
import { socialLinks } from '../data/portfolio';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface to-surface-elevated opacity-60" />
      <div className="container-section relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted">Available for opportunities</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Software Engineer
            <br />
            <span className="text-muted">building reliable systems</span>
            <br />
            <span className="text-accent">with modern tools</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl mb-8 leading-relaxed">
            I'm Aron Chaves, a Software Engineer from São Paulo, Brazil with experience in financial
            technology, backend systems, APIs, full-stack development and cloud applications. I
            enjoy solving complex problems, learning new technologies and using AI to make software
            development faster without sacrificing engineering quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4 mt-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted hover:text-accent transition-colors"
              >
                <Icon name={link.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
          <a href="#about" className="text-muted hover:text-accent transition-colors animate-bounce">
            <Icon name="chevron-down" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
