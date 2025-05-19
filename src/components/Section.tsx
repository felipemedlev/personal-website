import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  icon?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, icon: Icon, children, className = "" }) => (
  <section id={id} className={`py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-6 lg:px-8">
      <div className="mb-12 text-center">
        {Icon && <Icon className="mx-auto h-12 w-12 text-sky-400 mb-4" />}
        <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
        <div className="mt-4 h-1 w-24 bg-sky-400 mx-auto rounded"></div>
      </div>
      {children}
    </div>
  </section>
);

export default Section;