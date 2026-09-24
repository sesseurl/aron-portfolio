import React from 'react';
import Icon from './Icon';
import { socialLinks } from '../data/portfolio';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="container-section">
      <div className="card p-8 md:p-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-3">Let's build something together</h2>
        <p className="text-secondary mb-8">
          I'm always open to discussing new opportunities, interesting projects, or how AI can
          accelerate software development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="mailto:aron.ribeiro.chaves@gmail.com"
            className="btn-primary"
          >
            <Icon name="mail" className="w-4 h-4" />
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/aron-chaves/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Icon name="linkedin" className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        <div className="flex items-center justify-center gap-6 pt-6 border-t border-border">
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
    </section>
  );
};

export default Contact;
