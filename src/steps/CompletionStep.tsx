import React from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { Button } from '../components/Button';

interface CompletionStepProps {
  onComplete: () => void;
  onPrev: () => void;
}

export const CompletionStep: React.FC<CompletionStepProps> = ({ onComplete, onPrev }) => {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="relative bg-gradient-to-r from-indigo-500 to-emerald-500 p-8 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-6">
          <Sparkles className="h-16 w-16 text-white" fill="currentColor" />
        </div>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">
          You're all set!
        </h1>
        <p className="text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
          Your VitalSpark journey begins now. Remember, healing and growth happen one gentle step at a time.
        </p>
      </div>
      
      <div className="grid gap-4 max-w-md mx-auto text-left">
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 p-6 rounded-xl border border-indigo-100">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-5 w-5 text-rose-500" fill="currentColor" />
            <span className="font-medium text-slate-700">What's next?</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span>Explore your personalized dashboard</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span>Take your first wellness check-in</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span>Discover tools that resonate with you</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>Remember:</strong> Your wellbeing journey is unique to you. 
            Go at your own pace, be kind to yourself, and celebrate small victories.
          </p>
        </div>
      </div>
      
      <div className="flex gap-3 justify-center pt-6">
        <Button 
          onClick={onPrev} 
          variant="ghost"
          className="min-w-28 px-6"
        >
          Back
        </Button>
        <Button 
          onClick={onComplete}
          size="lg"
          className="min-w-52 px-10"
        >
          <span>Enter VitalSpark</span>
          <ArrowRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
      
      <p className="text-xs text-slate-500 max-w-sm mx-auto">
        By continuing, you're taking a brave step toward better wellbeing. We're proud of you.
      </p>
    </div>
  );
};