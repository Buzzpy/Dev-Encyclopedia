import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      fs: false, // prevent Vite from trying to bundle 'fs'
    },
  },
});
