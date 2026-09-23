import { defineConfig } from 'vite'

export default defineConfig({
  // Принудительно заставляем Vite собирать относительные пути 
  // или использовать точный путь подпапки репозитория на GitHub Pages
  base: './',
})