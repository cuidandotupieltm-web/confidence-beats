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
      <span className="btn-icon-bubble" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.65 12.42a2 2 0 0 0 2 1.58h8.7a2 2 0 0 0 1.95-1.57l1.35-6.43H5.12" />
        </svg>
      </span>
      <span>{children}</span>
      <span className="btn-arrow-bubble" aria-hidden="true">→</span>
    </motion.a>
  );
}
