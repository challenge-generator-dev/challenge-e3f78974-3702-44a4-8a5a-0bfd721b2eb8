import { Product, ProductFormData } from '../types/Product';

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const validateProductName = (name: string): string | null => {
  if (!name || name.trim().length === 0) {
    return 'El nombre del producto es obligatorio';
  }
  if (name.trim().length < 3) {
    return 'El nombre debe tener al menos 3 caracteres';
  }
  if (name.trim().length > 100) {
    return 'El nombre no puede exceder 100 caracteres';
  }
  return null;
};

export const validateProductDescription = (description: string): string | null => {
  if (!description || description.trim().length === 0) {
    return 'La descripción es obligatoria';
  }
  if (description.trim().length < 10) {
    return 'La descripción debe tener al menos 10 caracteres';
  }
  if (description.trim().length > 500) {
    return 'La descripción no puede exceder 500 caracteres';
  }
  return null;
};

export const validateProductPrice = (price: number | string): string | null => {
  const priceNum = typeof price === 'string' ? parseFloat(price) : price;
  if (isNaN(priceNum)) {
    return 'El precio debe ser un número válido';
  }
  if (priceNum <= 0) {
    return 'El precio debe ser mayor que cero';
  }
  if (priceNum > 999999.99) {
    return 'El precio excede el límite permitido';
  }
  return null;
};

export const validateProductCategory = (category: string): string | null => {
  const validCategories = ['Electrónica', 'Ropa', 'Hogar', 'Deportes', 'Alimentos', 'Juguetes', 'Libros', 'Otros'];
  if (!category || category.trim().length === 0) {
    return 'La categoría es obligatoria';
  }
  if (!validCategories.includes(category)) {
    return `La categoría debe ser una de: ${validCategories.join(', ')}`;
  }
  return null;
};

export const validateProductStock = (stock: number | string): string | null => {
  const stockNum = typeof stock === 'string' ? parseInt(stock, 10) : stock;
  if (isNaN(stockNum)) {
    return 'El stock debe ser un número válido';
  }
  if (stockNum < 0) {
    return 'El stock no puede ser negativo';
  }
  if (stockNum > 99999) {
    return 'El stock excede el límite permitido';
  }
  return null;
};

export const validateProductSku = (sku: string): string | null => {
  if (!sku || sku.trim().length === 0) {
    return 'El SKU es obligatorio';
  }
  const skuRegex = /^[A-Z0-9-]{3,20}$/i;
  if (!skuRegex.test(sku.trim())) {
    return 'El SKU debe tener entre 3 y 20 caracteres alfanuméricos';
  }
  return null;
};

export const validateProductImageUrl = (url: string): string | null => {
  if (!url || url.trim().length === 0) {
    return null;
  }
  try {
    const urlObj = new URL(url);
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return 'La URL debe comenzar con http:// o https://';
    }
  } catch {
    return 'La URL proporcionada no es válida';
  }
  return null;
};

export const validateProductForm = (formData: Partial<ProductFormData>): ValidationResult => {
  const errors: Record<string, string> = {};

  const nameError = validateProductName(formData.name || '');
  if (nameError) errors.name = nameError;

  const descriptionError = validateProductDescription(formData.description || '');
  if (descriptionError) errors.description = descriptionError;

  const priceError = validateProductPrice(formData.price ?? '');
  if (priceError) errors.price = priceError;

  const categoryError = validateProductCategory(formData.category || '');
  if (categoryError) errors.category = categoryError;

  const stockError = validateProductStock(formData.stock ?? '');
  if (stockError) errors.stock = stockError;

  const skuError = validateProductSku(formData.sku || '');
  if (skuError) errors.sku = skuError;

  if (formData.imageUrl) {
    const imageUrlError = validateProductImageUrl(formData.imageUrl);
    if (imageUrlError) errors.imageUrl = imageUrlError;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeProductInput = (input: Partial<ProductFormData>): ProductFormData => {
  return {
    name: input.name?.trim() || '',
    description: input.description?.trim() || '',
    price: typeof input.price === 'number' ? input.price : parseFloat(String(input.price)) || 0,
    category: input.category?.trim() || '',
    stock: typeof input.stock === 'number' ? input.stock : parseInt(String(input.stock), 10) || 0,
    sku: input.sku?.trim().toUpperCase() || '',
    imageUrl: input.imageUrl?.trim() || '',
    active: input.active ?? true,
  };
};

export const validateSearchQuery = (query: string): string | null => {
  if (!query || query.trim().length === 0) {
    return 'El término de búsqueda no puede estar vacío';
  }
  if (query.trim().length < 2) {
    return 'El término de búsqueda debe tener al menos 2 caracteres';
  }
  if (query.trim().length > 50) {
    return 'El término de búsqueda no puede exceder 50 caracteres';
  }
  return null;
};

export const validatePriceRange = (minPrice: number, maxPrice: number): string | null => {
  if (isNaN(minPrice) || isNaN(maxPrice)) {
    return 'Los precios deben ser números válidos';
  }
  if (minPrice < 0 || maxPrice < 0) {
    return 'Los precios no pueden ser negativos';
  }
  if (minPrice > maxPrice) {
    return 'El precio mínimo no puede ser mayor que el precio máximo';
  }
  return null;
};

export const validateSortField = (field: string): string | null => {
  const validFields = ['name', 'price', 'stock', 'category', 'createdAt', 'updatedAt'];
  if (!validFields.includes(field)) {
    return `El campo de ordenamiento debe ser uno de: ${validFields.join(', ')}`;
  }
  return null;
};

export const validateSortOrder = (order: string): string | null => {
  const validOrders = ['asc', 'desc'];
  if (!validOrders.includes(order.toLowerCase())) {
    return 'El orden debe ser ASC o DESC';
  }
  return null;
};