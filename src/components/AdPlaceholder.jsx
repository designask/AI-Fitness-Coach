/**
 * Reusable advertisement placeholder.
 *
 * Free-tier pages can drop this in wherever an ad slot is planned.
 * When a real ad network is integrated later, swap the inner content
 * while keeping the same component API (`label`, `height`).
 */
export default function AdPlaceholder({
  label = "Advertisement Space",
  height = "h-40",
}) {
  return (
    <div
      className={`flex ${height} w-full items-center justify-center rounded-2xl border-2 border-dashed border-ink-600 bg-ink-900/60`}
      role="complementary"
      aria-label="Advertisement placeholder"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {label}
        </p>
        <p className="mt-1 text-xs text-slate-600">
          Ads are removed with Premium
        </p>
      </div>
    </div>
  );
}
