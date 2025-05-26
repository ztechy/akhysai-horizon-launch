
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import LogoPlaceholder from '../components/LogoPlaceholder';
import TypingText from '../components/TypingText';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import EmailNotification from '../components/EmailNotification';
import { Home, Video, Stethoscope, Heart, Settings, Clock } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-300 dark:bg-orange-700 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-amber-400 dark:bg-amber-600 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header controls */}
      <div className="absolute top-6 right-6 flex items-center space-x-3 rtl:space-x-reverse z-20">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-4xl mx-auto text-center">
          
          {/* Logo */}
          <div className="animate-fade-in">
            <LogoPlaceholder />
          </div>

          {/* Under Maintenance Title */}
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-4">
              <Settings className="w-12 h-12 text-amber-500 dark:text-amber-400 mr-4 rtl:mr-0 rtl:ml-4 animate-spin" style={{ animationDuration: '3s' }} />
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-slate-100">
                <TypingText 
                  text={t('underMaintenance')} 
                  speed={150} 
                  delay={800}
                  className="bg-gradient-to-r from-amber-600 to-orange-800 dark:from-amber-400 dark:to-orange-600 bg-clip-text text-transparent"
                />
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light">
              {t('tagline')}
            </p>
          </div>

          {/* Maintenance Message */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-amber-50/80 dark:bg-amber-900/20 backdrop-blur-sm rounded-2xl p-8 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-amber-600 dark:text-amber-400 mr-3 rtl:mr-0 rtl:ml-3" />
                <h2 className="text-2xl font-semibold text-amber-800 dark:text-amber-200">
                  {t('backSoon')}
                </h2>
              </div>
              <p className="text-lg text-amber-700 dark:text-amber-300 leading-relaxed">
                {t('maintenanceMessage')}
              </p>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {t('projectDescription')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Home Appointments */}
                <div className="group">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-healthcare-50 dark:bg-healthcare-900/20 rounded-xl border border-healthcare-200 dark:border-healthcare-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-healthcare-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Home className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-healthcare-800 dark:text-healthcare-200 mb-2 flex items-center">
                        <Stethoscope className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                        {language === 'en' ? 'Home Appointments' : 'المواعيد المنزلية'}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {t('homeAppointments')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Online Therapy */}
                <div className="group">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse p-6 bg-healthcare-50 dark:bg-healthcare-900/20 rounded-xl border border-healthcare-200 dark:border-healthcare-800 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-healthcare-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Video className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-healthcare-800 dark:text-healthcare-200 mb-2 flex items-center">
                        <Heart className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                        {language === 'en' ? 'Online Therapy' : 'العلاج عبر الإنترنت'}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {t('onlineTherapy')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Notification */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
              {t('notifyMe')}
            </h2>
            <EmailNotification />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © 2024 Akhysai. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
        </p>
      </div>
    </div>
  );
};

export default Index;
