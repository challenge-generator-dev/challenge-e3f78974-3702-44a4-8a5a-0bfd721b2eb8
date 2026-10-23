import { useState } from 'react';
import { Product } from '@app/types/Product';
import { productService } from '@app/services/productService';

interface ProductDeleteProps {
  product: Product;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function ProductDelete({ product, onSuccess, onCancel }: ProductDeleteProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  async function handleDelete() {
    setIsDeleting(true);
    setError(null);

    try {
      await productService.deleteProduct(product.id);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Error al eliminar el producto';
      setError(message);
    } finally {
      setIsDeleting(false);
    }
  }

  function handleConfirm() {
    setShowConfirm(true);
  }

  function handleCancelConfirm() {
    setShowConfirm(false);
  }

  function handleConfirmDelete() {
    handleDelete();
    setShowConfirm(false);
  }

  return (
    <div className="product-delete-container">
      <div className="delete-confirmation">
        <h3>Confirmar eliminación</h3>

        <div className="product-info">
          <p><strong>Producto a eliminar:</strong></p>
          <div className="product-details">
            <span className="product-id">ID: {product.id}</span>
            <span className="product-name">{product.name}</span>
            <span className="product-category">Categoría: {product.category}</span>
            <span className="product-price">Precio: ${product.price.toFixed(2)}</span>
            <span className="product-stock">Stock: {product.stock} unidades</span>
          </div>
        </div>

        {error && (
          <div className="delete-error">
            <p>{error}</p>
          </div>
        )}

        {!showConfirm ? (
          <div className="delete-actions">
            <button
              onClick={handleConfirm}
              className="delete-button"
              disabled={isDeleting}
            >
              Eliminar producto
            </button>

            {onCancel && (
              <button
                onClick={onCancel}
                className="cancel-button"
                disabled={isDeleting}
              >
                Cancelar
              </button>
            )}
          </div>
        ) : (
          <div className="confirm-dialog">
            <p className="warning-message">
              ¿Está seguro de que desea eliminar este producto? Esta acción no se puede deshacer.
            </p>

            <div className="confirm-actions">
              <button
                onClick={handleConfirmDelete}
                className="confirm-delete-button"
                disabled={isDeleting}
              >
                {isDeleting ? 'Eliminando...' : 'Sí, eliminar'}
              </button>

              <button
                onClick={handleCancelConfirm}
                className="cancel-delete-button"
                disabled={isDeleting}
              >
                No, mantener
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}