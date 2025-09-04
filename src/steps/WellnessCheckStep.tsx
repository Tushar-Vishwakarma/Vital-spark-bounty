import React, { useState } from 'react';
import { Heart, Smile, Meh, Frown } from 'lucide-react';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';

interface WellnessCheckStepProps {
  onNext: () => void;
  onPrev: () => void;
}

const moodOptions = [
  { id: 'great', icon: Smile, label: 'Feeling great', color: 'text-emerald-500' },
  { id: 'okay', icon: Meh, label: 'Doing okay', color: 'text-amber-500' },
  { id: 'struggling', icon: Frown, label: 'Having a tough time', color: 'text-rose-500' }
];

export const WellnessCheckStep: React.FC<WellnessCheckStepProps> = ({ onNext, onPrev }) => {
  const [currentMood, setCurrentMood] = useState('');
  const [sleepQuality, setSleepQuality] = useState(5);
  const [stressLevel, setStressLevel] = useState(5);
  
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">
          How are you feeling?
        </h2>
        <p className="text-slate-600 max-w-md mx-auto">
          This helps us understand where you're at right now. Be honest - there's no judgment here.
        </p>
      </div>
      
      <div className="space-y-6 max-w-lg mx-auto">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="font-medium text-slate-800 mb-4">Today I'm...</h3>
          <div className="grid gap-3">
            {moodOptions.map((mood) => {
              const IconComponent = mood.icon;
              return (
                <Tooltip 
                  key={mood.id} 
                  content="Your feelings are valid, whatever they may be"
                  position="left"
                >
                  <button
                    onClick={() => setCurrentMood(mood.id)}
                    className={`
                      p-5 rounded-lg border-2 transition-all duration-200 text-left
                      hover:shadow-md transform hover:-translate-y-0.5
                      ${currentMood === mood.id
                        ? 'border-indigo-500 bg-indigo-50'
                        : 'border-slate-200 hover:border-slate-300'
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <IconComponent className={`h-6 w-6 ${mood.color}`} />
                      <span className="font-medium">{mood.label}</span>
                    </div>
                  </button>
                </Tooltip>
              );
            })}
          </div>
        </div>
        
        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-slate-800">Sleep quality lately</h3>
              <span className="text-sm text-emerald-600 font-medium">
                {sleepQuality <= 3 ? 'Needs attention' : sleepQuality <= 7 ? 'Getting better' : 'Restful'}
              </span>
            </div>
            <Tooltip content="Quality sleep is fundamental to wellbeing - we'll help you improve this">
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={sleepQuality}
                  onChange={(e) => setSleepQuality(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Poor</span>
                  <span>Excellent</span>
                </div>
              </div>
            </Tooltip>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-slate-800">Stress levels</h3>
              <span className="text-sm text-emerald-600 font-medium">
                {stressLevel <= 3 ? 'Calm' : stressLevel <= 7 ? 'Manageable' : 'High - we can help'}
              </span>
            </div>
            <Tooltip content="Understanding your stress helps us provide the right support and techniques">
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={stressLevel}
                  onChange={(e) => setStressLevel(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Relaxed</span>
                  <span>Overwhelmed</span>
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
      
      <div className="flex gap-4 justify-center pt-6">
        <Button 
          onClick={onPrev} 
          variant="secondary"
          className="min-w-28 px-6"
        >
          Back
        </Button>
        <Button 
          onClick={onNext}
          disabled={!currentMood}
          className="min-w-40 px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};