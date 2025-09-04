import React, { useState } from 'react';
import { Settings, Moon, Sun, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../components/Button';
import { Tooltip } from '../components/Tooltip';

interface PreferencesStepProps {
  onNext: () => void;
  onPrev: () => void;
}

export const PreferencesStep: React.FC<PreferencesStepProps> = ({ onNext, onPrev }) => {
  const [preferences, setPreferences] = useState({
    theme: 'light',
    notifications: true,
    reminderTime: 'evening',
    soundEnabled: true
  });
  
  const updatePreference = (key: string, value: any) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
          <Settings className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">
          Make it yours
        </h2>
        <p className="text-slate-600 max-w-md mx-auto">
          Customize your experience so it feels just right for you.
        </p>
      </div>
      
      <div className="space-y-5 max-w-lg mx-auto">
        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm">
          <Tooltip content="Choose what feels most comfortable for your eyes and mood">
            <div className="space-y-3">
              <h3 className="font-medium text-slate-800">Visual theme</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => updatePreference('theme', 'light')}
                  className={`
                    p-5 rounded-lg border-2 transition-all duration-200
                    ${preferences.theme === 'light'
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-slate-200 hover:border-slate-300'
                    }
                  `}
                >
                  <Sun className="h-6 w-6 mx-auto mb-2 text-amber-500" />
                  <span className="text-sm font-medium">Light</span>
                </button>
                <button
                  onClick={() => updatePreference('theme', 'dark')}
                  className={`
                    p-5 rounded-lg border-2 transition-all duration-200
                    ${preferences.theme === 'dark'
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-slate-200 hover:border-slate-300'
                    }
                  `}
                >
                  <Moon className="h-6 w-6 mx-auto mb-2 text-indigo-500" />
                  <span className="text-sm font-medium">Dark</span>
                </button>
              </div>
            </div>
          </Tooltip>
        </div>
        
        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm">
          <div className="space-y-4">
            <Tooltip content="Gentle notifications can help you stay connected to your wellness goals">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-slate-800">Gentle reminders</h3>
                  <p className="text-sm text-slate-600">Encouraging check-ins when you need them</p>
                </div>
                <button
                  onClick={() => updatePreference('notifications', !preferences.notifications)}
                  className={`
                    relative w-12 h-6 rounded-full transition-colors duration-200
                    ${preferences.notifications ? 'bg-emerald-500' : 'bg-slate-300'}
                  `}
                >
                  <div className={`
                    absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200
                    ${preferences.notifications ? 'translate-x-6' : 'translate-x-0.5'}
                  `} />
                </button>
              </div>
            </Tooltip>
            
            {preferences.notifications && (
              <div className="space-y-3 pl-4 border-l-2 border-emerald-200">
                <h4 className="text-sm font-medium text-slate-700 mb-3">When would you like reminders?</h4>
                <div className="space-y-2">
                  {[
                    { id: 'morning', label: 'Morning motivation', time: '9:00 AM' },
                    { id: 'afternoon', label: 'Midday mindfulness', time: '2:00 PM' },
                    { id: 'evening', label: 'Evening reflection', time: '7:00 PM' }
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => updatePreference('reminderTime', option.id)}
                      className={`
                        w-full p-4 rounded-lg border transition-all duration-200 text-left
                        ${preferences.reminderTime === option.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 hover:border-slate-300'
                        }
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{option.label}</span>
                        <span className="text-xs text-slate-500">{option.time}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm">
          <Tooltip content="Soothing sounds can enhance your experience and help you focus">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {preferences.soundEnabled ? (
                  <Volume2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <VolumeX className="h-5 w-5 text-slate-400" />
                )}
                <div>
                  <h3 className="font-medium text-slate-800">Calming sounds</h3>
                  <p className="text-sm text-slate-600">Gentle audio cues and ambient sounds</p>
                </div>
              </div>
              <button
                onClick={() => updatePreference('soundEnabled', !preferences.soundEnabled)}
                className={`
                  relative w-12 h-6 rounded-full transition-colors duration-200
                  ${preferences.soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'}
                `}
              >
                <div className={`
                  absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200
                  ${preferences.soundEnabled ? 'translate-x-6' : 'translate-x-0.5'}
                `} />
              </button>
            </div>
          </Tooltip>
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
          className="min-w-40 px-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};