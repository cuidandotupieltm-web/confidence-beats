import { useTheme, useT } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { useState, useRef, useEffect } from "react";

const LANGS: { code: Lang; flag: string; label: string; name: string }[] = [
  { code: "es", flag: "🇪🇸", label: "ES", name: "Español" },
  { code: "en", flag: "🇺🇸", label: "EN", name: "English" },
  { code: "pt", flag: "🇧🇷", label: "PT", name: "Português" },
  { code: "fr", flag: "🇫🇷", label: "FR", name: "Français" },
];

export function LanguageThemeControls() {
  const { lang, setLang } = useT();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="lang-pill"
          aria-label="Change language"
        >
          <span className="text-lg leading-none emoji-3d">{current.flag}</span>
          <span className="font-bold">{current.label}</span>
          <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${open ? "rotate-180" : ""}`}>
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-44 rounded-2xl glass-strong p-1.5 z-50 shadow-2xl">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition hover:bg-[var(--violet)]/20 ${
                  lang === l.code ? "bg-gradient-to-r from-[var(--electric)]/20 to-[var(--magenta)]/20" : ""
                }`}
              >
                <span className="text-lg emoji-3d">{l.flag}</span>
                <span className={lang === l.code ? "text-gradient font-bold" : "font-medium"}>{l.name}</span>
                {lang === l.code && <span className="ml-auto emoji-3d">✨</span>}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={toggle}
        className="theme-switch"
        data-theme={theme}
        aria-label="Toggle theme"
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <span className="track-icon track-sun">☀️</span>
        <span className="track-icon track-moon">🌙</span>
        <span className="knob" />
      </button>
    </div>
  );
}
