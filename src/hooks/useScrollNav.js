// src/hooks/useScrollNav.js
"use client";

import { useState, useEffect } from "react";

export function useScrollNav(threshold = 20, hideThreshold = 400) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrolled(currentY > threshold);
          setHidden(currentY > lastY && currentY > hideThreshold);
          lastY = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, hideThreshold]);

  return { scrolled, hidden };
}
