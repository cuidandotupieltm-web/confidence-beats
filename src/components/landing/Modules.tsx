import { FadeIn, Section, Eyebrow } from "./Section";
import { useT } from "@/lib/i18n";

export function Modules() {
  const { t } = useT();
  const modules = [
    { day: t("mod_1_day"), title: t("mod_1_title"), desc: t("mod_1_desc"), emoji: "🥁" },
    { day: t("mod_2_day"), title: t("mod_2_title"), desc: t("mod_2_desc"), emoji: "🤝" },
    { day: t("mod_3_day"), title: t("mod_3_title"), desc: t("mod_3_desc"), emoji: "🎵" },
    { day: t("mod_4_day"), title: t("mod_4_title"), desc: t("mod_4_desc"), emoji: "✨" },
    { day: t("mod_5_day"), title: t("mod_5_title"), desc: t("mod_5_desc"), emoji: "🏆" },
  ];

  return (
    <Section id="modulos">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("mod_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("mod_title_1")} <span className="text-shimmer">{t("mod_title_2")}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">{t("mod_subtitle")}</p>
        </FadeIn>
      </div>

      <div className="mt-16 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--electric)]/0 via-[var(--magenta)]/70 to-[var(--ember)]/0" />
        <div className="space-y-8">
          {modules.map((m, i) => (
            <FadeIn key={m.day} delay={i * 0.08}>
              <div className={`relative flex md:items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-8 w-8 rounded-full icon-orb flex items-center justify-center text-sm emoji-3d ring-4 ring-background animate-pulse-glow">
                  {m.emoji}
                </div>
                <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-strong rounded-2xl p-6 transition-all hover:-translate-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-gradient-ember">{m.day}</div>
                    <h3 className="mt-2 text-xl font-semibold">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{m.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="emoji-3d">💡</span>
                      {t("mod_included")}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
