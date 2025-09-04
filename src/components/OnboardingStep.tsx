import React from 'react';

interface OnboardingStepProps {
  children: React.ReactNode;
  isVisible: boolean;
  className?: string;
}

export const OnboardingStep: React.FC<OnboardingStepProps> = ({ 
  children, 
  isVisible, 
  className = '' 
}) => {
  return (
    <div 
      className={`
        absolute inset-0 transition-all duration-500 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8 pointer-events-none'
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};