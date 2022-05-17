import { resolve } from 'node:path';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'main.js'),
      name: 'tsdeclare',
      fileName: (format) => `tsdeclare.${format}.js`
    },
    rollupOptions: {
    }
  }
})
