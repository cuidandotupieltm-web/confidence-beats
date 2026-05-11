import { FadeIn, Section, Eyebrow } from "./Section";
import { CTAButton } from "./CTAButton";
import { useT } from "@/lib/i18n";

export function Offer() {
  const { t } = useT();
  const includes = [t("inc_1"), t("inc_2"), t("inc_3"), t("inc_4"), t("inc_5"), t("inc_6")];

  return (
    <Section id="oferta" className="bg-aurora overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("offer_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("offer_title_1")} <span className="text-gradient-ember">{t("offer_title_2")}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">{t("offer_subtitle")}</p>
        </FadeIn>
      </div>

      <div className="mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-6">
        <FadeIn>
          <div className="relative glass-strong rounded-3xl p-8 md:p-10 h-full overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--magenta)]/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full chip-magenta px-3 py-1 text-xs font-bold">
                <span className="emoji-3d">✨</span> {t("offer_main_badge")}
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold">{t("offer_main_title")}</h3>
              <p className="mt-3 text-muted-foreground">{t("offer_main_desc")}</p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {includes.map((it) => (
                  <li key={it} className="flex gap-3 text-sm">
                    <span className="emoji-3d shrink-0">✅</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-end gap-4">
                <div>
                  <div className="text-sm text-muted-foreground line-through">{t("offer_value")}</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-shimmer">$37</span>
                    <span className="text-muted-foreground">{t("offer_unit")}</span>
                  </div>
                </div>
                <CTAButton>{t("offer_cta")}</CTAButton>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="space-y-5">
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 border-l-4 border-[var(--ember)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gradient-ember">
                <span className="emoji-3d">🎁</span> {t("bump_badge")}
              </div>
              <h4 className="mt-2 text-lg font-semibold">{t("bump_title")}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{t("bump_desc")}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative glass-strong rounded-2xl p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--violet)]/40 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gradient">
                  <span className="emoji-3d">👑</span> {t("up_badge")}
                </div>
                <h4 className="mt-2 text-lg font-semibold">{t("up_title")}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{t("up_desc")}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{t("total_label")}</div>
              <div className="mt-1 text-3xl font-bold">
                <span className="text-muted-foreground line-through">$363</span>{" "}
                <span className="text-gradient-ember">{t("total_from")}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
