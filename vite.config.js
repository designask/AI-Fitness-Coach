import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` only applies to production builds (GitHub Pages serves the app
// under /AI-Fitness-Coach/). Local dev + preview use "/" so the app loads
// at http://localhost:5173/ as expected.
//
// If you deploy elsewhere (Netlify/Vercel/custom domain), change the
// production base to "/".
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/AI-Fitness-Coach/" : "/",
}));
