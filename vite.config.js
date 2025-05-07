import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SliceIt/', // Match the repository name exactly
  build: {
    outDir: 'dist'
  }
});
