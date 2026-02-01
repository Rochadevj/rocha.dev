"use client";

import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { FiMapPin, FiClock } from "react-icons/fi";
import { useRef, useState, useEffect, useMemo } from "react";
import { DottedMap } from "@/app/components/ui/dotted-map";
import { AnalogClock } from "@/app/components/ui/AnalogClock";
import gsap from "gsap";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

export function AboutSection() {
  const { copy, language } = useTranslations();
  const [currentTime, setCurrentTime] = useState("");
  const [clockTime, setClockTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const philosophyRef = useRef<HTMLDivElement>(null);
  const dialRef = useRef<HTMLDivElement>(null);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const whoCardRef = useRef<HTMLDivElement>(null);
  const globalCardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mapMarkers = useMemo(
    () => [
      { lat: 51.5074, lng: -0.1278, size: 0.6 }, // London
      { lat: 23.8103, lng: 90.4125, size: 0.8 }, // Dhaka (User Location)
      { lat: 40.7128, lng: -74.006, size: 0.6 }, // New York
      { lat: 37.7749, lng: -122.4194, size: 0.6 }, // San Francisco
    ],
    []
  );

  useEffect(() => {
    const isPortuguese = language === "pt-BR";
    const locale = isPortuguese ? "pt-BR" : "en-US";
    const timeZone = "America/Sao_Paulo";
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
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
      const parts = formatter.formatToParts(now);
      const hourPart = parts.find((part) => part.type === "hour")?.value ?? "0";
      const minutePart =
        parts.find((part) => part.type === "minute")?.value ?? "0";
      const secondPart =
        parts.find((part) => part.type === "second")?.value ?? "0";
      setClockTime({
        hours: Number(hourPart),
        minutes: Number(minutePart),
        seconds: Number(secondPart) + now.getMilliseconds() / 1000,
      });
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

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8">
        <h2 className="sr-only">{copy.about.srOnly}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          
          {/* 1. Profile Card */}
          <div
            ref={profileCardRef}
            onPointerMove={(e) => handleDepthMouseMove(profileCardRef, e)}
            onPointerLeave={() => handleDepthLeave(profileCardRef)}
            className="md:col-span-1 min-h-[350px] md:min-h-[400px] rounded-3xl bg-[#111] border border-white/10 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group cursor-default transition-transform duration-100 will-change-transform hover:shadow-xl"
          >
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
            className="md:col-span-2 rounded-3xl bg-[#0a0a0a] border border-white/10 p-6 md:p-10 flex flex-col justify-center gap-6 cursor-default transition-transform duration-100 will-change-transform hover:shadow-xl"
          >
             <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{copy.about.whoTitle}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {copy.about.whoParagraph1.prefix}
                  <a href="#projects" className="text-white hover:underline decoration-orange-500 underline-offset-4 transition-all">{copy.about.whoParagraph1.linkBuildTools}</a>
                  {copy.about.whoParagraph1.middle}
                  <a href="https://www.nngroup.com/articles/empathy-user/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">{copy.about.whoParagraph1.linkEmpathy}</a>,{" "}
                  <a href="https://aws.amazon.com/what-is/scalability/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">{copy.about.whoParagraph1.linkScalability}</a>,{" "}
                  {language === "pt-BR" ? "e" : "and"}{" "}
                  <a href="https://web.dev/learn/performance" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors border-b border-gray-700 hover:border-white">{copy.about.whoParagraph1.linkPerformance}</a>
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
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
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
            className="md:col-span-3 min-h-[300px] md:min-h-[350px] rounded-3xl bg-[#111] border border-white/10 p-6 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 hover:border-white/20 transition-colors duration-500 cursor-auto md:cursor-none"
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
            <div className="relative w-full md:w-[400px] h-[300px] flex items-center justify-center pointer-events-none">
                <div className="scale-75 md:scale-100 relative">
                   <AnalogClock time={clockTime} />
                </div>
            </div>
          </div>


          {/* 4. Global Timezone Card */}
          <div
            ref={globalCardRef}
            onPointerMove={(e) => handleDepthMouseMove(globalCardRef, e)}
            onPointerLeave={() => handleDepthLeave(globalCardRef)}
            className="md:col-span-3 min-h-[250px] rounded-3xl bg-[#080808] border border-white/10 p-6 md:p-8 overflow-hidden relative flex flex-col md:flex-row items-center gap-6 md:gap-8 cursor-default transition-transform duration-100 will-change-transform hover:shadow-xl"
          >
            <div className="flex-1 space-y-4 z-10 w-full">
                            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">{copy.about.globalLabel}</span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">{copy.about.globalTitle} <br/><span className="text-gray-500">{copy.about.globalTitleEmphasis}</span></h3>
              <p className="text-gray-400 text-sm max-w-sm">
                {copy.about.globalParagraph.prefix}
                <a href="https://doist.com/blog/async-communication/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white border-b border-gray-600 hover:border-white transition-colors">{copy.about.globalParagraph.linkAsync}</a>
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

            {/* Dotted Map Visualization */}
            <div className="flex-1 w-full h-[200px] relative opacity-50 contrast-125">
               <div className="absolute inset-0 mask-radial-gradient">
                 <DottedMap 
                   dotColor="#555"
                   markerColor="#F97316"
                   markers={mapMarkers}
                 />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  );
}








