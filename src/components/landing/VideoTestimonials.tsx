import { FadeIn, Section, Eyebrow } from "./Section";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import drumsDetail from "@/assets/drums-detail.jpg";
import { useT } from "@/lib/i18n";

export function VideoTestimonials() {
  const { t } = useT();
  const videos = [
    { thumb: t1, name: "Carlos M.", result: t("vt_1_result"), quote: t("vt_1_quote") },
    { thumb: t2, name: "Lucía R.", result: t("vt_2_result"), quote: t("vt_2_quote") },
    { thumb: t3, name: "Andrés P.", result: t("vt_3_result"), quote: t("vt_3_quote") },
  ];

  return (
    <Section id="testimonios-video" className="bg-aurora">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("vt_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("vt_title_1")} <span className="text-shimmer">{t("vt_title_2")}</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-pl-6">
        {videos.map((v, i) => (
          <FadeIn key={v.name} delay={i * 0.1}>
            <div className="snap-start min-w-[300px] sm:min-w-[360px] glass-strong rounded-3xl overflow-hidden group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img src={drumsDetail} alt={v.name} width={640} height={360} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full btn-glow flex items-center justify-center transition-transform group-hover:scale-110 text-2xl emoji-3d">
                    ▶️
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <img src={v.thumb} alt={v.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--magenta)]/40" />
                  <div>
                    <div className="font-semibold">{v.name}</div>
                    <div className="text-xs text-gradient-ember font-semibold">{v.result}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-1 text-base">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="star-gold star-gold-lg">★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">"{v.quote}"</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
