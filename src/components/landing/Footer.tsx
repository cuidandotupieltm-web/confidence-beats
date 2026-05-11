import { useT } from "@/lib/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-white/10 py-10 px-6 text-center text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="font-bold text-gradient text-base inline-flex items-center gap-2">
          <span className="emoji-3d">🥁</span> Batería Desde Cero con Confianza
        </div>
        <div className="mt-2">© {new Date().getFullYear()} Daniel Estrada · {t("footer_rights")}</div>
      </div>
    </footer>
  );
}
