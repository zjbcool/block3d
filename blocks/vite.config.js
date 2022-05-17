import { resolve } from 'node:path';
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'block3d',
      fileName: (format) => `block3d.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['blockly'],
      // input: "src/main.js",
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          blockly: 'Blockly'
        }
      },
    }
  }
})
