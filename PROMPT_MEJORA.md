# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `package.json` — `typescript@5.7.0`: typescript declara la version 5.7.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee

### Brecha de conocimiento
Ejecuta consultas SQL básicas CRUD (Create, Insert, Select, Update, Delete) y de optimización como Joins, Group By y Order By, en al menos un (1) motor de base de datos como SQL Server, Oracle, PostgreSQL, MySQL, DB2 y SQLite.

### Misión / candidato
Candidato con experiencia en Frontend, desarrollador en formación que amplía su stack con competencias en bases de datos.

### Reto
- Tema: Data Manipulation Language (DML)
- Seniority: trainee-l1
- Tipo: practical
- Título: Consultando y Actualizando Datos en el Catálogo de Productos
- Tiempo estimado: 2 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Consulta de Productos — objetivo: Realizar consultas básicas para obtener información de productos. — entregable (NO resolver): Interfaz de usuario que muestra la lista de productos por categoría.
- Fase 2: Inserción de Nuevos Productos — objetivo: Insertar nuevos productos en el catálogo. — entregable (NO resolver): Formulario funcional para insertar nuevos productos y actualización de la lista de productos.
- Fase 3: Actualización de Productos Existentes — objetivo: Actualizar la información de productos existentes. — entregable (NO resolver): Formulario funcional para actualizar productos y actualización de la lista de productos.
- Fase 4: Eliminación de Productos — objetivo: Eliminar productos del catálogo. — entregable (NO resolver): Funcionalidad para eliminar productos y actualización de la lista de productos.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "product-catalog-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "axios": "^1.7.2"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.2",
    "eslint-plugin-react-hooks": "^4.6.2",
    "typescript": "^5.7.0",
    "vite": "^5.3.1"
  },
  "eslintConfig": {
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended"
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off"
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  }
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Configuración de Vite para el proyecto React con TypeScript
// Incluye soporte para alias de rutas y optimización de build

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@features': fileURLToPath(new URL('./src/app/features', import.meta.url)),
      '@services': fileURLToPath(new URL('./src/app/services', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/app/hooks', import.meta.url)),
      '@types': fileURLToPath(new URL('./src/app/types', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/app/utils', import.meta.url))
    }
  },
  server: {
    port: 3000,
    strictPort: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'axios'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  }
});

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@app/*": ["src/app/*"],
      "@features/*": ["src/app/features/*"],
      "@services/*": ["src/app/services/*"],
      "@hooks/*": ["src/app/hooks/*"],
      "@types/*": ["src/app/types/*"],
      "@utils/*": ["src/app/utils/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules"],
  "references": [{ "path": "./tsconfig.node.json" }]
}

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Punto de entrada de la aplicación React
// Monta el componente raíz App en el DOM

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('No se encontró el elemento root en el DOM');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Configuración global para manejar errores no capturados
window.addEventListener('error', (event) => {
  console.error('Error no capturado:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Rechazo de promesa no manejado:', event.reason);
});

// Registro de métricas para Core Web Vitals
if (import.meta.env.PROD) {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  }).catch(err => {
    console.error('Error al cargar web-vitals:', err);
  });
}

// === ARCHIVO: src/App.tsx ===
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from '@features/products/ProductList';
import ProductForm from '@features/products/ProductForm';
import ProductDelete from '@features/products/ProductDelete';

// Componente raíz que define las rutas de la aplicación
// Utiliza React Router para manejar la navegación entre vistas

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Catálogo de Productos</h1>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<ProductForm />} />
            <Route path="/edit/:id" element={<ProductForm />} />
            <Route path="/delete/:id" element={<ProductDelete />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

// === ARCHIVO: src/app/features/products/ProductList.tsx ===
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

// === ARCHIVO: src/app/features/products/ProductForm.tsx ===
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

// === ARCHIVO: src/app/features/products/ProductDelete.tsx ===
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


// === ARCHIVO: src/app/types/Product.ts ===

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

// === ARCHIVO: src/app/services/productService.ts ===

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

// === ARCHIVO: src/app/hooks/useProducts.ts ===

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


// === ARCHIVO: src/app/utils/validations.ts ===
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

// === ARCHIVO: src/index.html ===
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Catálogo de productos - Plataforma de comercio electrónico" />
    <meta name="keywords" content="productos, catálogo, tienda, comercio electrónico" />
    <meta name="author" content="Equipo de Desarrollo" />
    <meta name="theme-color" content="#1976d2" />
    <title>Catálogo de Productos</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f5f5f5;
        color: #333;
        line-height: 1.6;
      }
      #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        gap: 16px;
      }
      .loading-spinner {
        width: 48px;
        height: 48px;
        border: 4px solid #e0e0e0;
        border-top-color: #1976d2;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      .loading-text {
        color: #666;
        font-size: 14px;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #121212;
          color: #e0e0e0;
        }
      }
      @media (max-width: 600px) {
        body {
          font-size: 14px;
        }
      }
    </style>
  </head>
  <body>
    <div id="root">
      <div class="loading-container">
        <div class="loading-spinner"></div>
        <span class="loading-text">Cargando aplicación...</span>
      </div>
    </div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```
