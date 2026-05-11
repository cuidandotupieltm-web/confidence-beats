import { FadeIn, Section, Eyebrow } from "./Section";
import { Brain, Zap, Target, Music2 } from "lucide-react";

const pillars = [
  { icon: Zap, title: "Prácticas cortas", desc: "Sesiones de 10–15 minutos diseñadas para principiantes ocupados. Sin agotarte." },
  { icon: Target, title: "Claridad total", desc: "Cada día sabes exactamente qué tocar, por qué y qué viene después." },
  { icon: Brain, title: "Sin teoría aburrida", desc: "Aprendes tocando, sintiendo y disfrutando. Cero confusión musical." },
  { icon: Music2, title: "Resultados rápidos", desc: "En 2 semanas ya estás tocando tus primeros ritmos con confianza real." },
];

export function Method() {
  return (
    <Section id="metodo" className="bg-aurora overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>El método</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            El <span className="text-gradient">Sistema Práctica Inteligente</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">
            Diseñado para que cualquier persona — sin importar edad o experiencia — avance de verdad sin perder tiempo ni motivación.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 0.1}>
            <div className="relative glass-strong rounded-2xl p-6 h-full overflow-hidden">
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[var(--electric)]/20 blur-2xl" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl btn-glow">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground">{desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
