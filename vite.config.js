import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// NOTE: `base` is set for GitHub Pages deployment under
// https://<user>.github.io/AI-Fitness-Coach/
// For local dev and other hosts (Netlify/Vercel) this can be set to "/".
export default defineConfig({
  plugins: [react()],
  base: "/AI-Fitness-Coach/",
});
