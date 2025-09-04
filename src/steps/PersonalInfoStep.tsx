import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Tooltip } from '../components/Tooltip';

interface PersonalInfoStepProps {
  onNext: () => void;
  onPrev: () => void;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ onNext, onPrev }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  
  const validateAndProceed = () => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = "We'd love to know what to call you";
    }
    
    if (!email.trim()) {
      newErrors.email = "This helps us keep your progress safe";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Just making sure we can reach you if needed";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onNext();
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
          <User className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">
          Let's get to know you
        </h2>
        <p className="text-slate-600 max-w-sm mx-auto">
          Help us personalize your experience and create a safe space just for you.
        </p>
      </div>
      
      <div className="space-y-5 max-w-sm mx-auto">
        <Tooltip content="We use this to create a warm, personal experience throughout your journey">
          <div className="space-y-1">
            <Input
              label="What should we call you?"
              value={name}
              onChange={setName}
              placeholder="Your preferred name"
              error={errors.name}
              supportiveText="This can be your real name, nickname, or anything you're comfortable with"
              required
            />
          </div>
        </Tooltip>
        
        <Tooltip content="Your email helps us save your progress and send gentle reminders if you'd like">
          <div className="space-y-1">
            <Input
              label="Email address"
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
              type="email"
              error={errors.email}
              supportiveText="We respect your privacy and will never share your information"
              required
            />
          </div>
        </Tooltip>
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
          onClick={validateAndProceed}
          className="min-w-40 px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};