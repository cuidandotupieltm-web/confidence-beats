import { FadeIn, Section, Eyebrow } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useT } from "@/lib/i18n";

export function FAQ() {
  const { t } = useT();
  const faqs = [
    { q: t("faq_1_q"), a: t("faq_1_a"), e: "🥁" },
    { q: t("faq_2_q"), a: t("faq_2_a"), e: "🎂" },
    { q: t("faq_3_q"), a: t("faq_3_a"), e: "⏱️" },
    { q: t("faq_4_q"), a: t("faq_4_a"), e: "🏠" },
    { q: t("faq_5_q"), a: t("faq_5_a"), e: "🎯" },
    { q: t("faq_6_q"), a: t("faq_6_a"), e: "🛡️" },
  ];

  return (
    <Section id="faq">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{t("faq_eyebrow")}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-3xl md:text-5xl font-bold">
            <span className="text-shimmer">{t("faq_title")}</span>
          </h2>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-12 max-w-3xl mx-auto glass-strong rounded-3xl p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/10 last:border-0 px-4">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5 gap-3">
                  <span className="emoji-3d text-xl">{f.e}</span>
                  <span className="flex-1">{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5 pl-10">
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
