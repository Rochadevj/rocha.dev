"use client";

import { ReactNode } from "react";
import { skills } from "@/app/data/skills";
import { 
  SiJavascript, SiTypescript, SiPhp, SiMysql, SiHtml5, SiCss3, SiNextdotjs, SiReact, 
  SiTailwindcss, SiFramer, SiSanity, SiContentful, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiPrisma, SiPnpm, SiBun, SiGit, SiGithub, SiVercel, 
  SiAmazon, SiDocker, SiExpo, SiClerk, SiLinux, SiRust, SiFlutter, SiBlender, 
  SiAdobeillustrator, SiGodotengine, SiZod, SiBootstrap, SiWordpress, SiN8N, SiSupabase
} from "react-icons/si";
import { GiBearFace } from "react-icons/gi"; // For Zustand (Bear)
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

const skillIcons: Record<string, ReactNode> = {
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  PHP: <SiPhp />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  NextJS: <SiNextdotjs />,
  ReactJS: <SiReact />,
  "Tailwind CSS": <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  WordPress: <SiWordpress />,
  Motion: <SiFramer />,
  Sanity: <SiSanity />,
  Contentful: <SiContentful />,
  NodeJS: <SiNodedotjs />,
  ExpressJS: <SiExpress />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  Prisma: <SiPrisma />,
  Zustand: <GiBearFace />,
  Zod: <SiZod />,
  pnpm: <SiPnpm />,
  Bun: <SiBun />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  Vercel: <SiVercel />,
  AWS: <SiAmazon />,
  Docker: <SiDocker />,
  Supabase: <SiSupabase />,
  Expo: <SiExpo />,
  Clerk: <SiClerk />,
  Linux: <SiLinux />,
  Rust: <SiRust />,
  Flutter: <SiFlutter />,
  Blender: <SiBlender />,
  Illustrator: <SiAdobeillustrator />,
  Godot: <SiGodotengine />,
  n8n: <SiN8N />,
};

const skillColors: Record<string, { bg: string; text: string; color: string }> = {
  JavaScript: { bg: "bg-[#F7DF1E]/10", text: "text-[#F7DF1E]", color: "#F7DF1E" },
  TypeScript: { bg: "bg-[#3178C6]/10", text: "text-[#3178C6]", color: "#3178C6" },
  PHP: { bg: "bg-[#777BB4]/10", text: "text-[#777BB4]", color: "#777BB4" },
  HTML: { bg: "bg-[#E34F26]/10", text: "text-[#E34F26]", color: "#E34F26" },
  CSS: { bg: "bg-[#1572B6]/10", text: "text-[#1572B6]", color: "#1572B6" },
  NextJS: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  ReactJS: { bg: "bg-[#61DAFB]/10", text: "text-[#61DAFB]", color: "#61DAFB" },
  "Tailwind CSS": { bg: "bg-[#38B2AC]/10", text: "text-[#38B2AC]", color: "#38B2AC" },
  Bootstrap: { bg: "bg-[#7952B3]/10", text: "text-[#7952B3]", color: "#7952B3" },
  WordPress: { bg: "bg-[#21759B]/10", text: "text-[#21759B]", color: "#21759B" },
  Motion: { bg: "bg-[#0055FF]/10", text: "text-[#0055FF]", color: "#0055FF" },
  Sanity: { bg: "bg-[#F03E2F]/10", text: "text-[#F03E2F]", color: "#F03E2F" },
  Contentful: { bg: "bg-[#2478CC]/10", text: "text-[#2478CC]", color: "#2478CC" },
  NodeJS: { bg: "bg-[#339933]/10", text: "text-[#339933]", color: "#339933" },
  ExpressJS: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  PostgreSQL: { bg: "bg-[#336791]/10", text: "text-[#336791]", color: "#336791" },
  MySQL: { bg: "bg-[#4479A1]/10", text: "text-[#4479A1]", color: "#4479A1" },
  MongoDB: { bg: "bg-[#47A248]/10", text: "text-[#47A248]", color: "#47A248" },
  Prisma: { bg: "bg-[#2D3748]/10", text: "text-white", color: "#ffffff" },
  Zustand: { bg: "bg-[#443E38]/10", text: "text-[#F6C778]", color: "#443E38" }, // Using brownish for bear
  Zod: { bg: "bg-[#3068B7]/10", text: "text-[#3068B7]", color: "#3068B7" },
  pnpm: { bg: "bg-[#F69220]/10", text: "text-[#F69220]", color: "#F69220" },
  Bun: { bg: "bg-[#FBF0DF]/10", text: "text-[#FBF0DF]", color: "#FBF0DF" },
  Git: { bg: "bg-[#F05032]/10", text: "text-[#F05032]", color: "#F05032" },
  GitHub: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  Vercel: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  AWS: { bg: "bg-[#FF9900]/10", text: "text-[#FF9900]", color: "#FF9900" },
  Docker: { bg: "bg-[#2496ED]/10", text: "text-[#2496ED]", color: "#2496ED" },
  Supabase: { bg: "bg-[#3ECF8E]/10", text: "text-[#3ECF8E]", color: "#3ECF8E" },
  Expo: { bg: "bg-white/10", text: "text-white", color: "#ffffff" },
  Clerk: { bg: "bg-[#6C47FF]/10", text: "text-[#6C47FF]", color: "#6C47FF" },
  Linux: { bg: "bg-[#FCC624]/10", text: "text-[#FCC624]", color: "#FCC624" },
  Rust: { bg: "bg-[#000000]/10", text: "text-white", color: "#ffffff" },
  Flutter: { bg: "bg-[#02569B]/10", text: "text-[#02569B]", color: "#02569B" },
  Blender: { bg: "bg-[#E87D0D]/10", text: "text-[#E87D0D]", color: "#E87D0D" },
  Illustrator: { bg: "bg-[#FF9A00]/10", text: "text-[#FF9A00]", color: "#FF9A00" },
  Godot: { bg: "bg-[#478CBF]/10", text: "text-[#478CBF]", color: "#478CBF" },
  n8n: { bg: "bg-[#EA4B71]/10", text: "text-[#EA4B71]", color: "#EA4B71" },
};

