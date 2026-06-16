import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { Check, Crown, Star } from "../components/Icons.jsx";

const PLANS = [
  {
    name: "Free Plan",
    price: "$0",
    period: "forever",
    highlight: false,
    features: [
      "Limited access",
      "Ads included",
      "Basic workout form",
      "Basic meal form",
    ],
    cta: "Current Plan",
  },
  {
    name: "Monthly Premium",
    price: "$9",
    period: "/ month",
    highlight: true,
    features: [
      "No ads",
      "Unlimited workout plans",
      "Unlimited meal plans",
      "Save plans",
      "PDF download",
    ],
    cta: "Coming Soon",
  },
  {
    name: "Yearly Premium",
    price: "$79",
    period: "/ year",
    highlight: false,
    badge: "Best value",
    features: [
      "Best value",
      "No ads",
      "Unlimited plans",
      "Weekly recommendations",
      "Premium articles",
    ],
    cta: "Coming Soon",
  },
];

export default function Premium() {
  return (
    <>
      <PageHeader
        eyebrow="Premium"
        title="Choose your plan"
        subtitle="Start free and upgrade whenever you're ready. Payments are coming soon."
      />

      <section className="section">
        <div className="container-page">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={`flex flex-col ${
                  plan.highlight ? "border-accent/50 shadow-glow" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-ink-950">
                      <Star className="h-3.5 w-3.5" />
                      Popular
                    </span>
                  )}
                  {plan.badge && !plan.highlight && (
                    <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-sm text-slate-400">
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {plan.name === "Free Plan" ? (
                    <Button
                      variant="outline"
                      size="lg"
                      disabled
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button
                      variant={plan.highlight ? "primary" : "secondary"}
                      size="lg"
                      disabled
                      className="w-full"
                    >
                      <Crown className="h-5 w-5" />
                      {plan.cta}
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Payment integration is not available yet. All paid plans are marked
            &ldquo;Coming Soon&rdquo;.
          </p>
        </div>
      </section>
    </>
  );
}
