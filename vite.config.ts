import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite';

export const config: UserConfig = {
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
        scss: {}
    }
  },
  appType: 'mpa',
  publicDir: 'assets',
  build: {
    emptyOutDir: true,
    outDir: 'dist',
  }
}

// https://vitejs.dev/config/
export default defineConfig(config)
