// src/components/ui/NoiseScope.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function NoiseScope() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isAccelerating, setIsAccelerating] = useState(false);
  const revRef = useRef(0);
  const holdRef = useRef(false);

  useEffect(() => {
    holdRef.current = isAccelerating;
  }, [isAccelerating]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrameId;
    let t = 0;
    let last = performance.now();
    let W = 0;
    let H = 0;

    const resize = () => {
      const r = container.getBoundingClientRect();
      W = r.width;
      H = r.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const gy = H * 0.3;
      const ey = H * 0.74;
      const currentRev = revRef.current;
      const ag = 10 + 42 * currentRev;
      const ae = 2 + 5 * currentRev;

      // Gasolina
      ctx.beginPath();
      for (let x = 0; x <= W; x += 2) {
        const k = x / W;
        const env = Math.pow(Math.sin(Math.PI * k), 0.7);
        const v =
          Math.sin(x * 0.11 + t * 17) * 0.55 +
          Math.sin(x * 0.27 - t * 31) * 0.3 +
          Math.sin(x * 0.05 + t * 9) * 0.4 +
          (Math.random() - 0.5) * (0.5 + currentRev * 0.7);
        const y = gy + v * ag * env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#9db8a4";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.stroke();

      // Eléctrica
      ctx.beginPath();
      for (let x = 0; x <= W; x += 3) {
        const k = x / W;
        const env = Math.pow(Math.sin(Math.PI * k), 0.7);
        const y = ey + Math.sin(x * 0.018 + t * 2.4) * ae * env;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#BFD9A6";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      ctx.shadowColor = "#BFD9A6";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const loop = (ts) => {
      const dt = Math.min(0.05, (ts - last) / 1000 || 0.016);
      last = ts;
      t += dt;

      const target = holdRef.current
        ? 1
        : 0.18 + 0.22 * Math.sin(t * 0.55) * Math.sin(t * 0.55);
      revRef.current += (target - revRef.current) * Math.min(1, dt * 4.5);

      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex-1 min-h-[220px] sm:min-h-[280px] -mx-5 -mb-5 sm:-mx-[30px] sm:-mb-[30px] mt-3 overflow-hidden select-none"
    >
      <div className="absolute left-4 right-4 sm:left-[30px] sm:right-[30px] top-1/2 h-[1px] bg-white/10" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <span className="absolute left-4 sm:left-[30px] top-2 text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[#cfdccf]">
        Moto a gasolina
      </span>
      <span className="absolute left-4 sm:left-[30px] top-[calc(50%+8px)] text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brote text-bosque">
        Moto eléctrica
      </span>

      {/* Botón táctil ergonómico */}
      <button
        type="button"
        onPointerDown={() => setIsAccelerating(true)}
        onPointerUp={() => setIsAccelerating(false)}
        onPointerLeave={() => setIsAccelerating(false)}
        onKeyDown={(e) => {
          if (e.key === " " || e.key === "Enter") {
            e.preventDefault();
            setIsAccelerating(true);
          }
        }}
        onKeyUp={() => setIsAccelerating(false)}
        className={`absolute right-4 sm:right-6 bottom-4 sm:bottom-6 z-10 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full font-bold text-xs sm:text-sm select-none touch-none transition-all duration-200 shadow-md ${
          isAccelerating
            ? "bg-brote text-bosque scale-95"
            : "bg-white text-bosque hover:bg-salvia active:scale-95"
        }`}
      >
        Mantén para acelerar
      </button>
    </div>
  );
}
