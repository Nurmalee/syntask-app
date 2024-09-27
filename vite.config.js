import path from 'path';
import { fileURLToPath } from 'url';  // Import to handle ES module environment
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
