import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: true,
  },
  base: 'https://cucumars.github.io/vue-vite-ex1/',
  
})
