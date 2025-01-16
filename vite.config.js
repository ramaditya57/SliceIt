import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SliceIt/', // Add this line for GitHub Pages deployment
});
