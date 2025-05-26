
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    logoName: 'Akhysai',
    underMaintenance: "Under Maintenance",
    projectDescription: "Akhysai is a website and mobile app designed to provide two core services:",
    homeAppointments: "Home Appointments for in-person physiotherapy and other medical specialties.",
    onlineTherapy: "Online Therapy Appointments for remote mental health support and therapy sessions.",
    maintenanceMessage: "We're currently performing scheduled maintenance to improve your experience",
    backSoon: "We'll be back soon",
    notifyMe: "Notify Me",
    enterEmail: "Enter your email address",
    subscribe: "Subscribe",
    thankYou: "Thank you for your interest!",
    tagline: "Professional Healthcare at Your Fingertips"
  },
  ar: {
    logoName: 'أخصائي',
    underMaintenance: "تحت الصيانة",
    projectDescription: "اخصائي هو موقع ويب وتطبيق محمول مصمم لتقديم خدمتين أساسيتين:",
    homeAppointments: "المواعيد المنزلية للعلاج الطبيعي والتخصصات الطبية الأخرى الشخصية.",
    onlineTherapy: "مواعيد العلاج عبر الإنترنت لدعم الصحة النفسية عن بُعد وجلسات العلاج.",
    maintenanceMessage: "نقوم حالياً بأعمال صيانة مجدولة لتحسين تجربتك",
    backSoon: "سنعود قريباً",
    notifyMe: "أعلمني",
    enterEmail: "أدخل عنوان بريدك الإلكتروني",
    subscribe: "اشترك",
    thankYou: "شكراً لاهتمامك!",
    tagline: "الرعاية الصحية المهنية في متناول يدك"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    console.log('Language changed to:', language);
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    console.log('Setting language to:', lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
