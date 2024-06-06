import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import path from 'path'; // Import path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname, // Set alias to resolve to 'src' directory
    },
  },
});

