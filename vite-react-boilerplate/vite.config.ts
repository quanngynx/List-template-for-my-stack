import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    cors: {
      // the origin you will be accessing via browser
      // origin: 'http://my-backend.example.com',
    },
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
})
