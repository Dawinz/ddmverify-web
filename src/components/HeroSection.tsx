import phoneMockup from "@/assets/phone-mockup.png";
import FloatingCard from "@/components/FloatingCard";
import StoreButton from "@/components/StoreButton";
import { Shield, CheckCircle2, Star, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-gradient-hero relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-[200px] w-[200px] rounded-full bg-primary/3 blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:gap-16 lg:py-28">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            <Shield className="h-4 w-4 text-accent" />
            Property listings with a real verification pipeline
          </div>

          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Verify the listing.
            <br />
            <span className="text-secondary">Then move forward.</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            DDM Verify is a mobile-first platform for property agents and buyers: structured
            checks, land-search tracking, and an issued verification report — not a generic
            “trust score” or automated business rating.
          </p>

          <div className="flex flex-wrap gap-4">
            <StoreButton store="apple" />
            <StoreButton store="google" />
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              Mobile app for agents and buyers
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-accent" />
              Human-reviewed verification workflow
            </span>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-8">
          <img
            src={phoneMockup}
            alt="DDM Verify app showing property verification progress"
            className="relative z-10 w-[260px] drop-shadow-2xl sm:w-[300px] lg:w-[340px]"
            width={640}
            height={1024}
          />

          <FloatingCard className="absolute left-0 top-8 z-20 animate-float sm:left-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Verified listing</div>
                <div className="text-[10px] text-muted-foreground">Pipeline + report on file</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-24 right-0 z-20 animate-float-delayed sm:right-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10">
                <Shield className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Land search</div>
                <div className="text-[10px] text-muted-foreground">Status tracked in-app</div>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute bottom-4 left-4 z-20 animate-float" style={{ animationDelay: "4s" }}>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10">
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">Admin review</div>
                <div className="text-[10px] text-muted-foreground">Needs changes or suspended</div>
              </div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
