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