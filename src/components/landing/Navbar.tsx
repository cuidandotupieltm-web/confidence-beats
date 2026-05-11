import { motion } from "framer-motion";
import { Music4 } from "lucide-react";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 mt-4">
        <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="h-8 w-8 rounded-lg btn-glow flex items-center justify-center">
              <Music4 className="h-4 w-4 text-white" />
            </span>
            <span className="hidden sm:inline">Batería Desde Cero</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#metodo" className="hover:text-foreground transition">Método</a>
            <a href="#modulos" className="hover:text-foreground transition">Curso</a>
            <a href="#testimonios" className="hover:text-foreground transition">Testimonios</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <a
            href="#oferta"
            className="inline-flex items-center rounded-full btn-glow px-4 py-2 text-sm font-semibold text-white"
          >
            Empezar $37
          </a>
        </div>
      </div>
    </motion.header>
  );
}
