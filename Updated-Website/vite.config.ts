import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/website/",
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: "dist"
  }
})
