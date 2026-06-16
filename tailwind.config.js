/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Energetic accent color (lime/green) used across CTAs and highlights.
        accent: {
          DEFAULT: "#C6FF3A",
          hover: "#b4f01f",
          soft: "rgba(198, 255, 58, 0.12)",
        },
        // Dark theme surfaces.
        ink: {
          950: "#0a0b0d",
          900: "#0f1115",
          850: "#13161c",
          800: "#181c24",
          700: "#222732",
          600: "#2c3340",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(198,255,58,0.25), 0 8px 40px -8px rgba(198,255,58,0.35)",
        card: "0 10px 30px -12px rgba(0,0,0,0.6)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [],
};
