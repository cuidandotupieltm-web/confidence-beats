import { FadeIn, Section, Eyebrow } from "./Section";
import { CheckCircle2 } from "lucide-react";

const modules = [
  { day: "Días 1–3", title: "Postura, agarre y primer ritmo", desc: "Aprendes a sentarte, sostener las baquetas y tocar tu primer beat con confianza." },
  { day: "Días 4–6", title: "Coordinación inteligente", desc: "Desbloqueas la coordinación de manos y pies con ejercicios cortos y efectivos." },
  { day: "Días 7–9", title: "Ritmos reales de canciones", desc: "Tocas patrones que escuchas en tu música favorita. Ya suenas como un baterista." },
  { day: "Días 10–12", title: "Fills y expresión personal", desc: "Aprendes a improvisar pequeños fills y a poner tu sello emocional en lo que tocas." },
  { day: "Días 13–14", title: "Tu primera canción completa", desc: "Cierras el curso tocando una canción de principio a fin. Sales con confianza real." },
];

export function Modules() {
  return (
    <Section id="modulos">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>Curso de 2 semanas</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            Tu transformación, <span className="text-gradient">día a día</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">
            Una ruta clara, sin perderte. Cada día sabes qué practicar y por qué.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--electric)]/50 to-transparent" />
        <div className="space-y-8">
          {modules.map((m, i) => (
            <FadeIn key={m.day} delay={i * 0.08}>
              <div className={`relative flex md:items-center gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[var(--electric)] ring-4 ring-background animate-pulse-glow" />
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="glass-strong rounded-2xl p-6 transition-all hover:-translate-y-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-[var(--ember)]">{m.day}</div>
                    <h3 className="mt-2 text-xl font-semibold">{m.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{m.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-[var(--electric)]" />
                      Práctica inteligente incluida
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
