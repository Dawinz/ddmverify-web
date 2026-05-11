import { ShieldCheck, ClipboardList, Store, Bell, History, Globe } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Property verification pipeline",
    description:
      "Structured stages for documents, review, and sign-off — aligned with what agents complete in the mobile app.",
  },
  {
    icon: ClipboardList,
    title: "Issued verification report",
    description:
      "Title deed checks, land-search outcome, field notes, and risk context in one place when the report is published.",
  },
  {
    icon: Store,
    title: "Verified listings catalog",
    description:
      "Public catalog surfaces listings that meet verification rules; expired or revoked listings are hidden from browse.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Push and in-app updates for verification decisions, land-search completion, and messages — when enabled on the device.",
  },
  {
    icon: History,
    title: "Activity & bookings",
    description:
      "Agents and buyers can track progress on listings, bookings, and payments through the app and API-backed history.",
  },
  {
    icon: Globe,
    title: "Diaspora-friendly workflow",
    description:
      "Designed for buyers and families coordinating from abroad who need clarity before they commit funds to a plot or home.",
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
            Built around real property deals.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            The product is intentionally narrow: verification for property listings, not a generic “trust score” for every business type.
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
