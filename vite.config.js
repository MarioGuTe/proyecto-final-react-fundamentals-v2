import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },
  preview: {
    port: 4270,
  },
  // build options
  build: {
    incremental: true,
    babel: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
    },

    cache: true,
    minify: true,
    cssMinify: true,
    mode: "production",
    chunks: true,
    moduleBundling: true,
    prerenderPaths: ["/"],

    modulePreload: true,
    outDir: "build",
  },
});
