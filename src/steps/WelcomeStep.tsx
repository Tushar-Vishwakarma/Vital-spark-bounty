import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';

interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep: React.FC<WelcomeStepProps> = ({ onNext }) => {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="relative bg-gradient-to-r from-indigo-500 to-emerald-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center mb-6">
          <Heart className="h-12 w-12 text-white" fill="currentColor" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
          Welcome to VitalSpark
        </h1>
        <p className="text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          Your journey toward wellness and self-discovery starts here. 
          We're honored to walk alongside you.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 p-6 rounded-2xl border border-indigo-100">
        <div className="flex items-center gap-3 mb-3">
          <Sparkles className="h-5 w-5 text-emerald-500" />
          <span className="font-medium text-slate-700">What to expect</span>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          A gentle, personalized experience designed with your comfort and growth in mind. 
          Take your time - there's no rush.
        </p>
      </div>
      
      <div className="pt-6">
        <Button onClick={onNext} size="lg" className="min-w-48">
          Begin Your Journey
        </Button>
      </div>
    </div>
  );
};