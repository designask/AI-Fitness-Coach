import PageHeader from "../components/PageHeader.jsx";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import FormField from "../components/FormField.jsx";
import { Mail, Phone, MapPin } from "../components/Icons.jsx";

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@gymmate.ai" },
  { icon: Phone, label: "Phone", value: "+1 (555) 000-1234" },
  { icon: MapPin, label: "Location", value: "Remote-first, Worldwide" },
];

export default function Contact() {
  // UI only — no backend wired up yet.
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Have a question or feedback? Send us a message and we'll get back to you."
      />

      <section className="section">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <form onSubmit={handleSubmit} className="grid gap-5">
                <FormField
                  id="name"
                  label="Name"
                  type="text"
                  placeholder="Your name"
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />
                <FormField
                  id="message"
                  label="Message"
                  type="textarea"
                  placeholder="How can we help?"
                />
                <div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit
                  </Button>
                  <p className="mt-2 text-xs text-slate-500">
                    This form is a UI preview — message sending will be
                    connected later.
                  </p>
                </div>
              </form>
            </Card>
          </div>

          {/* Contact info */}
          <aside>
            <Card>
              <h3 className="text-lg font-bold text-white">Contact details</h3>
              <ul className="mt-5 flex flex-col gap-5">
                {CONTACT_INFO.map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-soft text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-500">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-slate-200">
                        {value}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
