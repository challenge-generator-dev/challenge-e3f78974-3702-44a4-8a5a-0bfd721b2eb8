export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
}

export interface CreateProductDTO {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

export interface UpdateProductDTO {
  id: number;
  name?: string;
  description?: string;
  price?: number;
  category?: string;
  stock?: number;
  imageUrl?: string;
  isActive?: boolean;
}

export interface ProductFilters {
  category?: string;
  searchTerm?: string;
  minPrice?: number;
  maxPrice?: number;
  isActive?: boolean;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ProductQueryResult {
  success: boolean;
  data?: Product | Product[];
  message?: string;
  error?: string;
}