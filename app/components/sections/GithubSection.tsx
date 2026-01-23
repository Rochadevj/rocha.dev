"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

export function GithubSection() {
  const [isMounted, setIsMounted] = useState(false);
  const { copy } = useTranslations();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase block mb-2">
              {copy.github.label}
            </span>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter relative z-10">
              {copy.github.title} <br />
              <span className="font-serif text-emerald-500 text-6xl ">
                 {copy.github.titleAccent}
              </span>
            </h2>
        </div>

        {/* Heatmap Container */}
        <div className="w-full flex justify-center bg-neutral-900/50 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors" aria-busy={!isMounted}>
            {isMounted ? (
              <GitHubCalendar 
                  username="Rochadevj"
                  colorScheme="dark"
                  fontSize={12}
                  blockSize={12}
                  blockMargin={5}
                  theme={{
                       dark: [
                          '#161b22', // level 0
                          '#0e4429', // level 1
                          '#006d32', // level 2
                          '#26a641', // level 3
                          '#39d353', // level 4
                       ],
                  }}
              />
            ) : (
              <div className="h-[152px] w-full" />
            )}
        </div>
      </div>
    </section>
  );
}
