// src/components/ui/FAB.jsx
"use client";

import { createWhatsAppLink } from "@/lib/whatsapp";

export default function FAB() {
  return (
    <aside
      aria-label="Contacto flotante"
      className="fixed right-3.5 sm:right-6 bottom-3.5 sm:bottom-6 z-40 select-none"
    >
      <a
        href={createWhatsAppLink("Hola Green Center, quiero más información.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex items-center gap-2 p-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white font-semibold shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform duration-200 group"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.64C8.94 7.64 8.68 7.7 8.45 7.95C8.22 8.2 7.58 8.8 7.58 10.03C7.58 11.26 8.47 12.45 8.6 12.62C8.72 12.79 10.37 15.34 12.9 16.43C15.01 17.33 15.44 17.15 15.9 17.11C16.36 17.07 17.38 16.51 17.59 15.92C17.8 15.33 17.8 14.82 17.74 14.72C17.68 14.61 17.5 14.55 17.23 14.41C16.96 14.28 15.65 13.63 15.41 13.54C15.17 13.45 15 13.41 14.83 13.66C14.66 13.91 14.17 14.49 14.02 14.66C13.87 14.83 13.72 14.85 13.45 14.72C13.18 14.58 12.33 14.3 11.31 13.39C10.52 12.69 9.99 11.82 9.83 11.55C9.68 11.28 9.82 11.13 9.95 11C10.07 10.87 10.22 10.68 10.36 10.51C10.5 10.34 10.55 10.22 10.64 10.04C10.73 9.86 10.69 9.71 10.62 9.58C10.55 9.45 10.06 8.24 9.86 7.74C9.66 7.25 9.45 7.31 9.3 7.31C9.15 7.31 8.94 7.64 9.11 7.64Z" />
        </svg>
        <span className="hidden sm:inline text-sm font-semibold">
          Escríbenos
        </span>
      </a>
    </aside>
  );
}
