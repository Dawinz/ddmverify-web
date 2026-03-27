import { ShieldCheck, BarChart3, Store, AlertTriangle, History, Globe } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Business Verification System",
    description: "Multi-layer verification checks including documents, registration, and real-world validation.",
  },
  {
    icon: BarChart3,
    title: "Trust Score Engine",
    description: "Proprietary scoring algorithm that rates every business on transparency, history, and compliance.",
  },
  {
    icon: Store,
    title: "Verified Listings Marketplace",
    description: "Browse a curated marketplace of pre-verified businesses you can transact with safely.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud Detection Signals",
    description: "Real-time alerts and risk flags so you know when something doesn't add up.",
  },
  {
    icon: History,
    title: "Saved History & Tracking",
    description: "Keep track of every business you've verified with detailed activity logs.",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Access DDM Verify in multiple languages to serve communities worldwide.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section-gradient-subtle py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to verify with confidence.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            A complete toolkit for business verification, trust building, and safe transactions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
