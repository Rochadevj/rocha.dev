"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "@/app/components/i18n/LanguageProvider";

const navItems = [
  { name: "about", href: "/#about" },
  { name: "projects", href: "/#projects" },
  { name: "skills", href: "/#skills" },
  { name: "contact", href: "/#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { language, setLanguage, copy } = useTranslations();

  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -35% 0px" }
    );

    // Observe Hero explicitly
    const heroElement = document.getElementById("hero");
    if (heroElement) observer.observe(heroElement);

    navItems.forEach((item) => {
      if (item.href.startsWith("/#")) {
        const sectionId = item.href.replace("/#", "");
        const element = document.getElementById(sectionId);
        if (element) observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHome, pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    if (isHome && item.href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = item.href.replace("/#", "");
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsMobileMenuOpen(false);
    if (!isHome) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("hero");
  };

  const isLightMode = activeSection === "hero" || (isHome && activeSection === "");
  const sectionLabels: Record<string, string> = {
    about: copy.nav.about,
    projects: copy.nav.projects,
    skills: copy.nav.skills,
    contact: copy.nav.contact,
  };
  const openMenuLabel = language === "pt-BR" ? "Abrir menu" : "Open menu";
  const closeMenuLabel = language === "pt-BR" ? "Fechar menu" : "Close menu";

  const toggleLanguage = () => {
    setIsMobileMenuOpen(false);
    setLanguage(language === "pt-BR" ? "en" : "pt-BR");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-2 mt-2 sm:mx-4 sm:mt-4">
        <div 
          className={`max-w-5xl mx-auto rounded-[1.75rem] px-3 py-3 sm:rounded-full sm:px-6 sm:py-3 transition-all duration-300 ${
            isLightMode 
              ? "bg-white/70 backdrop-blur-md border border-black/5 shadow-sm hover:bg-white/90" 
              : "glass hover:bg-black/80"
          }`}
        >
          <div className="relative z-50 flex items-center justify-between gap-3 sm:hidden">
            <Link
              href="/"
              onClick={handleLogoClick}
              className={`text-lg font-black tracking-tight transition-colors uppercase shrink-0 ${
                isLightMode ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              rocha<span className="text-accent">.</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label={isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
              aria-expanded={isMobileMenuOpen}
              className={`relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isLightMode
                  ? "border-black/10 bg-white/40 text-black hover:bg-white/75"
                  : "border-white/10 bg-white/6 text-white hover:bg-white/10"
              }`}
            >
              <span className="sr-only">
                {isMobileMenuOpen ? closeMenuLabel : openMenuLabel}
              </span>
              <span className="flex h-4.5 w-4.5 flex-col items-center justify-between">
                <span
                  className={`block h-px w-full rounded-full transition-all duration-300 ${
                    isLightMode ? "bg-black" : "bg-white"
                  } ${isMobileMenuOpen ? "translate-y-[8px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-px w-full rounded-full transition-all duration-300 ${
                    isLightMode ? "bg-black" : "bg-white"
                  } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-px w-full rounded-full transition-all duration-300 ${
                    isLightMode ? "bg-black" : "bg-white"
                  } ${isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>

          <div
            className={`fixed inset-0 z-40 sm:hidden ${isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
            aria-hidden={!isMobileMenuOpen}
          >
            <button
              type="button"
              aria-label={closeMenuLabel}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`absolute inset-0 bg-[#02050b]/55 backdrop-blur-[2px] transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            />
            <div
              className={`absolute inset-y-0 right-0 flex w-[min(84vw,320px)] flex-col border-l border-white/8 bg-[linear-gradient(180deg,#0b1220_0%,#08101b_100%)] px-7 pb-7 pt-24 shadow-[-24px_0_60px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col">
                {navItems.map((item) => {
                  const isActive = activeSection === item.name;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item)}
                      className={`border-b border-white/10 py-6 text-[1.7rem] font-semibold tracking-tight capitalize transition-colors ${
                        isActive ? "text-white" : "text-white/88 hover:text-white"
                      }`}
                    >
                      {sectionLabels[item.name] ?? item.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-6">
                <button
                  type="button"
                  onClick={toggleLanguage}
                  aria-label={copy.nav.languageToggle}
                  title={copy.nav.languageToggle}
                  className="inline-flex items-center rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/88 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {language === "pt-BR" ? "EN" : "PT"}
                </button>
                <span className="text-[0.72rem] font-medium tracking-[0.18em] text-white/28">
                  ~/henriquerocha.me
                </span>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <Link
              href="/"
              onClick={handleLogoClick}
              className={`text-xl font-black tracking-tight transition-colors uppercase shrink-0 ${
                isLightMode ? "text-black hover:text-accent" : "text-white hover:text-accent"
              }`}
            >
              rocha<span className="text-accent">.</span>
            </Link>
            <span
              aria-hidden="true"
              className={`h-5 w-px shrink-0 rounded-full ${
                isLightMode ? "bg-black/12" : "bg-white/14"
              }`}
            />
            <div className="min-w-0 flex-1 flex items-center justify-end gap-2">
              <div className="min-w-0 flex items-center gap-2 overflow-x-auto no-scrollbar pr-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item)}
                    className={`relative capitalize text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeSection === item.name
                        ? isLightMode
                          ? "text-white bg-black shadow-lg shadow-black/20"
                          : "text-black bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        : isLightMode
                          ? "text-black/70 hover:text-black hover:bg-black/5"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {sectionLabels[item.name] ?? item.name}
                  </Link>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={copy.nav.languageToggle}
                title={copy.nav.languageToggle}
                className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap border ${
                  isLightMode
                    ? "border-black/10 text-black/80 hover:text-black hover:bg-black/5"
                    : "border-white/10 text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {language === "pt-BR" ? "EN" : "PT"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
