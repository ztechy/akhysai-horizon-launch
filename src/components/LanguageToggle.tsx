
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    console.log('Language toggle clicked, current language:', language);
    const newLanguage = language === 'en' ? 'ar' : 'en';
    console.log('Switching to language:', newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center space-x-2 rtl:space-x-reverse p-2 rounded-full bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-110"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe className="w-5 h-5 text-healthcare-600 dark:text-healthcare-400" />
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
        {language === 'en' ? 'العربية' : 'English'}
      </span>
    </button>
  );
};

export default LanguageToggle;
