import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "I need to know the listing went through document review and land search before I send money for a plot back home.",
    name: "Typical buyer goal",
    role: "Diaspora coordination",
  },
  {
    quote:
      "We wanted one place to track verification stages and publish a clear report to serious buyers — not vague badges.",
    name: "Agent workflow",
    role: "Listing verification",
  },
  {
    quote:
      "Hiding expired or revoked listings from the public catalog keeps the marketplace honest while agents still see their own history.",
    name: "Marketplace rule",
    role: "How the catalog behaves today",
  },
];

const SocialProofSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            What the product optimizes for
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Clear verification, not vanity metrics.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
            We do not display fabricated download counts, star ratings, or partner logos. The sections below describe
            real product goals — download the app to see the live workflow.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{quote}"</p>
              <div>
                <div className="text-sm font-semibold text-foreground">{name}</div>
                <div className="text-xs text-muted-foreground">{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
