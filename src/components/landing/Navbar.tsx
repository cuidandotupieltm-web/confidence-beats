import { useT } from "@/lib/i18n";

export function Navbar() {
  const { t } = useT();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 mt-4">
        <div className="glass rounded-2xl px-4 py-2.5 flex items-center justify-between gap-2">
          <a href="#" className="flex items-center gap-2.5 font-semibold">
            <span className="brand-logo" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </span>
            <span className="hidden sm:inline font-bold text-lg tracking-tight">Batería <span className="text-gradient">Pro</span></span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#metodo" className="hover:text-gradient transition">{t("nav_method")}</a>
            <a href="#modulos" className="hover:text-gradient transition">{t("nav_course")}</a>
            <a href="#testimonios" className="hover:text-gradient transition">{t("nav_testimonials")}</a>
            <a href="#faq" className="hover:text-gradient transition">{t("nav_faq")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#oferta"
              className="hidden sm:inline-flex items-center gap-2 rounded-full btn-glow px-4 py-2 text-sm font-black text-primary-foreground"
            >
              <span className="btn-icon-bubble btn-icon-bubble-sm" aria-hidden="true">✨</span>
              {t("nav_cta")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
