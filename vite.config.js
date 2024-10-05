import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["fs", "path"]
    }
  },
  resolve: {
    alias: {
      fs: "empty-module"
    }
  }
})
