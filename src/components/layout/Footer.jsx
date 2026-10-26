// src/components/layout/Footer.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";
import { createWhatsAppLink } from "@/lib/whatsapp";

const EASE = [0.2, 0.8, 0.2, 1];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "TikTok",
      url: siteConfig.tiktok,
      label: "@greencenter.bolivia",
      icon: (
        <svg
          className="w-4 h-4 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: siteConfig.instagram,
      label: "@greencentertv.electricos",
      icon: (
        <svg
          className="w-4 h-4 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: siteConfig.facebook,
      label: "Green Center Bolivia",
      icon: (
        <svg
          className="w-4 h-4 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.625c-.203.371-.255.845-.255 1.733v1.323h4.089l-.547 3.667h-3.542v7.98c5.441-.744 9.61-5.419 9.61-11.085C23.691 6.027 18.455.791 12 .791 5.545.791.309 6.027.309 12.606c0 5.666 4.169 10.341 9.61 11.085z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: createWhatsAppLink(
        "Hola Green Center Bolivia, quiero más información.",
      ),
      label: siteConfig.phoneFormatted,
      icon: (
        <svg
          className="w-4 h-4 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2c-5.506 0-9.98 4.475-9.98 9.984 0 1.76.459 3.477 1.332 4.99L2 22.062l5.24-1.375a9.92 9.92 0 004.79 1.234h.005c5.506 0 9.98-4.475 9.98-9.984 0-2.668-1.039-5.176-2.925-7.062A9.92 9.92 0 0012.03 2zm0 1.68c2.217 0 4.301.864 5.87 2.433a8.257 8.257 0 012.43 5.871c0 4.577-3.723 8.3-8.3 8.3a8.27 8.27 0 01-4.22-1.155l-.303-.18-3.137.823.837-3.057-.197-.315a8.243 8.243 0 01-1.265-4.442c0-4.577 3.723-8.3 8.285-8.3zm-3.6 3.633c-.198 0-.52.074-.792.371-.272.297-1.04 1.015-1.04 2.476s1.064 2.872 1.213 3.07c.148.198 2.068 3.23 5.08 4.477 2.503 1.035 2.503.69 2.949.641.445-.049 1.436-.594 1.634-1.163.198-.57.198-1.065.148-1.164-.049-.099-.198-.148-.445-.272-.248-.124-1.436-.718-1.659-.817-.222-.099-.371-.148-.52.074-.148.223-.618.817-.766.99-.149.174-.297.198-.545.075-.248-.124-1.045-.396-1.99-1.238-.737-.657-1.235-1.47-1.383-1.718-.149-.247-.016-.37.107-.494.112-.111.248-.272.372-.42.123-.149.148-.248.222-.42.075-.174.025-.322-.025-.446-.049-.124-.52-1.263-.718-1.733-.198-.47-.396-.396-.544-.396z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      id="contacto-footer"
      className="bg-bosque text-[#a9c1b0] relative overflow-hidden pt-12 sm:pt-16 pb-6"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-[clamp(20px,4vw,56px)]">
        {/* Grid Responsive de 12 Columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-12 relative z-10 border-t border-white/10 pt-8 sm:pt-10 text-[14.5px]">
          {/* Columna 1: Info Empresa (4 columnas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-4 flex flex-col gap-2.5"
          >
            <b className="text-white font-display text-lg tracking-tight">
              {siteConfig.name}
            </b>
            <p className="text-sm text-[#a9c1b0] max-w-[320px] leading-relaxed">
              Importadora y comercializadora de vehículos eléctricos en Bolivia.
              Modelos pensados para el ahorro, la ciudad y el trabajo.
            </p>
            <span className="text-xs text-musgo mt-1">
              Santa Cruz & Cochabamba, Bolivia
            </span>
            <p className="text-xs text-musgo mt-2">
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
          </motion.div>

          {/* Columna 2: Navegación (3 columnas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="lg:col-span-3 flex flex-col gap-2.5"
          >
            <b className="text-white font-semibold text-sm tracking-wide uppercase">
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
          </motion.div>

          {/* Columna 3: Redes Sociales Oficiales (5 columnas) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            <b className="text-white font-semibold text-sm tracking-wide uppercase">
              Visita nuestras redes
            </b>
            <p className="text-xs text-[#a9c1b0] leading-relaxed">
              Encuentra videos de pruebas, fotos de los modelos en showroom y
              novedades directas en nuestras cuentas oficiales:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brote/30 text-white transition-all duration-200 hover:-translate-y-0.5 group"
                  aria-label={`Visitar ${social.name} de Green Center`}
                >
                  <span className="w-7 h-7 rounded-lg bg-brote/20 text-brote flex items-center justify-center transition-colors group-hover:bg-hoja group-hover:text-white">
                    {social.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs font-semibold leading-tight">
                      {social.name}
                    </span>
                    <span className="text-[11px] text-[#a9c1b0] truncate">
                      {social.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marca de agua tipográfica con sutil fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: EASE }}
        className="font-display font-extrabold text-[clamp(48px,16vw,300px)] tracking-[-0.07em] leading-[0.8] whitespace-nowrap text-center text-brote/[0.12] -mb-[0.04em] select-none pointer-events-none"
        aria-hidden="true"
      >
        green center
      </motion.div>
    </footer>
  );
}
