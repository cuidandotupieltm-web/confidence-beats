import { useRef, useState } from "react";
import { FadeIn, Section, Eyebrow } from "./Section";
import p1 from "@/assets/testimonials/person-1.jpg";
import p2 from "@/assets/testimonials/person-2.jpg";
import p3 from "@/assets/testimonials/person-3.jpg";
import { useT } from "@/lib/i18n";

export function VideoTestimonials() {
  const { t } = useT();
  const videos = [
    { thumb: p1, src: "/videos/testimonial-1.mp4", name: "Mauricio", result: t("vt_1_result"), quote: t("vt_1_quote"), fit: "contain" as const },
    { thumb: p2, src: "/videos/testimonial-2.mp4", name: "Emilio R.", result: t("vt_2_result"), quote: t("vt_2_quote"), fit: "contain" as const },
    { thumb: p3, src: "/videos/testimonial-3.mp4", name: "Jonathan F.", result: t("vt_3_result"), quote: t("vt_3_quote"), fit: "cover" as const },
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
            <VideoCard video={v} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function VideoCard({ video }: { video: { thumb: string; src: string; name: string; result: string; quote: string; fit: "cover" | "contain" } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="snap-start min-w-[300px] sm:min-w-[360px] glass-strong rounded-3xl overflow-hidden group">
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          ref={ref}
          src={video.src}
          poster={video.thumb}
          playsInline
          preload="metadata"
          onClick={togglePlay}
          onEnded={() => setPlaying(false)}
          className={`w-full h-full ${video.fit === "contain" ? "object-contain" : "object-cover"} cursor-pointer`}
        />
        {!playing && (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={`Reproducir testimonio de ${video.name}`}
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/60 via-background/10 to-transparent"
          >
            <span className="flex items-center justify-center transition-transform group-hover:scale-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <img src={video.thumb} alt={video.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-[var(--magenta)]/40" />
          <div>
            <div className="font-semibold">{video.name}</div>
            <div className="text-xs text-gradient-ember font-semibold">{video.result}</div>
          </div>
        </div>
        <div className="mt-3 flex gap-1 text-base">
          {Array.from({ length: 5 }).map((_, idx) => (
            <span key={idx} className="star-gold star-gold-lg">★</span>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground italic">"{video.quote}"</p>
      </div>
    </div>
  );
}
