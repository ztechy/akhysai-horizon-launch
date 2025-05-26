
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import LogoPlaceholder from '../components/LogoPlaceholder';
import TypingText from '../components/TypingText';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';
import EmailNotification from '../components/EmailNotification';
import { Settings, Clock, Wrench, AlertTriangle } from 'lucide-react';
import { 
  StethoscopeIllustration, 
  HeartbeatIllustration, 
  MedicalCrossIllustration, 
  PillsIllustration 
} from '../components/MedicalIllustrations';
import { MedicalBackground } from '../styles/MedicalTheme';

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-800 relative overflow-hidden">
      
      {/* Medical Background */}
      <MedicalBackground />

      {/* Header controls */}
      <div className="absolute top-6 right-6 flex items-center space-x-3 rtl:space-x-reverse z-20">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-5xl mx-auto text-center">
          
          {/* Logo with Medical Elements */}
          <div className="animate-fade-in relative">
            <LogoPlaceholder />
            <div className="absolute -top-4 -right-4">
              <MedicalCrossIllustration className="w-12 h-12 animate-pulse" />
            </div>
          </div>

          {/* Under Maintenance Title with Medical Icons */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center mb-6 relative">
              <div className="absolute -left-16">
                <StethoscopeIllustration className="w-16 h-16 opacity-30 animate-[float_3s_ease-in-out_infinite]" />
              </div>
              
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="relative">
                  <Settings className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-0 animate-ping">
                    <Settings className="w-12 h-12 text-blue-600/30 dark:text-blue-400/30" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                  <TypingText 
                    text={t('underMaintenance')} 
                    speed={120} 
                    delay={800}
                    className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 dark:from-blue-400 dark:via-green-400 dark:to-blue-600 bg-clip-text text-transparent"
                  />
                </h1>
                
                <Wrench className="w-10 h-10 text-green-600 dark:text-green-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
              
              <div className="absolute -right-16">
                <PillsIllustration className="w-16 h-16 opacity-30 animate-[float_4s_ease-in-out_infinite]" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-light mb-4">
              {t('tagline')}
            </p>
            
            {/* Heartbeat Line */}
            <div className="flex justify-center mb-6">
              <HeartbeatIllustration className="w-80 h-16 opacity-60" />
            </div>
          </div>

          {/* Medical Maintenance Message */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-2xl relative overflow-hidden">
              
              {/* Medical pattern background */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-8 gap-4 h-full">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-center">
                      <MedicalCrossIllustration className="w-6 h-6" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full mr-4 rtl:mr-0 rtl:ml-4">
                    <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3 rtl:mr-0 rtl:ml-3 animate-spin" style={{ animationDuration: '4s' }} />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                    {t('backSoon')}
                  </h2>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                    {t('maintenanceMessage')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Medical Services Preview */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center justify-center">
                  <StethoscopeIllustration className="w-8 h-8 mr-3 rtl:mr-0 rtl:ml-3" />
                  {t('projectDescription')}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Home Medical Services */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                          <StethoscopeIllustration className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1">
                          <MedicalCrossIllustration className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-3 text-xl">
                          {language === 'en' ? 'Home Medical Services' : 'الخدمات الطبية المنزلية'}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {t('homeAppointments')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Online Medical Consultation */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0 relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                          <PillsIllustration className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-1 -right-1 animate-pulse">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 text-xl">
                          {language === 'en' ? 'Online Medical Consultation' : 'الاستشارة الطبية عبر الإنترنت'}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {t('onlineTherapy')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Notification with Medical Theme */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 dark:from-blue-400/10 dark:to-green-400/10 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/50">
              <div className="flex items-center justify-center mb-6">
                <HeartbeatIllustration className="w-24 h-6 mr-4 rtl:mr-0 rtl:ml-4 opacity-60" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                  {t('notifyMe')}
                </h2>
                <HeartbeatIllustration className="w-24 h-6 ml-4 rtl:ml-0 rtl:mr-4 opacity-60 scale-x-[-1]" />
              </div>
              <EmailNotification />
            </div>
          </div>
        </div>
      </div>

      {/* Medical Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-4 rtl:space-x-reverse bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-200/50 dark:border-slate-700/50">
          <MedicalCrossIllustration className="w-5 h-5" />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © 2024 Akhysai. {language === 'en' ? 'Professional Healthcare Platform' : 'منصة الرعاية الصحية المهنية'}
          </p>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
};

export default Index;
