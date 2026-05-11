import { FadeIn, Section, Eyebrow, EmojiIcon } from "./Section";
import { useT } from "@/lib/i18n";

export function Method() {
  const { t } = useT();
  const pillars = [
    { emoji: "⚡", tone: "electric" as const, t: t("pillar_1_title"), d: t("pillar_1_desc") },
    { emoji: "🎯", tone: "magenta" as const, t: t("pillar_2_title"), d: t("pillar_2_desc") },
    { emoji: "🧠", tone: "violet" as const, t: t("pillar_3_title"), d: t("pillar_3_desc") },
    { emoji: "🚀", tone: "ember" as const, t: t("pillar_4_title"), d: t("pillar_4_desc") },
  ];
  return (
    <Section id="metodo" className="bg-aurora overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("method_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("method_title_1")} <span className="text-shimmer">{t("method_title_2")}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">{t("method_subtitle")}</p>
        </FadeIn>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map((p, i) => (
          <FadeIn key={p.t} delay={i * 0.1}>
            <div className="relative glass-strong rounded-2xl p-6 h-full overflow-hidden hover:-translate-y-1 transition">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--magenta)]/20 blur-2xl" />
              <div className="relative">
                <EmojiIcon emoji={p.emoji} tone={p.tone} />
                <h3 className="mt-5 text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
