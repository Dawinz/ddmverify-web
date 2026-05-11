import phonesMockup from "@/assets/phones-mockup.png";
import { Smartphone, Zap, Eye } from "lucide-react";

const MobileExperienceSection = () => {
  return (
    <section className="section-gradient-accent relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
        <div className="flex flex-1 justify-center">
          <img
            src={phonesMockup}
            alt="DDM Verify mobile app showing property verification and listing detail"
            className="w-full max-w-md drop-shadow-xl"
            loading="lazy"
            width={800}
            height={800}
          />
        </div>

        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Mobile Experience
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Built for real-world decisions.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Listing creation, verification stages, land-search updates, and the issued report are meant to be used on
            the phone first — with the API backing the same data for admin and integrations.
          </p>

          <div className="space-y-4 pt-2">
            {[
              { icon: Smartphone, text: "Native apps for iOS & Android" },
              { icon: Zap, text: "Server-driven pipeline status (no fake “instant” guarantees)" },
              { icon: Eye, text: "Readable verification report sections when published" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-sm text-foreground">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExperienceSection;
