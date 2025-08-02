import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { ShoppingBag, Sparkles, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const { products, loading, error } = useProducts();

  const getGridStyle = () => {
    if (theme.layout.type === 'grid') {
      return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
    }
    if (theme.layout.type === 'sidebar') {
      return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8';
    }
    return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
  };

  const features = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'Quality Products',
      description: 'Carefully curated selection of premium items',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Beautiful Themes',
      description: 'Switch between stunning visual themes instantly',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast & Responsive',
      description: 'Optimized for all devices with smooth animations',
    },
  ];

  if (error) {
    return (
      <div className={`max-w-7xl mx-auto ${theme.layout.containerPadding} py-12`}>
        <div 
          className={`${theme.layout.borderRadius} ${theme.spacing.lg} text-center border`}
          style={{
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.error,
          }}
        >
          <p 
            className={`text-lg ${theme.fonts.headingWeight} mb-2`}
            style={{ color: theme.colors.error }}
          >
            Failed to load products
          </p>
          <p style={{ color: theme.colors.textSecondary }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-7xl mx-auto ${theme.layout.containerPadding}`}>
      {/* Hero Section */}
      <section className={`text-center ${theme.spacing.xl}`}>
        <h1 
          className={`text-4xl md:text-6xl ${theme.fonts.headingWeight} mb-6 leading-tight`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          Welcome to{' '}
          <span style={{ color: theme.colors.primary }}>
            ThemeHub
          </span>
        </h1>
        
        <p 
          className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${theme.fonts.bodyWeight}`}
          style={{ 
            color: theme.colors.textSecondary,
            fontFamily: theme.fonts.secondary,
          }}
        >
          Experience the power of dynamic theming with our beautiful, responsive design system. 
          Switch themes and watch the entire interface transform seamlessly.
        </p>

        <button
          className={`px-8 py-4 ${theme.layout.borderRadius} text-lg ${theme.fonts.headingWeight} transition-all duration-200 hover:scale-105 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-offset-2`}
          style={{
            backgroundColor: theme.colors.primary,
            color: theme.colors.background,
            fontFamily: theme.fonts.secondary,
            focusRingColor: theme.colors.primary,
          }}
        >
          Explore Products
        </button>
      </section>

      {/* Features Section */}
      <section className={theme.spacing.xl}>
        <h2 
          className={`text-3xl ${theme.fonts.headingWeight} text-center mb-12`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          Why Choose ThemeHub?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center ${theme.spacing.lg} ${theme.layout.borderRadius} border transition-all duration-300 hover:scale-105`}
              style={{
                backgroundColor: theme.colors.surface,
                borderColor: theme.colors.border,
              }}
            >
              <div 
                className={`inline-flex items-center justify-center w-16 h-16 ${theme.layout.borderRadius} mb-4`}
                style={{ backgroundColor: theme.colors.primary }}
              >
                <span style={{ color: theme.colors.background }}>
                  {feature.icon}
                </span>
              </div>
              
              <h3 
                className={`text-xl ${theme.fonts.headingWeight} mb-3`}
                style={{ 
                  color: theme.colors.text,
                  fontFamily: theme.fonts.primary,
                }}
              >
                {feature.title}
              </h3>
              
              <p 
                className={theme.fonts.bodyWeight}
                style={{ 
                  color: theme.colors.textSecondary,
                  fontFamily: theme.fonts.secondary,
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className={theme.spacing.xl}>
        <h2 
          className={`text-3xl ${theme.fonts.headingWeight} text-center mb-12`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          Featured Products
        </h2>

        {loading ? (
          <LoadingSpinner size="lg" message="Loading amazing products..." />
        ) : (
          <div className={getGridStyle()}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};