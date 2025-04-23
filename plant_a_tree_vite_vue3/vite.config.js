import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'  

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
