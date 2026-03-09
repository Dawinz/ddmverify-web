import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DDM Verify – Trusted Verification by Qwanum Technologies",
  description: "Official site for DDM Verify, a secure verification platform by Qwanum Technologies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="page-shell">
        <header className="border-b border-slate-800/80 backdrop-blur">
          <div className="container-shell flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-xs font-semibold tracking-tight text-brand-100">
                DDM
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">DDM Verify</p>
                <p className="text-xs text-slate-400">by Qwanum Technologies</p>
              </div>
            </div>
            <nav className="flex items-center gap-4 text-sm">
              <a href="#product" className="text-slate-300 hover:text-white transition-colors">
                Product
              </a>
              <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">
                Solutions
              </a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="https://admin.ddmverify.com"
                className="inline-flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-brand-400 transition-colors"
              >
                Admin login
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-slate-800/80 mt-10">
          <div className="container-shell py-6 text-xs text-slate-500 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <p>© {new Date().getFullYear()} Qwanum Technologies. All rights reserved.</p>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a
                href="/privacy-policy"
                className="text-slate-400 hover:text-slate-200 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a
                href="/terms-of-service"
                className="text-slate-400 hover:text-slate-200 underline-offset-2 hover:underline"
              >
                Terms of Service
              </a>
            </div>
            <p className="text-slate-500">
              Admins:{" "}
              <a
                href="https://admin.ddmverify.com"
                className="text-brand-300 hover:text-brand-200 underline-offset-2 hover:underline"
              >
                admin.ddmverify.com
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

