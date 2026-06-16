/**
 * Vercel Serverless Function: POST /api/generate-plan
 *
 * Securely calls the Google Gemini API to generate a workout or meal plan.
 * The API key lives ONLY on the server (Vercel environment variable
 * `GEMINI_API_KEY`) and is never exposed to the browser.
 *
 * Request body:  { type: "workout" | "meal", formData: { ... } }
 * Response:      { plan: <structured JSON> }  or  { error: string }
 *
 * Uses Gemini's REST API directly (no SDK) with structured JSON output.
 */

const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error:
        "Server is not configured. Add the GEMINI_API_KEY environment variable in Vercel.",
    });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
    const { type, formData } = body;

    if (type !== "workout" && type !== "meal") {
      return res.status(400).json({ error: "Invalid plan type." });
    }

    const { prompt, schema } =
      type === "workout"
        ? buildWorkoutRequest(formData || {})
        : buildMealRequest(formData || {});

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`;

    const geminiRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          responseMimeType: "application/json",
          responseSchema: schema,
        },
      }),
    });

    if (!geminiRes.ok) {
      const detail = await geminiRes.text();
      return res.status(502).json({
        error: "The AI service returned an error. Please try again.",
        detail: detail.slice(0, 500),
      });
    }

    const data = await geminiRes.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res
        .status(502)
        .json({ error: "The AI returned an empty response." });
    }

    let plan;
    try {
      plan = JSON.parse(text);
    } catch {
      return res
        .status(502)
        .json({ error: "Could not parse the AI response." });
    }

    return res.status(200).json({ plan });
  } catch (err) {
    return res.status(500).json({
      error: "Unexpected server error.",
      detail: String(err?.message || err),
    });
  }
}

/* -------------------------------------------------------------------------- */
/* Prompt + schema builders                                                   */
/* -------------------------------------------------------------------------- */

const SAFETY =
  "Provide general fitness/nutrition information only. This is NOT medical advice. " +
  "Keep recommendations safe, balanced and beginner-appropriate when in doubt. " +
  "Respect any stated injuries, allergies and dislikes. Be concise.";

function buildWorkoutRequest(f) {
  const prompt = `You are a certified fitness coach. Create a personalized weekly workout plan.

User details:
- Age: ${f.age || "n/a"}
- Gender: ${f.gender || "n/a"}
- Height (cm): ${f.height || "n/a"}
- Weight (kg): ${f.weight || "n/a"}
- Fitness level: ${f.fitnessLevel || "n/a"}
- Fitness goal: ${f.fitnessGoal || "n/a"}
- Workout days per week: ${f.daysPerWeek || "n/a"}
- Workout duration: ${f.duration || "n/a"}
- Equipment access: ${f.equipment || "n/a"}
- Injuries or limitations: ${f.injuries || "none"}

Create a split that matches the number of days per week. For each training day list
specific exercises with sets and reps. Add a short summary and 3-5 practical tips.
${SAFETY}`;

  const schema = {
    type: "OBJECT",
    properties: {
      summary: { type: "STRING" },
      weeklySplit: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            day: { type: "STRING" },
            focus: { type: "STRING" },
            exercises: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  name: { type: "STRING" },
                  sets: { type: "STRING" },
                  reps: { type: "STRING" },
                  notes: { type: "STRING" },
                },
                required: ["name", "sets", "reps"],
              },
            },
          },
          required: ["day", "focus", "exercises"],
        },
      },
      tips: { type: "ARRAY", items: { type: "STRING" } },
    },
    required: ["summary", "weeklySplit", "tips"],
  };

  return { prompt, schema };
}

function buildMealRequest(f) {
  const prompt = `You are a certified nutrition coach. Create a personalized daily meal plan example.

User details:
- Age: ${f.age || "n/a"}
- Gender: ${f.gender || "n/a"}
- Height (cm): ${f.height || "n/a"}
- Weight (kg): ${f.weight || "n/a"}
- Goal: ${f.goal || "n/a"}
- Diet type: ${f.dietType || "n/a"}
- Allergies: ${f.allergies || "none"}
- Foods disliked: ${f.dislikes || "none"}
- Meals per day: ${f.mealsPerDay || "n/a"}
- Budget level: ${f.budget || "n/a"}
- Local food preference: ${f.localFood || "n/a"}

Provide an estimated daily calorie target and macro split, then a sample day with the
requested number of meals (each with example food items and approximate calories).
Add a short summary and 3-5 practical tips. Strictly avoid listed allergies and dislikes.
${SAFETY}`;

  const schema = {
    type: "OBJECT",
    properties: {
      summary: { type: "STRING" },
      dailyCalories: { type: "STRING" },
      macros: {
        type: "OBJECT",
        properties: {
          protein: { type: "STRING" },
          carbs: { type: "STRING" },
          fats: { type: "STRING" },
        },
      },
      days: {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            day: { type: "STRING" },
            meals: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  name: { type: "STRING" },
                  items: { type: "ARRAY", items: { type: "STRING" } },
                  calories: { type: "STRING" },
                },
                required: ["name", "items"],
              },
            },
          },
          required: ["day", "meals"],
        },
      },
      tips: { type: "ARRAY", items: { type: "STRING" } },
    },
    required: ["summary", "days", "tips"],
  };

  return { prompt, schema };
}
