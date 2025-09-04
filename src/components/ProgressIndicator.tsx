import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  encouragingMessages: string[];
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps, 
  encouragingMessages 
}) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-medium text-slate-600">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-sm text-emerald-600 font-medium">
          {encouragingMessages[currentStep]}
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-2 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};