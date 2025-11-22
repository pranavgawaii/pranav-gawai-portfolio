import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, className = "", id }) => {
  return (
    <section id={id} className={`mb-16 relative ${className}`}>
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
};

export default Section;