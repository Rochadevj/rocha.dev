"use client";

import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { FiMapPin, FiClock } from "react-icons/fi";
import { useRef, useState, useEffect } from "react";
import { AnalogClock } from "@/app/components/ui/AnalogClock";
import { InteractiveDottedGlobe } from "@/app/components/ui/InteractiveDottedGlobe";
import gsap from "gsap";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

export function AboutSection() {
  const { copy, language } = useTranslations();
  const [currentTime, setCurrentTime] = useState("");
  const philosophyRef = useRef<HTMLDivElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const whoCardRef = useRef<HTMLDivElement>(null);
  const globalCardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const softHoverTransition =
    "transition-[border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]";
  const cardHoverProfile =
    `${softHoverTransition} hover:border-[#22b7d9]/38 hover:shadow-[0_0_0_1px_rgba(34,183,217,0.12),0_0_24px_rgba(34,183,217,0.07)]`;
  const cardHoverWho =
    `${softHoverTransition} hover:border-[#2cbfd9]/45 hover:shadow-[0_0_0_1px_rgba(44,191,217,0.14),0_0_26px_rgba(44,191,217,0.08)]`;
  const cardHoverPhilosophy =
    `${softHoverTransition} hover:border-[#f28c3a]/42 hover:shadow-[0_0_0_1px_rgba(242,140,58,0.14),0_0_28px_rgba(242,140,58,0.08)]`;
  const cardHoverGlobal =
    `${softHoverTransition} hover:border-[#8ad7ff]/28 hover:shadow-[0_0_0_1px_rgba(138,215,255,0.1),0_0_28px_rgba(138,215,255,0.08)]`;
  const aboutTagClass =
    "px-4 py-1.5 rounded-full border border-[#2341a8]/55 bg-[linear-gradient(135deg,rgba(12,24,44,0.88)_0%,rgba(18,12,40,0.82)_100%)] text-[#5de5fb] text-xs font-semibold tracking-[0.01em] shadow-[inset_0_1px_0_rgba(118,230,255,0.15),0_0_0_1px_rgba(26,85,224,0.18)]";

  useEffect(() => {
    const isPortuguese = language === "pt-BR";
    const locale = isPortuguese ? "pt-BR" : "en-US";
    const timeZone = "America/Sao_Paulo";
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString(locale, {
          timeZone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: !isPortuguese,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [language]);

  const handlePhilosophyMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dialRef.current || !philosophyRef.current) return;
    
    const rect = philosophyRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    
    gsap.to(dialRef.current, {
      rotation: angle + 90,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)"
    });
  };

  const handlePhilosophyLeave = () => {
    if (!dialRef.current) return;
    gsap.to(dialRef.current, {
      rotation: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)"
    });
  }

  const handleDepthMouseMove = (
    ref: React.RefObject<HTMLDivElement | null>,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!ref.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = (-y * 18).toFixed(2);
      const rotateY = (x * 18).toFixed(2);
      ref.current.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-40px)`;
    });
  };

  const handleDepthLeave = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  };

  const handleProfileCardMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDepthMouseMove(profileCardRef, e);
    if (!profileCardRef.current) return;
    const rect = profileCardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    profileCardRef.current.style.setProperty("--glow-x", `${x.toFixed(2)}%`);
    profileCardRef.current.style.setProperty("--glow-y", `${y.toFixed(2)}%`);
  };

  const handleProfileCardLeave = () => {
    handleDepthLeave(profileCardRef);
    if (!profileCardRef.current) return;
    profileCardRef.current.style.setProperty("--glow-x", "50%");
    profileCardRef.current.style.setProperty("--glow-y", "50%");
  };

  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 text-white sm:px-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:hidden bg-[radial-gradient(70%_70%_at_50%_0%,rgba(104,164,214,0.12),rgba(5,5,5,0)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-32 sm:block bg-[linear-gradient(180deg,rgba(235,235,235,0.92)_0%,rgba(224,230,234,0.64)_16%,rgba(164,177,187,0.14)_46%,rgba(10,12,16,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(175,192,202,0.22),transparent)]" />
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="sr-only">{copy.about.srOnly}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* 1. Profile Card */}
          <div
            ref={profileCardRef}
            onPointerMove={handleProfileCardMove}
            onPointerLeave={handleProfileCardLeave}
            className={`md:col-span-1 min-h-87.5 md:min-h-100 rounded-3xl bg-[#111] border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group cursor-default transition-transform duration-100 will-change-transform ${cardHoverProfile}`}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(260px circle at var(--glow-x,50%) var(--glow-y,50%), rgba(46,179,212,0.14), rgba(94,61,180,0.08) 38%, rgba(8,10,15,0) 68%), linear-gradient(135deg, rgba(46,179,212,0.08) 0%, rgba(15,15,18,0) 45%, rgba(94,61,180,0.08) 100%)",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif italic mb-2 tracking-wide">Henrique <span className="text-gray-400 not-italic font-sans font-bold">Rocha</span></h3>
              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm mb-4 md:mb-6">
                <FiMapPin className="w-3 h-3 md:w-4 md:h-4" />
                <span>{copy.about.location} - {currentTime}</span>
              </div>
            </div>
            

            <div className="flex gap-4 relative z-10">
              <a href="https://github.com/Rochadevj" aria-label="GitHub Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiGithub size={20} /></a>
              <a href="https://www.instagram.com/hee_rocha/" aria-label="Instagram Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiInstagram size={20} /></a>
              <a href="https://www.linkedin.com/in/henrique-rocha-389609287/" aria-label="LinkedIn Profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/20 transition-colors"><SiLinkedin size={20} /></a>
            </div>
          </div>

          {/* 2. About Me Text Card */}
          <div
            ref={whoCardRef}
            onPointerMove={(e) => handleDepthMouseMove(whoCardRef, e)}
            onPointerLeave={() => handleDepthLeave(whoCardRef)}
            className={`md:col-span-2 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 md:p-10 flex flex-col justify-center gap-6 cursor-default transition-transform duration-100 will-change-transform ${cardHoverWho}`}
          >
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{copy.about.whoTitle}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {copy.about.whoParagraph1.prefix}
                  <a href="#projects" className="text-white hover:underline decoration-orange-500 underline-offset-4 transition-all">{copy.about.whoParagraph1.linkBuildTools}</a>
                  {copy.about.whoParagraph1.middle}
                  <a  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">{copy.about.whoParagraph1.linkEmpathy}</a>,{" "}
                  <a  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">{copy.about.whoParagraph1.linkScalability}</a>,{" "}
                  {language === "pt-BR" ? "e" : "and"}{" "}
                  <a  target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">{copy.about.whoParagraph1.linkPerformance}</a>
                  {copy.about.whoParagraph1.suffix}
                </p>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {copy.about.whoParagraph2.prefix}
                  <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline decoration-green-500 underline-offset-4 transition-all">{copy.about.whoParagraph2.linkNext}</a>
                  {copy.about.whoParagraph2.middle1}
                  <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline decoration-blue-500 underline-offset-4 transition-all">{copy.about.whoParagraph2.linkTypescript}</a>
                  {copy.about.whoParagraph2.middle2}
                  <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:underline decoration-cyan-500 underline-offset-4 transition-all">{copy.about.whoParagraph2.linkTailwind}</a>
                  {copy.about.whoParagraph2.suffix}
                </p>
             </div>

             <div className="flex flex-wrap gap-3 mt-2">
                {copy.about.tags.map((tag) => (
                  <span key={tag} className={aboutTagClass}>
                    {tag}
                  </span>
                ))}
             </div>
          </div>

          {/* 3. Philosophy Card (Interfaces you can feel) */}
          <div 
            id="philosophy"
            ref={philosophyRef}
            onMouseMove={handlePhilosophyMouseMove}
            onMouseLeave={handlePhilosophyLeave}
            className={`md:col-span-3 min-h-75 md:min-h-87.5 rounded-3xl bg-[#111] border border-white/10 p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 cursor-auto md:cursor-none ${cardHoverPhilosophy}`}
          >
            {/* Text Side */}
            <div className="relative z-10 flex-1 space-y-6">
               <div>
                                    <div className="flex items-center gap-2 text-gray-500 text-xs md:text-sm font-mono mb-2 md:mb-4">
                    <span className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-gray-600 flex items-center justify-center">*</span>
                    {copy.about.philosophyLabel}
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight"><a href="https://lawsofux.com/" target="_blank" rel="noopener noreferrer" className="hover:underline decoration-purple-500 underline-offset-4 transition-all">{copy.about.philosophyTitleLink}</a> <span className="font-(family-name:--font-lust) italic text-cyan-400">{copy.about.philosophyTitleEmphasis}</span></h2>
               </div>
               
               <p className="text-gray-400 text-sm md:text-base max-w-lg">
                  {copy.about.philosophyDescription}
               </p>

               <ul className="space-y-2 text-sm text-gray-500">
                  {copy.about.philosophyList.map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500"/>{item}</li>
                  ))}
               </ul>
            </div>

            {/* Graphic Side (Clock) */}
            <div className="relative w-full md:w-100 h-75 flex items-center justify-center pointer-events-none">
                <div className="scale-90 sm:scale-95 md:scale-100 relative">
                   <AnalogClock />
                </div>
            </div>
          </div>


          {/* 4. Global Timezone Card (Text) */}
          <div
            ref={globalCardRef}
            onPointerMove={(e) => handleDepthMouseMove(globalCardRef, e)}
            onPointerLeave={() => handleDepthLeave(globalCardRef)}
            className={`md:col-span-2 min-h-62.5 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(7,10,16,0.98)_0%,rgba(8,18,30,0.96)_48%,rgba(18,14,34,0.94)_100%)] p-6 md:p-8 overflow-hidden relative flex flex-col justify-center gap-6 cursor-default transition-transform duration-100 will-change-transform ${cardHoverGlobal}`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,196,255,0.12),transparent_30%),radial-gradient(circle_at_24%_38%,rgba(139,92,246,0.08),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(42,189,167,0.08),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[28px_28px]" />
            <div className="space-y-4 z-10 w-full">
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{copy.about.globalLabel}</span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {copy.about.globalTitle} <br />
                <span className="text-gray-500">{copy.about.globalTitleEmphasis}</span>
              </h3>
              <p className="text-gray-400 text-sm max-w-lg">
                {copy.about.globalParagraph.prefix}
                <a target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white border-b border-gray-600 hover:border-white transition-colors">{copy.about.globalParagraph.linkAsync}</a>
                {copy.about.globalParagraph.middle}
                <a href="#contact" className="text-gray-300 hover:text-white border-b border-gray-600 hover:border-white transition-colors">{copy.about.globalParagraph.linkCommunication}</a>
                {copy.about.globalParagraph.suffix}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/5">
                  <FiClock className="text-orange-500" />
                  <span>{copy.about.globalBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. Brazil Globe Card (Small) */}
          <div
            className={`md:col-span-1 min-h-87 rounded-3xl bg-[#040507] border border-white/10 overflow-hidden relative ${cardHoverGlobal}`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(78%_58%_at_50%_4%,rgba(235,246,255,0.13),rgba(4,5,7,0)_62%)]" />
            <div className="absolute top-5 left-5 z-20 inline-flex items-center gap-2 text-white/90 text-base font-semibold">
              <FiMapPin className="w-4 h-4 text-white/90" />
              <span>{language === "pt-BR" ? "Brasil" : "Brazil"}</span>
            </div>
            <div
              className="absolute inset-x-0 -bottom-22 mx-auto aspect-square h-84 w-full max-w-200 lg:-bottom-26 lg:h-96"
              style={{
                width: "100%",
                aspectRatio: "1 / 1",
                maxWidth: "800px",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 66%, rgba(0, 0, 0, 0) 82%)",
                maskImage:
                  "radial-gradient(circle at 50% 50%, rgb(0, 0, 0) 66%, rgba(0, 0, 0, 0) 82%)",
              }}
            >
              <InteractiveDottedGlobe
                className="h-full w-full"
                marker={{ lat: -14.235, lng: -51.925, size: 0.18 }}
                initialLongitude={-52}
                autoRotateSpeed={0}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#040507] to-transparent pointer-events-none">
              <div className="absolute inset-x-0 bottom-4 text-center text-[9px] font-mono uppercase tracking-[0.18em] text-white/35">
                {language === "pt-BR" ? "arraste para os lados" : "drag sideways"}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}








