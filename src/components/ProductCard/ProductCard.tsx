import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Product } from '../../types/product';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  variant = 'default' 
}) => {
  const { theme } = useTheme();

  const getCardStyle = () => {
    const baseStyle = `transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer border ${theme.layout.borderRadius} ${theme.layout.shadow} overflow-hidden`;
    
    if (variant === 'featured') {
      return `${baseStyle} ${theme.spacing.md}`;
    }
    
    return `${baseStyle} ${theme.spacing.sm}`;
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div 
      className={getCardStyle()}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.border,
      }}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className={theme.spacing.sm}>
        <div className="mb-2">
          <span 
            className={`text-xs px-2 py-1 ${theme.layout.borderRadius} ${theme.fonts.bodyWeight}`}
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.background,
            }}
          >
            {product.category}
          </span>
        </div>

        <h3 
          className={`text-lg ${theme.fonts.headingWeight} mb-2 leading-tight`}
          style={{ 
            color: theme.colors.text,
            fontFamily: theme.fonts.primary,
          }}
        >
          {truncateText(product.title, 50)}
        </h3>

        <p 
          className={`text-sm mb-3 leading-relaxed ${theme.fonts.bodyWeight}`}
          style={{ color: theme.colors.textSecondary }}
        >
          {truncateText(product.description, 100)}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating.rate) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span 
            className={`ml-2 text-sm ${theme.fonts.bodyWeight}`}
            style={{ color: theme.colors.textSecondary }}
          >
            ({product.rating.count})
          </span>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between">
          <span 
            className={`text-2xl ${theme.fonts.headingWeight}`}
            style={{ 
              color: theme.colors.primary,
              fontFamily: theme.fonts.primary,
            }}
          >
            ${product.price.toFixed(2)}
          </span>
          
          <button
            className={`flex items-center space-x-2 px-4 py-2 ${theme.layout.borderRadius} transition-all duration-200 hover:opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2`}
            style={{
              backgroundColor: theme.colors.accent,
              color: theme.colors.background,
              focusRingColor: theme.colors.accent,
            }}
          >
            <ShoppingCart className="w-4 h-4" />
            <span className={theme.fonts.bodyWeight}>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};