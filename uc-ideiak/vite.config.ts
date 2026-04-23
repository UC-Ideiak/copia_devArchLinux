import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        login: './login.html',
        contacto: './contacto.html',
        thanks: './thanks.html',
        no_login: './no_login.html',
      }
    }
  }
});