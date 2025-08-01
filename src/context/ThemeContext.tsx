import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { ThemeContextType, ThemeType, Theme } from '../types/theme';
import { themes } from '../utils/themes';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    if (newTheme === currentTheme) return;

    setIsTransitioning(true);
    
    // Add a slight delay for smooth transition
    setTimeout(() => {
      setCurrentTheme(newTheme);
      localStorage.setItem('selectedTheme', newTheme);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 150);
  };

  const theme: Theme = themes[currentTheme];

  const value: ThemeContextType = {
    currentTheme,
    theme,
    setTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};