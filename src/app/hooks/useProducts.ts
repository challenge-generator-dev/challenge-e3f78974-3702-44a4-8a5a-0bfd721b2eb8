import { useState, useCallback, useEffect } from 'react';
import type { Product, CreateProductDTO, UpdateProductDTO, ProductFilters, ProductQueryResult } from '../types/Product';
import productService from '../services/productService';

interface UseProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  totalProducts: number;
}

interface UseProductsActions {
  fetchProducts: (filters?: ProductFilters) => Promise<void>;
  fetchProductById: (id: number) => Promise<Product | null>;
  fetchProductsByCategory: (category: string) => Promise<void>;
  createProduct: (product: CreateProductDTO) => Promise<boolean>;
  updateProduct: (product: UpdateProductDTO) => Promise<boolean>;
  deleteProduct: (id: number) => Promise<boolean>;
  searchProducts: (term: string) => Promise<void>;
  clearError: () => void;
  clearSelectedProduct: () => void;
}

type UseProductsReturn = UseProductsState & UseProductsActions;

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [totalProducts, setTotalProducts] = useState<number>(0);

  const fetchProducts = useCallback(async (filters?: ProductFilters): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.getAll(filters);
      
      if (result.success && result.data) {
        const productArray = Array.isArray(result.data) ? result.data : [result.data];
        setProducts(productArray);
        setTotalProducts(productArray.length);
      } else {
        setError(result.message || result.error || 'Error al cargar productos');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProductById = useCallback(async (id: number): Promise<Product | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.getById(id);
      
      if (result.success && result.data) {
        const product = Array.isArray(result.data) ? result.data[0] : result.data;
        setSelectedProduct(product);
        setLoading(false);
        return product;
      } else {
        setError(result.message || result.error || 'Producto no encontrado');
        setLoading(false);
        return null;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  }, []);

  const fetchProductsByCategory = useCallback(async (category: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.getByCategory(category);
      
      if (result.success && result.data) {
        const productArray = Array.isArray(result.data) ? result.data : [result.data];
        setProducts(productArray);
        setTotalProducts(productArray.length);
      } else {
        setError(result.message || result.error || 'Error al cargar productos por categoría');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const createProduct = useCallback(async (product: CreateProductDTO): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.create(product);
      
      if (result.success) {
        await fetchProducts();
        return true;
      } else {
        setError(result.message || result.error || 'Error al crear el producto');
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchProducts]);

  const updateProduct = useCallback(async (product: UpdateProductDTO): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.update(product);
      
      if (result.success) {
        await fetchProducts();
        return true;
      } else {
        setError(result.message || result.error || 'Error al actualizar el producto');
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchProducts]);

  const deleteProduct = useCallback(async (id: number): Promise<boolean> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.delete(id);
      
      if (result.success) {
        await fetchProducts();
        return true;
      } else {
        setError(result.message || result.error || 'Error al eliminar el producto');
        return false;
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
      return false;
    } finally {
      setLoading(false);
    }
  }, [fetchProducts]);

  const searchProducts = useCallback(async (term: string): Promise<void> => {
    setLoading(true);
    setError(null);
    
    try {
      const result: ProductQueryResult = await productService.search(term);
      
      if (result.success && result.data) {
        const productArray = Array.isArray(result.data) ? result.data : [result.data];
        setProducts(productArray);
        setTotalProducts(productArray.length);
      } else {
        setError(result.message || result.error || 'Error en la búsqueda');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback((): void => {
    setError(null);
  }, []);

  const clearSelectedProduct = useCallback((): void => {
    setSelectedProduct(null);
  }, []);

  return {
    products,
    loading,
    error,
    selectedProduct,
    totalProducts,
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    clearError,
    clearSelectedProduct,
  };
}

export default useProducts;