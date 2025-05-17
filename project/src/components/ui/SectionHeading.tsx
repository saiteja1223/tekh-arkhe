import React from 'react';
import AnimationWrapper from './AnimationWrapper';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <AnimationWrapper animation="slideUp">
        <h2 className="section-title">{title}</h2>
      </AnimationWrapper>
      
      {subtitle && (
        <AnimationWrapper animation="slideUp" delay={0.2}>
          <p className="section-subtitle">{subtitle}</p>
        </AnimationWrapper>
      )}
    </div>
  );
};

export default SectionHeading;