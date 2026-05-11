import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

export function StickyBuyBar() {
  const { t } = useT();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-3xl glass-strong rounded-2xl px-4 py-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="flex items-center gap-3 min-w-0">
          <span className="emoji-3d text-2xl shrink-0">🥁</span>
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="price-neon text-2xl">$37</span>
              <span className="text-xs text-muted-foreground line-through">$197</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[11px] text-muted-foreground">
              <span className="star-gold">★</span><span className="star-gold">★</span><span className="star-gold">★</span><span className="star-gold">★</span><span className="star-gold">★</span>
              <span className="ml-1 font-semibold text-foreground">4.9/5</span>
            </div>
          </div>
        </div>
        <a href="#oferta" className="btn-mega px-5 py-3 text-sm whitespace-nowrap">
          <span className="emoji-3d">🛒</span>
          <span>{t("hero_cta") || "Quiero acceder"}</span>
        </a>
      </div>
    </div>
  );
}
