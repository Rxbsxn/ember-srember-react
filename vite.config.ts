// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/MyReactComponent.tsx', // Your main component
      name: 'MyReactApp', // Global variable name when using UMD
      formats: ['umd'], // Build format
      fileName: (format) => `my-react-app.${format}.js`,
    },
    rollupOptions: {
      // Exclude dependencies from the bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
