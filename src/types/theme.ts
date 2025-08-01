export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    headingWeight: string;
    bodyWeight: string;
  };
  layout: {
    type: 'default' | 'sidebar' | 'grid';
    headerHeight: string;
    containerPadding: string;
    borderRadius: string;
    shadow: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  setTheme: (theme: ThemeType) => void;
  isTransitioning: boolean;
}