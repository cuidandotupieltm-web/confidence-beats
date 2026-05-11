import { FadeIn, Section } from "./Section";
import { useT } from "@/lib/i18n";

export function Guarantee() {
  const { t } = useT();
  return (
    <Section id="garantia">
      <FadeIn>
        <div className="relative glass-strong rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric)]/20 via-[var(--magenta)]/15 to-[var(--ember)]/20" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[var(--ember)]/40 blur-2xl animate-pulse-glow" />
                <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full btn-ember flex items-center justify-center text-6xl md:text-7xl emoji-3d">
                  🛡️
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-gradient-ember">{t("guar_label")}</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">{t("guar_title")}</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{t("guar_desc")}</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
