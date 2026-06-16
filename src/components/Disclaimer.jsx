import { Shield } from "./Icons.jsx";

const DEFAULT_TEXT =
  "This website provides general fitness and nutrition information only. It is not medical advice. Please consult a qualified health professional before starting any workout or diet plan.";

/**
 * Safety disclaimer block. Reused on the Home page and form pages.
 */
export default function Disclaimer({ text = DEFAULT_TEXT, className = "" }) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border border-ink-700 bg-ink-900/60 p-5 ${className}`}
      role="note"
    >
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-soft text-accent">
        <Shield className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">Safety Disclaimer</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
      </div>
    </div>
  );
}
