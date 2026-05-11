import { Facebook, Instagram } from "lucide-react";
import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-white/10 py-10 px-6 text-center text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-gradient text-base inline-flex items-center gap-2">
          <span className="emoji-3d">🥁</span> Batería Desde Cero con Confianza
        </div>
        <div className="mt-2 flex items-center justify-center gap-3 flex-wrap">
          <span>© {new Date().getFullYear()} Daniel Estrada · {t("footer_rights")}</span>
          <span className="inline-flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white transition-transform hover:scale-110"
              style={{ background: "#1877F2" }}
            >
              <Facebook size={16} fill="currentColor" strokeWidth={0} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-white transition-transform hover:scale-110"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <Instagram size={16} />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
