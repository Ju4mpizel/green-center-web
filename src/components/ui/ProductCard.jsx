// src/components/ui/ProductCard.jsx
"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { getColorStyle } from "@/data/colors";

export default function ProductCard({ product, onSelect }) {
  const isLg = product.lg;
  const hasOptions =
    product.batteryOptions && product.batteryOptions.length > 0;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onSelect(product);
    }
  };

  const colorsList = product.colors || [];
  const maxColorsShown = isLg ? 6 : 4;
  const visibleColors = colorsList.slice(0, maxColorsShown);
  const extraColorsCount = colorsList.length - maxColorsShown;

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(product)}
      onKeyDown={handleKeyDown}
      aria-label={`Ver detalles de ${product.name}`}
      className={`group bg-white rounded-[22px] sm:rounded-[32px] p-2.5 sm:p-3 pb-3.5 sm:pb-[20px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_-12px_rgba(13,42,28,0.18)] shadow-xs overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-hoja ${
        isLg
          ? "col-span-2 sm:col-span-2 lg:col-span-6"
          : "col-span-1 lg:col-span-3"
      }`}
    >
      {/* Imagen del producto */}
      <div
        className={`relative rounded-[16px] sm:rounded-[22px] overflow-hidden bg-salvia ${
          isLg
            ? "aspect-[16/11] sm:aspect-[16/10]"
            : "aspect-[1/1] sm:aspect-[1/1.02]"
        }`}
      >
        <Image
          src={product.imgs[0]}
          alt={product.name}
          fill
          sizes={
            isLg
              ? "(max-width: 1024px) 100vw, 50vw"
              : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          }
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.07]"
        />

        {/* Botón flotante flecha */}
        <span className="absolute right-2 bottom-2 sm:right-3.5 sm:bottom-3.5 w-7 h-7 sm:w-[48px] sm:h-[48px] rounded-full bg-brote text-bosque flex items-center justify-center transition-all duration-300 group-hover:bg-hoja group-hover:text-white shadow-sm">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>

      {/* Info de la Card */}
      <div className="pt-2.5 sm:pt-3.5 px-1 sm:px-2 flex flex-col justify-between flex-1 min-w-0">
        <div>
          {/* Fila superior: etiqueta y muestras de color calibradas */}
          <div className="flex items-center justify-between gap-1.5 mb-1.5 sm:mb-2 min-h-[24px]">
            <span
              title={product.tag}
              className="inline-block text-[9.5px] sm:text-[12.5px] font-semibold text-hoja bg-hoja/10 px-2 sm:px-2.5 py-0.5 rounded-full shrink-0 max-w-[65%] truncate sm:max-w-none"
            >
              {product.tag}
            </span>

            {/* Muestras circulares de colores con contador */}
            {colorsList.length > 0 && (
              <div
                className="flex items-center gap-1 py-0.5 px-1.5 rounded-full bg-niebla/80 border border-tinta/5 shrink-0"
                title={`Colores: ${colorsList.join(", ")}`}
              >
                {visibleColors.map((c) => (
                  <span
                    key={c}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-black/15 shadow-2xs shrink-0"
                    style={getColorStyle(c)}
                  />
                ))}
                {extraColorsCount > 0 && (
                  <span className="text-[9px] font-bold text-musgo leading-none pl-0.5">
                    +{extraColorsCount}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Título */}
          <h3
            className={`font-display font-bold tracking-tight text-tinta mb-1 leading-snug truncate ${
              isLg
                ? "text-[15px] sm:text-[clamp(22px,2.2vw,30px)]"
                : "text-[13.5px] sm:text-[clamp(18px,1.5vw,22px)]"
            }`}
          >
            {product.name}
          </h3>

          {/* Subtítulo / línea técnica */}
          <p className="text-musgo text-[11px] sm:text-[13.5px] truncate">
            {product.line}
          </p>
        </div>

        {/* Precio al pie */}
        <div className="flex items-baseline gap-1.5 mt-2 sm:mt-2.5 font-display font-bold text-sm sm:text-[20px] tracking-tight text-tinta">
          {product.price !== "Consultar" ? (
            <>
              {hasOptions && (
                <span className="text-[11px] sm:text-xs font-normal text-musgo">
                  Desde
                </span>
              )}
              <span>
                {hasOptions ? product.batteryOptions[0].price : product.price}
              </span>
              <small className="hidden sm:inline font-sans text-[12px] font-medium text-musgo tracking-normal">
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
