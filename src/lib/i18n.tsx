import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "./translations";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang] = useState<Lang>("es");

  const setLang = (_l: Lang) => {
    // Idioma fijo en español
  };

  const t = (key: TranslationKey): string => {
    return (translations[lang] as Record<string, string>)[key] ?? (translations.es as Record<string, string>)[key] ?? key;
  };

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useT must be used inside I18nProvider");
  return ctx;
}

// Theme
type Theme = "dark" | "light";
type ThemeCtx = { theme: Theme; toggle: () => void };
const ThemeContext = createContext<ThemeCtx | null>(null);

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("dark", "light");
  root.classList.add(theme);
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  if (typeof window !== "undefined") localStorage.setItem("theme", theme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState<Theme>("light");

  useEffect(() => {
    applyTheme("light");
  }, []);

  const toggle = () => {
    // Modo oscuro deshabilitado
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
