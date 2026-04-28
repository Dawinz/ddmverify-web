const Support = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Support</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Need help with DDM Verify? We are here to assist.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
          <section>
            <h2 className="text-base font-semibold text-foreground">Customer Support</h2>
            <p>
              Email us at{" "}
              <a className="underline" href="mailto:support@ddmverify.com">
                support@ddmverify.com
              </a>{" "}
              for account, booking, verification, or app issues.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">Response Time</h2>
            <p>
              We aim to respond within 1-2 business days.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Support;
