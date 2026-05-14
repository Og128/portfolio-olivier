import React, { createContext, useContext, useState, useEffect } from 'react';
import contentEn from '../data/content_en.json';
import contentFr from '../data/content_fr.json';
import projectsEn from '../data/projects_en.json';
import projectsFr from '../data/projects_fr.json';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('portfolio-language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const content = { en: contentEn, fr: contentFr };
  const allProjects = { en: projectsEn, fr: projectsFr };

  const t = (key) => {
    return content[language][key] ?? key;
  };

  const projects = allProjects[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, projects }}>
      {children}
    </LanguageContext.Provider>
  );
};
