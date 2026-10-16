// src/components/layout/Footer.jsx
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-bosque text-[#a9c1b0] relative overflow-hidden pt-12 sm:pt-16 pb-6">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Grid Responsive Mejorado */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 relative z-10 border-t border-white/10 pt-8 sm:pt-10 text-[14.5px]">
          {/* Columna 1: Info Empresa (ocupa 5 columnas en escritorio) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <b className="text-white font-display text-lg tracking-tight">
              {siteConfig.name}
            </b>
            <p className="text-sm text-[#a9c1b0] max-w-[340px] leading-relaxed">
              Importadora y comercializadora de vehículos eléctricos en Bolivia.
              Modelos pensados para el ahorro, la ciudad y el trabajo.
            </p>
          </div>

          {/* Columna 2: Navegación (3 columnas) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <b className="text-white font-semibold text-sm tracking-wide uppercase text-opacity-90">
              Navegación
            </b>
            <div className="flex flex-col gap-2">
              <Link
                href="#catalogo"
                className="hover:text-white transition-colors py-0.5"
              >
                Catálogo de modelos
              </Link>
              <Link
                href="#elegir"
                className="hover:text-white transition-colors py-0.5"
              >
                ¿Para qué la vas a usar?
              </Link>
              <Link
                href="#ahorro"
                className="hover:text-white transition-colors py-0.5"
              >
                Calculadora de ahorro
              </Link>
              <Link
                href="#ubicacion"
                className="hover:text-white transition-colors py-0.5"
              >
                Sucursales y envíos
              </Link>
            </div>
          </div>

          {/* Columna 3: Contacto & Redes (4 columnas) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <b className="text-white font-semibold text-sm tracking-wide uppercase text-opacity-90">
              Contacto Oficial
            </b>
            <div className="flex flex-col gap-2">
              {/* Instagram resaltado en color brote oficial */}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brote font-semibold hover:text-white hover:underline transition-all py-0.5"
              >
                <svg
                  className="w-4 h-4 fill-current flex-shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@greencentertv.electricos</span>
              </a>

              <span className="text-white/90">
                WhatsApp {siteConfig.whatsappNumber}
              </span>
              <span className="text-sm text-musgo">
                Santa Cruz & Cochabamba, Bolivia
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Marca de agua tipográfica gigante responsiva */}
      <div
        className="font-display font-extrabold text-[clamp(48px,16vw,300px)] tracking-[-0.07em] leading-[0.8] whitespace-nowrap text-center text-brote/[0.12] -mb-[0.04em] select-none pointer-events-none"
        aria-hidden="true"
      >
        green center
      </div>
    </footer>
  );
}
