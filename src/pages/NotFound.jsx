import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <span className="text-7xl font-extrabold text-accent">404</span>
          <h1 className="mt-4 text-2xl font-bold text-white">Page not found</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8">
            <Button to="/" size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
