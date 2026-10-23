import { useState, useEffect } from 'react';
import { Product, ProductCategory } from '@app/types/Product';
import { productService } from '@app/services/productService';
import { validateCategory } from '@app/utils/validations';

interface ProductListProps {
  onEdit?: (product: Product) => void;
  onDelete?: (product: Product) => void;
}

export function ProductList({ onEdit, onDelete }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | ''>('');

  const categories: ProductCategory[] = ['electronics', 'clothing', 'home', 'sports', 'books'];

  useEffect(() => {
    loadProducts(selectedCategory);
  }, [selectedCategory]);

  async function loadProducts(category: ProductCategory | '') {
    setIsLoading(true);
    setError(null);
    try {
      const categoryToValidate = category || undefined;
      if (categoryToValidate && !validateCategory(categoryToValidate)) {
        setError('Categoría no válida');
        setIsLoading(false);
        return;
      }
      const data = await productService.getProducts(categoryToValidate);
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar productos');
    } finally {
      setIsLoading(false);
    }
  }

  function handleCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as ProductCategory | '';
    setSelectedCategory(value);
  }

  function handleRefresh() {
    loadProducts(selectedCategory);
  }

  if (isLoading) {
    return (
      <div className="product-list-loading">
        <div className="spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-error">
        <p className="error-message">{error}</p>
        <button onClick={handleRefresh} className="retry-button">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Catálogo de Productos</h2>
        <div className="filter-section">
          <label htmlFor="category-filter">Filtrar por categoría:</label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-select"
          >
            <option value="">Todas las categorías</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          <button onClick={handleRefresh} className="refresh-button">
            Actualizar
          </button>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="no-products">
          <p>No se encontraron productos en esta categoría.</p>
        </div>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="product-row">
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td className="actions-cell">
                  {onEdit && (
                    <button
                      onClick={() => onEdit(product)}
                      className="edit-button"
                      aria-label={`Editar ${product.name}`}
                    >
                      Editar
                    </button>
                  )}
                  {onDelete && (
                    <button
                      onClick={() => onDelete(product)}
                      className="delete-button"
                      aria-label={`Eliminar ${product.name}`}
                    >
                      Eliminar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="product-list-footer">
        <p>Total de productos: {products.length}</p>
      </div>
    </div>
  );
}