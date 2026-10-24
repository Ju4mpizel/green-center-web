// src/components/ui/FAB.jsx
"use client";

import { createWhatsAppLink } from "@/lib/whatsapp";

export default function FAB() {
  return (
    <aside
      aria-label="Contacto flotante"
      className="fixed right-4 sm:right-8 bottom-4 sm:bottom-8 z-40 select-none"
    >
      <a
        href={createWhatsAppLink("Hola Green Center, quiero más información.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group inline-flex items-center gap-2 px-4 py-2.5 sm:px-4.5 sm:py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <span className="w-5 h-5 min-w-[20px] min-h-[20px] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110">
          <svg
            viewBox="0 0 32 32"
            className="w-full h-full fill-current text-white"
            aria-hidden="true"
          >
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.68.75 5.188 2.054 7.322L2.09 30.012l6.882-1.922A13.916 13.916 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.626c-2.316 0-4.488-.66-6.33-1.802l-.454-.282-4.198 1.172 1.184-4.048-.308-.476A11.56 11.56 0 0 1 4.374 16c0-6.41 5.216-11.626 11.626-11.626 6.41 0 11.626 5.216 11.626 11.626 0 6.41-5.216 11.626-11.626 11.626zm6.368-8.688c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366c-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.728-1.036-.922-1.734-2.062-1.938-2.41-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.076-2.588-.284-.68-.574-.588-.784-.598-.204-.01-.436-.012-.668-.012-.232 0-.61.088-.93.436-.32.348-1.22 1.192-1.22 2.908s1.25 3.374 1.424 3.606c.174.232 2.46 3.756 5.96 5.268.832.36 1.482.576 1.99.736.836.266 1.596.228 2.196.138.67-.1 2.062-.842 2.352-1.654.29-.812.29-1.508.204-1.654-.088-.146-.32-.232-.668-.406z" />
          </svg>
        </span>
        <span className="text-xs sm:text-sm font-semibold tracking-tight leading-none">
          Escríbenos
        </span>
      </a>
    </aside>
  );
}
