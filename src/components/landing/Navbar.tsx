import { motion } from "framer-motion";
import { useT } from "@/lib/i18n";
import { LanguageThemeControls } from "./LanguageThemeControls";

export function Navbar() {
  const { t } = useT();
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 mt-4">
        <div className="glass rounded-2xl px-4 py-2.5 flex items-center justify-between gap-2">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="h-9 w-9 rounded-xl btn-glow flex items-center justify-center text-lg emoji-3d">
              🥁
            </span>
            <span className="hidden sm:inline text-gradient font-bold">Batería Desde Cero</span>
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <a href="#metodo" className="hover:text-gradient transition">{t("nav_method")}</a>
            <a href="#modulos" className="hover:text-gradient transition">{t("nav_course")}</a>
            <a href="#testimonios" className="hover:text-gradient transition">{t("nav_testimonials")}</a>
            <a href="#faq" className="hover:text-gradient transition">{t("nav_faq")}</a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageThemeControls />
            <a
              href="#oferta"
              className="hidden sm:inline-flex items-center rounded-full btn-glow px-4 py-2 text-sm font-bold text-white"
            >
              ✨ {t("nav_cta")}
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
