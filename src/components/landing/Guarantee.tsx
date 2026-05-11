import { FadeIn, Section } from "./Section";
import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <Section id="garantia">
      <FadeIn>
        <div className="relative glass-strong rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--electric)]/15 via-transparent to-[var(--ember)]/15" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[var(--ember)]/30 blur-2xl animate-pulse-glow" />
                <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full btn-ember flex items-center justify-center">
                  <ShieldCheck className="h-16 w-16 md:h-20 md:w-20 text-white" />
                </div>
              </div>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[var(--ember)]">Garantía total</div>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold">30 días sin preguntas</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                Si en 30 días no sientes confianza real tocando batería, te devolvemos el 100% de tu inversión. Sin formularios, sin justificaciones. El riesgo es nuestro.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
