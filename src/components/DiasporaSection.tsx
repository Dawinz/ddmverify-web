import diasporaHero from "@/assets/diaspora-hero.jpg";
import { CheckCircle2 } from "lucide-react";

const bullets = [
  "Verify before you pay",
  "Avoid scams and fake listings",
  "Support real, verified businesses",
];

const DiasporaSection = () => {
  return (
    <section id="diaspora" className="section-gradient-accent py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        <div className="flex-1">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={diasporaHero}
              alt="Professional woman making confident financial decisions from abroad"
              className="h-auto w-full object-cover"
              loading="lazy"
              width={800}
              height={960}
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            For the Diaspora
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Confidence, even from thousands of miles away.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Whether you're abroad sending money, investing, or supporting family,
            DDM Verify ensures every business you interact with is authentic and
            trustworthy.
          </p>
          <ul className="space-y-3 pt-2">
            {bullets.map((text) => (
              <li key={text} className="flex items-center gap-3 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DiasporaSection;
