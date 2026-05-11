import { FadeIn, Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <Section id="cta-final" className="overflow-hidden">
      <FadeIn>
        <div className="relative rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 bg-aurora" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative px-6 py-20 md:py-28 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm font-medium">
              <Clock className="h-4 w-4 text-[var(--ember)]" />
              Acceso inmediato · Empieza hoy mismo
            </div>
            <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-[1.05]">
              Hoy puede ser el día en que <span className="text-gradient">decides creer en ti</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              En 2 semanas estarás tocando, expresándote y sintiéndote orgulloso. Solo tienes que dar el primer golpe.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <CTAButton>Empezar por solo $37</CTAButton>
              <div className="text-sm text-muted-foreground">
                Garantía 30 días · Acceso de por vida
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
