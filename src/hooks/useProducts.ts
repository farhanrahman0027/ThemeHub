import { useState, useEffect } from 'react';
import { Product, ProductsResponse } from '../types/product';
import { fetchProducts, ApiError } from '../utils/api';

export const useProducts = (): ProductsResponse => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        const errorMessage = err instanceof ApiError 
          ? err.message 
          : 'An unexpected error occurred';
        setError(errorMessage);
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return { products, loading, error };
};