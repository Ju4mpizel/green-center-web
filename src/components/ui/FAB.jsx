// src/components/ui/FAB.jsx
"use client";

import Image from "next/image";
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
        className="flex items-center gap-2 p-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white font-semibold shadow-lg shadow-bosque/25 hover:scale-105 active:scale-95 transition-transform duration-200 group"
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 relative flex-shrink-0 transition-transform group-hover:scale-110">
          <Image
            src="/icons/whatsapp.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
        <span className="hidden sm:inline text-sm font-medium">Escríbenos</span>
      </a>
    </aside>
  );
}
