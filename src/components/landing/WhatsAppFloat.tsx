const WHATSAPP_URL = "https://wa.me/1234567890?text=Hola%20Daniel%2C%20quiero%20m%C3%A1s%20info%20del%20curso%20de%20bater%C3%ADa";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center h-14 w-14 rounded-full shadow-2xl transition-transform hover:scale-110 animate-pulse-glow"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white" aria-hidden="true">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.328.214-.685.214-1.04 0-.43-1.617-1.318-1.992-1.46Zm-3.137 6.987c-1.793 0-3.555-.516-5.063-1.477l-.36-.214-3.737.987.987-3.65-.243-.388A9.92 9.92 0 1 1 24.42 18.4a9.83 9.83 0 0 1-8.447 5.793M16 4.93C9.93 4.93 4.973 9.886 4.973 15.957c0 1.937.5 3.852 1.45 5.535L4.93 27.07l5.736-1.493c1.62.9 3.46 1.376 5.32 1.376h.014c6.07 0 11.057-4.957 11.058-11.027C27.044 9.886 22.058 4.93 16 4.93" />
      </svg>
    </a>
  );
}
