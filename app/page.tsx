"use client";

import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  AutomationSection,
  SkillsSection,
  ContactSection,
  GithubSection,
  CTASection,
} from "./components/sections";
import { MarqueeSection } from "./components/MarqueeSection";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-(family-name:--font-geist-sans)">
      <Navbar />
      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <MarqueeSection />
        <ProjectsSection />
        <AutomationSection />
        <div className="container mx-auto px-4 py-16 space-y-16 sm:px-8 sm:py-24 sm:space-y-24">

          <GithubSection />
          <SkillsSection />
          <ContactSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
