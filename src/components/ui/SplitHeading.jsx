// src/components/ui/SplitHeading.jsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.2, 0.8, 0.2, 1];

export default function SplitHeading({
  text,
  highlight,
  className = "",
  delayOffset = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  const fullText = highlight ? `${text} ${highlight}` : text;

  return (
    <h2
      ref={ref}
      aria-label={fullText}
      className={`font-display font-bold text-[clamp(32px,5.8vw,88px)] tracking-[-0.04em] leading-[0.98] text-tinta ${className}`}
    >
      <span aria-hidden="true">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em] mr-[0.22em] last:mr-0"
          >
            <motion.span
              initial={{ y: "115%" }}
              animate={isInView ? { y: "0%" } : { y: "115%" }}
              transition={{
                duration: 0.9,
                delay: delayOffset + i * 0.045,
                ease: EASE,
              }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
        {highlight && (
          <span className="inline-block overflow-hidden align-top pb-[0.1em] -mb-[0.1em] ml-[0.22em]">
            <motion.span
              initial={{ y: "115%" }}
              animate={isInView ? { y: "0%" } : { y: "115%" }}
              transition={{
                duration: 0.9,
                delay: delayOffset + words.length * 0.045,
                ease: EASE,
              }}
              className="inline-block text-hoja"
            >
              {highlight}
            </motion.span>
          </span>
        )}
      </span>
    </h2>
  );
}
