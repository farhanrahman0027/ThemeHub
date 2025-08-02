import React, { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, isTransitioning } = useTheme();

  const getMainStyle = () => {
    const marginTop = theme.layout.headerHeight === 'h-16' ? 'mt-16' : 
                     theme.layout.headerHeight === 'h-20' ? 'mt-20' : 'mt-24';
    
    // Add mobile navigation space
    const paddingTop = 'pt-16 md:pt-0';
    
    return `min-h-screen transition-all duration-300 ${marginTop} ${paddingTop} ${
      isTransitioning ? 'opacity-75 scale-[0.98]' : 'opacity-100 scale-100'
    }`;
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{ 
        backgroundColor: theme.colors.background,
        fontFamily: theme.fonts.secondary,
      }}
    >
      <Header />
      <main className={getMainStyle()}>
        {theme.layout.type === 'sidebar' ? (
          <div className="flex">
            <aside 
              className="hidden lg:block w-64 fixed left-0 top-20 bottom-0 border-r transition-all duration-300"
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              }}
            >
              <div className={theme.layout.containerPadding}>
                <div className="py-8">
                  <h3 
                    className={`text-lg ${theme.fonts.headingWeight} mb-4`}
                    style={{ 
                      color: theme.colors.text,
                      fontFamily: theme.fonts.primary,
                    }}
                  >
                    Navigation
                  </h3>
                  <div className="space-y-2">
                    {['Dashboard', 'Products', 'Analytics', 'Settings'].map((item) => (
                      <div
                        key={item}
                        className={`p-3 ${theme.layout.borderRadius} cursor-pointer transition-all duration-200 hover:opacity-80`}
                        style={{
                          backgroundColor: theme.colors.background,
                          color: theme.colors.textSecondary,
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <div className="lg:ml-64 flex-1">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </main>
    </div>
  );
};