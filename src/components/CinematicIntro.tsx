import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Check, ShieldCheck, X } from 'lucide-react';
import { playArchivalClick, playPaperSweep } from '../utils/audioUtils';

interface CinematicIntroProps {
  onComplete: () => void;
  isReplay?: boolean;
}

const PROJECTS_LIST = [
  {
    caseNo: 'CASE FILE 001',
    title: 'UMRAH TRANSPORT',
    subtitle: 'Saudi Luxury Transportation Platform',
  },
  {
    caseNo: 'CASE FILE 002',
    title: 'ROYAL VIP LIMOS',
    subtitle: 'Luxury Reservation Experience',
  },
  {
    caseNo: 'CASE FILE 003',
    title: 'OPTION ONE STORE',
    subtitle: 'Commerce Platform',
  },
  {
    caseNo: 'CASE FILE 004',
    title: 'STUDYBUDDY AI',
    subtitle: 'AI Learning Platform',
  },
];

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
      // Master GSAP Timeline (~8.2s total, Atmospheric Movie-Trailer Pacing)
      const tl = gsap.timeline({
        onComplete: () => {
          if (typeof window !== 'undefined' && !isReplay) {
            localStorage.setItem('has_seen_intro_v1', 'true');
          }
          onComplete();
        }
      });
      timelineRef.current = tl;

      // Initial paper sound cue
      playPaperSweep();

      // ===================================================
      // SCENE 01 — ATMOSPHERE & UNFOLDING (0.0s - 1.4s)
      // Minimal: Only title, archive badge & authenticating text
      // ===================================================
      tl.fromTo(
        '.scene-1-container',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo(
        '.scene-1-divider',
        { scaleX: 0 },
        { scaleX: 1, duration: 0.7, ease: 'power2.inOut', transformOrigin: 'center center' },
        '-=0.3'
      );

      // Hold Scene 1 until 1.4s
      tl.to('.scene-1-container', { opacity: 0, y: -10, duration: 0.35, ease: 'power2.in' }, '1.3');

      // ===================================================
      // SCENE 02 — RHYTHMIC CASE FILE REVEALS (1.4s - 3.4s)
      // Reveals ONE project at a time in sequence
      // ===================================================
      const projectItems = document.querySelectorAll('.project-reveal-item');
      projectItems.forEach((item, idx) => {
        const startTime = 1.4 + idx * 0.5; // 0.5s stride per project

        tl.fromTo(
          item,
          { opacity: 0, y: 16, filter: 'blur(4px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.32,
            ease: 'power2.out',
            onStart: () => playArchivalClick()
          },
          `${startTime}`
        )
        .fromTo(
          item.querySelector('.proj-check'),
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.18, ease: 'back.out(1.5)' },
          `${startTime + 0.1}`
        );

        // Slide out upward unless it's the last item
        if (idx < projectItems.length - 1) {
          tl.to(
            item,
            { opacity: 0, y: -16, filter: 'blur(2px)', duration: 0.2, ease: 'power2.in' },
            `${startTime + 0.42}`
          );
        } else {
          // Fade last item out at 3.3s
          tl.to(item, { opacity: 0, duration: 0.25, ease: 'power2.in' }, '3.3');
        }
      });

      // ===================================================
      // SCENE 03 — SINGLE PATENT BLUEPRINT ASSEMBLY (3.4s - 4.9s)
      // One minimal Apple-patent style blueprint sheet
      // ===================================================
      tl.fromTo(
        '.patent-sheet',
        { opacity: 0, y: 14, filter: 'blur(5px)' },
        {
          opacity: 0.7,
          y: 0,
          filter: 'blur(3px)',
          duration: 0.6,
          ease: 'power2.out',
          onStart: () => playPaperSweep()
        },
        '3.4'
      );

      // ===================================================
      // SCENE 04 — PRECISION SCANNER & AUTH COMPLETE (4.4s - 5.8s)
      // ===================================================
      tl.fromTo(
        scannerBarRef.current,
        { top: '0%', opacity: 0 },
        {
          top: '100%',
          opacity: 1,
          duration: 1.2,
          ease: 'power1.inOut',
          onStart: () => playPaperSweep()
        },
        '4.2'
      );

      // Blueprint sharpens
      tl.to(
        '.patent-sheet',
        { opacity: 1, filter: 'blur(0px)', duration: 0.45, ease: 'power2.out' },
        '4.5'
      );

      // Reveal AUTHENTICATION COMPLETE text
      tl.fromTo(
        '.auth-complete-text',
        { opacity: 0, y: 6 },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power2.out',
          onStart: () => playArchivalClick()
        },
        '4.9'
      );

      // ===================================================
      // SCENE 05 — MINIMAL AUTHENTICATION SEAL (5.8s - 7.0s)
      // ===================================================
      tl.to(
        '.patent-container',
        { opacity: 0.2, filter: 'blur(3px)', duration: 0.4, ease: 'power2.inOut' },
        '5.6'
      );

      tl.fromTo(
        '.auth-seal',
        { opacity: 0, scale: 0.988, filter: 'blur(4px)' },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.55,
          ease: 'power2.out',
          onStart: () => playArchivalClick()
        },
        '5.8'
      );

      // Dwell hold for seal until 7.0s

      // ===================================================
      // SCENE 06 — PHYSICAL PAPER SLIDE-UP TRANSITION (7.0s - 7.8s)
      // Paper physically slides upward, opening the portfolio newspaper!
      // ===================================================
      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          onStart: () => playPaperSweep()
        },
        '7.0'
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
    // Smooth physical slide up on skip
    gsap.to(containerRef.current, {
      yPercent: -100,
      duration: 0.45,
      ease: 'power3.inOut',
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
      className="fixed inset-0 z-[9999] bg-[#F5F2ED] text-[#1A1A1A] font-sans antialiased flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-hidden select-none shadow-2xl border-b-2 border-[#1A1A1A]"
    >
      {/* Subtle Editorial Background Gridlines */}
      <div className="absolute inset-0 pointer-events-none opacity-15 grid grid-cols-6 md:grid-cols-12 gap-0 border-b border-[#1A1A1A]/10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-[#1A1A1A]/10 h-full" />
        ))}
      </div>

      {/* Optical Inspection Bar (Scanner Line) */}
      <div
        ref={scannerBarRef}
        aria-hidden="true"
        className="absolute left-0 right-0 h-[1.5px] bg-[#A18262] shadow-[0_0_8px_rgba(161,130,98,0.25)] z-30 pointer-events-none opacity-0"
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
      <div className="relative z-10 max-w-3xl mx-auto w-full my-auto py-4 flex flex-col items-center justify-center min-h-[360px]">

        {/* SCENE 01: Atmosphere */}
        <div className="scene-1-container text-center w-full max-w-lg absolute inset-x-0 mx-auto flex flex-col items-center justify-center pointer-events-none">
          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#A18262] font-bold mb-2">
            Classified Engineering Archive
          </div>

          <h1 className="font-serif font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#1A1A1A] mb-2">
            ENGINEERING DOSSIER
          </h1>

          <div className="scene-1-divider h-[1px] w-48 bg-[#1A1A1A]/30 my-3" />

          <p className="font-mono text-xs text-[#5E5E5E] tracking-[0.2em] uppercase italic">
            Authenticating...
          </p>
        </div>

        {/* SCENE 02: Rhythmic Single Case File Reveals */}
        <div className="w-full max-w-lg absolute inset-x-0 mx-auto flex items-center justify-center pointer-events-none">
          {PROJECTS_LIST.map((proj, idx) => (
            <div
              key={idx}
              className="project-reveal-item absolute inset-x-0 mx-auto border border-[#1A1A1A]/20 bg-[#F5F2ED] p-5 sm:p-6 shadow-sm text-center flex flex-col items-center justify-center rounded-xs opacity-0"
            >
              <div className="font-mono text-[10px] text-[#A18262] uppercase tracking-[0.25em] font-bold mb-1">
                {proj.caseNo}
              </div>

              <div className="font-serif font-black text-xl sm:text-2xl uppercase text-[#1A1A1A] tracking-tight mb-1">
                {proj.title}
              </div>

              <div className="font-mono text-xs text-[#5E5E5E] mb-3">
                {proj.subtitle}
              </div>

              <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#A18262] bg-[#1A1A1A]/5 px-3 py-1 rounded-full border border-[#1A1A1A]/10">
                <Check className="proj-check w-3.5 h-3.5" />
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* SCENE 03 & 04: Single Patent Blueprint Sheet & Auth Complete */}
        <div className="patent-container w-full max-w-xl flex flex-col items-center">
          {/* Patent Blueprint Sheet */}
          <div className="patent-sheet w-full border border-[#1A1A1A]/25 bg-[#F5F2ED] p-5 sm:p-6 rounded-xs shadow-xs text-left opacity-0">
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/15 pb-2 mb-3 font-mono text-[10px] text-[#A18262] uppercase tracking-[0.2em] font-bold">
              <span>PATENT SPECIFICATION • FIG 1.0</span>
              <span>SYSTEM TOPOLOGY</span>
            </div>

            {/* Architecture Node Flow Diagram */}
            <div className="font-mono text-xs text-[#1A1A1A] space-y-3 my-2">
              <div className="flex items-center justify-between gap-2 border border-[#1A1A1A]/10 bg-[#1A1A1A]/5 p-2.5 rounded-xs">
                <span className="font-bold text-[#1A1A1A]">[ Client Application ]</span>
                <span className="text-[#A18262] font-mono text-[10px]">&lt;──&gt;</span>
                <span className="font-bold text-[#1A1A1A]">[ Edge Proxy API ]</span>
                <span className="text-[#A18262] font-mono text-[10px]">&lt;──&gt;</span>
                <span className="font-bold text-[#1A1A1A]">[ Core Engine ]</span>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px] text-[#5E5E5E] pt-1">
                <div className="border-r border-[#1A1A1A]/10 pr-1">
                  LATENCY: <span className="font-bold text-[#1A1A1A]">&lt;80ms</span>
                </div>
                <div className="border-r border-[#1A1A1A]/10 px-1 text-center">
                  INTEGRITY: <span className="font-bold text-[#A18262]">100%</span>
                </div>
                <div className="pl-1 text-right">
                  AUDIT: <span className="font-bold text-[#1A1A1A]">PASSED</span>
                </div>
              </div>
            </div>
          </div>

          {/* Authentication Complete Notification */}
          <div className="auth-complete-text font-mono text-xs uppercase tracking-[0.25em] font-bold text-[#A18262] mt-4 opacity-0 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#A18262]" />
            <span>AUTHENTICATION COMPLETE</span>
          </div>
        </div>

        {/* SCENE 05: Minimal Editorial Authentication Seal */}
        <div className="auth-seal absolute inset-x-0 mx-auto flex items-center justify-center pointer-events-none opacity-0">
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
        <span className="hidden sm:inline">RAWALPINDI EDITION</span>
        <span>PRESS ESC TO SKIP</span>
      </div>
    </div>
  );
};
