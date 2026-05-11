import { FadeIn, Section, Eyebrow } from "./Section";
import teacher from "@/assets/teacher-daniel.jpg";

const stats = [
  { value: "21+", label: "años enseñando" },
  { value: "4.000+", label: "estudiantes" },
  { value: "98%", label: "completan el curso" },
];

export function TeacherStory() {
  return (
    <Section id="historia" className="bg-aurora">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
        <FadeIn>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[var(--electric)]/30 via-[var(--violet)]/20 to-[var(--ember)]/20 blur-2xl rounded-3xl" />
            <img
              src={teacher}
              alt="Daniel Estrada, profesor de batería"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative rounded-3xl ring-stage w-full h-auto object-cover"
            />
          </div>
        </FadeIn>

        <div>
          <FadeIn><Eyebrow>Tu profesor</Eyebrow></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
              Conoce a <span className="text-gradient">Daniel Estrada</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Empecé a tocar batería siendo un niño. Pero como tú, también sentí frustración: practicaba horas sin avanzar, no entendía la teoría y casi abandono.
              </p>
              <p>
                Hasta que descubrí algo: <span className="text-foreground font-semibold">no necesitaba más horas, necesitaba mejores prácticas</span>. Así nació El Sistema Práctica Inteligente.
              </p>
              <p>
                Hoy, con <span className="text-foreground font-semibold">21 años enseñando</span>, he ayudado a más de 4.000 personas a tocar con confianza — sin importar su edad ni experiencia.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-5 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
