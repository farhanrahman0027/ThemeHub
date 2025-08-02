import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { ChevronDown } from 'lucide-react';
import { ThemeType } from '../../types/theme';

export const ThemeDropdown: React.FC = () => {
  const { currentTheme, theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themeOptions: { value: ThemeType; label: string }[] = [
    { value: 'theme1', label: 'Minimalist' },
    { value: 'theme2', label: 'Dark Professional' },
    { value: 'theme3', label: 'Colorful Creative' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleThemeSelect = (themeValue: ThemeType) => {
    setTheme(themeValue);
    setIsOpen(false);
  };

  const currentThemeLabel = themeOptions.find(option => option.value === currentTheme)?.label || 'Theme';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-2 px-4 py-2 ${theme.layout.borderRadius} border transition-all duration-200 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2`}
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
          color: theme.colors.text,
          fontFamily: theme.fonts.secondary,
          focusRingColor: theme.colors.primary,
        }}
      >
        <span className={theme.fonts.bodyWeight}>{currentThemeLabel}</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>

      {isOpen && (
        <div 
          className={`absolute right-0 mt-2 w-48 ${theme.layout.borderRadius} border ${theme.layout.shadow} z-50 overflow-hidden transition-all duration-200`}
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.border,
          }}
        >
          {themeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleThemeSelect(option.value)}
              className={`w-full text-left px-4 py-3 transition-all duration-200 hover:opacity-80 ${
                option.value === currentTheme ? theme.fonts.headingWeight : theme.fonts.bodyWeight
              }`}
              style={{
                color: option.value === currentTheme ? theme.colors.primary : theme.colors.text,
                backgroundColor: option.value === currentTheme ? theme.colors.background : 'transparent',
                fontFamily: theme.fonts.secondary,
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};