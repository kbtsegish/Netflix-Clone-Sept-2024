import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1234,
    base: "/Netflix-Clone-Sept-2024/", // Update with your repository name
  },
});

