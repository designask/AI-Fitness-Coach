import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { Menu, Close } from "./Icons.jsx";

/** Primary navigation links (single source of truth). */
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Workout Plan", to: "/workout-plan" },
  { label: "Meal Plan", to: "/meal-plan" },
  { label: "Premium", to: "/premium" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Add a subtle background once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      isActive ? "text-accent" : "text-slate-300 hover:text-white",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-700 bg-ink-950/90 backdrop-blur"
          : "border-transparent bg-ink-950/60 backdrop-blur"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/login" variant="outline" size="sm">
            Login
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-700 text-slate-200 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-ink-700 bg-ink-950 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    isActive
                      ? "bg-ink-800 text-accent"
                      : "text-slate-300 hover:bg-ink-800 hover:text-white",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/login" variant="outline" size="md" className="mt-2">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
