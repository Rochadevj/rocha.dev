"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function AnalogClock() {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const [dialImageError, setDialImageError] = useState(false);

  useEffect(() => {
    let rafId = 0;
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const updateClock = () => {
      const now = new Date();
      const parts = formatter.formatToParts(now);
      const hourPart =
        parts.find((part) => part.type === "hour")?.value ?? "0";
      const minutePart =
        parts.find((part) => part.type === "minute")?.value ?? "0";
      const secondPart =
        parts.find((part) => part.type === "second")?.value ?? "0";

      const seconds = Number(secondPart) + now.getMilliseconds() / 1000;
      const minutes = Number(minutePart) + seconds / 60;
      const hours24 = Number(hourPart) + minutes / 60;
      const hours = hours24 % 12;

      // Rotate the containers, not the hands themselves
      if (secondRef.current) {
        secondRef.current.style.transform = `rotate(${seconds * 6}deg)`;
      }
      if (minuteRef.current) {
        minuteRef.current.style.transform = `rotate(${minutes * 6}deg)`;
      }
      if (hourRef.current) {
        hourRef.current.style.transform = `rotate(${hours * 30}deg)`;
      }

      rafId = requestAnimationFrame(updateClock);
    };

    rafId = requestAnimationFrame(updateClock);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[6px] border-[#1a1a1a] ring-1 ring-white/10 group select-none">
      
      {/* Clock Face Image */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#0f0f0f_0%,#050505_62%,#111111_100%)]" />
        <Image 
          src="/clockDial.avif" 
          alt="Clock Dial" 
          fill
          sizes="(min-width: 768px) 320px, 256px"
          style={{ filter: "invert(0)" }}
          suppressHydrationWarning
          onError={() => setDialImageError(true)}
          className={`object-cover opacity-90 ${dialImageError ? "hidden" : ""}`}
        />
        {/* Tick fallback for mobile/in-app browsers that fail to decode AVIF */}
        <div className="absolute inset-[8%] rounded-full opacity-35 [background:repeating-conic-gradient(from_0deg,rgba(255,255,255,0.9)_0deg,rgba(255,255,255,0.9)_0.7deg,transparent_0.7deg,transparent_6deg)] [mask:radial-gradient(circle,transparent_60%,black_61%,black_69%,transparent_70%)]" />
        <div className="absolute inset-[8%] rounded-full opacity-65 [background:repeating-conic-gradient(from_0deg,rgba(255,255,255,0.95)_0deg,rgba(255,255,255,0.95)_2deg,transparent_2deg,transparent_30deg)] [mask:radial-gradient(circle,transparent_54%,black_55%,black_72%,transparent_73%)]" />
      </div>

      {/* Hands Container - Centered Overlay */}
      <div className="absolute inset-0 rounded-full flex items-center justify-center pointer-events-none">
            
            {/* Center Pin Cap */}
            <div className="absolute z-60 w-2.5 h-2.5 bg-[#e5e5e5] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)] border border-gray-400" />

            {/* Hour Hand Container */}
            <div 
              ref={hourRef} 
              className="absolute top-1/2 left-1/2 z-30 w-0 h-0"
            >
                {/* Visual Hour Hand - Positioned above pivot */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-17.5 bg-white rounded-md shadow-lg border border-gray-300 pb-4">
                     {/* Lume Fill */}
                     <div className="absolute inset-x-0.75 top-1 bottom-3 bg-[#cceecc] opacity-90 rounded-sm" />
                </div>
            </div>

            {/* Minute Hand Container */}
            <div 
              ref={minuteRef} 
              className="absolute top-1/2 left-1/2 z-40 w-0 h-0"
            >
                 {/* Visual Minute Hand */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-25 bg-white rounded-md shadow-lg border border-gray-300 pb-4">
                     {/* Lume Fill */}
                     <div className="absolute inset-x-0.75 top-1 bottom-3 bg-[#cceecc] opacity-90 rounded-sm" />
                 </div>
            </div>

            {/* Second Hand Container */}
            <div 
              ref={secondRef} 
              className="absolute top-1/2 left-1/2 z-50 w-0 h-0"
            >
                {/* Visual Second Hand */}
                <div className="absolute -bottom-6.25 left-1/2 -translate-x-1/2 w-[1.5px] h-31.25 pointer-events-none">
                    {/* Main Needle */}
                    <div className="absolute bottom-6.25 left-0 right-0 top-0 bg-orange-600 shadow-sm" />
                    {/* Tail */}
                    <div className="absolute bottom-0 left-[-0.25px] right-[-0.25px] h-6.25 bg-orange-600" />
                    {/* Counterbalance Circle */}
                    <div className="absolute bottom-6.25 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full border-[1.5px] border-orange-600 bg-black" />
                </div>
            </div>
      </div>
    </div>
  );
}
