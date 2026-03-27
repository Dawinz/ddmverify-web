import ddmLogo from "@/assets/ddm-logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="space-y-3">
            <img src={ddmLogo} alt="DDM Verify" className="h-7 w-auto" />
            <p className="max-w-xs text-sm text-muted-foreground">
              Verify businesses, build trust, and transact with confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
                Product
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground">How It Works</a></li>
                <li><a href="#download" className="hover:text-foreground">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
                Company
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
                <li><a href="#" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DDM Verify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
