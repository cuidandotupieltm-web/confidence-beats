import { FadeIn, Section, Eyebrow } from "./Section";
import p1 from "@/assets/testimonials/person-1.jpg";
import p2 from "@/assets/testimonials/person-2.jpg";
import p3 from "@/assets/testimonials/person-3.jpg";
import p4 from "@/assets/testimonials/person-4.jpg";
import p5 from "@/assets/testimonials/person-5.jpg";
import p6 from "@/assets/testimonials/person-6.jpg";
import { useT } from "@/lib/i18n";

export function WrittenTestimonials() {
  const { t } = useT();
  const testimonials = [
    { img: p1, name: "Mauricio", role: t("role_1"), text: t("wt_1") },
    { img: p4, name: "Mariana López", role: t("role_2"), text: t("wt_2") },
    { img: p2, name: "Emilio R.", role: t("role_3"), text: t("wt_3") },
    { img: p5, name: "Felipe Soto", role: t("role_4"), text: t("wt_4") },
    { img: p6, name: "Carolina Ruiz", role: t("role_5"), text: t("wt_5") },
    { img: p3, name: "Jonathan F.", role: t("role_6"), text: t("wt_6") },
  ];

  return (
    <Section id="testimonios">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("wt_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("wt_title_1")} <span className="text-shimmer">{t("wt_title_2")}</span> {t("wt_title_3")}
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((tm, i) => (
          <FadeIn key={i} delay={(i % 3) * 0.1}>
            <div className="glass rounded-2xl p-7 h-full relative overflow-hidden hover:-translate-y-1 transition">
              <span className="absolute top-3 right-4 text-5xl emoji-3d opacity-20">💬</span>
              <div className="flex gap-1 text-base">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="star-gold star-gold-lg">★</span>
                ))}
              </div>
              <p className="mt-4 leading-relaxed">"{tm.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={tm.img} alt={tm.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--magenta)]/40" />
                <div>
                  <div className="font-semibold">{tm.name}</div>
                  <div className="text-xs text-muted-foreground">{tm.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
