import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Check, ShieldCheck, X } from 'lucide-react';
import { playArchivalClick, playPaperSweep } from '../utils/audioUtils';

interface CinematicIntroProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isReplay = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const scannerBarRef = useRef<HTMLDivElement>(null);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && !isReplay) {
      onComplete();
      return;
    }

    // Check localStorage if not explicit replay
    if (!isReplay && typeof window !== 'undefined') {
      const hasSeen = localStorage.getItem('has_seen_intro_v1');
      if (hasSeen === 'true') {
        onComplete();
        return;
      }
    }

    const ctx = gsap.context(() => {
      // Main GSAP Master Timeline (~4.2s total)
      const tl = gsap.timeline({
        onComplete: () => {
          if (typeof window !== 'undefined' && !isReplay) {
            localStorage.setItem('has_seen_intro_v1', 'true');
          }
          onComplete();
        }
      });
      timelineRef.current = tl;

      // Sound Cues
      playPaperSweep();

      // ==========================================
      // SCENE 01 — DOSSIER ARRIVES (0.0s - 0.7s)
      // ==========================================
      tl.fromTo(
        '.dossier-header-title',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      )
      .fromTo(
        '.dossier-header-sub',
        { opacity: 0, y: 4 },
        { opacity: 0.8, y: 0, duration: 0.25, ease: 'power2.out' },
        '-=0.15'
      )
      .fromTo(
        '.dossier-divider',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.4, ease: 'power2.inOut', transformOrigin: 'center center' },
        '-=0.2'
      )
      .fromTo(
        '.dossier-meta-tag',
        { opacity: 0, y: 4 },
        { opacity: 0.75, y: 0, duration: 0.25, stagger: 0.05, ease: 'power1.out' },
        '-=0.2'
      );

      // ==========================================
      // SCENE 02 — BLUEPRINT ASSEMBLY (0.7s - 1.9s)
      // ==========================================
      tl.fromTo(
        '.blueprint-card',
        { opacity: 0, y: 12, filter: 'blur(4px)' },
        {
          opacity: 0.6,
          y: 0,
          filter: 'blur(3px)',
          duration: 0.45,
          stagger: 0.08,
          ease: 'power2.out',
          onStart: () => playArchivalClick()
        },
        '0.7'
      );

      // ==========================================
      // SCENE 03 — PRECISION DIGITIZER SCANNER (1.9s - 2.9s)
      // ==========================================
      tl.fromTo(
        scannerBarRef.current,
        { top: '0%', opacity: 0 },
        {
          top: '100%',
          opacity: 1,
          duration: 0.95,
          ease: 'power1.inOut',
          onStart: () => {
            playPaperSweep();
          }
        },
        '1.8'
      );

      // As digitizer passes, blueprints sharpen to 1.0 opacity & 0px blur
      tl.to(
        '.blueprint-card',
        {
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.3,
          stagger: 0.06,
          ease: 'power2.out'
        },
        '2.0'
      );

      // ==========================================
      // SCENE 04 — CASE STUDY VERIFICATION LOG (2.9s - 3.7s)
      // ==========================================
      // Line fades in -> checkmark appears -> VERIFIED slides in
      const rows = document.querySelectorAll('.verify-log-row');
      rows.forEach((row, index) => {
        const timeOffset = 2.8 + index * 0.14;
        
        tl.fromTo(
          row,
          { opacity: 0, x: -6 },
          {
            opacity: 1,
            x: 0,
            duration: 0.22,
            ease: 'power2.out',
            onStart: () => playArchivalClick()
          },
          `${timeOffset}`
        )
        .fromTo(
          row.querySelector('.verify-check'),
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.15, ease: 'back.out(1.4)' },
          `${timeOffset + 0.08}`
        )
        .fromTo(
          row.querySelector('.verify-badge'),
          { opacity: 0, x: 8 },
          { opacity: 1, x: 0, duration: 0.18, ease: 'power2.out' },
          `${timeOffset + 0.1}`
        );
      });

      // ==========================================
      // SCENE 05 — MINIMAL AUTHENTICATION SEAL (3.7s - 4.3s)
      // ==========================================
      tl.to(
        '.blueprint-container',
        { opacity: 0.3, filter: 'blur(2px)', duration: 0.35, ease: 'power2.inOut' },
        '3.6'
      );

      tl.fromTo(
        '.auth-seal',
        { opacity: 0, scale: 0.985, filter: 'blur(3px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.45,
          ease: 'power2.out',
          onStart: () => playArchivalClick()
        },
        '3.7'
      );

      // ==========================================
      // SCENE 06 — SEAMLESS TRANSITION (4.3s - 4.7s)
      // ==========================================
      tl.to(
        containerRef.current,
        {
          opacity: 0,
          scale: 1.01,
          duration: 0.45,
          ease: 'power2.inOut'
        },
        '4.2'
      );

    }, containerRef);

    // Keyboard shortcut to skip (Esc key)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleSkip();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      ctx.revert();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete, isReplay]);

  const handleSkip = () => {
    if (isSkipped) return;
    setIsSkipped(true);
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    if (typeof window !== 'undefined' && !isReplay) {
      localStorage.setItem('has_seen_intro_v1', 'true');
    }
    // Smooth fast fade out on skip
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        onComplete();
      }
    });
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Engineering Dossier Verification Intro Sequence"
      className="fixed inset-0 z-[9999] bg-[#F5F2ED] text-[#1A1A1A] font-sans antialiased flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden select-none"
    >
      {/* Editorial Gridlines overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-25 grid grid-cols-6 md:grid-cols-12 gap-0 border-b border-[#1A1A1A]/10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#1A1A1A]/10 h-full" />
        ))}
      </div>

      {/* Optical Inspection Bar (Scanner Line) */}
      <div
        ref={scannerBarRef}
        aria-hidden="true"
        className="absolute left-0 right-0 h-[1.5px] bg-[#A18262] shadow-[0_0_8px_rgba(161,130,98,0.3)] z-30 pointer-events-none opacity-0"
      />

      {/* Top Header Bar & Skip Control */}
      <div className="relative z-20 flex justify-between items-center border-b border-[#1A1A1A]/20 pb-3">
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]">
          <span className="w-2 h-2 rounded-full bg-[#A18262] animate-pulse" />
          <span className="font-bold text-[#1A1A1A]">VERIFICATION PROTOCOL v2.6</span>
          <span className="hidden sm:inline text-[#1A1A1A]/40">•</span>
          <span className="hidden sm:inline text-[#1A1A1A]/60">ARCHIVAL DOSSIER</span>
        </div>

        <button
          onClick={handleSkip}
          aria-label="Skip Intro Sequence"
          className="group flex items-center gap-2 px-3 py-1 border border-[#1A1A1A]/20 bg-[#F5F2ED]/80 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#A18262]"
        >
          <span>SKIP INTRO</span>
          <X className="w-3 h-3 group-hover:rotate-90 transition-transform duration-200" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto w-full my-auto py-4 flex flex-col items-center justify-center">

        {/* SCENE 01: Header Information */}
        <div className="text-center w-full max-w-xl mb-6">
          <div className="dossier-meta-tag flex items-center justify-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#A18262] font-semibold mb-2">
            <span>CASE FILE 001</span>
            <span>•</span>
            <span>ENGINEERING REVIEW</span>
            <span>•</span>
            <span>LEVEL 04</span>
          </div>

          <h1 className="dossier-header-title font-serif font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#1A1A1A] mb-1">
            ENGINEERING DOSSIER
          </h1>

          <p className="dossier-header-sub font-mono text-xs sm:text-sm text-[#5E5E5E] tracking-widest uppercase">
            Authenticating Engineering Evidence...
          </p>

          <div className="dossier-divider h-[1px] w-full bg-[#1A1A1A]/30 my-4" />
        </div>

        {/* SCENE 02 & 03: Project Blueprint Grid */}
        <div className="blueprint-container w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
          {/* Blueprint 1: Umrah Transport */}
          <div className="blueprint-card border border-[#1A1A1A]/20 bg-[#F5F2ED]/90 p-3 sm:p-4 rounded-xs">
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-1.5 mb-2 font-mono text-[10px] text-[#A18262] uppercase tracking-wider font-semibold">
              <span>001 / FLEET DISPATCH</span>
              <span>SAUDI TRANSPORT SYSTEM</span>
            </div>
            <div className="font-mono text-[10px] text-[#1A1A1A]/80 space-y-1 bg-[#1A1A1A]/5 p-2 rounded-xs">
              <div className="text-[#1A1A1A] font-bold">[Dispatch Controller] -&gt; [Geofence Engine]</div>
              <div className="text-[#5E5E5E]">Latency: &lt;100ms • Fleet Matrix: Active</div>
              <div className="text-[#5E5E5E] flex justify-between">
                <span>Route Opt: Dynamic</span>
                <span className="text-[#A18262] font-bold">100% Operational</span>
              </div>
            </div>
          </div>

          {/* Blueprint 2: Royal VIP Limos */}
          <div className="blueprint-card border border-[#1A1A1A]/20 bg-[#F5F2ED]/90 p-3 sm:p-4 rounded-xs">
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-1.5 mb-2 font-mono text-[10px] text-[#A18262] uppercase tracking-wider font-semibold">
              <span>002 / LUXURY BRANDING</span>
              <span>ROYAL VIP LIMOS PLATFORM</span>
            </div>
            <div className="font-mono text-[10px] text-[#1A1A1A]/80 space-y-1 bg-[#1A1A1A]/5 p-2 rounded-xs">
              <div className="text-[#1A1A1A] font-bold">[Editorial Design System] -&gt; [Chauffeur Core]</div>
              <div className="text-[#5E5E5E]">Layout: Broadsheet Aesthetic • Typography: Playfair</div>
              <div className="text-[#5E5E5E] flex justify-between">
                <span>Client Rating: Premium</span>
                <span className="text-[#A18262] font-bold">60 FPS Render</span>
              </div>
            </div>
          </div>

          {/* Blueprint 3: Option One Store */}
          <div className="blueprint-card border border-[#1A1A1A]/20 bg-[#F5F2ED]/90 p-3 sm:p-4 rounded-xs">
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-1.5 mb-2 font-mono text-[10px] text-[#A18262] uppercase tracking-wider font-semibold">
              <span>003 / COMMERCE SYSTEM</span>
              <span>OPTION ONE STORE</span>
            </div>
            <div className="font-mono text-[10px] text-[#1A1A1A]/80 space-y-1 bg-[#1A1A1A]/5 p-2 rounded-xs">
              <div className="text-[#1A1A1A] font-bold">[State Machine] -&gt; [Optimistic Cart UI]</div>
              <div className="text-[#5E5E5E]">Mutation: Zero-Latency • Store Sync: Active</div>
              <div className="text-[#5E5E5E] flex justify-between">
                <span>Catalog: 1.2k SKUs</span>
                <span className="text-[#A18262] font-bold">0 Drop Rates</span>
              </div>
            </div>
          </div>

          {/* Blueprint 4: StudyBuddy AI */}
          <div className="blueprint-card border border-[#1A1A1A]/20 bg-[#F5F2ED]/90 p-3 sm:p-4 rounded-xs">
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/10 pb-1.5 mb-2 font-mono text-[10px] text-[#A18262] uppercase tracking-wider font-semibold">
              <span>004 / AI LEARNING ENGINE</span>
              <span>STUDYBUDDY AI SUITE</span>
            </div>
            <div className="font-mono text-[10px] text-[#1A1A1A]/80 space-y-1 bg-[#1A1A1A]/5 p-2 rounded-xs">
              <div className="text-[#1A1A1A] font-bold">[Express Server Proxy] -&gt; [Gemini 2.5 API]</div>
              <div className="text-[#5E5E5E]">Schema: Strict JSON • Summarize Speed: 2.1s</div>
              <div className="text-[#5E5E5E] flex justify-between">
                <span>Active Recall: Enabled</span>
                <span className="text-[#A18262] font-bold">Validated</span>
              </div>
            </div>
          </div>
        </div>

        {/* SCENE 04: Project Verification Checklist */}
        <div className="w-full max-w-xl space-y-1.5 font-mono text-[11px] sm:text-xs my-2">
          {/* Row 1 */}
          <div className="verify-log-row flex items-center justify-between border-b border-[#1A1A1A]/10 pb-1">
            <span className="text-[#1A1A1A] font-semibold">001  UMRAH TRANSPORT</span>
            <span className="text-[#5E5E5E] hidden sm:inline">Booking Workflow</span>
            <div className="flex items-center gap-1.5">
              <Check className="verify-check w-3.5 h-3.5 text-[#A18262]" />
              <span className="verify-badge font-bold text-[#A18262]">VERIFIED</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="verify-log-row flex items-center justify-between border-b border-[#1A1A1A]/10 pb-1">
            <span className="text-[#1A1A1A] font-semibold">002  ROYAL VIP LIMOS</span>
            <span className="text-[#5E5E5E] hidden sm:inline">Luxury Branding</span>
            <div className="flex items-center gap-1.5">
              <Check className="verify-check w-3.5 h-3.5 text-[#A18262]" />
              <span className="verify-badge font-bold text-[#A18262]">VERIFIED</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="verify-log-row flex items-center justify-between border-b border-[#1A1A1A]/10 pb-1">
            <span className="text-[#1A1A1A] font-semibold">003  OPTION ONE STORE</span>
            <span className="text-[#5E5E5E] hidden sm:inline">Commerce System</span>
            <div className="flex items-center gap-1.5">
              <Check className="verify-check w-3.5 h-3.5 text-[#A18262]" />
              <span className="verify-badge font-bold text-[#A18262]">VERIFIED</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="verify-log-row flex items-center justify-between border-b border-[#1A1A1A]/10 pb-1">
            <span className="text-[#1A1A1A] font-semibold">004  STUDYBUDDY AI</span>
            <span className="text-[#5E5E5E] hidden sm:inline">AI Learning Engine</span>
            <div className="flex items-center gap-1.5">
              <Check className="verify-check w-3.5 h-3.5 text-[#A18262]" />
              <span className="verify-badge font-bold text-[#A18262]">VERIFIED</span>
            </div>
          </div>
        </div>

        {/* SCENE 05: Minimal Editorial Authentication Seal */}
        <div className="auth-seal absolute inset-x-0 mx-auto flex items-center justify-center pointer-events-none">
          <div className="border-2 border-[#1A1A1A] bg-[#F5F2ED] p-6 sm:p-8 rounded-full text-center shadow-xl max-w-xs flex flex-col items-center justify-center aspect-square">
            <ShieldCheck className="w-8 h-8 text-[#A18262] mb-2" />
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#A18262] font-bold mb-1">
              CASE FILE VERIFIED
            </div>
            <div className="font-serif font-black text-lg sm:text-xl uppercase text-[#1A1A1A] tracking-tight">
              MUHAMMAD UMAR
            </div>
            <div className="font-serif italic text-xs text-[#5E5E5E] mt-0.5">
              Frontend Engineer
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Editorial Footer Status */}
      <div className="relative z-20 flex justify-between items-center border-t border-[#1A1A1A]/20 pt-3 font-mono text-[10px] text-[#5E5E5E] uppercase tracking-widest">
        <span>ARCHIVAL DOSSIER SECURE</span>
        <span className="hidden sm:inline">TAXILA &amp; RIYADH EDITION</span>
        <span>PRESS ESC TO SKIP</span>
      </div>
    </div>
  );
};
