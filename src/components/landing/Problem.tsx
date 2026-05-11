import { FadeIn, Section, Eyebrow, EmojiIcon } from "./Section";
import { useT } from "@/lib/i18n";

export function Problem() {
  const { t } = useT();
  const pains = [
    { emoji: "😔", tone: "violet" as const, t: t("pain_1_title"), d: t("pain_1_desc") },
    { emoji: "🌧️", tone: "electric" as const, t: t("pain_2_title"), d: t("pain_2_desc") },
    { emoji: "🧭", tone: "magenta" as const, t: t("pain_3_title"), d: t("pain_3_desc") },
    { emoji: "⏳", tone: "ember" as const, t: t("pain_4_title"), d: t("pain_4_desc") },
    { emoji: "😰", tone: "lime" as const, t: t("pain_5_title"), d: t("pain_5_desc") },
  ];
  return (
    <Section id="problema">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("problem_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("problem_title_1")} <span className="text-gradient-ember">{t("problem_title_2")}</span> {t("problem_title_3")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">{t("problem_subtitle")}</p>
        </FadeIn>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map((p, i) => (
          <FadeIn key={p.t} delay={i * 0.08}>
            <div className="group glass rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[var(--magenta)]/40">
              <EmojiIcon emoji={p.emoji} tone={p.tone} />
              <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
