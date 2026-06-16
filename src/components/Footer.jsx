import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { NAV_LINKS } from "./Navbar.jsx";
import { Mail, MapPin, Phone } from "./Icons.jsx";

const RESOURCE_LINKS = [
  { label: "Workout Plan", to: "/workout-plan" },
  { label: "Meal Plan", to: "/meal-plan" },
  { label: "Premium", to: "/premium" },
  { label: "Blog", to: "/blog" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Build your fitness journey smarter. Personalized workout and meal
              plans for your goals — AI-powered features coming soon.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navigate
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="flex flex-col gap-2.5">
              {RESOURCE_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-none text-accent" />
                hello@gymmate.ai
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-none text-accent" />
                +1 (555) 000-1234
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 flex-none text-accent" />
                Remote-first, Worldwide
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {year} GymMate AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            For general fitness information only — not medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
