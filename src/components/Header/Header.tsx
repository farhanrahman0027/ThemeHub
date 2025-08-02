import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { ThemeDropdown } from './ThemeDropdown';
import { Palette } from 'lucide-react';

export const Header: React.FC = () => {
  const { theme, isTransitioning } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const getHeaderStyle = () => {
    const baseStyle = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isTransitioning ? 'opacity-75' : 'opacity-100'
    }`;
    
    return `${baseStyle} ${theme.layout.headerHeight}`;
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header 
        className={getHeaderStyle()}
        style={{
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          fontFamily: theme.fonts.primary,
        }}
      >
        <div className={`h-full max-w-7xl mx-auto ${theme.layout.containerPadding} flex items-center justify-between`}>
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 transition-all duration-200 hover:opacity-80"
          >
            <div 
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ backgroundColor: theme.colors.primary }}
            >
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span 
              className={`text-xl ${theme.fonts.headingWeight} transition-colors duration-200`}
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.primary,
              }}
            >
              ThemeHub
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-all duration-200 hover:opacity-80 ${
                  isActive(item.path) ? theme.fonts.headingWeight : theme.fonts.bodyWeight
                }`}
                style={{
                  color: isActive(item.path) ? theme.colors.primary : theme.colors.text,
                  fontFamily: theme.fonts.secondary,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Dropdown */}
          <ThemeDropdown />
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav 
        className="md:hidden fixed top-16 left-0 right-0 z-40 border-b transition-all duration-300"
        style={{
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.border,
          top: theme.layout.headerHeight === 'h-16' ? '4rem' : theme.layout.headerHeight === 'h-20' ? '5rem' : '6rem',
        }}
      >
        <div className={`${theme.layout.containerPadding} py-4 flex justify-center space-x-6`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-all duration-200 hover:opacity-80 ${
                isActive(item.path) ? theme.fonts.headingWeight : theme.fonts.bodyWeight
              }`}
              style={{
                color: isActive(item.path) ? theme.colors.primary : theme.colors.text,
                fontFamily: theme.fonts.secondary,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};