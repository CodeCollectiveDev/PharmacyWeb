import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    allowedHosts: [
      "evolving-likely-squid.ngrok-free.app" // ✅ allow ngrok domain
    ],
    host: true, // expose to network
    port: 8080  // or whichever port you're using
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
