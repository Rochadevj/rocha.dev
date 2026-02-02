"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
  twinklePhase: number;
};

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const generateStars = (width: number, height: number) => {
      const density = 0.00014;
      const count = Math.floor(width * height * density);
      const stars: Star[] = [];

      for (let i = 0; i < count; i += 1) {
        const isBright = Math.random() > 0.97;
        const radius = isBright
          ? 1.6 + Math.random() * 1.4
          : 0.4 + Math.random() * 0.9;
        const twinkle = Math.random() > 0.2;

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          opacity: 0.35 + Math.random() * 0.65,
          twinkleSpeed: twinkle ? 0.6 + Math.random() * 1.6 : null,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      starsRef.current = stars;
    };

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { width, height };
      generateStars(width, height);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const animationRef = { current: 0 as number | null };
    const renderFrame = (time: number) => {
      const { width, height } = sizeRef.current;
      ctx.clearRect(0, 0, width, height);

      const now = time * 0.001;
      for (const star of starsRef.current) {
        const twinkle = star.twinkleSpeed
          ? 0.6 +
            Math.sin(now / star.twinkleSpeed + star.twinklePhase) * 0.4
          : 1;
        const alpha = Math.min(1, Math.max(0, star.opacity * twinkle));

        if (star.radius > 1.4) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.2})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationRef.current = requestAnimationFrame(renderFrame);
      }
    };

    if (!prefersReducedMotion) {
      animationRef.current = requestAnimationFrame(renderFrame);
    } else {
      renderFrame(0);
    }

    return () => {
      resizeObserver.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#122234_0%,#050505_65%)] opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.12),transparent_50%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#050505_75%)] opacity-70" />
    </div>
  );
}
