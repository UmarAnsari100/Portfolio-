import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { TechStack } from './components/TechStack';
import { JourneyTimeline } from './components/JourneyTimeline';
import { EditorNote } from './components/EditorNote';
import { ArticlesSection } from './components/ArticlesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { CinematicIntro } from './components/CinematicIntro';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [isReplay, setIsReplay] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplayIntro = () => {
    setIsReplay(true);
    setShowIntro(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] font-sans antialiased relative selection:bg-[#1A1A1A] selection:text-[#F5F2ED]">
      {/* Cinematic Engineering Evidence Verification Intro Overlay */}
      {showIntro && (
        <CinematicIntro
          onComplete={() => {
            setShowIntro(false);
            setIsReplay(false);
          }}
          isReplay={isReplay}
        />
      )}

      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1A1A1A] focus:text-[#F5F2ED] focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:outline-none focus:ring-2 focus:ring-[#A18262]"
      >
        Skip to main content
      </a>

      {/* Custom Crosshair Cursor */}
      <CustomCursor />

      {/* Main Broadsheet Paper Surface Container */}
      <div className="relative z-10 max-w-[1536px] mx-auto border-x-0 md:border-x border-[#1A1A1A]/10 shadow-xs">
        {/* Masthead Header */}
        <Header
          onHireMeClick={() => scrollToSection('contact')}
          onReplayIntro={handleReplayIntro}
        />

        {/* Main Content Landmark */}
        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          {/* Hero Broadsheet Section */}
          <Hero onExploreWorkClick={() => scrollToSection('work')} />

          {/* Work / Case Files / Dispatches */}
          <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />

          {/* Tools of Investigation (Tech Stack Matrix & Code Drawer) */}
          <TechStack />

          {/* The Chronicles & Milestones (Journey Timeline) */}
          <JourneyTimeline />

          {/* The Editor's Note (About & Manifesto) */}
          <EditorNote />

          {/* Essays & Reviews */}
          <ArticlesSection />

          {/* Contact / Transmit Telegram */}
          <ContactSection />
        </main>

        {/* Broadsheet Press Footer */}
        <Footer onReplayIntro={handleReplayIntro} />
      </div>

      {/* Project Case Study Reader Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
