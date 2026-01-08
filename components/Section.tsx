import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 scroll-mt-24 ${dark ? 'bg-slate-50' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tecoBlue mb-4 uppercase relative inline-block">
            {title}
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-tecoOrange"></span>
          </h2>
          {subtitle && (
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};