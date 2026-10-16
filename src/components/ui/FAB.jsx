// src/components/ui/FAB.jsx
import Image from "next/image";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function FAB() {
  return (
    <a
      href={createWhatsAppLink("Hola Green Center, quiero más información.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 bottom-5 z-40 flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-hoja text-white font-semibold shadow-[0_14px_40px_rgba(13,42,28,0.35)] hover:-translate-y-1 transition-transform duration-300 group"
      aria-label="Escríbenos por WhatsApp"
    >
      <div className="w-6 h-6 relative flex-shrink-0 transition-transform group-hover:scale-110">
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          fill
          className="object-contain"
        />
      </div>
      <span className="hidden sm:inline text-sm">Escríbenos</span>
    </a>
  );
}
