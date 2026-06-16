import Button from "./Button.jsx";
import { Crown, Check } from "./Icons.jsx";

/**
 * Premium feature placeholder / preview block.
 *
 * Highlights the benefits of upgrading. Reusable on the Home page
 * preview section and anywhere we want to nudge users toward Premium.
 */
const DEFAULT_BENEFITS = [
  "Ad-free experience",
  "Unlimited plan generation",
  "Save multiple plans",
  "Download as PDF",
];

export default function PremiumPlaceholder({
  benefits = DEFAULT_BENEFITS,
  showButton = true,
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-ink-850 to-ink-900 p-8 sm:p-10">
      {/* decorative accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Crown className="h-6 w-6" />
          </span>
          <div>
            <p className="eyebrow">Premium</p>
            <h3 className="mt-1 text-2xl font-bold text-white">
              Unlock the full experience
            </h3>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-center gap-3 text-slate-200"
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check className="h-4 w-4" />
              </span>
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>

        {showButton && (
          <div>
            <Button to="/premium" size="lg">
              Upgrade to Premium
              <Crown className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
