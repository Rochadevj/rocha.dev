"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

export function HeroSection() {
  const { copy, language } = useTranslations();
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const firstWordRef = useRef<HTMLSpanElement>(null);
  const secondWordRef = useRef<HTMLSpanElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const roles = copy.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);

  const techStack = [
    { src: "/techstacks/tailwindcss.svg", alt: "tailwindcss" },
    { src: "/techstacks/kotlin.svg", alt: "kotlin" },
    { src: "/techstacks/flutter.svg", alt: "flutter" },
    { src: "/techstacks/react.svg", alt: "react" },
    { src: "/techstacks/nextjs.svg", alt: "nextjs" },
    { src: "/techstacks/nodejs.svg", alt: "nodejs" },
    { src: "/techstacks/typescript.svg", alt: "typescript" },
    { src: "/techstacks/python.svg", alt: "python" },
    { src: "/techstacks/cplusplus.svg", alt: "c++" },
    { src: "/techstacks/git.svg", alt: "git" },
    { src: "/techstacks/firebase.svg", alt: "firebase" },
    { src: "/techstacks/postgresql.svg", alt: "postgresql" },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
    })
      .from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        skewY: 5,
      }, "-=0.4")
      .from(roleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      }, "-=0.6")
      .from(quoteRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .from(marqueeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6");
  }, { scope: containerRef });

  useEffect(() => {
    const animateRole = () => {
      gsap.to([firstWordRef.current, secondWordRef.current], {
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          requestAnimationFrame(() => {
            gsap.fromTo(
              [firstWordRef.current, secondWordRef.current],
              { opacity: 0, y: -20 },
              { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
            );
          });
        },
      });
    };

    const intervalId = window.setInterval(animateRole, 2400);
    return () => window.clearInterval(intervalId);
  }, [roles.length]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setRoleIndex(0);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, [language]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 pt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-start text-left">
        <div ref={badgeRef} className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#111] border border-white/10 mb-6 sm:mb-8 hover:bg-[#1c1c1c] transition-all group cursor-default">
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-widest group-hover:text-white">
            {copy.hero.badge}
          </span>
        </div>

        <h1 ref={titleRef} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight leading-[0.95] text-white whitespace-nowrap">
          HENRIQUE ROCHA
        </h1>

        <p ref={roleRef} className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-green-500 mb-6 flex items-baseline gap-3">
          <span ref={firstWordRef}>{roles[roleIndex]?.first}</span>
          <span ref={secondWordRef} className="text-white">{roles[roleIndex]?.second}</span>
        </p>

        <p ref={quoteRef} className="text-base sm:text-lg text-gray-300 font-medium max-w-2xl leading-relaxed mb-8 sm:mb-12">
          {`"${copy.hero.quote}"`}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="modern-button items-center justify-center inline-flex shadow-lg shadow-accent/20 w-full sm:w-auto py-3 sm:py-4 text-base sm:text-lg"
          >
            {copy.hero.ctaPrimary}
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold text-base sm:text-lg hover:bg-white/10 hover:-translate-y-1 hover:border-white/20 transition-all w-full sm:w-auto backdrop-blur-sm"
          >
            {copy.hero.ctaSecondary}
          </a>
        </div>

        <div ref={marqueeRef} className="relative w-full mt-10 sm:mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
          <div className="marquee">
            <div className="marquee-track">
              {techStack.concat(techStack).map((tech, index) => (
                <div key={`${tech.alt}-${index}`} className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/10 bg-white/5">
                  <Image
                    src={tech.src}
                    alt={tech.alt}
                    width={32}
                    height={32}
                    style={{ filter: "invert(0)" }}
                    suppressHydrationWarning
                    className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