export function SkillsSection() {
  const { copy } = useTranslations();
  return (
    <section id="skills" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-white/10 bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
            {copy.skills.label}
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter">
            {copy.skills.title}{" "}
            <span className="font-serif italic bg-linear-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text pr-2">
              {copy.skills.titleAccent}
            </span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
           {copy.skills.steps.map((step) => (
             <div
               key={step.title}
               className="relative overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 group transition-[background-color,border-color,box-shadow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-white/[0.07] hover:border-cyan-300/20 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_0_22px_rgba(34,211,238,0.05)]"
             >
               <div
                 className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                 style={{
                   background:
                     "radial-gradient(160px circle at 18% 14%, rgba(34,211,238,0.11), rgba(34,211,238,0) 62%), radial-gradient(180px circle at 84% 88%, rgba(236,72,153,0.08), rgba(236,72,153,0) 64%)",
                 }}
               />
               <span className="relative z-10 text-4xl font-black text-white/5 mb-4 block group-hover:text-accent/20 transition-colors duration-500">{step.icon}</span>
               <h3 className="relative z-10 text-xl font-bold text-white mb-2">{step.title}</h3>
               <p className="relative z-10 text-sm text-gray-400 leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>

        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">{copy.skills.toolboxTitle}</h3>
             <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-gray-500 mb-8">
               <span>{copy.skills.toolboxCategories.frontend}</span> <span className="text-gray-700">/</span>
               <span>{copy.skills.toolboxCategories.backend}</span> <span className="text-gray-700">/</span>
               <span>{copy.skills.toolboxCategories.infrastructure}</span> <span className="text-gray-700">/</span>
               <span>{copy.skills.toolboxCategories.testing}</span>
             </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            const colors = skillColors[skill.name] || { bg: "bg-gray-800", text: "text-white", color: "#fff" };
            const icon = skillIcons[skill.name] || <span className="font-bold">?</span>;
            
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden flex items-center gap-2 sm:gap-2.5 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full sm:rounded-2xl border border-white/8 bg-[#111] cursor-default shadow-lg shadow-black/50 transition-[transform,border-color,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] hover:bg-[#111721] hover:border-[#00d9ff]/55 hover:shadow-[0_0_0_1px_rgba(0,217,255,0.28),0_0_20px_rgba(0,217,255,0.16),0_12px_24px_rgba(0,0,0,0.45)]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-full sm:rounded-2xl opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  style={{
                    boxShadow:
                      "inset 0 0 10px rgba(0,217,255,0.16), 0 0 12px rgba(0,217,255,0.12)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(130% 90% at 8% 2%, rgba(0,219,255,0.18) 0%, rgba(0,219,255,0.05) 36%, rgba(8,12,22,0) 70%), linear-gradient(145deg, rgba(8,22,36,0.45) 0%, rgba(8,12,22,0.24) 52%, rgba(22,12,46,0.2) 100%)",
                  }}
                />
                <div
                  className="pointer-events-none absolute bottom-0 left-1/2 h-10 w-[72%] -translate-x-1/2 rounded-full blur-lg opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(62% 100% at 50% 100%, rgba(0,198,255,0.3) 0%, rgba(0,198,255,0.06) 42%, rgba(0,198,255,0) 100%)",
                  }}
                />
                <div 
                  className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-lg sm:text-xl"
                  style={{ color: colors.color }}
                >
                  {icon}
                </div>
                <span className="relative z-10 text-xs sm:text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
