import React, { useState, useEffect } from 'react';
import { Send, ShieldCheck } from 'lucide-react';
import { PrintGazetteButton } from './PrintGazetteButton';

interface HeaderProps {
  onHireMeClick: () => void;
  onReplayIntro?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onHireMeClick, onReplayIntro }) => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    }).toUpperCase();
    setCurrentDate(formatted);
  }, []);

  return (
    <header className="max-w-[1440px] mx-auto px-5 md:px-16 pt-8 print:p-0">
      {/* Top Editorial Metadata Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-[#1A1A1A] pb-3 mb-2 gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] text-[#1A1A1A]">
        <div className="flex items-center gap-4">
          <span className="font-bold text-[#A18262]">ISSUE NO. 01</span>
          <span className="opacity-40" aria-hidden="true">•</span>
          <span className="opacity-70">{currentDate || 'PORTFOLIO EDITION'}</span>
        </div>

        <div className="flex items-center gap-3">
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              aria-label="Replay Dossier Verification Intro Sequence"
              className="flex items-center gap-1.5 hover:opacity-70 cursor-pointer py-1 px-2 border border-[#1A1A1A]/30 text-[10px] focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
              title="Replay Dossier Verification Sequence"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#A18262]" aria-hidden="true" />
              <span>REPLAY DOSSIER</span>
            </button>
          )}

          <PrintGazetteButton variant="header" />
        </div>

        <div className="text-right">
          <span className="font-bold">MUHAMMAD UMAR</span>
          <span className="opacity-40" aria-hidden="true"> // </span>
          <span className="opacity-70">RAWALPINDI, PAKISTAN</span>
        </div>
      </div>

      {/* Main Broadsheet Masthead Title */}
      <div className="py-5 border-b-2 border-[#1A1A1A]">
        <h1 className="font-serif font-black text-[42px] sm:text-[80px] md:text-[104px] lg:text-[124px] leading-tight tracking-tighter text-center uppercase text-[#1A1A1A] select-none">
          MUHAMMAD UMAR
        </h1>
        <div className="text-center mt-2 flex items-center justify-center gap-3">
          <span className="h-[1px] w-12 bg-[#1A1A1A]/20 hidden sm:inline-block" aria-hidden="true"></span>
          <p className="font-serif italic text-sm md:text-lg text-[#5E5E5E] tracking-wide">
            The Digital Journal — Engineering Architecture &amp; Creative Direction
          </p>
          <span className="h-[1px] w-12 bg-[#1A1A1A]/20 hidden sm:inline-block" aria-hidden="true"></span>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav aria-label="Main Navigation" className="flex flex-col sm:flex-row justify-between items-center py-3 border-b-2 border-[#1A1A1A] gap-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-mono text-xs font-bold uppercase tracking-[0.2em]">
          <a
            href="#work"
            className="hover:text-[#A18262] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none px-1 py-0.5 rounded-xs"
          >
            WORK
          </a>
          <a
            href="#stack"
            className="hover:text-[#A18262] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none px-1 py-0.5 rounded-xs"
          >
            STACK
          </a>
          <a
            href="#journey"
            className="hover:text-[#A18262] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none px-1 py-0.5 rounded-xs"
          >
            JOURNEY
          </a>
          <a
            href="#about"
            className="hover:text-[#A18262] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none px-1 py-0.5 rounded-xs"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="hover:text-[#A18262] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none px-1 py-0.5 rounded-xs"
          >
            CONTACT
          </a>
        </div>

        <button
          onClick={onHireMeClick}
          aria-label="Initiate contact or hire request"
          className="group border border-[#1A1A1A]/30 bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] px-6 py-2 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
        >
          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          <span>INITIATE CONTACT</span>
        </button>
      </nav>
    </header>
  );
};
