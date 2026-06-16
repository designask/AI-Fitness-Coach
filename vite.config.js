import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path handling:
// - GitHub Pages serves the app under /AI-Fitness-Coach/, so the deploy
//   workflow sets GITHUB_PAGES=true at build time.
// - Vercel, Netlify, custom domains and local dev all serve at root ("/").
const base = process.env.GITHUB_PAGES === "true" ? "/AI-Fitness-Coach/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
