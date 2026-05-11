import { FadeIn, Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { useT } from "@/lib/i18n";

export function FinalCTA() {
  const { t } = useT();
  return (
    <Section id="cta-final" className="overflow-hidden">
      <FadeIn>
        <div className="relative rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-aurora" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative px-6 py-20 md:py-28 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm font-semibold">
              <span className="emoji-3d animate-float">⚡</span>
              <span className="text-gradient">{t("final_badge")}</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-[1.05]">
              {t("final_title_1")} <span className="text-shimmer">{t("final_title_2")}</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{t("final_desc")}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <CTAButton>{t("final_cta")}</CTAButton>
              <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                <span className="emoji-3d">🛡️</span>{t("final_micro")}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
