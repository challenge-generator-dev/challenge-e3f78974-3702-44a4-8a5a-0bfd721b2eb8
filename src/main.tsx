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