import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import Logo from "../components/Logo.jsx";

export default function Login() {
  // UI only — authentication is not implemented yet.
  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-md">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>

          <Card>
            <h1 className="text-center text-2xl font-extrabold text-white">
              Welcome back
            </h1>
            <p className="mt-1 text-center text-sm text-slate-400">
              Log in to continue your fitness journey.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
              <FormField
                id="loginEmail"
                label="Email"
                type="email"
                placeholder="you@example.com"
              />
              <FormField
                id="loginPassword"
                label="Password"
                type="password"
                placeholder="••••••••"
              />
              <Button type="submit" size="lg" disabled className="w-full">
                Login
              </Button>
              <p className="text-center text-xs text-slate-500">
                Authentication is not enabled in this preview build.
              </p>
            </form>
          </Card>

          <p className="mt-6 text-center text-sm text-slate-400">
            New here?{" "}
            <Link
              to="/premium"
              className="font-semibold text-accent hover:underline"
            >
              Explore Premium
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
