export default function AuthConfirmPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50 px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 ring-1 ring-sky-400/40 mb-2">
          <span className="text-2xl font-semibold text-sky-400">✓</span>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Email confirmed
          </h1>
          <p className="text-sm text-slate-300">
            Your email has been successfully verified for DDM Verify.
            You can now open the mobile app and sign in with your account.
          </p>
        </div>
        <div className="space-y-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-sky-400 transition"
          >
            Back to ddmverify.com
          </a>
          <p className="text-xs text-slate-400">
            If the app does not open automatically, just return to the DDM Verify app
            and log in with your email and password.
          </p>
        </div>
      </div>
    </main>
  );
}

