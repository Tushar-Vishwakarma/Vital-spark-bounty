import React, { useState } from 'react';
import { Bell, BellOff, Smartphone, Clock } from 'lucide-react';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';

interface NotificationsStepProps {
  onNext: () => void;
  onPrev: () => void;
}

export const NotificationsStep: React.FC<NotificationsStepProps> = ({ onNext, onPrev }) => {
  const [notificationSettings, setNotificationSettings] = useState({
    dailyCheck: true,
    weeklyReflection: true,
    encouragementPush: true,
    achievementCelebration: true
  });
  
  const toggleSetting = (key: string) => {
    setNotificationSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };
  
  const notificationTypes = [
    {
      key: 'dailyCheck',
      title: 'Daily wellness check-ins',
      description: 'Gentle reminders to pause and check in with yourself',
      icon: Clock,
      supportiveText: 'Just a moment each day to reconnect with your inner self'
    },
    {
      key: 'weeklyReflection',
      title: 'Weekly reflection prompts',
      description: 'Thoughtful questions to help you process your week',
      icon: Heart,
      supportiveText: 'Looking back helps us move forward with intention'
    },
    {
      key: 'encouragementPush',
      title: 'Words of encouragement',
      description: 'Uplifting messages when you need them most',
      icon: Smile,
      supportiveText: 'Sometimes we all need a gentle reminder of our strength'
    },
    {
      key: 'achievementCelebration',
      title: 'Milestone celebrations',
      description: 'Acknowledge your progress and growth',
      icon: Sparkles,
      supportiveText: 'Every step forward deserves recognition'
    }
  ];
  
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
          <Bell className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">
          Stay connected
        </h2>
        <p className="text-slate-600 max-w-md mx-auto">
          Choose how you'd like VitalSpark to support you. You can change these anytime.
        </p>
      </div>
      
      <div className="space-y-4 max-w-lg mx-auto">
        {notificationTypes.map((type) => {
          const IconComponent = type.icon;
          const isEnabled = notificationSettings[type.key as keyof typeof notificationSettings];
          
          return (
            <div key={type.key} className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm">
              <Tooltip content={type.supportiveText}>
                <div className="flex items-start gap-4">
                  <div className={`
                    p-3 rounded-lg transition-colors duration-200 flex-shrink-0
                    ${isEnabled ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}
                  `}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-slate-800">{type.title}</h3>
                      <button
                        onClick={() => toggleSetting(type.key)}
                        className={`
                          relative w-12 h-6 rounded-full transition-colors duration-200
                          ${isEnabled ? 'bg-emerald-500' : 'bg-slate-300'}
                        `}
                      >
                        <div className={`
                          absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200
                          ${isEnabled ? 'translate-x-6' : 'translate-x-0.5'}
                        `} />
                      </button>
                    </div>
                    <p className="text-sm text-slate-600">{type.description}</p>
                  </div>
                </div>
              </Tooltip>
            </div>
          );
        })}
      </div>
      
      <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 p-5 rounded-xl border border-indigo-100 max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Smartphone className="h-5 w-5 text-indigo-500" />
          <span className="font-medium text-slate-700">Your privacy matters</span>
        </div>
        <p className="text-sm text-slate-600">
          All notifications are designed to be supportive, never intrusive. You're always in control.
        </p>
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
          className="min-w-40 px-8"
        >
          Almost done!
        </Button>
      </div>
    </div>
  );
};