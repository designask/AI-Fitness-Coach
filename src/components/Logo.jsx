import { Link } from "react-router-dom";
import { Dumbbell } from "./Icons.jsx";

/**
 * Brand logo: icon + "GymMate AI" wordmark, links back to home.
 */
export default function Logo({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="group flex items-center gap-2.5"
      aria-label="GymMate AI home"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-ink-950 transition-transform group-hover:scale-105">
        <Dumbbell className="h-5 w-5" />
      </span>
      <span className="text-lg font-extrabold tracking-tight text-white">
        GymMate <span className="text-accent">AI</span>
      </span>
    </Link>
  );
}
