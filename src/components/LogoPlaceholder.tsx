
import React from 'react';
import { Heart, Shield } from 'lucide-react';

const LogoPlaceholder: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-8 animate-logo-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-healthcare-400 to-healthcare-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-healthcare-500 to-healthcare-700 rounded-full shadow-lg">
        <div className="flex items-center space-x-1">
          <Heart className="w-6 h-6 text-white" fill="currentColor" />
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full shadow-md border">
          <span className="text-xs font-bold text-healthcare-600 dark:text-healthcare-400">
            Akhysai
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoPlaceholder;
