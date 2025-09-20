import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@utils": resolve(__dirname, "src/utils"),
      "@views": resolve(__dirname, "src/views"),
      "@models": resolve(__dirname, "src/models"),
      "@controllers": resolve(__dirname, "src/controllers"),
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        checkout: resolve(__dirname, "./checkout.html"),
        pedidos: resolve(__dirname, "./pedidos.html"),
      },
    },
  },
});