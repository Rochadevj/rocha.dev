"use client";

import { projects } from "@/app/data/projects";
import Image from "next/image";
import { GithubIcon, ExternalLinkIcon } from "../icons";
import { Code2, Star } from "lucide-react";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const { copy } = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Projects Animation
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: "power3.out",
        });

        // Parallax Effect for Image
        const imageContainer = card.querySelector(".project-image-container");
        if (imageContainer) {
          gsap.fromTo(imageContainer, 
            { y: 0 },
            {
              y: -50, // Move up as we scroll down
              scrollTrigger: {
                 trigger: card,
                 start: "top bottom",
                 end: "bottom top",
                 scrub: 1, // Smooth scrubbing
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative px-4 py-20 selection:bg-accent/30 sm:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div ref={titleRef} className="mb-14 text-center sm:mb-24">
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">
              {copy.projects.label}
            </span>
            <h2 className="relative z-10 text-4xl font-black uppercase tracking-tighter text-white sm:text-6xl md:text-7xl">
              {copy.projects.titlePrimary}{" "}
              <span className="font-serif italic font-thin text-transparent bg-clip-text bg-linear-to-r from-accent via-accent-secondary to-accent-tertiary normal-case">
                {copy.projects.titleAccent}
              </span>
            </h2>
          </div>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-linear-to-r from-accent to-accent-secondary sm:mt-6 sm:w-24" />
        </div>
        {/* Projects Stack */}
        <div ref={projectsRef} className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {projects.slice(0, 4).map((project, index) => {
            const localized = copy.projects.items[index];
            const galleryImages = project.images ?? [];
            const hasGallery = galleryImages.length > 0;
            return (
              <div
                key={project.name}
                className="project-card group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                
                {/* Info Side (Left) */}
                <div className="order-2 flex flex-col gap-5 text-left lg:col-span-5 lg:order-1 sm:gap-6">
                   {/* Project Title with Dash */}
                   <div className="flex items-center gap-4">
                      <div className="w-8 h-1 bg-accent rounded-full" />
                      <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{project.name}</h3>
                   </div>

                   <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
                      {localized?.description ?? project.description}
                   </p>

                   {/* Features / Outcome List */}
                   <div className="my-2 flex flex-col gap-3 sm:my-4">
                      {(localized?.outcome ?? project.outcome) && (
                        <div className="flex items-start gap-3">
                           <Star className="w-5 h-5 text-accent shrink-0 mt-1" />
                           <p className="text-gray-300">{localized?.outcome ?? project.outcome}</p>
                        </div>
                      )}
                       <div className="flex items-start gap-3">
                           <Code2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                           <p className="text-gray-300">
                             {localized?.role || project.role || copy.projects.fallbackRole}
                           </p>
                        </div>
                   </div>

                   {/* Tech Stack Buttons */}
                   <div className="mt-2 flex flex-wrap gap-2.5 sm:gap-3">
                      {project.tech?.map((tech) => (
                        <div 
                          key={tech} 
                          className="px-4 py-2 bg-neutral-900 border border-white/10 rounded-lg text-gray-300 text-sm font-medium flex items-center gap-2 transition-colors cursor-default"
                        >
                          {/* We don't have specific icons mapped, so we use a generic dot or nothing for now */}
                           <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {tech}
                        </div>
                      ))}
                   </div>

                </div>

                {/* Visual Side (Right) */}
                <div className="lg:col-span-7 relative order-1 lg:order-2">
                  {/* Image Container */}
                  <div
                    className={`relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0d1117] ring-1 ring-white/10 shadow-[0_0_30px_rgba(59,130,246,0.16)] transition-all duration-500 ${
                      hasGallery ? "aspect-16/10" : "aspect-[16/9.1]"
                    }`}
                  >
                      
                      {hasGallery ? (
                         <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
                             
                             {/* Left Image */}
                             {galleryImages[0] && (
                               <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-[28%] aspect-9/19 rounded-[min(1rem,2vw)] overflow-hidden border border-white/10 shadow-2xl z-0 opacity-80 -rotate-6 transition-transform hover:-translate-y-1/2 hover:-rotate-12 duration-500 origin-bottom-right">
                                   <Image 
                                     src={galleryImages[0]} 
                                     alt={`${project.name} Screen 1`}
                                     fill
                                     sizes="(min-width: 1024px) 18vw, (min-width: 768px) 24vw, 40vw"
                                     style={{ filter: "invert(0)" }}
                                     suppressHydrationWarning
                                     className="object-cover"
                                   />
                               </div>
                             )}

                             {/* Right Image */}
                             {galleryImages[2] && (
                               <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[28%] aspect-9/19 rounded-[min(1rem,2vw)] overflow-hidden border border-white/10 shadow-2xl z-0 opacity-80 rotate-6 transition-transform hover:-translate-y-1/2 hover:rotate-12 duration-500 origin-bottom-left">
                                   <Image 
                                     src={galleryImages[2]} 
                                     alt={`${project.name} Screen 3`}
                                     fill
                                     sizes="(min-width: 1024px) 18vw, (min-width: 768px) 24vw, 40vw"
                                     style={{ filter: "invert(0)" }}
                                     suppressHydrationWarning
                                     className="object-cover"
                                   />
                               </div>
                             )}

                             {/* Center Image */}
                             {galleryImages[1] && (
                               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-9/19 rounded-[min(1.5rem,3vw)] overflow-hidden border border-white/10 shadow-2xl z-10 hover:scale-105 transition-transform duration-500">
                                   <Image 
                                     src={galleryImages[1]} 
                                     alt={`${project.name} Screen 2`}
                                     fill
                                     sizes="(min-width: 1024px) 20vw, (min-width: 768px) 28vw, 45vw"
                                     style={{ filter: "invert(0)" }}
                                     suppressHydrationWarning
                                     className="object-cover"
                                   />
                               </div>
                             )}
                         </div>
                      ) : project.image ? (
                         <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-3 lg:p-4">
                             <div className="absolute inset-x-[10%] top-1/2 h-[68%] -translate-y-1/2 rounded-4xl bg-linear-to-br from-accent/14 via-white/3 to-transparent blur-2xl" />
                             <div
                               className="relative w-full max-w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-0.5 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
                               style={{
                                 aspectRatio: project.imageAspectRatio ?? 16 / 9.1,
                               }}
                             >
                                <div
                                  className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-2px)]"
                                  style={{
                                    backgroundColor: project.imageBackground ?? "rgba(10, 13, 20, 0.65)",
                                  }}
                                >
                                   <Image 
                                      src={project.image} 
                                      alt={project.name}
                                      fill
                                      sizes="(min-width: 1024px) 58vw, 100vw"
                                      style={{
                                        filter: "invert(0)",
                                        transform: `scale(${project.imageZoom ?? 1})`,
                                      }}
                                      suppressHydrationWarning
                                      className="object-contain object-center"
                                    />
                                </div>
                             </div>
                         </div>
                      ) : (
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                           <span className="text-white/10 font-black text-4xl">{project.name}</span>
                        </div>
                      )}
                  </div>

                  {/* External Links below image for mobile/easy access */}
                   <div className="mt-4 flex justify-end gap-4 sm:mt-6">
                      <a 
                        href={project.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                         <GithubIcon className="w-5 h-5" />
                         <span>{copy.projects.source}</span>
                      </a>
                      <a 
                         href={project.weburl || project.url}
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                         <ExternalLinkIcon className="w-5 h-5" />
                         <span>{copy.projects.liveDemo}</span>
                      </a>
                   </div>
                </div>

              </div>
            );
          })}
        </div>
        
        {/* Foot note */}
        <div className="mt-20 text-center sm:mt-32">
            <p className="text-gray-500">
               {copy.projects.footer}
            </p>
        </div>
      </div>
    </section>
  );
}
