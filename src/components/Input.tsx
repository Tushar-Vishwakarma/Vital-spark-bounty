import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  supportiveText?: string;
  required?: boolean;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  supportiveText,
  required = false,
  type = 'text'
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 rounded-xl border-2 transition-all duration-200
            placeholder:text-slate-400
            ${error 
              ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500' 
              : isFocused 
                ? 'border-indigo-500 focus:border-indigo-500 focus:ring-indigo-500' 
                : 'border-slate-200 hover:border-slate-300'
            }
            focus:outline-none focus:ring-2 focus:ring-opacity-20
          `}
        />
        {error && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <AlertCircle className="h-5 w-5 text-rose-500" />
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-rose-600 flex items-center gap-1">
          <span>We're here to help - {error}</span>
        </p>
      )}
      {supportiveText && !error && (
        <p className="text-sm text-slate-500">{supportiveText}</p>
      )}
    </div>
  );
};