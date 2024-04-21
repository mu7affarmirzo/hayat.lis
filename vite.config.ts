// vite.config.js
import { defineConfig } from 'vite'
import ViteReact from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [ViteReact()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/index.css";`,
      },
    },
  },
})
