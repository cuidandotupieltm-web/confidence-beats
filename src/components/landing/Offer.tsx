import { FadeIn, Section, Eyebrow } from "./Section";
import { Check, Sparkles, Crown, Gift } from "lucide-react";
import { CTAButton } from "./CTAButton";

const includes = [
  "Curso completo de 2 semanas (acceso de por vida)",
  "El Sistema Práctica Inteligente paso a paso",
  "Plan diario de práctica (10–15 min)",
  "Biblioteca de ritmos reales",
  "Comunidad privada de estudiantes",
  "Garantía de 30 días sin preguntas",
];

export function Offer() {
  return (
    <Section id="oferta" className="bg-aurora overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>Oferta única</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            Empieza hoy por <span className="text-gradient-ember">solo $37</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">
            Un ecosistema completo para transformar tu confianza en tan solo 2 semanas.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid lg:grid-cols-[1.3fr_1fr] gap-6">
        {/* Main offer */}
        <FadeIn>
          <div className="relative glass-strong rounded-3xl p-8 md:p-10 h-full overflow-hidden">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--electric)]/30 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--electric)]/15 px-3 py-1 text-xs font-semibold text-[var(--electric)]">
                <Sparkles className="h-3.5 w-3.5" /> Curso principal
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-bold">Batería Desde Cero con Confianza</h3>
              <p className="mt-3 text-muted-foreground">Todo lo que necesitas para tocar con confianza real en 2 semanas.</p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {includes.map((it) => (
                  <li key={it} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 text-[var(--ember)] shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-end gap-4">
                <div>
                  <div className="text-sm text-muted-foreground line-through">Valor real: $197</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-gradient">$37</span>
                    <span className="text-muted-foreground">USD · pago único</span>
                  </div>
                </div>
                <CTAButton>Quiero mi acceso ahora</CTAButton>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Stack */}
        <div className="space-y-5">
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 border-l-4 border-[var(--ember)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--ember)]">
                <Gift className="h-4 w-4" /> Order bump · +$19
              </div>
              <h4 className="mt-2 text-lg font-semibold">Pack Acelerador de Ritmos</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                10 ritmos extra estilo rock, pop y latino con audios de práctica. Para sonar más profesional desde el día 1.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative glass-strong rounded-2xl p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[var(--violet)]/30 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--violet)]">
                  <Crown className="h-4 w-4" /> Upsell · +$147
                </div>
                <h4 className="mt-2 text-lg font-semibold">Mentoría 1:1 con Daniel Estrada</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Sesión personalizada para revisar tu progreso, corregir técnica y diseñar un plan a medida.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="glass rounded-2xl p-6 text-center">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Valor total ecosistema</div>
              <div className="mt-1 text-3xl font-bold">
                <span className="text-muted-foreground line-through">$363</span>{" "}
                <span className="text-gradient-ember">desde $37</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
