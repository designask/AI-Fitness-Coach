/**
 * Generic surface card used across the site.
 * `hover` adds an interactive lift + accent border on hover.
 */
export default function Card({
  children,
  className = "",
  hover = false,
  padding = "p-6",
  ...props
}) {
  const classes = [
    "rounded-2xl border border-ink-700 bg-ink-850/80 shadow-card backdrop-blur",
    padding,
    hover
      ? "transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
