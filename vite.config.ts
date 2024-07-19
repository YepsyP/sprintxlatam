import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',  // Este es el directorio de salida para la compilación de producción
    assetsDir: 'assets',  // Este es el directorio donde Vite colocará los activos durante la compilación
  },
  publicDir: 'public'  // Este es el directorio donde se encuentran los archivos estáticos públicos
})
