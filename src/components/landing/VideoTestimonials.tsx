import { FadeIn, Section, Eyebrow } from "./Section";
import { Play, Star } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import drumsDetail from "@/assets/drums-detail.jpg";

const videos = [
  { thumb: t1, name: "Carlos M.", result: "Tocó su primera canción en 9 días", quote: "Pensé que era imposible a mi edad. Hoy toco con mi banda." },
  { thumb: t2, name: "Lucía R.", result: "Recuperó la motivación de aprender", quote: "Daniel me devolvió las ganas de crear. Me siento libre." },
  { thumb: t3, name: "Andrés P.", result: "Superó el miedo escénico", quote: "Las prácticas cortas cambiaron todo. No necesito horas, necesito claridad." },
];

export function VideoTestimonials() {
  return (
    <Section id="testimonios-video" className="bg-aurora">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>Historias reales</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            Lo que dicen quienes <span className="text-gradient">ya lo lograron</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 scroll-pl-6">
        {videos.map((v, i) => (
          <FadeIn key={v.name} delay={i * 0.1}>
            <div className="snap-start min-w-[300px] sm:min-w-[360px] glass-strong rounded-3xl overflow-hidden group cursor-pointer">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={drumsDetail}
                  alt={`Testimonio de ${v.name}`}
                  width={640}
                  height={360}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full btn-glow flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <img src={v.thumb} alt={v.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
                  <div>
                    <div className="font-semibold">{v.name}</div>
                    <div className="text-xs text-[var(--ember)]">{v.result}</div>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-[var(--ember)] text-[var(--ember)]" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground italic">“{v.quote}”</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
