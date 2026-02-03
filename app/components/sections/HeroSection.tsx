"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";
import { skills } from "@/app/data/skills";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiWordpress,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiDocker,
  SiSupabase,
  SiN8N,
  SiLinux,
} from "react-icons/si";

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

  const techIconByName: Record<string, { icon: React.ReactNode; color: string }> = {
    JavaScript: { icon: <SiJavascript />, color: "#F7DF1E" },
    TypeScript: { icon: <SiTypescript />, color: "#3178C6" },
    PHP: { icon: <SiPhp />, color: "#777BB4" },
    HTML: { icon: <SiHtml5 />, color: "#E34F26" },
    CSS: { icon: <SiCss3 />, color: "#1572B6" },
    NextJS: { icon: <SiNextdotjs />, color: "#ffffff" },
    ReactJS: { icon: <SiReact />, color: "#61DAFB" },
    "Tailwind CSS": { icon: <SiTailwindcss />, color: "#38B2AC" },
    Bootstrap: { icon: <SiBootstrap />, color: "#7952B3" },
    WordPress: { icon: <SiWordpress />, color: "#21759B" },
    NodeJS: { icon: <SiNodedotjs />, color: "#339933" },
    PostgreSQL: { icon: <SiPostgresql />, color: "#336791" },
    MySQL: { icon: <SiMysql />, color: "#4479A1" },
    Git: { icon: <SiGit />, color: "#F05032" },
    GitHub: { icon: <SiGithub />, color: "#ffffff" },
    Vercel: { icon: <SiVercel />, color: "#ffffff" },
    Docker: { icon: <SiDocker />, color: "#2496ED" },
    Supabase: { icon: <SiSupabase />, color: "#3ECF8E" },
    n8n: { icon: <SiN8N />, color: "#EA4B71" },
    Linux: { icon: <SiLinux />, color: "#FCC624" },
  };

  const techStack = skills
    .map((skill) => ({
      name: skill.name,
      icon: techIconByName[skill.name]?.icon,
      color: techIconByName[skill.name]?.color,
    }))
    .filter((tech) => Boolean(tech.icon));

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
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 rounded-full bg-[#1a1a1a]/80 border border-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] mb-6 sm:mb-8 hover:bg-[#222] transition-all group cursor-default"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/30 blur-[2px]" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-white/90 uppercase tracking-[0.24em] group-hover:text-white">
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
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border border-white/10 bg-white/5"
                  aria-label={tech.name}
                  title={tech.name}
                >
                  <span
                    className="text-xl sm:text-2xl"
                    style={{ color: tech.color ?? "#ffffff" }}
                  >
                    {tech.icon}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
