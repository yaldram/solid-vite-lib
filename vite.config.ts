import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import { resolve } from 'path'
import solidPlugin from 'vite-plugin-solid'

import { peerDependencies } from './package.json'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "./src/scss/variables/_borders.scss" as *;
          @use "./src/scss/variables/_fonts.scss" as *;
          @use "./src/scss/variables/_radii.scss" as *;
          @use "./src/scss/variables/_spacings.scss" as *;
          @use "./src/scss/variables/_colors.scss" as *;
        `
      }
    }
  },
  plugins: [solidPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      // eslint-disable-next-line no-undef
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index'
    },

    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      plugins: [typescript({ tsconfig: './tsconfig.json' })],
      output: {
        assetFileNames: ({ name = '' }) => {
          /**
           * Vite gives us a single style.css file
           * in the build we are moving it to the css
           * folder and renaming it to main.css
           */
          if (name === 'style.css') {
            return 'css/main.css'
          }
          return name
        }
      }
    }
  }
})
