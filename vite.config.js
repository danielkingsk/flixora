import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prettier from "vite-plugin-prettier";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), prettier(), tailwindcss()],
});
