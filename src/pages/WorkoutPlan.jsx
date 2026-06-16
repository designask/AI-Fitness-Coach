import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import PlanResult from "../components/PlanResult.jsx";
import AdPlaceholder from "../components/AdPlaceholder.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import { Dumbbell, Loader } from "../components/Icons.jsx";
import { generatePlan } from "../services/geminiService.js";

export default function WorkoutPlan() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [plan, setPlan] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());

    setLoading(true);
    setError("");
    setPlan(null);
    try {
      const result = await generatePlan("workout", formData);
      setPlan(result);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Workout Plan"
        title="Design your workout plan"
        subtitle="Fill in your details and generate a personalized plan powered by AI."
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <h2 className="text-xl font-bold text-white">Your details</h2>
              <p className="mt-1 text-sm text-slate-400">
                The more accurate your inputs, the better your plan will be.
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
                  id="fitnessLevel"
                  label="Fitness level"
                  type="select"
                  placeholder="Select level"
                  options={["Beginner", "Intermediate", "Advanced"]}
                />
                <FormField
                  id="fitnessGoal"
                  label="Fitness goal"
                  type="select"
                  placeholder="Select goal"
                  options={[
                    "Fat loss",
                    "Muscle gain",
                    "Strength",
                    "Endurance",
                    "General fitness",
                  ]}
                />
                <FormField
                  id="daysPerWeek"
                  label="Workout days per week"
                  type="select"
                  placeholder="Select days"
                  options={["1", "2", "3", "4", "5", "6", "7"]}
                />
                <FormField
                  id="duration"
                  label="Workout duration"
                  type="select"
                  placeholder="Select duration"
                  options={[
                    "15-30 minutes",
                    "30-45 minutes",
                    "45-60 minutes",
                    "60+ minutes",
                  ]}
                />
                <FormField
                  id="equipment"
                  label="Equipment access"
                  type="select"
                  placeholder="Select equipment"
                  options={[
                    "No equipment (bodyweight)",
                    "Home (dumbbells/bands)",
                    "Full gym",
                  ]}
                />
                <FormField
                  id="injuries"
                  label="Injuries or limitations"
                  type="textarea"
                  placeholder="e.g. lower back pain, knee injury (optional)"
                  className="sm:col-span-2"
                />

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full sm:w-auto"
                  >
                    {loading ? (
                      <>
                        <Loader className="h-5 w-5 animate-spin" />
                        Generating…
                      </>
                    ) : (
                      <>
                        <Dumbbell className="h-5 w-5" />
                        Generate Workout Plan
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>

            {/* Result */}
            <div className="mt-8">
              <PlanResult
                type="workout"
                loading={loading}
                error={error}
                plan={plan}
                placeholderTitle="Your personalized workout plan will appear here"
                placeholderMessage="Fill in the form above and click Generate Workout Plan to get your AI-powered routine."
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
