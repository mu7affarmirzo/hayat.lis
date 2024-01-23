// vite.config.js
import { defineConfig } from 'vite'
import ViteReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [ViteReact()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.css";`,
      },
    },
  },
})
