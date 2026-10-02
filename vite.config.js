import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// imagetools resizes and converts images to WebP at build time, so a big
// phone photo dropped in the gallery folder still ships small.
export default defineConfig({
  plugins: [react(), imagetools()],
})
