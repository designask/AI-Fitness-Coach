/**
 * Frontend client for the AI plan generator.
 *
 * Talks to our own serverless endpoint (/api/generate-plan) — never to
 * Gemini directly — so the API key stays private on the server.
 */

const ENDPOINT = "/api/generate-plan";

/**
 * @param {"workout"|"meal"} type
 * @param {Record<string, string>} formData
 * @returns {Promise<object>} the structured plan
 */
export async function generatePlan(type, formData) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, formData }),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // non-JSON response (e.g. 404 when /api isn't running locally)
  }

  if (!res.ok) {
    throw new Error(
      data?.error ||
        (res.status === 404
          ? "AI endpoint not found. Run with `vercel dev` locally, or deploy to Vercel."
          : `Request failed (${res.status}).`),
    );
  }

  return data.plan;
}
