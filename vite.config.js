import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  '/api': {
    target: 'http://localhost:3001',
    changeOrigin: true,}
  })
