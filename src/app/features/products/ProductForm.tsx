import { useState, useEffect, FormEvent } from 'react';
import { Product, ProductCategory, CreateProductDTO, UpdateProductDTO } from '@app/types/Product';
import { productService } from '@app/services/productService';
import { validateProductName, validateProductPrice, validateProductStock, validateCategory } from '@app/utils/validations';

interface ProductFormProps {
  product?: Product | null;
  onSuccess?: () => void;
  onCancel?: () => void;
}

interface FormErrors {
  name?: string;
  description?: string;
  price?: string;
  category?: string;
  stock?: string;
}

export function ProductForm({ product, onSuccess, onCancel }: ProductFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState<ProductCategory>('electronics');
  const [stock, setStock] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isEditMode = !!product;
  const categories: ProductCategory[] = ['electronics', 'clothing', 'home', 'sports', 'books'];

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price.toString());
      setCategory(product.category);
      setStock(product.stock.toString());
    }
  }, [product]);

  function validateForm(): boolean {
    const newErrors: FormErrors = {};

    const nameValidation = validateProductName(name);
    if (!nameValidation.valid) {
      newErrors.name = nameValidation.message;
    }

    const priceValidation = validateProductPrice(parseFloat(price));
    if (!priceValidation.valid) {
      newErrors.price = priceValidation.message;
    }

    const stockValidation = validateProductStock(parseInt(stock, 10));
    if (!stockValidation.valid) {
      newErrors.stock = stockValidation.message;
    }

    if (!validateCategory(category)) {
      newErrors.category = 'Categoría no válida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const productData = {
        name: name.trim(),
        description: description.trim(),
        price: parseFloat(price),
        category,
        stock: parseInt(stock, 10),
      };

      if (isEditMode && product) {
        const updateData: UpdateProductDTO = {
          id: product.id,
          ...productData,
        };
        await productService.updateProduct(updateData);
      } else {
        const createData: CreateProductDTO = productData;
        await productService.createProduct(createData);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al guardar el producto';
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleReset() {
    setName('');
    setDescription('');
    setPrice('');
    setCategory('electronics');
    setStock('');
    setErrors({});
    setSubmitError(null);
  }

  return (
    <div className="product-form-container">
      <h2>{isEditMode ? 'Editar Producto' : 'Nuevo Producto'}</h2>

      {submitError && (
        <div className="form-error-banner">
          <p>{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="product-form" noValidate>
        <div className="form-group">
          <label htmlFor="product-name">
            Nombre del producto <span className="required">*</span>
          </label>
          <input
            type="text"
            id="product-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
            disabled={isSubmitting}
            maxLength={100}
            required
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="product-description">Descripción</label>
          <textarea
            id="product-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={errors.description ? 'input-error' : ''}
            disabled={isSubmitting}
            maxLength={500}
            rows={4}
          />
          {errors.description && <span className="error-text">{errors.description}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="product-price">
              Precio <span className="required">*</span>
            </label>
            <input
              type="number"
              id="product-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={errors.price ? 'input-error' : ''}
              disabled={isSubmitting}
              min="0"
              step="0.01"
              required
            />
            {errors.price && <span className="error-text">{errors.price}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="product-stock">
              Stock <span className="required">*</span>
            </label>
            <input
              type="number"
              id="product-stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className={errors.stock ? 'input-error' : ''}
              disabled={isSubmitting}
              min="0"
              step="1"
              required
            />
            {errors.stock && <span className="error-text">{errors.stock}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="product-category">
            Categoría <span className="required">*</span>
          </label>
          <select
            id="product-category"
            value={category}
            onChange={(e) => setCategory(e.target.value as ProductCategory)}
            className={errors.category ? 'input-error' : ''}
            disabled={isSubmitting}
            required
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          {errors.category && <span className="error-text">{errors.category}</span>}
        </div>

        <div className="form-actions">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Guardando...' : isEditMode ? 'Actualizar' : 'Crear'}
          </button>

          <button
            type="button"
            className="reset-button"
            onClick={handleReset}
            disabled={isSubmitting}
          >
            Limpiar
          </button>

          {onCancel && (
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isSubmitting}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}