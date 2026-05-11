import { FadeIn, Section, Eyebrow } from "./Section";
import transformation from "@/assets/transformation.jpg";
import { Check } from "lucide-react";

const before = [
  "Crees que no naciste para la música",
  "Practicas sin saber si avanzas",
  "Te frustras y abandonas",
  "Te da miedo expresarte",
];
const after = [
  "Tocas con confianza desde la semana 1",
  "Sabes exactamente qué practicar cada día",
  "Sientes progreso real y motivación",
  "Te expresas con la batería sin miedo",
];

export function Transformation() {
  return (
    <Section id="transformacion">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>La transformación</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            Más que tocar batería: <span className="text-gradient-ember">demostrarte que sí puedes</span>
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden ring-stage">
            <img
              src={transformation}
              alt="Estudiante tocando con confianza"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 h-full">
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Antes</div>
              <ul className="mt-4 space-y-3">
                {before.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground line-through">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-muted-foreground/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="glass-strong rounded-2xl p-6 h-full border-[var(--electric)]/40">
              <div className="text-xs font-bold uppercase tracking-widest text-gradient">Después</div>
              <ul className="mt-4 space-y-3">
                {after.map((a) => (
                  <li key={a} className="flex gap-3 text-sm">
                    <Check className="h-5 w-5 text-[var(--ember)] shrink-0" />
                    {a}
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
