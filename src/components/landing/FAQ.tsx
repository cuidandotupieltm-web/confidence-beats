import { FadeIn, Section, Eyebrow } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Sirve si nunca he tocado batería?", a: "Sí. Está diseñado para principiantes absolutos. No necesitas ningún conocimiento previo." },
  { q: "¿Y si soy mayor o creo que ya es tarde?", a: "Hemos enseñado a estudiantes desde 14 hasta 70 años. La edad no es un límite, la claridad sí lo es." },
  { q: "¿Cuánto tiempo necesito al día?", a: "Solo 10 a 15 minutos diarios gracias al Sistema Práctica Inteligente. Es perfecto para personas ocupadas." },
  { q: "¿Necesito tener batería en casa?", a: "Puedes empezar con una almohada o practicador de goma. Igual te mostramos opciones económicas si decides invertir." },
  { q: "¿Y si me cuesta seguir el ritmo?", a: "El curso va paso a paso. Puedes repetir cada lección las veces que quieras y avanzar a tu ritmo." },
  { q: "¿Funciona la garantía de verdad?", a: "Sí. Tienes 30 días para probar todo el curso. Si no es para ti, te devolvemos el 100% sin preguntas." },
];

export function FAQ() {
  return (
    <Section id="faq">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>Resolvamos tus dudas</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">Preguntas frecuentes</h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-12 max-w-3xl mx-auto glass-strong rounded-3xl p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10 last:border-0 px-4">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
    </Section>
  );
}
