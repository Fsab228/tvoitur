import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// ВАЖНО: Если имя вашего репозитория отличается от 'tvoitur',
// замените '/tvoitur/' на '/ваше-имя-репозитория/'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/tvoitur/' : '/',
})

