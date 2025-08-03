import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/hooks": path.resolve(__dirname, "./src/hooks"),
      "@/utils": path.resolve(__dirname, "./src/utils"),
      "@/types": path.resolve(__dirname, "./src/types"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/store": path.resolve(__dirname, "./src/store"),
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/constants": path.resolve(__dirname, "./src/constants"),
      "@/contexts": path.resolve(__dirname, "./src/contexts"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
    },
  },
})
