const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')
const vue = require('@vitejs/plugin-vue')

module.exports = defineConfig({
  plugins: [react(), vue()],
  server: {
    port: 3000,
    open: true
  }
}) 