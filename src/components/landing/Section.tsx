import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-6 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gradient">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--magenta)] animate-pulse-glow" />
      {children}
    </span>
  );
}

/** 3D-style emoji bubble (renders the OS emoji with glow + gradient ring). */
export function EmojiIcon({
  emoji,
  size = "md",
  tone = "violet",
  className = "",
}: {
  emoji: string;
  size?: "sm" | "md" | "lg";
  tone?: "electric" | "violet" | "magenta" | "ember" | "lime" | "rainbow";
  className?: string;
}) {
  const sizes = {
    sm: "h-12 w-12 text-2xl",
    md: "h-16 w-16 text-3xl",
    lg: "h-22 w-22 text-5xl",
  };
  const tones: Record<string, string> = {
    electric:
      "bg-gradient-to-br from-[var(--electric)]/30 to-[var(--violet)]/20 ring-[var(--electric)]/40",
    violet:
      "bg-gradient-to-br from-[var(--violet)]/30 to-[var(--magenta)]/20 ring-[var(--violet)]/40",
    magenta:
      "bg-gradient-to-br from-[var(--magenta)]/30 to-[var(--ember)]/20 ring-[var(--magenta)]/40",
    ember: "bg-gradient-to-br from-[var(--ember)]/30 to-[var(--magenta)]/20 ring-[var(--ember)]/40",
    lime: "bg-gradient-to-br from-[var(--lime)]/30 to-[var(--electric)]/20 ring-[var(--lime)]/40",
    rainbow:
      "bg-gradient-to-br from-[var(--electric)]/30 via-[var(--magenta)]/25 to-[var(--ember)]/30 ring-[var(--magenta)]/40",
  };
  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl ring-1 ${sizes[size]} ${tones[tone]} ${className}`}
    >
      <span className="emoji-3d leading-none">{emoji}</span>
    </span>
  );
}
