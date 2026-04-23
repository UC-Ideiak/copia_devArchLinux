import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Configuración de Astro - https://astro.build/config
export default defineConfig({
  // Configuración del servidor para entorno WSL
  server: {
    host: true,
    port: 5173,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      watch: {
        usePolling: true, // Necesario en WSL para detectar cambios en disco
      },
    },
  },
});
