import { FadeIn, Section, Eyebrow } from "./Section";
import { Star, Quote } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  { img: t1, name: "Diego Fuentes", role: "Empresario, 34 años", text: "Siempre quise tocar batería pero pensaba que era tarde. En 2 semanas estaba tocando ritmos completos. Me cambió la cabeza." },
  { img: t2, name: "Mariana López", role: "Mamá, 41 años", text: "El sistema es genial porque practico solo 15 minutos al día. Mis hijos ahora me ven tocando y se inspiran." },
  { img: t3, name: "Roberto Vélez", role: "Diseñador, 52 años", text: "Daniel explica como si te tuviera al lado. Nada de teoría, todo aplicado. Es lo mejor que he probado." },
  { img: t1, name: "Felipe Soto", role: "Estudiante, 22 años", text: "Ya había intentado con otros cursos. Este fue diferente: corto, claro y emocionante. 100% recomendado." },
  { img: t2, name: "Carolina Ruiz", role: "Diseñadora, 29 años", text: "Más que aprender batería, recuperé mi confianza para aprender cosas nuevas. Vale cada centavo." },
  { img: t3, name: "Andrés Páez", role: "Ingeniero, 45 años", text: "El Sistema Práctica Inteligente es justo lo que necesitaba. Avancé más en 2 semanas que en 6 meses solo." },
];

export function WrittenTestimonials() {
  return (
    <Section id="testimonios">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>Más de 4.000 estudiantes</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            La <span className="text-gradient-ember">confianza</span> se construye tocando
          </h2>
        </FadeIn>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={(i % 3) * 0.1}>
            <div className="glass rounded-2xl p-7 h-full relative overflow-hidden">
              <Quote className="absolute top-4 right-4 h-12 w-12 text-[var(--electric)]/15" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-[var(--ember)] text-[var(--ember)]" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.name} width={48} height={48} loading="lazy" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
