import { FadeIn, Section, Eyebrow } from "./Section";
import transformation from "@/assets/transformation.jpg";
import { useT } from "@/lib/i18n";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function Transformation() {
  const { t } = useT();
  const before = [t("before_1"), t("before_2"), t("before_3"), t("before_4")];
  const after = [t("after_1"), t("after_2"), t("after_3"), t("after_4")];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Section id="transformacion">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("trans_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            {t("trans_title_1")} <span className="text-gradient-ember">{t("trans_title_2")}</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden ring-stage">
            <video
              ref={videoRef}
              src="/transformation-video.mp4"
              poster={transformation}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              className="w-full h-auto object-cover block"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent pointer-events-none" />
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
              className="absolute bottom-4 right-4 inline-flex items-center justify-center h-12 w-12 rounded-full glass-strong hover:scale-105 transition shadow-lg"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 h-full">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                <span className="emoji-3d">😞</span> {t("trans_before")}
              </div>
              <ul className="mt-4 space-y-3">
                {before.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground line-through">
                    <span className="emoji-3d">❌</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-strong rounded-2xl p-6 h-full border-[var(--magenta)]/40">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gradient">
                <span className="emoji-3d">🎉</span> {t("trans_after")}
              </div>
              <ul className="mt-4 space-y-3">
                {after.map((a) => (
                  <li key={a} className="flex gap-3 text-sm">
                    <span className="emoji-3d">✅</span>{a}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
