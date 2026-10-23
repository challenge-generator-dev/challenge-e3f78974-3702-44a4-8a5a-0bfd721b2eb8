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