const Privacy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: April 2026
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
          <p>
            DDM Verify ("we", "our", or "us") respects your privacy. This policy
            explains what information we collect and how we use it when you use
            the DDM Verify mobile application and website.
          </p>

          <section>
            <h2 className="text-base font-semibold text-foreground">Information We Collect</h2>
            <p>
              We may collect account details, profile information, property and
              booking interactions, and technical usage data needed to provide
              core functionality and improve service quality.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">How We Use Information</h2>
            <p>
              We use data to operate the app, provide verification workflows,
              support customer requests, maintain security, and comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Data Sharing</h2>
            <p>
              We do not sell personal information. We may share data with trusted
              service providers strictly to run app features, payment/communication
              flows, and infrastructure operations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Contact</h2>
            <p>
              For privacy questions, contact us at{" "}
              <a className="underline" href="mailto:support@ddmverify.com">
                support@ddmverify.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
