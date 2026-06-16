/**
 * Consistent section header: optional eyebrow label, title and subtitle.
 * `align` controls text alignment (center by default).
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : "text-center items-center mx-auto";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}
