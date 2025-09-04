import React, { useState } from 'react';
import { Target, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/Button';

interface GoalsStepProps {
  onNext: () => void;
  onPrev: () => void;
}

const goals = [
  {
    id: 'stress',
    title: 'Managing stress and anxiety',
    description: 'Find calm in the chaos of daily life'
  },
  {
    id: 'mindfulness',
    title: 'Building mindfulness habits',
    description: 'Develop awareness and presence'
  },
  {
    id: 'mood',
    title: 'Improving mood and energy',
    description: 'Cultivate positivity and vitality'
  },
  {
    id: 'relationships',
    title: 'Strengthening relationships',
    description: 'Deepen connections with others'
  },
  {
    id: 'growth',
    title: 'Personal growth and self-discovery',
    description: 'Uncover your authentic self'
  },
  {
    id: 'other',
    title: 'Something else',
    description: 'Your journey is unique to you'
  }
];

export const GoalsStep: React.FC<GoalsStepProps> = ({ onNext, onPrev }) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  
  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId)
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
          <Target className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">
          What brings you here today?
        </h2>
        <p className="text-slate-600 max-w-md mx-auto">
          Choose what resonates with you. You can always explore other areas later.
        </p>
      </div>
      
      <div className="grid gap-3 max-w-lg mx-auto">
        {goals.map((goal) => (
          <button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            className={`
              p-5 rounded-xl border-2 transition-all duration-200 text-left
              hover:shadow-md transform hover:-translate-y-0.5
              ${selectedGoals.includes(goal.id)
                ? 'border-indigo-500 bg-indigo-50 shadow-md'
                : 'border-slate-200 hover:border-slate-300 bg-white'
              }
            `}
          >
            <div className="flex items-start gap-4">
              <div className={`
                rounded-full p-1.5 mt-0.5 transition-colors duration-200 flex-shrink-0
                ${selectedGoals.includes(goal.id) 
                  ? 'text-indigo-500' 
                  : 'text-slate-400'
                }
              `}>
                <CheckCircle2 
                  className="h-5 w-5" 
                  fill={selectedGoals.includes(goal.id) ? 'currentColor' : 'none'}
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-slate-800 mb-2">
                  {goal.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {goal.description}
                </p>
              </div>
            </div>
          </button>
        ))}
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
          disabled={selectedGoals.length === 0}
          className="min-w-40 px-8"
        >
          Continue
        </Button>
      </div>
      
      {selectedGoals.length === 0 && (
        <p className="text-center text-sm text-slate-500 animate-pulse">
          Select at least one area to continue your journey
        </p>
      )}
    </div>
  );
};