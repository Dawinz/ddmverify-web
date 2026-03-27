import ddmLogo from "@/assets/ddm-logo.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src={ddmLogo} alt="DDM Verify" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
          <a href="#diaspora" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            For Diaspora
          </a>
          <a
            href="#download"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download App
          </a>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 5h14M3 10h14M3 15h14" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
