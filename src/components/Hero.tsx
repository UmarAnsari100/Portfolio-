import React, { useState } from 'react';
import { ArrowDownRight, Award, Layers, GitFork, Server, ShieldCheck, Radio, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

interface HeroProps {
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorkClick }) => {
  const shouldReduceMotion = useReducedMotion();
  const [activeArchView, setActiveArchView] = useState<'system' | 'flow'>('system');

  // Motion variants with strict timing (300ms - 600ms), no bounce
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-[1440px] mx-auto px-5 md:px-16 py-10 md:py-14 border-b-2 border-[#1A1A1A]"
    >
      {/* Top Editorial Divider Drawing Line */}
      <motion.div
        variants={lineVariants}
        className="w-full h-[1px] bg-[#1A1A1A]/20 origin-left mb-8"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Vertical Editorial Label */}
        <div className="hidden xl:flex col-span-1 items-end relative min-h-[300px]">
          <div className="absolute top-0 left-0 origin-top-left rotate-90 whitespace-nowrap">
            <span className="text-[10px] uppercase tracking-[0.4em] font-light opacity-60 italic text-[#A18262]">
              Engineering Architecture // Creative Direction
            </span>
          </div>
        </div>

        {/* Left Main Editorial Broadsheet Lead */}
        <div className="lg:col-span-7 xl:col-span-7 border-r-0 lg:border-r lg:border-[#1A1A1A]/20 pr-0 lg:pr-10">
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 border border-[#1A1A1A]/30 px-3 py-1 mb-6 bg-[#1A1A1A]/5 rounded-full">
            <span className="w-2 h-2 bg-[#A18262] rounded-full" />
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
              SPECIAL ISSUE // FRONTEND DOSSIER 2026
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-serif font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[60px] leading-[1.1] tracking-tight text-[#1A1A1A] mb-8">
            Engineered for sub-100ms interaction feedback, modular architecture, and high-density web interfaces<span className="text-[#A18262] italic font-sans text-2xl align-top ml-2" aria-hidden="true">01</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="font-sans text-base sm:text-lg text-[#444444] leading-relaxed max-w-[68ch] mb-8 font-light">
            An intersection of performance engineering and editorial design discipline. Specialized in React & Next.js web applications, requestAnimationFrame canvas processing, and zero-layout-shift client systems.
          </motion.p>

          {/* Special Report Metadata Bar */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-[#1A1A1A]/20">
            <div className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.15em]">
              <span className="text-[#1A1A1A]">SPECIAL REPORT: MUHAMMAD UMAR</span>
              <span className="text-[#A18262]" aria-hidden="true">•</span>
              <span className="italic text-[#A18262]">TAXILA & RIYADH</span>
            </div>

            <button
              onClick={onExploreWorkClick}
              aria-label="Explore dispatches and case studies"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] border border-[#1A1A1A]/30 px-6 py-3 rounded-full hover:bg-[#1A1A1A] hover:text-[#F5F2ED] transition-all cursor-pointer shadow-xs focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
            >
              <span>EXPLORE DISPATCHES</span>
              <ArrowDownRight className="w-4 h-4 text-[#A18262]" aria-hidden="true" />
            </button>
          </motion.div>
        </div>

        {/* Right Sidebar: Saudi VIP Architecture Blueprint & Inverted Pull Quote */}
        <motion.div variants={itemVariants} className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between space-y-6">
          {/* Saudi VIP Architecture Interactive Blueprint Box */}
          <div className="border border-[#1A1A1A]/20 p-4 bg-[#F5F2ED] shadow-sm">
            <div className="border border-[#1A1A1A]/30 bg-white p-4 mb-3">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-2 mb-3">
                <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
                  <Layers className="w-3.5 h-3.5 text-[#A18262]" />
                  <span>CASE 001 ARCHITECTURE</span>
                </div>
                <span className="font-mono text-[9px] font-bold text-[#A18262] bg-[#A18262]/10 px-1.5 py-0.5 rounded-xs uppercase">
                  SAUDI VIP FLEET
                </span>
              </div>

              {/* View Switcher Toggle */}
              <div className="flex border border-[#1A1A1A]/20 p-0.5 mb-4 bg-[#F5F2ED]" role="tablist" aria-label="Architecture diagram view">
                <button
                  role="tab"
                  aria-selected={activeArchView === 'system'}
                  onClick={() => setActiveArchView('system')}
                  className={`flex-1 py-1 font-mono text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeArchView === 'system'
                      ? 'bg-[#1A1A1A] text-[#F5F2ED]'
                      : 'text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  SYSTEM LAYERS
                </button>
                <button
                  role="tab"
                  aria-selected={activeArchView === 'flow'}
                  onClick={() => setActiveArchView('flow')}
                  className={`flex-1 py-1 font-mono text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeArchView === 'flow'
                      ? 'bg-[#1A1A1A] text-[#F5F2ED]'
                      : 'text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  DISPATCH PIPELINE
                </button>
              </div>

              {/* View Content */}
              {activeArchView === 'system' ? (
                <div className="space-y-2 font-mono text-[11px]">
                  {/* Layer 1: Client & UI */}
                  <div className="border border-[#1A1A1A]/20 p-2.5 bg-[#F5F2ED]/60 flex items-start gap-2.5 hover:bg-white transition-colors">
                    <Server className="w-4 h-4 text-[#A18262] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-bold text-[#1A1A1A] uppercase text-[10px] tracking-wider flex items-center justify-between">
                        <span>1. CLIENT PORTAL</span>
                        <span className="text-[9px] text-[#A18262] font-bold">Next.js 14 / Tailwind</span>
                      </div>
                      <p className="font-sans text-[11px] text-[#444444] font-light leading-snug mt-0.5">
                        Role-based booking views for VIP clients and chauffeur dispatchers.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <span className="text-[#A18262] font-mono text-[10px] font-bold">↓</span>
                  </div>

                  {/* Layer 2: Dispatch Engine */}
                  <div className="border border-[#1A1A1A]/20 p-2.5 bg-[#F5F2ED]/60 flex items-start gap-2.5 hover:bg-white transition-colors">
                    <GitFork className="w-4 h-4 text-[#A18262] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-bold text-[#1A1A1A] uppercase text-[10px] tracking-wider flex items-center justify-between">
                        <span>2. DISPATCH ENGINE</span>
                        <span className="text-[9px] text-[#A18262] font-bold">Edge API Routes</span>
                      </div>
                      <p className="font-sans text-[11px] text-[#444444] font-light leading-snug mt-0.5">
                        Automated driver assignment and flight status sync.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center my-0.5">
                    <span className="text-[#A18262] font-mono text-[10px] font-bold">↓</span>
                  </div>

                  {/* Layer 3: Persistence & Auth */}
                  <div className="border border-[#1A1A1A]/20 p-2.5 bg-[#F5F2ED]/60 flex items-start gap-2.5 hover:bg-white transition-colors">
                    <ShieldCheck className="w-4 h-4 text-[#A18262] shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-bold text-[#1A1A1A] uppercase text-[10px] tracking-wider flex items-center justify-between">
                        <span>3. DATA & TELEMETRY</span>
                        <span className="text-[9px] text-[#A18262] font-bold">MySQL / WebSockets</span>
                      </div>
                      <p className="font-sans text-[11px] text-[#444444] font-light leading-snug mt-0.5">
                        ACID reservation locks and real-time chauffeur location tracking.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 font-mono text-[10px]">
                  {/* Flow Steps Diagram */}
                  <div className="flex items-center gap-2 p-2 border border-[#1A1A1A]/20 bg-[#F5F2ED]/60">
                    <span className="w-5 h-5 rounded-full bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center font-bold text-[9px] shrink-0">1</span>
                    <div className="flex-1">
                      <span className="font-bold text-[#1A1A1A] uppercase block">VIP Booking Submitted</span>
                      <span className="text-[10px] text-[#5E5E5E] font-sans font-light">Validates flight arrival & guest itinerary</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 border border-[#1A1A1A]/20 bg-[#F5F2ED]/60">
                    <span className="w-5 h-5 rounded-full bg-[#A18262] text-[#F5F2ED] flex items-center justify-center font-bold text-[9px] shrink-0">2</span>
                    <div className="flex-1">
                      <span className="font-bold text-[#1A1A1A] uppercase block">Driver Auto-Assignment</span>
                      <span className="text-[10px] text-[#5E5E5E] font-sans font-light">Locks optimal chauffeur with zero booking collision</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 border border-[#1A1A1A]/20 bg-[#F5F2ED]/60">
                    <Radio className="w-4 h-4 text-[#A18262] shrink-0" />
                    <div className="flex-1">
                      <span className="font-bold text-[#1A1A1A] uppercase block">Real-Time GPS Broadcast</span>
                      <span className="text-[10px] text-[#5E5E5E] font-sans font-light">Live position updates streamed via WebSockets</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 p-2 border border-[#1A1A1A]/20 bg-white">
                    <CheckCircle2 className="w-4 h-4 text-[#A18262] shrink-0" />
                    <div className="flex-1">
                      <span className="font-bold text-[#1A1A1A] uppercase block">Audit-Ready Ledger</span>
                      <span className="text-[10px] text-[#5E5E5E] font-sans font-light">Ride receipt logged with 99.98% uptime guarantee</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <p className="font-mono text-[10px] uppercase italic tracking-wider text-[#5E5E5E] text-center">
              FIG. 1: "Architectural blueprint for the Saudi VIP Transport Platform dispatch system."
            </p>
          </div>

          {/* High-Density Inverted Editorial Review Card */}
          <div className="bg-[#1A1A1A] text-[#F5F2ED] p-6 shadow-xl border border-[#1A1A1A]">
            <div className="flex items-center gap-2 mb-3 text-[#A18262] font-mono text-xs font-bold uppercase tracking-[0.2em]">
              <Award className="w-4 h-4 text-[#A18262]" />
              <span>THE PROPOSITION</span>
            </div>
            <p className="font-serif italic text-base sm:text-lg leading-relaxed mb-4 text-[#F5F2ED]">
              "Umar bridges the gap between complex computational logic and human-centric design, treating every line of code as an ink stroke on a digital canvas."
            </p>
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] pt-3 border-t border-[#F5F2ED]/20">
              <span className="font-bold text-[#F5F2ED]">— Tech Critique</span>
              <span className="text-[#A18262]">VERIFIED ARCHITECT</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Editorial Line */}
      <motion.div
        variants={lineVariants}
        className="w-full h-[1px] bg-[#1A1A1A]/20 origin-left mt-12 mb-8"
        aria-hidden="true"
      />

      {/* Ticker / Highlights Band */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="border-r-0 md:border-r border-[#1A1A1A]/20 pr-2">
          <span className="font-serif font-bold text-3xl md:text-4xl block text-[#1A1A1A]">04</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5E5E5E]">PROVEN CASE STUDIES</span>
        </div>
        <div className="border-r-0 md:border-r border-[#1A1A1A]/20 pr-2">
          <span className="font-serif font-bold text-3xl md:text-4xl block text-[#1A1A1A]">99+</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5E5E5E]">LIGHTHOUSE SCORE</span>
        </div>
        <div className="border-r-0 md:border-r border-[#1A1A1A]/20 pr-2">
          <span className="font-serif font-bold text-3xl md:text-4xl block text-[#1A1A1A]">100%</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5E5E5E]">STRICT TYPE SAFETY</span>
        </div>
        <div>
          <span className="font-serif font-bold text-3xl md:text-4xl block text-[#1A1A1A]">100ms</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5E5E5E]">FRAME BUDGET LATENCY</span>
        </div>
      </div>
    </motion.section>
  );
};

