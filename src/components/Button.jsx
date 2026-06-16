import { Link } from "react-router-dom";

/**
 * Reusable Button.
 *
 * Renders as:
 *  - <Link>   when `to` is provided (internal route)
 *  - <a>      when `href` is provided (external link)
 *  - <button> otherwise
 *
 * Variants: primary | secondary | outline | ghost
 * Sizes: sm | md | lg
 */
const VARIANTS = {
  primary:
    "bg-accent text-ink-950 hover:bg-accent-hover shadow-[0_8px_30px_-10px_rgba(198,255,58,0.6)]",
  secondary: "bg-ink-700 text-slate-100 hover:bg-ink-600",
  outline:
    "border border-ink-600 text-slate-100 hover:border-accent hover:text-accent bg-transparent",
  ghost: "text-slate-300 hover:text-accent hover:bg-ink-800",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50",
    VARIANTS[variant],
    SIZES[size],
    disabled ? "cursor-not-allowed opacity-50 pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (to && !disabled) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
