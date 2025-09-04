import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  position = 'top' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2'
  };
  
  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`
          absolute z-50 px-3 py-2 text-sm bg-slate-800 text-white rounded-lg shadow-lg
          transition-opacity duration-200 ease-in-out
          ${positionClasses[position]}
          before:content-[''] before:absolute before:w-0 before:h-0 before:border-4
          ${position === 'top' ? 'before:top-full before:left-1/2 before:-translate-x-1/2 before:border-t-slate-800 before:border-x-transparent before:border-b-transparent' : ''}
          ${position === 'bottom' ? 'before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-b-slate-800 before:border-x-transparent before:border-t-transparent' : ''}
        `}>
          {content}
        </div>
      )}
    </div>
  );
};