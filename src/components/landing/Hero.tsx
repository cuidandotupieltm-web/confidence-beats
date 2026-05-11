import { motion } from "framer-motion";
import hero from "@/assets/hero-drummer.jpg";
import { CTAButton } from "./CTAButton";
import { useT } from "@/lib/i18n";

export function Hero() {
  const { t } = useT();
  const badges = [
    { emoji: "✨", label: t("badge_beginners") },
    { emoji: "⏱️", label: t("badge_weeks") },
    { emoji: "🎯", label: t("badge_no_theory") },
  ];

  return (
    <section className="relative overflow-hidden bg-aurora pt-28 pb-20 md:pt-36 md:pb-28 px-6">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[920px] rounded-full bg-[var(--magenta)]/25 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative mx-auto max-w-5xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm font-semibold"
        >
          <span className="emoji-3d animate-float">🔥</span>
          <span className="text-gradient font-bold">{t("hero_badge")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.02] tracking-tight"
        >
          {t("hero_title_1")}{" "}
          <span className="text-shimmer">{t("hero_title_2")}</span>
          <br className="hidden sm:block" />
          {t("hero_title_3")}{" "}
          <span className="text-gradient-ember">{t("hero_title_4")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
        >
          {t("hero_subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <CTAButton href="#precios">{t("hero_cta")}</CTAButton>
          <div className="text-sm text-muted-foreground flex items-center gap-1.5">
            <span className="emoji-3d">🛡️</span>
            <span className="font-semibold text-foreground">{t("hero_guarantee")}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          {badges.map(({ emoji, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium"
            >
              <span className="emoji-3d">{emoji}</span>
              {label}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 w-full max-w-4xl"
        >
          <div className="relative rounded-3xl overflow-hidden ring-stage">
            <img
              src={hero}
              alt="Drummer"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-bold">
              <span className="star-gold">★</span>
              <span className="star-gold">★</span>
              <span className="star-gold">★</span>
              <span className="star-gold">★</span>
              <span className="star-gold">★</span>
              <span className="ml-1">4.9/5</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
