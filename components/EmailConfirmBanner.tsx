'use client';

import { useEffect, useState } from 'react';

export default function EmailConfirmBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hash = window.location.hash || '';
    const params = new URLSearchParams(hash.startsWith('#') ? hash.slice(1) : hash);
    if (params.get('access_token')) {
      setVisible(true);
      // Clean the URL so the token isn’t left in the address bar
      const url = window.location.pathname + window.location.search;
      window.history.replaceState(null, '', url);
    }
  }, []);

  if (!visible) return null;

  return (
    <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-medium">Email confirmed</p>
          <p className="text-xs text-emerald-200/90">
            Your email has been verified. You can now sign in to the admin portal to manage DDM Verify.
          </p>
        </div>
        <a
          href="https://admin.ddmverify.com/login"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold text-emerald-950 shadow-sm hover:bg-emerald-400 transition-colors"
        >
          Go to admin login
        </a>
      </div>
    </div>
  );
}

