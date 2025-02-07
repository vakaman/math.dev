import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/math.dev/",
  server: {
    host: "0.0.0.0", // Permite conexões externas no Docker
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // Necessário para hot-reload no Docker
    },
  },
});
