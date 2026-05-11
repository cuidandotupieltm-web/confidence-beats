import { motion } from "framer-motion";
import hero from "@/assets/hero-drummer.jpg";
import mockup from "@/assets/course-mockup.jpg";
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
    <section className="relative overflow-hidden bg-aurora pt-28 pb-24 md:pt-36 md:pb-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[var(--magenta)]/25 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm font-semibold"
          >
            <span className="emoji-3d animate-float">🔥</span>
            <span className="text-gradient">{t("hero_badge")}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            {t("hero_title_1")} <span className="text-shimmer">{t("hero_title_2")}</span> {t("hero_title_3")} <span className="text-gradient-ember">{t("hero_title_4")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground"
          >
            {t("hero_subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <CTAButton>{t("hero_cta")}</CTAButton>
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              <span className="emoji-3d">🛡️</span>
              <span className="font-semibold text-foreground">{t("hero_guarantee")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {badges.map(({ emoji, label }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium">
                <span className="emoji-3d">{emoji}</span>
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden ring-stage">
            <img src={hero} alt="Drummer" width={1920} height={1080} className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1.5 text-xs font-bold">
              <span className="star-gold">★</span><span className="star-gold">★</span><span className="star-gold">★</span><span className="star-gold">★</span><span className="star-gold">★</span>
              <span className="ml-1">4.9/5</span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute -bottom-10 -left-6 md:-left-12 w-48 md:w-64 rounded-2xl overflow-hidden glass-strong p-2 animate-float"
          >
            <img src={mockup} alt="Course mockup" width={512} height={400} loading="lazy" className="w-full h-auto rounded-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
