import { FadeIn, Section, Eyebrow } from "./Section";
import { Frown, CloudRain, Hourglass, Compass, X } from "lucide-react";

const pains = [
  { icon: Frown, title: "“No nací para la música”", desc: "Te repites esa frase hasta creerla. Pero no es talento — es método." },
  { icon: CloudRain, title: "Frustración al practicar", desc: "Horas en YouTube sin ver progreso real. Te sientes estancado." },
  { icon: Compass, title: "Te sientes perdido", desc: "No sabes por dónde empezar ni qué practicar primero." },
  { icon: Hourglass, title: "“Ya es demasiado tarde”", desc: "Crees que tu edad es un límite. Spoiler: no lo es." },
  { icon: X, title: "Sin confianza", desc: "Te da miedo intentarlo, fallar o sonar mal frente a otros." },
];

export function Problem() {
  return (
    <Section id="problema" className="bg-background">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>El problema real</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            No es <span className="text-gradient-ember">talento</span> lo que te falta.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">
            Es claridad. Es método. Es alguien que te diga, sin teoría complicada, qué practicar hoy para sentirte avanzando mañana.
          </p>
        </FadeIn>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {pains.map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 0.08}>
            <div className="group glass rounded-2xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[var(--electric)]/40">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--electric)]/20 to-[var(--violet)]/20 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-[var(--ember)]" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
