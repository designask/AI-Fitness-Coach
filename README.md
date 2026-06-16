# GymMate AI

A modern, responsive **gym & fitness website** with **AI-powered** workout and meal plan generation (Google Gemini).

> This website provides general fitness and nutrition information only. It is not medical advice. Please consult a qualified health professional before starting any workout or diet plan.

## Tech stack

- **React 18** + **Vite 5**
- **React Router 6** (multi-page client-side routing)
- **Tailwind CSS 3** (dark theme + energetic lime accent)
- **Google Gemini API** via a **Vercel Serverless Function** (API key stays server-side)
- Inline SVG icons (no icon library dependency)

## Features

- Dark, modern, mobile-responsive UI
- Reusable components: `Button`, `Card`, `FormField`, `Navbar`, `Footer`, `AdPlaceholder`, `PremiumPlaceholder`, `Disclaimer`, `PlanResult`, and more
- **Pages:** Home, Workout Plan, Meal Plan, Premium, Blog, Contact (+ Login & 404)
- **AI workout & meal plan generation** with loading / error / result states
- Ad + Premium upsell placeholders

## How the AI integration works (secure)

```
Browser  ->  /api/generate-plan (Vercel serverless fn, holds the key)  ->  Gemini API
```

The Gemini API key is stored only as a server-side environment variable and is **never** sent to the browser.

## Getting started (local)

Requires **Node.js 18+**.

```bash
npm install
npm run dev        # UI only — the /api route is NOT available with plain vite
```

To test the **AI endpoint locally**, use the Vercel CLI (it runs the serverless function):

```bash
npm i -g vercel
vercel dev         # serves the app + /api/generate-plan
```

Create a `.env.local` (see `.env.example`) with your key:

```
GEMINI_API_KEY=your_api_key_here
```

## Deploy to Vercel (recommended)

1. Push this repo to GitHub (already done).
2. Go to <https://vercel.com> → **Add New… → Project** → import `AI-Fitness-Coach`.
3. Framework preset: **Vite** (auto-detected). Leave build settings as default.
4. **Settings → Environment Variables**, add:
   - `GEMINI_API_KEY` = your key from <https://aistudio.google.com/apikey>
   - *(optional)* `GEMINI_MODEL` = `gemini-2.5-flash`
5. **Deploy.** Your site (and the `/api/generate-plan` function) goes live at a `*.vercel.app` URL.

> On Vercel the app is served at `/`. The GitHub Pages base path (`/AI-Fitness-Coach/`) is only applied when the GitHub Actions workflow builds, so both hosts work.

## Deploy to GitHub Pages (UI only)

A workflow (`.github/workflows/deploy.yml`) builds and publishes to Pages on every push to `main`
(**Settings → Pages → Source → GitHub Actions**). Note: GitHub Pages is static-only, so the
**AI generation will not work there** — it needs the serverless function, which is why Vercel is recommended.

## Project structure

```
api/
  generate-plan.js   # Vercel serverless function -> Gemini
src/
  components/         # Reusable UI + PlanResult renderer + inline SVG icons
  pages/             # One file per route
  services/
    geminiService.js # Frontend client for /api/generate-plan
  App.jsx            # Routes
  main.jsx           # App entry
  index.css          # Tailwind layers + design tokens
vercel.json          # SPA rewrites (keeps /api routes intact)
```

## Roadmap

- [x] Responsive dark UI + all pages
- [x] AI workout plan generation (Gemini)
- [x] AI meal plan generation (Gemini)
- [ ] Save plans / PDF download (Premium)
- [ ] Backend & database
- [ ] User authentication
- [ ] Payment / subscription integration
