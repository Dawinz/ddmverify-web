import EmailConfirmBanner from '../components/EmailConfirmBanner';

export default function MarketingHome() {
  return (
    <div className="container-shell py-12 sm:py-16 lg:py-20 space-y-16">
      <EmailConfirmBanner />
      <section className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-100">
            Secure document & data verification
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Verify what matters, with confidence.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-xl">
            DDM Verify helps organisations validate documents and data quickly and securely, powered by Qwanum
            Technologies. Reduce fraud, streamline onboarding, and keep your teams compliant.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-brand-400 transition-colors"
            >
              Talk to our team
            </a>
            <a
              href="https://admin.ddmverify.com"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900/60 transition-colors"
            >
              Admin portal
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-brand-500/20 blur-3xl opacity-80" />
          <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-xl shadow-brand-900/40 space-y-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
              A single place to trust your data
            </p>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                <p className="font-medium text-slate-100 text-sm">Multi-step verification flows</p>
                <p className="text-[11px] text-slate-400">
                  Combine document checks, data cross‑checks, and manual reviews into one workflow.
                </p>
              </li>
              <li className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                <p className="font-medium text-slate-100 text-sm">Built for operations teams</p>
                <p className="text-[11px] text-slate-400">
                  Dashboards and queues designed for high‑volume verification work.
                </p>
              </li>
              <li className="rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2">
                <p className="font-medium text-slate-100 text-sm">Admin & policy control</p>
                <p className="text-[11px] text-slate-400">
                  Central configuration via <span className="font-semibold">admin.ddmverify.com</span> so you stay in
                  control.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="solutions" className="space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Where DDM Verify fits</h2>
        <div className="grid gap-4 sm:grid-cols-3 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-2">
            <p className="font-medium text-slate-100">Onboarding & KYC</p>
            <p className="text-xs text-slate-400">
              Verify identities, supporting documents, and data fields before activation.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-2">
            <p className="font-medium text-slate-100">Operations & back-office</p>
            <p className="text-xs text-slate-400">
              Give operations teams structured queues instead of email threads and spreadsheets.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-2">
            <p className="font-medium text-slate-100">Compliance & audit</p>
            <p className="text-xs text-slate-400">
              Keep a clear trail of who verified what, when, and against which policy.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">Contact Qwanum Technologies</h2>
        <p className="text-sm text-slate-300 max-w-xl">
          To explore DDM Verify, integrations, or partnership opportunities, reach out to your Qwanum Technologies
          contact or use the official channel listed in your onboarding materials. Public contact details can be added
          here later.
        </p>
      </section>
    </div>
  );
}

