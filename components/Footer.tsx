export default function Footer() {
  return (
    <footer
      className="relative z-10 bg-cream-base border-t border-cream-active"
      role="contentinfo"
    >
      <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: logo + tagline */}
        <div className="flex items-center gap-3">
          <img
            src="/images/xerus.svg"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <img
            src="/images/logo-svg.svg"
            alt="Xerus"
            width={64}
            height={20}
            className="h-5"
          />
          <span className="text-text-muted text-body-small hidden sm:inline">
            Build your virtual office.
          </span>
        </div>

        {/* Right: links */}
        <nav aria-label="Footer links" className="flex items-center gap-6">
          <a
            href="mailto:hello@xerus.ai"
            className="text-text-secondary text-body-small hover:text-text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="https://x.com/xerusHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary text-body-small hover:text-text-primary transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://discord.gg/xW39NNu4m6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary text-body-small hover:text-text-primary transition-colors"
          >
            Discord
          </a>
          <a
            href="/terms"
            className="text-text-secondary text-body-small hover:text-text-primary transition-colors"
          >
            Terms
          </a>
          <a
            href="/privacy"
            className="text-text-secondary text-body-small hover:text-text-primary transition-colors"
          >
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
