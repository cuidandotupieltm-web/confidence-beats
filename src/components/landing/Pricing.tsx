import { FadeIn, Section, Eyebrow } from "./Section";
import { useT } from "@/lib/i18n";

type Plan = {
  tag: string;
  emoji: string;
  ring: string;
  glow: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  unit: string;
  features: string[];
  cta: string;
  featured?: boolean;
  href?: string;
};

export function Pricing() {
  const { lang } = useT();

  const L = {
    es: {
      eyebrow: "Planes y precios",
      title1: "Elige tu",
      title2: "plan ideal",
      sub: "3 opciones diseñadas para llevarte de cero a tocar con confianza real.",
      bump_tag: "ORDER BUMP",
      bump_title: "Pack Acelerador de Ritmos",
      bump_sub: "Suma 10 ritmos extra estilo rock, pop y latino con audios de práctica.",
      bump_feats: ["10 ritmos pro adicionales", "Audios de práctica HD", "Acceso inmediato", "Ideal como complemento"],
      bump_cta: "Añadir al curso",
      core_tag: "MÁS VENDIDO",
      core_title: "Batería Desde Cero con Confianza",
      core_sub: "El minicurso completo. Tu transformación de 2 semanas con El Sistema Práctica Inteligente.",
      core_feats: [
        "Curso completo de 2 semanas",
        "Acceso de por vida",
        "El Sistema Práctica Inteligente",
        "Plan diario (10–15 min)",
        "Biblioteca de ritmos reales",
        "Comunidad privada",
        "Garantía 30 días",
      ],
      core_cta: "Quiero mi acceso ahora",
      up_tag: "UPSELL · PREMIUM",
      up_title: "Mentoría 1:1 con Daniel Estrada",
      up_sub: "Sesión personalizada para revisar tu progreso, corregir técnica y diseñar un plan a tu medida.",
      up_feats: ["Sesión 1:1 personalizada", "Revisión de técnica", "Plan de práctica a medida", "Soporte directo del profesor"],
      up_cta: "Reservar mi mentoría",
      perOnce: "USD · pago único",
      includes: "Incluye:",
    },
    en: {
      eyebrow: "Plans & pricing",
      title1: "Choose your",
      title2: "perfect plan",
      sub: "3 options designed to take you from zero to playing with real confidence.",
      bump_tag: "ORDER BUMP",
      bump_title: "Beats Accelerator Pack",
      bump_sub: "Add 10 extra rock, pop and Latin grooves with practice audio.",
      bump_feats: ["10 additional pro grooves", "HD practice audio", "Instant access", "Perfect add-on"],
      bump_cta: "Add to my course",
      core_tag: "BEST SELLER",
      core_title: "Drums From Zero With Confidence",
      core_sub: "The full minicourse. Your 2-week transformation with The Smart Practice System.",
      core_feats: [
        "Full 2-week course",
        "Lifetime access",
        "The Smart Practice System",
        "Daily plan (10–15 min)",
        "Real grooves library",
        "Private community",
        "30-day guarantee",
      ],
      core_cta: "Get instant access",
      up_tag: "UPSELL · PREMIUM",
      up_title: "1:1 Mentorship with Daniel Estrada",
      up_sub: "Personal session to review your progress, fix technique and design a custom plan.",
      up_feats: ["1:1 personalized session", "Technique review", "Custom practice plan", "Direct support"],
      up_cta: "Book my mentorship",
      perOnce: "USD · one-time",
      includes: "Includes:",
    },
    pt: {
      eyebrow: "Planos e preços",
      title1: "Escolha seu",
      title2: "plano ideal",
      sub: "3 opções para te levar do zero a tocar com confiança real.",
      bump_tag: "ORDER BUMP",
      bump_title: "Pack Acelerador de Ritmos",
      bump_sub: "Adicione 10 ritmos extras rock, pop e latino com áudios de prática.",
      bump_feats: ["10 ritmos pro adicionais", "Áudios HD", "Acesso imediato", "Complemento perfeito"],
      bump_cta: "Adicionar ao curso",
      core_tag: "MAIS VENDIDO",
      core_title: "Bateria Do Zero Com Confiança",
      core_sub: "O minicurso completo. Sua transformação em 2 semanas com O Sistema Prática Inteligente.",
      core_feats: [
        "Curso completo de 2 semanas",
        "Acesso vitalício",
        "O Sistema Prática Inteligente",
        "Plano diário (10–15 min)",
        "Biblioteca de ritmos",
        "Comunidade privada",
        "Garantia 30 dias",
      ],
      core_cta: "Quero meu acesso",
      up_tag: "UPSELL · PREMIUM",
      up_title: "Mentoria 1:1 com Daniel Estrada",
      up_sub: "Sessão personalizada para revisar progresso, corrigir técnica e desenhar um plano sob medida.",
      up_feats: ["Sessão 1:1", "Revisão de técnica", "Plano sob medida", "Suporte direto"],
      up_cta: "Reservar mentoria",
      perOnce: "USD · pagamento único",
      includes: "Inclui:",
    },
    fr: {
      eyebrow: "Plans & tarifs",
      title1: "Choisissez votre",
      title2: "plan idéal",
      sub: "3 options conçues pour vous mener de zéro à jouer avec une vraie confiance.",
      bump_tag: "ORDER BUMP",
      bump_title: "Pack Accélérateur de Rythmes",
      bump_sub: "Ajoutez 10 rythmes rock, pop et latino avec audios de pratique.",
      bump_feats: ["10 rythmes pro en plus", "Audios HD", "Accès immédiat", "Complément idéal"],
      bump_cta: "Ajouter au cours",
      core_tag: "BEST-SELLER",
      core_title: "Batterie Depuis Zéro Avec Confiance",
      core_sub: "Le minicours complet. Votre transformation en 2 semaines avec le Système Pratique Intelligente.",
      core_feats: [
        "Cours complet de 2 semaines",
        "Accès à vie",
        "Le Système Pratique Intelligente",
        "Plan quotidien (10–15 min)",
        "Bibliothèque de rythmes",
        "Communauté privée",
        "Garantie 30 jours",
      ],
      core_cta: "Accès immédiat",
      up_tag: "UPSELL · PREMIUM",
      up_title: "Mentorat 1:1 avec Daniel Estrada",
      up_sub: "Session personnalisée pour revoir vos progrès, corriger la technique et concevoir un plan sur mesure.",
      up_feats: ["Session 1:1", "Revue de technique", "Plan sur mesure", "Support direct"],
      up_cta: "Réserver mon mentorat",
      perOnce: "USD · paiement unique",
      includes: "Inclut :",
    },
  }[lang];

  const plans: Plan[] = [
    {
      tag: L.bump_tag,
      emoji: "🎁",
      ring: "from-[var(--lime)] to-[var(--electric)]",
      glow: "shadow-[0_20px_60px_-15px_rgba(34,211,238,0.4)]",
      title: L.bump_title,
      subtitle: L.bump_sub,
      price: "$19",
      unit: L.perOnce,
      features: L.bump_feats,
      cta: L.bump_cta,
      href: "#oferta",
    },
    {
      tag: L.core_tag,
      emoji: "🥁",
      ring: "from-[var(--electric)] via-[var(--violet)] to-[var(--magenta)]",
      glow: "shadow-[0_30px_80px_-15px_rgba(177,75,255,0.7)]",
      title: L.core_title,
      subtitle: L.core_sub,
      price: "$37",
      oldPrice: "$197",
      unit: L.perOnce,
      features: L.core_feats,
      cta: L.core_cta,
      featured: true,
      href: "#oferta",
    },
    {
      tag: L.up_tag,
      emoji: "👑",
      ring: "from-[var(--ember)] to-[var(--magenta)]",
      glow: "shadow-[0_20px_60px_-15px_rgba(255,122,26,0.45)]",
      title: L.up_title,
      subtitle: L.up_sub,
      price: "$147",
      unit: L.perOnce,
      features: L.up_feats,
      cta: L.up_cta,
      href: "#oferta",
    },
  ];

  return (
    <Section id="precios" className="bg-aurora overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{L.eyebrow}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
            {L.title1} <span className="text-shimmer">{L.title2}</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground">{L.sub}</p>
        </FadeIn>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.1}>
            <div
              className={`relative h-full rounded-3xl p-[2px] bg-gradient-to-br ${p.ring} ${p.glow} ${
                p.featured ? "lg:-translate-y-4 lg:scale-[1.04]" : ""
              } transition-transform`}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest bg-gradient-to-r from-[#FFD24A] to-[#FF7A1A] text-black shadow-[0_8px_30px_rgba(255,122,26,0.6)]">
                    <span className="emoji-3d">⭐</span> {p.tag}
                  </span>
                </div>
              )}

              <div className="relative h-full rounded-[calc(1.5rem-2px)] bg-background/85 backdrop-blur-2xl p-8 flex flex-col">
                <div className="flex items-center justify-between">
                  {!p.featured && (
                    <span className="text-[11px] font-black uppercase tracking-widest text-gradient-ember">
                      {p.tag}
                    </span>
                  )}
                  <span className={`text-3xl emoji-3d ${p.featured ? "ml-auto" : ""}`}>{p.emoji}</span>
                </div>

                <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight">
                  <span className={p.featured ? "text-shimmer" : "text-gradient"}>{p.title}</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.subtitle}</p>

                <div className="mt-6 flex items-baseline gap-3">
                  {p.oldPrice && (
                    <span className="text-lg text-muted-foreground line-through">{p.oldPrice}</span>
                  )}
                  <span className="price-neon text-6xl md:text-7xl leading-none">{p.price}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{p.unit}</div>

                <div className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {L.includes}
                </div>
                <ul className="mt-3 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <span className="emoji-3d shrink-0">✅</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href || "#oferta"}
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm md:text-base font-extrabold transition-transform hover:scale-[1.03] ${
                    p.featured
                      ? "btn-mega"
                      : "btn-glow text-white"
                  }`}
                >
                  <span className="emoji-3d">🛒</span>
                  <span>{p.cta}</span>
                  <span className="emoji-3d">→</span>
                </a>

                <div className="mt-4 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} className="star-gold star-gold-lg">★</span>
                  ))}
                  <span className="ml-2 text-xs font-semibold text-muted-foreground">4.9/5</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
