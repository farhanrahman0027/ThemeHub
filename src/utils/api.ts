import { Product } from '../types/product';

const API_BASE_URL = 'https://fakestoreapi.com';

export class ApiError extends Error {
  constructor(message: string, public status?: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products?limit=12`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout and other security measures
      signal: AbortSignal.timeout(10000), // 10 second timeout
    });

    if (!response.ok) {
      throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
    }

    const data = await response.json();
    
    // Validate the response structure
    if (!Array.isArray(data)) {
      throw new ApiError('Invalid response format');
    }

    return data.map((item: any) => ({
      id: item.id || 0,
      title: item.title || 'Untitled',
      price: typeof item.price === 'number' ? item.price : 0,
      description: item.description || '',
      category: item.category || 'Uncategorized',
      image: item.image || '',
      rating: {
        rate: item.rating?.rate || 0,
        count: item.rating?.count || 0,
      },
    }));
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Failed to fetch products');
  }
};

export const fetchProductById = async (id: number): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new ApiError(`HTTP error! status: ${response.status}`, response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError('Failed to fetch product');
  }
};