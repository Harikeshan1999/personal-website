import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personal-website/',  // Ensure this matches your repo name
  build: {
    outDir: 'build',  // Ensures correct build directory
  },
});
