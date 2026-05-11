import { useTheme, useT } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";

const LANGS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function LanguageThemeControls() {
  const { lang, setLang } = useT();
  const { toggle } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <div className="lang-segmented" role="tablist" aria-label="Language">
        {LANGS.map((l) => (
          <button
            key={l.code}
            role="tab"
            aria-selected={lang === l.code}
            onClick={() => setLang(l.code)}
            className={`lang-segmented-btn ${lang === l.code ? "is-active" : ""}`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <button
        onClick={toggle}
        className="theme-icon-btn"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
        <span className="theme-sun-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        </span>
        <span className="theme-moon-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
