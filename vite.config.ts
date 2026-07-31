import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  optimizeDeps: {
    include: ['react-multi-carousel'],
  },
  resolve: {
    // 1. Prevents duplicate React instances if external libraries bundle their own React
    dedupe: ['react', 'react-dom'],
  },
  build: {
    commonjsOptions: {
      // 2. Forces Vite to convert mixed CJS/ESM modules into proper React components
      transformMixedEsModules: true,
    },
  },
})
