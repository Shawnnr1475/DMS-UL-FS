import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DMS-UL-FS/',
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, 'src/Log/Logs.jsx'),resolve(__dirname, 'src/Prompt/Prompt.jsx')],
      name: 'MyLib',
      // the proper extensions will be added
      fileName: 'my-lib',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          React:"React",
        },
      },
    },
  },

})
