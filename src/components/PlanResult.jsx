import { Sparkles, Loader, Alert, Check } from "./Icons.jsx";

/**
 * Renders the result area beneath the workout/meal forms.
 *
 * States (in priority order):
 *  1. loading  -> spinner
 *  2. error    -> error card
 *  3. plan     -> structured workout/meal plan
 *  4. idle     -> placeholder prompt
 */
export default function PlanResult({
  type,
  loading,
  error,
  plan,
  placeholderTitle,
  placeholderMessage,
}) {
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-ink-700 bg-ink-900/60 p-10 text-center">
        <Loader className="h-9 w-9 animate-spin text-accent" />
        <div>
          <h3 className="text-lg font-bold text-white">
            Generating your plan…
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            This usually takes a few seconds.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-red-500/40 bg-red-500/5 p-6">
        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-red-500/10 text-red-400">
          <Alert className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-sm font-semibold text-white">
            Couldn’t generate the plan
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{error}</p>
        </div>
      </div>
    );
  }

  if (plan) {
    return type === "workout" ? (
      <WorkoutPlanView plan={plan} />
    ) : (
      <MealPlanView plan={plan} />
    );
  }

  // Idle placeholder
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-ink-600 bg-ink-900/50 p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent">
        <Sparkles className="h-7 w-7" />
      </span>
      <div className="max-w-md">
        <h3 className="text-lg font-bold text-white">{placeholderTitle}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {placeholderMessage}
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Workout view                                                               */
/* -------------------------------------------------------------------------- */

function WorkoutPlanView({ plan }) {
  return (
    <div className="space-y-6">
      <ResultHeader title="Your Workout Plan" summary={plan.summary} />

      <div className="grid gap-4">
        {(plan.weeklySplit || []).map((day, i) => (
          <div
            key={i}
            className="rounded-2xl border border-ink-700 bg-ink-850/80 p-5"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-bold text-white">{day.day}</h4>
              <span className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                {day.focus}
              </span>
            </div>
            <ul className="divide-y divide-ink-700/70">
              {(day.exercises || []).map((ex, j) => (
                <li
                  key={j}
                  className="flex flex-wrap items-baseline justify-between gap-2 py-2.5"
                >
                  <span className="text-sm font-medium text-slate-200">
                    {ex.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {ex.sets} sets × {ex.reps}
                    {ex.notes ? ` · ${ex.notes}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <TipsList tips={plan.tips} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Meal view                                                                  */
/* -------------------------------------------------------------------------- */

function MealPlanView({ plan }) {
  return (
    <div className="space-y-6">
      <ResultHeader title="Your Meal Plan" summary={plan.summary} />

      {(plan.dailyCalories || plan.macros) && (
        <div className="grid gap-3 sm:grid-cols-4">
          {plan.dailyCalories && (
            <StatPill label="Calories / day" value={plan.dailyCalories} />
          )}
          {plan.macros?.protein && (
            <StatPill label="Protein" value={plan.macros.protein} />
          )}
          {plan.macros?.carbs && (
            <StatPill label="Carbs" value={plan.macros.carbs} />
          )}
          {plan.macros?.fats && (
            <StatPill label="Fats" value={plan.macros.fats} />
          )}
        </div>
      )}

      <div className="grid gap-4">
        {(plan.days || []).map((day, i) => (
          <div
            key={i}
            className="rounded-2xl border border-ink-700 bg-ink-850/80 p-5"
          >
            <h4 className="mb-3 font-bold text-white">{day.day}</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {(day.meals || []).map((meal, j) => (
                <div
                  key={j}
                  className="rounded-xl border border-ink-700 bg-ink-900/50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-accent">
                      {meal.name}
                    </p>
                    {meal.calories && (
                      <span className="text-xs text-slate-500">
                        {meal.calories}
                      </span>
                    )}
                  </div>
                  <ul className="mt-2 space-y-1">
                    {(meal.items || []).map((item, k) => (
                      <li key={k} className="text-sm text-slate-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <TipsList tips={plan.tips} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Shared bits                                                                */
/* -------------------------------------------------------------------------- */

function ResultHeader({ title, summary }) {
  return (
    <div className="rounded-2xl border border-accent/30 bg-accent-soft p-5">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      {summary && (
        <p className="mt-1 text-sm leading-relaxed text-slate-300">{summary}</p>
      )}
    </div>
  );
}

function StatPill({ label, value }) {
  return (
    <div className="rounded-xl border border-ink-700 bg-ink-850/80 p-4 text-center">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

function TipsList({ tips }) {
  if (!tips?.length) return null;
  return (
    <div className="rounded-2xl border border-ink-700 bg-ink-850/80 p-5">
      <h4 className="mb-3 font-bold text-white">Tips</h4>
      <ul className="space-y-2.5">
        {tips.map((tip, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
              <Check className="h-3.5 w-3.5" />
            </span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
