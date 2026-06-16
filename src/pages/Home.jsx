import Button from "../components/Button.jsx";
import Card from "../components/Card.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import AdPlaceholder from "../components/AdPlaceholder.jsx";
import PremiumPlaceholder from "../components/PremiumPlaceholder.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import { Dumbbell, Salad, ChartLine, Sparkles } from "../components/Icons.jsx";

const FEATURES = [
  {
    icon: Dumbbell,
    title: "Personalized Workout Plans",
    description:
      "Routines tailored to your fitness level, goals, available equipment and schedule.",
  },
  {
    icon: Salad,
    title: "Custom Meal Plans",
    description:
      "Nutrition plans that respect your diet type, allergies, budget and local food preferences.",
  },
  {
    icon: ChartLine,
    title: "Progress Tracking",
    description:
      "Keep an eye on your journey and adjust your plans as you get stronger and fitter.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Enter your fitness details",
    text: "Tell us about your body and lifestyle.",
  },
  {
    step: "02",
    title: "Choose your goal",
    text: "Fat loss, muscle gain, endurance and more.",
  },
  {
    step: "03",
    title: "Get your plan",
    text: "Receive a plan built around your inputs.",
  },
  {
    step: "04",
    title: "Track your progress",
    text: "Monitor results and keep improving.",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_-20%,rgba(198,255,58,0.14),transparent)]"
        />
        <div className="container-page relative py-20 sm:py-28 lg:py-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="eyebrow animate-fade-up">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered features coming soon
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build Your Fitness Journey{" "}
              <span className="text-accent">Smarter</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              Create workout and meal plans designed for your body goals.
              AI-powered features coming soon.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <Button to="/workout-plan" size="lg">
                Start Workout Plan
                <Dumbbell className="h-5 w-5" />
              </Button>
              <Button to="/meal-plan" size="lg" variant="secondary">
                Create Meal Plan
                <Salad className="h-5 w-5" />
              </Button>
              <Button to="/premium" size="lg" variant="outline">
                View Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features */}
      <section className="section border-t border-ink-800">
        <div className="container-page">
          <SectionHeading
            eyebrow="What you get"
            title="Everything you need to train smarter"
            subtitle="A complete toolkit for planning your workouts and nutrition in one clean place."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <Card key={title} hover>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="section border-t border-ink-800 bg-ink-900/40">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="From goal to plan in 4 steps"
            subtitle="A simple flow designed to get you moving without the guesswork."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(({ step, title, text }) => (
              <Card key={step} className="relative">
                <span className="text-4xl font-extrabold text-accent/30">
                  {step}
                </span>
                <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ad placeholder */}
      <section className="section border-t border-ink-800">
        <div className="container-page">
          <AdPlaceholder height="h-44" />
        </div>
      </section>

      {/* 5. Premium preview */}
      <section className="section border-t border-ink-800 bg-ink-900/40">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Go further"
              title="Upgrade for the full experience"
              subtitle="Remove ads, generate unlimited plans and keep everything saved in one place."
            />
            <PremiumPlaceholder />
          </div>
        </div>
      </section>

      {/* 6. Safety disclaimer */}
      <section className="section border-t border-ink-800">
        <div className="container-page">
          <Disclaimer />
        </div>
      </section>
    </>
  );
}
