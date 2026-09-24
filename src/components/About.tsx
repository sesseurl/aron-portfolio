import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="container-section">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Background and interests</p>
        </div>
        <div className="space-y-4 text-secondary leading-relaxed">
          <p>
            I started programming through freelance web development and gradually moved into
            professional software engineering, working with increasingly complex systems and
            technologies. My journey began with building websites and e-commerce platforms, then
            expanded into full-stack applications, mobile development and backend systems.
          </p>
          <p>
            Over time, I gained significant experience working with major Brazilian financial
            institutions including Santander, Bradesco and Banco do Brasil. This exposure taught me
            to build software that is secure, reliable, scalable and well-integrated with other
            systems — qualities that matter when software handles important business operations.
          </p>
          <p>
            Today, my strongest professional interests are software engineering, backend
            development, APIs, scalable systems and AI-assisted development. I'm particularly
            comfortable entering unfamiliar technical environments, learning what's necessary and
            turning that knowledge into working software.
          </p>
          <p className="text-muted text-sm pt-2">
            São Paulo, Brazil · Portuguese (Native) · English (Fluent)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
