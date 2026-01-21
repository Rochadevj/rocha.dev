import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { GithubSection } from "./components/sections/GithubSection";
import { CTASection } from "./components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen text-foreground font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="relative z-10 p-4 sm:p-8 space-y-24 container mx-auto">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GithubSection />
        <SkillsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
