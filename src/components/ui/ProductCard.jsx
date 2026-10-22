// src/components/ui/ProductCard.jsx
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Mapeo completo de colores a valores hexadecimales
const COLOR_HEX = {
  // Básicos
  Blanco: "#f8fafc",
  "Blanco entero": "#f8fafc",
  Negro: "#1e293b",
  Rojo: "#dc2626",
  Azul: "#2563eb",
  Plomo: "#64748b",
  Amarillo: "#eab308",
  "Celeste eléctrico": "#06b6d4",
  Lila: "#c4b5fd",

  // Tonos pastel para autos
  "Verde pastel": "#bbf7d0",
  "Verde menta pastel": "#a7f3d0",
  "Morado pastel": "#e9d5ff",
  "Azul pastel": "#bae6fd",
  "Celeste pastel": "#7dd3fc",
};

export default function ProductCard({ product, onSelect }) {
  const isLg = product.lg;

  return (
    <article
      onClick={() => onSelect(product)}
      className={`group bg-white rounded-[22px] sm:rounded-[32px] p-2.5 sm:p-3 pb-3.5 sm:pb-[22px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(13,42,28,0.18)] shadow-xs overflow-hidden ${
        isLg
          ? "col-span-2 sm:col-span-2 lg:col-span-6 lg:row-span-2"
          : "col-span-1 lg:col-span-3"
      }`}
    >
      {/* Imagen del producto */}
      <div
        className={`relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-salvia ${
          isLg
            ? "aspect-[16/10] sm:aspect-auto sm:flex-1 sm:min-h-[380px]"
            : "aspect-[1/1] sm:aspect-[1/1.02]"
        }`}
      >
        <Image
          src={product.imgs[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.07]"
        />

        {/* Botón flotante flecha */}
        <span className="absolute right-2 bottom-2 sm:right-3.5 sm:bottom-3.5 w-7 h-7 sm:w-[52px] sm:h-[52px] rounded-full bg-brote text-bosque flex items-center justify-center transition-all duration-300 group-hover:bg-hoja group-hover:text-white shadow-sm">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>

      {/* Info de la Card */}
      <div className="pt-2.5 sm:pt-4 px-1 sm:px-2 flex flex-col justify-between flex-1 min-w-0">
        <div>
          {/* Fila contenida: la etiqueta se trunca con ellipsis si no hay espacio para no empujar los colores */}
          <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2.5 min-h-[24px] sm:min-h-[26px]">
            <span
              title={product.tag}
              className="inline-block text-[9.5px] sm:text-[13px] font-semibold text-hoja bg-hoja/10 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full truncate max-w-[65%] sm:max-w-none"
            >
              {product.tag}
            </span>

            {/* Muestras circulares de colores disponibles */}
            {product.colors && product.colors.length > 0 && (
              <div
                className="flex items-center gap-1 sm:gap-1.5 py-0.5 px-1.5 rounded-full bg-niebla/80 border border-tinta/5 shrink-0"
                title={`Colores: ${product.colors.join(", ")}`}
              >
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-black/15 shadow-2xs shrink-0"
                    style={{ backgroundColor: COLOR_HEX[c] || "#94a3b8" }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Título alineado */}
          <h3
            className={`font-display font-bold tracking-tight text-tinta mb-1 leading-snug truncate ${
              isLg
                ? "text-base sm:text-[clamp(26px,2.6vw,40px)]"
                : "text-[13.5px] sm:text-[clamp(19px,1.6vw,25px)]"
            }`}
          >
            {product.name}
          </h3>

          {/* Subtítulo / línea técnica */}
          <p className="text-musgo text-[11px] sm:text-[14.5px] truncate">
            {product.line}
          </p>
        </div>

        {/* Precio al pie */}
        <div className="flex items-baseline gap-1.5 mt-2 sm:mt-3.5 font-display font-bold text-sm sm:text-[22px] tracking-tight text-tinta">
          {product.price !== "Consultar" ? (
            <>
              <span>{product.price}</span>
              <small className="hidden sm:inline font-sans text-[12.5px] font-medium text-musgo tracking-normal">
                Ref.
              </small>
            </>
          ) : (
            <span className="text-xs sm:text-base text-musgo font-sans font-semibold">
              Consultar
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
