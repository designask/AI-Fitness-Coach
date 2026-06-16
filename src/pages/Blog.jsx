import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import AdPlaceholder from "../components/AdPlaceholder.jsx";
import { ArrowRight } from "../components/Icons.jsx";

const CATEGORIES = [
  "All",
  "Workout Tips",
  "Meal Planning",
  "Fat Loss",
  "Muscle Gain",
  "Beginner Gym Guide",
];

// Placeholder articles — real content will be added later.
const ARTICLES = [
  {
    title: "5 Workout Tips to Train Smarter, Not Harder",
    category: "Workout Tips",
    excerpt: "Simple, effective adjustments that make every session count.",
    readTime: "4 min read",
  },
  {
    title: "Meal Planning 101: Build a Week of Healthy Eating",
    category: "Meal Planning",
    excerpt: "A practical starting framework for organizing your meals.",
    readTime: "6 min read",
  },
  {
    title: "Fat Loss Basics: Calories, Protein and Consistency",
    category: "Fat Loss",
    excerpt: "The fundamentals that actually move the needle over time.",
    readTime: "5 min read",
  },
  {
    title: "Muscle Gain: How to Structure Your Training Week",
    category: "Muscle Gain",
    excerpt: "Volume, progression and recovery for steady growth.",
    readTime: "7 min read",
  },
  {
    title: "Beginner Gym Guide: Your First 30 Days",
    category: "Beginner Gym Guide",
    excerpt: "Walk into the gym with a plan and zero intimidation.",
    readTime: "8 min read",
  },
  {
    title: "Workout Tips: Warm-Ups That Prevent Injury",
    category: "Workout Tips",
    excerpt: "A few minutes of prep to keep your training on track.",
    readTime: "3 min read",
  },
];

export default function Blog() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Fitness tips & guides"
        subtitle="Practical articles on training, nutrition and building lasting habits."
      />

      <section className="section">
        <div className="container-page">
          {/* Category pills (UI only) */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((category, i) => (
              <button
                key={category}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  i === 0
                    ? "border-accent bg-accent text-ink-950"
                    : "border-ink-700 text-slate-300 hover:border-accent/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((article) => (
              <Card
                key={article.title}
                hover
                padding="p-0"
                className="flex flex-col overflow-hidden"
              >
                {/* Cover placeholder */}
                <div className="flex h-44 items-center justify-center bg-gradient-to-br from-ink-700 to-ink-850">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Article image
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="eyebrow w-fit">{article.category}</span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                    {article.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                    {article.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {article.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <AdPlaceholder height="h-40" />
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" disabled>
              Load more articles
            </Button>
            <p className="mt-2 text-xs text-slate-500">
              More articles coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
