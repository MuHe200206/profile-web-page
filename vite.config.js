import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  build: {
    // Ensure compatibility with Azure Static Web Apps
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    // Optimize for static hosting
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
  // Ensure proper module resolution
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
