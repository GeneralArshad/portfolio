import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(),
    glsl(), // enables importing .glsl / .vert / .frag files as strings
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
