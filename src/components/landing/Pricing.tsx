import { FadeIn, Section, Eyebrow } from "./Section";
import { useT } from "@/lib/i18n";

type Plan = {
  icon: string;
  tag: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  unit: string;
  features: string[];
  cta: string;
  featured?: boolean;
  tone: "cyan" | "magenta" | "ember";
  href?: string;
};

const Check = () => (
  <span className="price-check">
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

export function Pricing() {
  const { lang } = useT();

  const L = {
    es: {
      eyebrow: "Planes y precios",
      title: "Planes y precios",
      sub: "Elige el plan perfecto para tu camino con la batería.",
      popular: "Más popular",
      bump_tag: "Order Bump",
      bump_title: "Pack Acelerador",
      bump_sub: "10 ritmos extra rock, pop y latino.",
      bump_feats: ["10 ritmos pro adicionales", "Audios de práctica HD", "Acceso inmediato", "Complemento ideal"],
      bump_cta: "Empezar",
      core_title: "Curso Completo",
      core_sub: "El minicurso para tu transformación de 2 semanas.",
      core_feats: ["Curso completo 2 semanas", "Acceso de por vida", "Sistema Práctica Inteligente", "Plan diario 10–15 min", "Biblioteca de ritmos", "Comunidad privada", "Garantía 30 días"],
      core_cta: "Quiero mi acceso",
      up_title: "Mentoría Premium",
      up_sub: "Sesión 1:1 con Daniel Estrada.",
      up_feats: ["Sesión 1:1 personalizada", "Revisión de técnica", "Plan a tu medida", "Soporte directo"],
      up_cta: "Reservar mentoría",
      perOnce: "/ pago único",
    },
    en: {
      eyebrow: "Plans & pricing",
      title: "Plans & pricing",
      sub: "Choose the perfect plan for your drumming journey.",
      popular: "Most popular",
      bump_tag: "Order Bump",
      bump_title: "Accelerator Pack",
      bump_sub: "10 extra rock, pop and Latin grooves.",
      bump_feats: ["10 additional pro grooves", "HD practice audio", "Instant access", "Perfect add-on"],
      bump_cta: "Get started",
      core_title: "Full Course",
      core_sub: "The 2-week transformation minicourse.",
      core_feats: ["Full 2-week course", "Lifetime access", "Smart Practice System", "Daily plan 10–15 min", "Grooves library", "Private community", "30-day guarantee"],
      core_cta: "Get instant access",
      up_title: "Premium Mentorship",
      up_sub: "1:1 session with Daniel Estrada.",
      up_feats: ["1:1 personalized session", "Technique review", "Custom plan", "Direct support"],
      up_cta: "Book mentorship",
      perOnce: "/ one-time",
    },
    pt: {
      eyebrow: "Planos e preços",
      title: "Planos e preços",
      sub: "Escolha o plano perfeito para sua jornada.",
      popular: "Mais popular",
      bump_tag: "Order Bump",
      bump_title: "Pack Acelerador",
      bump_sub: "10 ritmos extras rock, pop e latino.",
      bump_feats: ["10 ritmos pro adicionais", "Áudios HD", "Acesso imediato", "Complemento ideal"],
      bump_cta: "Começar",
      core_title: "Curso Completo",
      core_sub: "Minicurso de transformação em 2 semanas.",
      core_feats: ["Curso completo 2 semanas", "Acesso vitalício", "Sistema Prática Inteligente", "Plano diário 10–15 min", "Biblioteca de ritmos", "Comunidade privada", "Garantia 30 dias"],
      core_cta: "Quero meu acesso",
      up_title: "Mentoria Premium",
      up_sub: "Sessão 1:1 com Daniel Estrada.",
      up_feats: ["Sessão 1:1", "Revisão de técnica", "Plano sob medida", "Suporte direto"],
      up_cta: "Reservar mentoria",
      perOnce: "/ pagamento único",
    },
    fr: {
      eyebrow: "Plans & tarifs",
      title: "Plans & tarifs",
      sub: "Choisissez le plan parfait pour votre parcours.",
      popular: "Plus populaire",
      bump_tag: "Order Bump",
      bump_title: "Pack Accélérateur",
      bump_sub: "10 rythmes rock, pop et latino en plus.",
      bump_feats: ["10 rythmes pro en plus", "Audios HD", "Accès immédiat", "Complément idéal"],
      bump_cta: "Commencer",
      core_title: "Cours Complet",
      core_sub: "Le minicours de transformation en 2 semaines.",
      core_feats: ["Cours complet 2 semaines", "Accès à vie", "Système Pratique Intelligente", "Plan quotidien 10–15 min", "Bibliothèque de rythmes", "Communauté privée", "Garantie 30 jours"],
      core_cta: "Accès immédiat",
      up_title: "Mentorat Premium",
      up_sub: "Session 1:1 avec Daniel Estrada.",
      up_feats: ["Session 1:1", "Revue de technique", "Plan sur mesure", "Support direct"],
      up_cta: "Réserver mentorat",
      perOnce: "/ paiement unique",
    },
  }[lang];

  const plans: Plan[] = [
    {
      icon: "🥁",
      tag: L.popular,
      title: L.core_title,
      subtitle: L.core_sub,
      price: "$37",
      oldPrice: "$197",
      unit: L.perOnce,
      features: L.core_feats,
      cta: L.core_cta,
      featured: true,
      tone: "magenta",
      href: "#oferta",
    },
    {
      icon: "🎁",
      tag: L.bump_tag,
      title: L.bump_title,
      subtitle: L.bump_sub,
      price: "$19",
      unit: L.perOnce,
      features: L.bump_feats,
      cta: L.bump_cta,
      tone: "cyan",
      href: "#oferta",
    },
    {
      icon: "👑",
      tag: "Premium",
      title: L.up_title,
      subtitle: L.up_sub,
      price: "$147",
      unit: L.perOnce,
      features: L.up_feats,
      cta: L.up_cta,
      tone: "ember",
      href: "#oferta",
    },
  ];

  return (
    <Section id="precios" className="overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <FadeIn><Eyebrow>{L.eyebrow}</Eyebrow></FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="mt-6 text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-center">
            {L.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-5 text-lg md:text-xl text-muted-foreground text-center">{L.sub}</p>
        </FadeIn>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 gap-6 items-stretch max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div className={`price-card price-card-${p.tone} h-full flex flex-col ${p.featured ? "price-card-featured" : ""}`}>
              {p.featured && <div className="price-badge-popular">{p.tag}</div>}

              <div className={`price-icon price-icon-${p.tone}`}>
                {p.icon}
              </div>
              {!p.featured && <div className="mb-3 text-sm font-black uppercase text-gradient">{p.tag}</div>}
              <h3 className="text-3xl md:text-4xl font-black tracking-tight">{p.title}</h3>
              <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed">{p.subtitle}</p>

              <div className="mt-6 flex items-baseline gap-2">
                {p.oldPrice && <span className="text-base text-muted-foreground line-through">{p.oldPrice}</span>}
                <span className="price-neon text-6xl md:text-7xl">{p.price}</span>
                <span className="text-base text-muted-foreground">{p.unit}</span>
              </div>

              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-base leading-relaxed">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.href || "#oferta"}
                className={`mt-8 price-btn ${p.featured ? "price-btn-featured" : ""}`}
              >
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
