import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import ResultPlaceholder from "../components/ResultPlaceholder.jsx";
import AdPlaceholder from "../components/AdPlaceholder.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import { Salad } from "../components/Icons.jsx";

export default function MealPlan() {
  // UI only — submission is intentionally disabled until AI is integrated.
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <PageHeader
        eyebrow="Meal Plan"
        title="Build your meal plan"
        subtitle="Tell us your preferences below. AI-powered meal generation will be added in the next step."
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-bold text-white">Your preferences</h2>
              <p className="mt-1 text-sm text-slate-400">
                Share your goals and food preferences for a plan that fits your
                life.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 grid gap-5 sm:grid-cols-2"
              >
                <FormField
                  id="age"
                  label="Age"
                  type="number"
                  placeholder="e.g. 28"
                  min="1"
                />
                <FormField
                  id="gender"
                  label="Gender"
                  type="select"
                  placeholder="Select gender"
                  options={["Male", "Female", "Other", "Prefer not to say"]}
                />
                <FormField
                  id="height"
                  label="Height (cm)"
                  type="number"
                  placeholder="e.g. 175"
                  min="1"
                />
                <FormField
                  id="weight"
                  label="Weight (kg)"
                  type="number"
                  placeholder="e.g. 72"
                  min="1"
                />
                <FormField
                  id="goal"
                  label="Goal"
                  type="select"
                  placeholder="Select goal"
                  options={[
                    "Fat loss",
                    "Muscle gain",
                    "Maintenance",
                    "Recomposition",
                  ]}
                />
                <FormField
                  id="dietType"
                  label="Diet type"
                  type="select"
                  placeholder="Select diet type"
                  options={[
                    "No preference",
                    "Vegetarian",
                    "Vegan",
                    "Keto",
                    "Paleo",
                    "Mediterranean",
                    "Halal",
                  ]}
                />
                <FormField
                  id="allergies"
                  label="Allergies"
                  type="text"
                  placeholder="e.g. peanuts, shellfish (optional)"
                />
                <FormField
                  id="dislikes"
                  label="Foods you dislike"
                  type="text"
                  placeholder="e.g. mushrooms, olives (optional)"
                />
                <FormField
                  id="mealsPerDay"
                  label="Meals per day"
                  type="select"
                  placeholder="Select meals"
                  options={["2", "3", "4", "5", "6"]}
                />
                <FormField
                  id="budget"
                  label="Budget level"
                  type="select"
                  placeholder="Select budget"
                  options={["Low", "Medium", "High"]}
                />
                <FormField
                  id="localFood"
                  label="Local food preference"
                  type="text"
                  placeholder="e.g. South Asian, Mediterranean (optional)"
                  className="sm:col-span-2"
                />

                <div className="sm:col-span-2">
                  {/* Disabled until AI generation is wired up. */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled
                    className="w-full sm:w-auto"
                  >
                    <Salad className="h-5 w-5" />
                    Generate Meal Plan
                  </Button>
                  <p className="mt-2 text-xs text-slate-500">
                    Generation is disabled in this preview build.
                  </p>
                </div>
              </form>
            </Card>

            {/* Result placeholder */}
            <div className="mt-8">
              <ResultPlaceholder
                title="Your customized meal plan will appear here"
                message="Your customized meal plan will appear here. AI generation will be added in the next step."
              />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            <AdPlaceholder height="h-64" />
            <Disclaimer />
          </aside>
        </div>
      </section>
    </>
  );
}
