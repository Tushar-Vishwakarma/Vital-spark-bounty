import React, { useState } from 'react';
import { ProgressIndicator } from './components/ProgressIndicator';
import { OnboardingStep } from './components/OnboardingStep';
import { WelcomeStep } from './steps/WelcomeStep';
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { GoalsStep } from './steps/GoalsStep';
import { PreferencesStep } from './steps/PreferencesStep';
import { WellnessCheckStep } from './steps/WellnessCheckStep';
import { NotificationsStep } from './steps/NotificationsStep';
import { CompletionStep } from './steps/CompletionStep';

const steps = [
  { component: WelcomeStep, showProgress: false },
  { component: PersonalInfoStep, showProgress: true },
  { component: GoalsStep, showProgress: true },
  { component: WellnessCheckStep, showProgress: true },
  { component: PreferencesStep, showProgress: true },
  { component: NotificationsStep, showProgress: true },
  { component: CompletionStep, showProgress: false }
];

const encouragingMessages = [
  "Great start! 🌱",
  "You're doing wonderful 💫",
  "Almost there, keep going 🌟",
  "Looking good! ✨",
  "Final steps ahead 🎯",
  "You made it! 🎉"
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  const completeOnboarding = () => {
    setIsCompleted(true);
  };
  
  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-emerald-100 flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
            <Heart className="h-12 w-12 text-white" fill="currentColor" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800">
            Welcome to your wellness journey
          </h1>
          <p className="text-slate-600">
            Your personalized VitalSpark experience is ready. Take care of yourself.
          </p>
        </div>
      </div>
    );
  }
  
  const CurrentStepComponent = steps[currentStep].component;
  const showProgress = steps[currentStep].showProgress;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-emerald-100">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-2xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-10 lg:p-12 min-h-[650px] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-emerald-500 opacity-60" />
          
          {showProgress && (
            <div className="mb-10">
              <ProgressIndicator 
                currentStep={currentStep - 1} // Adjust for welcome step
                totalSteps={5} // Exclude welcome and completion steps
                encouragingMessages={encouragingMessages}
              />
            </div>
          )}
          
          <div className="relative min-h-[450px]">
            {steps.map((step, index) => (
              <OnboardingStep 
                key={index}
                isVisible={currentStep === index}
                className="flex items-center justify-center px-2"
              >
                <div className="w-full">
                  <CurrentStepComponent 
                    onNext={nextStep}
                    onPrev={prevStep}
                    onComplete={completeOnboarding}
                  />
                </div>
              </OnboardingStep>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;