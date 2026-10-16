// src/components/layout/Navbar.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollNav } from "@/hooks/useScrollNav";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled, hidden } = useScrollNav();

  const navLinks = [
    { name: "Historia", href: "#historia" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "¿Cuál elegir?", href: "#elegir" },
    { name: "Ahorro", href: "#ahorro" },
    { name: "Sucursales", href: "#ubicacion" },
  ];

  return (
    <>
      <header
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[min(1160px,calc(100%-20px))] flex items-center justify-between gap-3 p-2 pl-2.5 sm:pl-3.5 rounded-full bg-[rgba(241,244,236,0.85)] backdrop-blur-md border border-[rgba(16,33,26,0.08)] z-50 transition-all duration-500 ${
          hidden && !mobileOpen
            ? "-translate-y-28 opacity-0"
            : "translate-y-0 opacity-100"
        } ${scrolled ? "shadow-lg shadow-bosque/10 bg-[rgba(241,244,236,0.95)]" : ""}`}
      >
        {/* Identidad con Logo Redondeado */}
        <a
          href="#inicio"
          className="group flex items-center gap-2.5 sm:gap-3 select-none"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-xs border border-bosque/10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 bg-white">
            <Image
              src="/img/logo.jpg"
              alt="Green Center Bolivia"
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center leading-none">
            <span className="font-display font-extrabold text-[14px] sm:text-[16px] tracking-tight text-bosque transition-colors group-hover:text-hoja">
              GREEN CENTER
            </span>
            <span className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.24em] text-musgo mt-0.5">
              BOLIVIA
            </span>
          </div>
        </a>

        {/* Links escritorio */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 rounded-full text-[14.5px] font-medium text-musgo hover:text-bosque hover:bg-hoja/10 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón WhatsApp */}
        <div className="hidden sm:flex items-center">
          <a
            href={createWhatsAppLink(
              "Hola Green Center, quiero más información sobre sus vehículos eléctricos.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-hoja hover:bg-bosque text-white font-semibold text-[14px] transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
          >
            <div className="w-4 h-4 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            <span>Escríbenos</span>
          </a>
        </div>

        {/* Hamburguesa Móvil */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-9 h-9 rounded-full bg-bosque text-white flex items-center justify-center focus:outline-none"
          aria-label="Abrir menú"
        >
          {mobileOpen ? (
            <svg
              className="w-4.5 h-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-4.5 h-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </header>

      {/* Menú Móvil */}
      <div
        className={`fixed inset-0 bg-bosque text-white z-40 flex flex-col justify-center px-8 gap-4 transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 flex-shrink-0 bg-white">
            <Image
              src="/img/logo.jpg"
              alt="Green Center Bolivia"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="font-display font-extrabold text-lg tracking-tight text-white">
              GREEN CENTER
            </span>
            <span className="text-[10px] font-bold tracking-[0.24em] text-brote mt-0.5">
              BOLIVIA
            </span>
          </div>
        </div>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-display font-bold py-2.5 border-b border-white/10 hover:text-brote transition-colors"
          >
            {link.name}
          </a>
        ))}

        <div className="pt-4">
          <a
            href={createWhatsAppLink(
              "Hola Green Center, quiero más información.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-3.5 rounded-full bg-hoja text-white font-semibold text-base"
          >
            <div className="w-5 h-5 relative flex-shrink-0">
              <Image
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            <span>Contactar por WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
