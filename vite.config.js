import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      screens: {
        'movil': '250px',  // Móviles (≤639px)

        'max-sm': { 'max': '639px' },  // Móviles (≤639px)
        'max-md': { 'max': '767px' },  // Tablets pequeñas (≤767px)
        'max-lg': { 'max': '1023px' }, // Tablets grandes (≤1023px)
      }
    }
  }

  ,
  plugins: [react(), tailwindcss(),]
})
