import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/suspense/',
  build: {
        rollupOptions: {
            input: {
                index: resolve(import.meta.dirname, 'index.html'),
                about: resolve(import.meta.dirname, 'pages/about.html'),
                navbar: resolve(import.meta.dirname, 'components/navbar.html'),
                shop: resolve(import.meta.dirname, 'pages/shop.html')
            }
        }
    }
})
