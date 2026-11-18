import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const LanguageContext = createContext();

const readSaved = () => {
  try {
    const saved = localStorage.getItem('lang');
    return saved === 'id' || saved === 'en' ? saved : 'en';
  } catch {
    return 'en';
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(readSaved);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // Storage can be blocked; the language still applies for this visit.
    }
  }, [lang]);

  // Content is either a plain string or { en, id }.
  const t = useCallback((value) => {
    if (value && typeof value === 'object' && !Array.isArray(value)) return value[lang] ?? value.en;
    return value;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
