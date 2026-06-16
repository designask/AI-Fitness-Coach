# GymMate AI

A modern, responsive **gym & fitness website frontend**. This is the UI-only foundation — AI workout/meal generation, backend, authentication and payments are intentionally **not** included yet, but the codebase is structured to make adding them easy.

> This website provides general fitness and nutrition information only. It is not medical advice. Please consult a qualified health professional before starting any workout or diet plan.

## Tech stack

- **React 18** + **Vite 5**
- **React Router 6** (multi-page client-side routing)
- **Tailwind CSS 3** (dark theme + energetic lime accent)
- Inline SVG icons (no icon library dependency)

## Features

- Dark, modern, mobile-responsive UI
- Reusable components: `Button`, `Card`, `FormField`, `Navbar`, `Footer`, `AdPlaceholder`, `PremiumPlaceholder`, `Disclaimer`, `ResultPlaceholder`, and more
- **Pages:** Home, Workout Plan, Meal Plan, Premium, Blog, Contact (+ Login & 404 placeholders)
- Ad placeholders and Premium upsell placeholders ready to be wired up
- Workout & Meal plan forms with a disabled "Generate" button and a result placeholder card (ready for future AI integration)

## Getting started

Requires **Node.js 18+**.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

The dev server prints a local URL (default: http://localhost:5173).

## Project structure

```
src/
  components/   # Reusable UI building blocks + inline SVG icons
  pages/        # One file per route
  App.jsx       # Routes
  main.jsx      # App entry (BrowserRouter)
  index.css     # Tailwind layers + design tokens
```

## Deployment (GitHub Pages)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and deploys it to GitHub Pages on every push to `main`.

To enable it:

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. The site will be published at `https://<username>.github.io/AI-Fitness-Coach/`.

> The Vite `base` is set to `/AI-Fitness-Coach/` in `vite.config.js` to match the repository name. If you rename the repo or host elsewhere (Netlify/Vercel), change `base` to `"/"`.

## Roadmap (next steps — not included yet)

- [ ] AI-powered workout plan generation
- [ ] AI-powered meal plan generation
- [ ] Backend & database
- [ ] User authentication
- [ ] Payment / subscription integration
