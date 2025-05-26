
import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const EmailNotification: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      console.log('Email subscribed:', email);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 animate-fade-in">
        <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
        <span className="text-green-700 dark:text-green-300 font-medium">
          {t('thankYou')}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('enterEmail')}
            className="w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-healthcare-500 focus:border-transparent transition-all duration-200 text-slate-900 dark:text-slate-100 placeholder-slate-500"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-healthcare-600 hover:bg-healthcare-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105 focus:ring-2 focus:ring-healthcare-500 focus:ring-offset-2"
        >
          {t('subscribe')}
        </button>
      </form>
    </div>
  );
};

export default EmailNotification;
