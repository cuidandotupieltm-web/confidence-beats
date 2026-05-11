import { motion } from "framer-motion";
import { Sparkles, Clock, BookOpen } from "lucide-react";
import hero from "@/assets/hero-drummer.jpg";
import mockup from "@/assets/course-mockup.jpg";
import { CTAButton } from "./CTAButton";

const badges = [
  { icon: Sparkles, label: "Principiantes" },
  { icon: Clock, label: "2 semanas" },
  { icon: BookOpen, label: "Sin teoría complicada" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-aurora pt-28 pb-24 md:pt-36 md:pb-32 px-6">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-[var(--electric)]/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs md:text-sm font-medium"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--ember)] animate-pulse-glow" />
            Obtén <span className="text-gradient-ember font-bold">Batería Desde Cero con Confianza</span> por SOLO $37
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Aprende a tocar batería <span className="text-gradient">desde cero</span> y gana confianza en solo <span className="text-gradient-ember">2 semanas</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground"
          >
            Descubre que sí puedes aprender algo nuevo, expresarte con la música y sentirte seguro contigo mismo desde el primer día — usando <span className="text-foreground font-semibold">El Sistema Práctica Inteligente</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <CTAButton>Obtén acceso instantáneo por solo $37</CTAButton>
            <div className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">Garantía 30 días</span> · Acceso de por vida
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
                <Icon className="h-4 w-4 text-[var(--electric)]" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden ring-stage">
            <img
              src={hero}
              alt="Profesor tocando batería en escenario"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute -bottom-10 -left-6 md:-left-12 w-48 md:w-64 rounded-2xl overflow-hidden glass-strong p-2"
          >
            <img
              src={mockup}
              alt="Mockup del minicurso"
              width={512}
              height={400}
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
