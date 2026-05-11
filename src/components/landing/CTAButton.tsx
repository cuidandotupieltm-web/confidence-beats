import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ember";
  size?: "md" | "lg";
  href?: string;
}

export function CTAButton({ children, variant = "primary", size = "lg", href = "#oferta" }: CTAButtonProps) {
  const sizeClasses = size === "lg" ? "px-8 py-4 text-base md:text-lg" : "px-6 py-3 text-sm md:text-base";
  const variantClass = variant === "ember" ? "btn-ember" : "btn-glow";
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 rounded-full ${sizeClasses} ${variantClass} font-bold text-white shadow-2xl`}
    >
      <span className="emoji-3d">🚀</span>
      {children}
      <span className="emoji-3d">→</span>
    </motion.a>
  );
}
