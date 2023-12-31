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
    strictPort: true, //Set to true to exit if port is already in use, instead of automatically trying the next available port.
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
