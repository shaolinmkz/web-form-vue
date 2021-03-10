import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
      proxy: {
      // string shorthand
      // with options
      '/login': {
        target: 'https://api.jobboard.tedbree.com/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/login/, '')
      },
      '/jobs': {
        target: 'https://api.jobboard.tedbree.com/v1/jobs',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/jobs/, '')
      }
    },
    cors: false
  }
})
