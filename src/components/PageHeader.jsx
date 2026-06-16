/**
 * Shared hero header for inner pages (Workout, Meal, Premium, Blog, Contact).
 * Provides a consistent title block with an optional eyebrow + subtitle.
 */
export default function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-ink-800 bg-ink-900">
      {/* decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_-10%,rgba(198,255,58,0.10),transparent)]"
      />
      <div className="container-page relative py-16 text-center sm:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
