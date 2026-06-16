import { Sparkles } from "./Icons.jsx";

/**
 * Placeholder result card shown beneath the workout/meal forms.
 *
 * This is where AI-generated plans will render in a future step.
 * Keep the `title`/`message` API stable so swapping in real results
 * later is a drop-in change.
 */
export default function ResultPlaceholder({
  title = "Your plan will appear here",
  message,
}) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-ink-600 bg-ink-900/50 p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
        <Sparkles className="h-7 w-7" />
      </span>
      <div className="max-w-md">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{message}</p>
      </div>
      <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
        AI generation coming soon
      </span>
    </div>
  );
}
