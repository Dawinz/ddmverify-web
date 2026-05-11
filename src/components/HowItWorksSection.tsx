import { Search, ShieldCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "List or discover property",
    description: "Agents publish listings in the app; buyers search the catalog and open detail with photos and facts.",
  },
  {
    icon: ShieldCheck,
    step: "02",
    title: "Run the verification pipeline",
    description: "Documents, admin review, optional land search, and stage updates — surfaced in the app, not hidden.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Read the report, then decide",
    description: "When issued, the verification report summarizes findings so you can proceed with paperwork or walk away.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-primary py-24">
      {/* Subtle decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            From listing to issued report.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <div
              key={step}
              className="group rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <span className="text-sm font-bold text-primary-foreground/50">{step}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
