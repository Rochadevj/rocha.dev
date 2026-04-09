"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

const githubPalette = ["#0d1522", "#123548", "#0b6986", "#2b8dd8", "#6ee7f9"];

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
    <section className="relative px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto flex max-w-304 flex-col gap-8 sm:gap-12">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.06)] sm:px-5 sm:py-2">
            {copy.github.label}
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tighter text-white sm:mt-6 sm:text-6xl md:text-7xl">
            {copy.github.title}{" "}
            <span className="bg-linear-to-r from-cyan-200 via-cyan-300 to-emerald-300 bg-clip-text font-serif italic text-transparent">
              {copy.github.titleAccent}
            </span>
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[linear-gradient(135deg,rgba(7,12,20,0.98)_0%,rgba(9,18,31,0.96)_46%,rgba(18,14,34,0.92)_100%)] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)] sm:p-6 lg:p-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,196,255,0.12),transparent_28%),radial-gradient(circle_at_18%_24%,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(42,189,167,0.08),transparent_34%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[28px_28px]" />

          <div className="relative z-10 rounded-[1.6rem] border border-white/10 bg-[#06101a]/86 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-6 lg:p-7">
            <div className="flex flex-col gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
                  <SiGithub className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">
                    GitHub
                  </p>
                  <a
                    href="https://github.com/Rochadevj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                  >
                    github.com/Rochadevj
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                {githubPalette.map((color, index) => (
                  <span
                    key={color}
                    className={`h-2.5 rounded-full ${index === 0 ? "w-8" : "w-6"}`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="relative mt-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,13,22,0.98)_0%,rgba(6,10,18,0.98)_100%)] p-4 sm:p-6 lg:p-7">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_26%)]" />
              <div className="pointer-events-none absolute inset-0 opacity-[0.14] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[24px_24px]" />

              <div
                className="relative z-10 overflow-x-auto no-scrollbar"
                aria-busy={!isMounted}
              >
                <div className="flex min-w-190 justify-center">
                  {isMounted ? (
                    <GitHubCalendar
                      username="Rochadevj"
                      colorScheme="dark"
                      fontSize={13}
                      blockSize={13}
                      blockMargin={5}
                      theme={{
                        dark: githubPalette,
                      }}
                    />
                  ) : (
                    <div className="h-40 w-full rounded-2xl border border-white/8 bg-white/3" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
