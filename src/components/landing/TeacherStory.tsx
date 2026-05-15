import { FadeIn, Section, Eyebrow } from "./Section";
import teacher from "@/assets/teacher-daniel.jpg";
import { useT } from "@/lib/i18n";

export function TeacherStory() {
  const { t } = useT();
  const stats = [
    { value: "21+", label: t("stat_years"), emoji: "🎓" },
    { value: "4.000+", label: t("stat_students"), emoji: "👥" },
    { value: "98%", label: t("stat_complete"), emoji: "🏆" },
  ];

  return (
    <Section id="historia" className="bg-aurora">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <FadeIn>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric)]/40 via-[var(--magenta)]/30 to-[var(--ember)]/30 blur-2xl rounded-3xl animate-pulse-glow" />
            <div className="relative rounded-3xl ring-stage overflow-hidden aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube.com/embed/ViZm0WUnSMg"
                title="Daniel Estrada"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </FadeIn>

        <div>
          <FadeIn><div className="flex justify-center"><Eyebrow>{t("teacher_eyebrow")}</Eyebrow></div></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
              {t("teacher_title_1")} <span className="text-shimmer">Daniel Estrada</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>{t("teacher_p1")}</p>
              <p>{t("teacher_p2_1")} <span className="text-foreground font-semibold">{t("teacher_p2_2")}</span>{t("teacher_p2_3")}</p>
              <p>{t("teacher_p3_1")} <span className="text-foreground font-semibold">{t("teacher_p3_2")}</span>{t("teacher_p3_3")}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 text-center">
                  <div className="text-2xl emoji-3d">{s.emoji}</div>
                  <div className="mt-1 text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
