
import React from 'react';
import { Heart, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LogoPlaceholder: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <div className="relative flex items-center justify-center w-36 h-36 mx-auto mb-8 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-healthcare-400 to-healthcare-600 rounded-full opacity-20 animate-pulse"></div>
      <div className="relative flex items-center justify-center w-32 h-32 bg-gradient-to-br from-healthcare-50 to-healthcare-400 rounded-full shadow-lg">
        <div className="flex items-center space-x-1">
          {/* <Heart className="w-6 h-6 text-white" fill="currentColor" />
          <Shield className="w-6 h-6 text-white" /> */}
          <img  src="../../public/logo.png" alt="logo" />
        </div>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full shadow-md border">
          <span className="text-xl  font-bold text-healthcare-600 dark:text-healthcare-400">
            {t('logoName')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoPlaceholder;
