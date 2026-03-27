import StoreButton from "@/components/StoreButton";

const FinalCTASection = () => {
  return (
    <section id="download" className="section-gradient-dark relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-[200px] w-[200px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          Start verifying today.
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/70">
          Download DDM Verify and take control of every transaction. Free to
          use, available on iOS and Android.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <StoreButton store="apple" variant="inverted" />
          <StoreButton store="google" variant="inverted" />
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
