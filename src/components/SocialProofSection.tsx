import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I can now verify businesses before sending money home. DDM Verify gives me peace of mind.",
    name: "Amara K.",
    role: "Entrepreneur, London",
  },
  {
    quote: "The trust scores are incredibly helpful. I avoided a fraudulent listing within my first week.",
    name: "David O.",
    role: "Investor, Toronto",
  },
  {
    quote: "Finally, a platform that understands the challenges of cross-border transactions.",
    name: "Fatima B.",
    role: "Small Business Owner, Dubai",
  },
];

const SocialProofSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Trusted Globally
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by thousands worldwide.
          </h2>
        </div>

        {/* Placeholder logos */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30">
          {["FinTrust Corp", "SafePay Global", "VerifyHub", "SecureLink", "TransactPro"].map(
            (name) => (
              <span key={name} className="text-lg font-bold tracking-tight text-foreground">
                {name}
              </span>
            )
          )}
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <div
              key={name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
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
