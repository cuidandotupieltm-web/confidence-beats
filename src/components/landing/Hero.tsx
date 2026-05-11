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
    <section className="relative overflow-hidden bg-aurora pt-28 pb-20 md:pt-36 md:pb-28 px-6 min-h-[92vh]">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[920px] rounded-full bg-[var(--magenta)]/25 blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm font-semibold">
          <span className="emoji-3d animate-float">🔥</span>
          <span className="text-gradient font-bold">{t("hero_badge")}</span>
        </div>

        <h1 className="mt-7 text-[clamp(3.55rem,8.1vw,7.8rem)] font-black leading-[1.02] tracking-normal text-balance">
          {t("hero_title_1")} <span className="text-shimmer">{t("hero_title_2")}</span>
          <br className="hidden sm:block" />
          {t("hero_title_3")} <span className="text-gradient-ember">{t("hero_title_4")}</span>
        </h1>

        <p className="mt-6 max-w-3xl text-xl md:text-2xl leading-relaxed text-muted-foreground">
          {t("hero_subtitle")}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <CTAButton href="#precios">{t("hero_cta")}</CTAButton>
          <div className="text-sm text-muted-foreground flex items-center gap-1.5">
            <span className="emoji-3d">🛡️</span>
            <span className="font-semibold text-foreground">{t("hero_guarantee")}</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {badges.map(({ emoji, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-medium"
            >
              <span className="emoji-3d">{emoji}</span>
              {label}
            </div>
          ))}
        </div>

        <div className="relative mt-14 w-full max-w-5xl">
          <div className="relative rounded-[2rem] overflow-hidden ring-stage">
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
        </div>
      </div>
    </section>
  );
}
