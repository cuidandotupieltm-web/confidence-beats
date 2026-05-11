import { motion } from "framer-motion";

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ember";
  size?: "md" | "lg";
  href?: string;
}

export function CTAButton({ children, size = "lg", href = "#oferta" }: CTAButtonProps) {
  const sizeClasses = size === "lg" ? "px-8 py-5 text-base md:text-lg" : "px-6 py-3 text-sm md:text-base";
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={`btn-mega ${sizeClasses}`}
    >
      <span className="emoji-3d text-xl">🛒</span>
      <span>{children}</span>
      <span className="emoji-3d text-xl">→</span>
    </motion.a>
  );
}
