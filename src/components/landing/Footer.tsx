export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 px-6 text-center text-sm text-muted-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="font-semibold text-foreground">Batería Desde Cero con Confianza</div>
        <div className="mt-2">© {new Date().getFullYear()} Daniel Estrada · Todos los derechos reservados</div>
      </div>
    </footer>
  );
}
