import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

// index.html sets data-theme before React loads, so the first paint already matches.
const getInitialTheme = () => {
  const current = document.documentElement.dataset.theme;
  return current === 'dark' || current === 'light' ? current : 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Only an explicit toggle is remembered, so the light default reaches everyone who never chose.
  const toggleTheme = () => setTheme((t) => {
    const next = t === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('theme-choice', next);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
    return next;
  });

  return (
    <ThemeContext.Provider value={{ isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
