
import React from 'react';

export const medicalTheme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe', 
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    medical: {
      blue: '#0ea5e9',
      green: '#10b981',
      red: '#ef4444',
      orange: '#f97316',
      amber: '#f59e0b',
    },
    background: {
      light: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
      dark: 'linear-gradient(135deg, #0c1421 0%, #1e293b 50%, #0f172a 100%)',
    }
  },
  animations: {
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    float: 'animate-[float_3s_ease-in-out_infinite]',
  },
  shadows: {
    medical: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)',
    glow: '0 0 20px rgba(59, 130, 246, 0.3)',
  }
};

export const MedicalBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Animated medical particles */}
    <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '0s' }}></div>
    <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-red-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    
    {/* Floating medical crosses */}
    <div className="absolute top-1/4 left-1/3 w-8 h-8 opacity-10 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '0s' }}>
      <div className="w-full h-2 bg-red-500 absolute top-3"></div>
      <div className="w-2 h-full bg-red-500 absolute left-3"></div>
    </div>
    
    <div className="absolute bottom-1/4 right-1/4 w-6 h-6 opacity-15 animate-[float_5s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}>
      <div className="w-full h-1.5 bg-blue-500 absolute top-2.5"></div>
      <div className="w-1.5 h-full bg-blue-500 absolute left-2.5"></div>
    </div>
    
    {/* Gradient overlays */}
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/20 dark:from-blue-900/10 dark:to-green-900/10"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-blue-100/30 dark:from-transparent dark:to-blue-900/20"></div>
  </div>
);

// Custom keyframes for floating animation
export const customAnimations = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(2deg); }
    66% { transform: translateY(-5px) rotate(-1deg); }
  }
  
  @keyframes medicalPulse {
    0%, 100% { 
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
    }
    50% { 
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
    }
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    14% { transform: scale(1.1); }
    28% { transform: scale(1); }
    42% { transform: scale(1.1); }
    70% { transform: scale(1); }
  }
`;
