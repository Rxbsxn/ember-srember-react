// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      // Entry point of your library
      entry: 'src/main.tsx', // or 'src/index.jsx' depending on your setup
      // Name of the global variable for UMD build
      name: 'MyReactApp',
      // Output formats: 'umd' for UMD module
      formats: ['umd'],
      // File name pattern
      fileName: (format) => `my-react-app.${format}.js`,
    },
    rollupOptions: {
      // External dependencies to exclude from the bundle
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables for external dependencies in UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
