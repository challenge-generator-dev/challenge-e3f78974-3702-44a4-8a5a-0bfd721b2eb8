import axios, { AxiosInstance, AxiosError } from 'axios';
import type { Product, CreateProductDTO, UpdateProductDTO, ProductFilters, ProductListResponse, ProductQueryResult } from '../types/Product';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

class ProductService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const message = error.response?.data
          ? JSON.stringify(error.response.data)
          : error.message;
        console.error('Error en ProductService:', message);
        return Promise.reject(error);
      }
    );
  }

  async getAll(filters?: ProductFilters): Promise<ProductQueryResult> {
    try {
      const params = new URLSearchParams();
      
      if (filters) {
        if (filters.category) params.append('category', filters.category);
        if (filters.searchTerm) params.append('search', filters.searchTerm);
        if (filters.minPrice !== undefined) params.append('minPrice', String(filters.minPrice));
        if (filters.maxPrice !== undefined) params.append('maxPrice', String(filters.maxPrice));
        if (filters.isActive !== undefined) params.append('isActive', String(filters.isActive));
      }

      const queryString = params.toString();
      const url = queryString ? `/products?${queryString}` : '/products';
      
      const response = await this.client.get<ProductListResponse>(url);
      
      return {
        success: true,
        data: response.data.products,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al obtener productos',
        message: 'No se pudieron cargar los productos',
      };
    }
  }

  async getById(id: number): Promise<ProductQueryResult> {
    try {
      const response = await this.client.get<Product>(`/products/${id}`);
      
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al obtener el producto',
        message: `No se encontró el producto con ID ${id}`,
      };
    }
  }

  async getByCategory(category: string): Promise<ProductQueryResult> {
    try {
      const response = await this.client.get<Product[]>(`/products/category/${category}`);
      
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al obtener productos por categoría',
        message: `No se pudieron cargar los productos de la categoría ${category}`,
      };
    }
  }

  async create(product: CreateProductDTO): Promise<ProductQueryResult> {
    try {
      const response = await this.client.post<Product>('/products', product);
      
      return {
        success: true,
        data: response.data,
        message: 'Producto creado exitosamente',
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al crear el producto',
        message: 'No se pudo crear el producto. Verifique los datos ingresados.',
      };
    }
  }

  async update(product: UpdateProductDTO): Promise<ProductQueryResult> {
    try {
      const response = await this.client.put<Product>(`/products/${product.id}`, product);
      
      return {
        success: true,
        data: response.data,
        message: 'Producto actualizado exitosamente',
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al actualizar el producto',
        message: 'No se pudo actualizar el producto. Verifique los datos ingresados.',
      };
    }
  }

  async delete(id: number): Promise<ProductQueryResult> {
    try {
      await this.client.delete(`/products/${id}`);
      
      return {
        success: true,
        message: 'Producto eliminado exitosamente',
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al eliminar el producto',
        message: 'No se pudo eliminar el producto. Intente de nuevo.',
      };
    }
  }

  async search(term: string): Promise<ProductQueryResult> {
    try {
      const response = await this.client.get<Product[]>(`/products/search?q=${encodeURIComponent(term)}`);
      
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error en la búsqueda',
        message: 'No se pudieron encontrar productos con ese término de búsqueda',
      };
    }
  }

  async updateStock(id: number, quantity: number): Promise<ProductQueryResult> {
    try {
      const response = await this.client.patch<Product>(`/products/${id}/stock`, { quantity });
      
      return {
        success: true,
        data: response.data,
        message: 'Stock actualizado exitosamente',
      };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        success: false,
        error: axiosError.message || 'Error al actualizar el stock',
        message: 'No se pudo actualizar el stock del producto.',
      };
    }
  }
}

export const productService = new ProductService();
export default productService;