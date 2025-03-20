import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export const viteConfig = {
  plugins: [
    // TanStackRouterVite(),
    react(),
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  build: {
    emptyOutDir: true,
    outDir: 'dist',
  },
  server: {
    proxy: {},
    // port: 1200,
  },
};

export default defineConfig(viteConfig)
