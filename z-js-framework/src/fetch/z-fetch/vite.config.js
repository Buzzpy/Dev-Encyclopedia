import { defineConfig } from 'vite';
import brotli from 'rollup-plugin-brotli';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.js',
      name: 'z-fetch',
      fileName: 'z-fetch',
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: false,
        pure_funcs: ['console.log'],
      },
      mangle: {
        safari10: true,
      },
      output: {
        beautify: false,
        comments: 'some',
        preserve_annotations: true,
        semicolons: true,
      },
    },
  },
  plugins: [
    brotli(), // Apply Brotli compression
  ],
});
