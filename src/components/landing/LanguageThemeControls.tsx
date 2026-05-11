import { useTheme, useT } from "@/lib/i18n";
import type { Lang } from "@/lib/translations";
import { useState, useRef, useEffect } from "react";

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "pt", flag: "🇧🇷", label: "PT" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
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
          className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold hover:scale-105 transition"
          aria-label="Change language"
        >
          <span className="text-base leading-none emoji-3d">{current.flag}</span>
          <span>{current.label}</span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-32 rounded-2xl glass-strong p-1 z-50">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition hover:bg-[var(--violet)]/15 ${
                  lang === l.code ? "text-gradient font-bold" : ""
                }`}
              >
                <span className="text-base emoji-3d">{l.flag}</span>
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={toggle}
        className="inline-flex items-center justify-center h-9 w-9 rounded-full glass hover:scale-110 transition"
        aria-label="Toggle theme"
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        <span className="emoji-3d text-base leading-none">{theme === "dark" ? "☀️" : "🌙"}</span>
      </button>
    </div>
  );
}
