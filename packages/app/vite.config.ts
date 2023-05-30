import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/import-map-demo/dist/app/',
  build: {
    minify: false,
    outDir: '../../dist/app',
    rollupOptions: {
        external: (source) => source.startsWith('@baomax/web-components')
    }
  }
})
