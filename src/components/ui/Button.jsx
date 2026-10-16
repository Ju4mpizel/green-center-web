// src/components/ui/Button.jsx
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Button({
  href,
  onClick,
  variant = "bosque",
  children,
  className = "",
  target,
  rel,
  type = "button",
}) {
  const baseStyles =
    "group inline-flex items-center justify-between gap-3 sm:gap-3.5 pl-5 sm:pl-6 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full font-semibold text-[14px] sm:text-[15px] transition-all duration-300 select-none";

  const variants = {
    bosque:
      "bg-bosque text-white hover:bg-bosque2 shadow-sm hover:-translate-y-0.5",
    green:
      "bg-hoja text-white hover:bg-bosque shadow-sm hover:-translate-y-0.5",
    light:
      "bg-white text-bosque hover:bg-salvia shadow-sm hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-tinta border border-tinta/20 hover:border-bosque hover:bg-black/5 hover:-translate-y-0.5",
  };

  const circleVariants = {
    bosque: "bg-brote text-bosque",
    green: "bg-brote text-bosque",
    light: "bg-bosque text-white",
    ghost: "bg-tinta/10 text-tinta",
  };

  const content = (
    <>
      <span className="leading-none">{children}</span>
      <span
        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${circleVariants[variant]}`}
      >
        <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </>
  );

  if (href) {
    const isAnchorOrExternal = href.startsWith("#") || href.startsWith("http");
    if (isAnchorOrExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={`${baseStyles} ${variants[variant]} ${className}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
