import React from 'react';
import { BookOpen, UserCheck, ShieldCheck, Terminal, Award } from 'lucide-react';

export const EditorNote: React.FC = () => {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-5 md:px-16 py-14 border-b-2 border-[#1A1A1A]">
      {/* Broadhseet Section Header */}
      <div className="border-y-2 border-[#1A1A1A] py-4 mb-12 text-center">
        <h3 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#1A1A1A]">
          THE EDITOR'S NOTE & PHILOSOPHY
        </h3>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A18262] mt-1 font-semibold">
          AN INSIGHT INTO THE MIND & CRAFT OF MUHAMMAD UMAR
        </p>
      </div>

      {/* 3-Column Newspaper Article Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Main 2-Column Article Text */}
        <div className="md:col-span-8 newspaper-columns-2 font-sans text-base leading-relaxed text-justify text-[#222222] font-light space-y-6">
          <p className="mb-4">
            <span className="float-left text-6xl leading-[48px] font-serif font-bold pr-3 pt-1 text-[#1A1A1A]">
              M
            </span>
            uhammad Umar approaches web application architecture with the precision of a structural engineer and the aesthetic restraint of a broadsheet editor. Grounded in Computer Science fundamentals, his development focus spans high-performance DOM render loops, zero-layout-shift client architectures, and fluid micro-interaction systems built for high performance.
          </p>

          <p className="mb-4 font-serif italic text-lg font-normal border-l-2 border-[#A18262] pl-4 my-6 text-[#1A1A1A]">
            "Software is a living publication—one where frame budget discipline, strict static typing, and mathematical layout grids converge to establish user trust."
          </p>

          <p className="mb-4">
            Umar’s philosophy centers on <strong>'Digital Quiet'</strong>—the belief that interface architecture should empower human cognition rather than bombard it with artificial noise or generic templates. Every UI component holds a mathematical purpose, every state change respects the frame budget, and every animation informs spatial hierarchy.
          </p>

          <p className="mb-4">
            Beyond client-side rendering, Umar investigates full-stack systems, performance profiling, and AI API integrations. From high-scale e-commerce storefronts to real-time dispatch portals, every architecture is engineered for long-term maintainability, accessibility compliance, and sub-100ms user feedback.
          </p>
        </div>

        {/* Sidebar Dossier & Personal Principles */}
        <div className="md:col-span-4 space-y-6">
          {/* Technical Dossier Card */}
          <div className="border border-[#1A1A1A]/20 p-6 bg-white shadow-xs">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] border-b border-[#1A1A1A]/20 pb-3 mb-4">
              <Terminal className="w-4 h-4 text-[#A18262]" />
              <span>TECHNICAL DOSSIER</span>
            </div>

            <ul className="font-mono text-xs space-y-3 text-[#1A1A1A]">
              <li className="flex flex-col border-b border-[#1A1A1A]/10 pb-2">
                <span className="text-[#5E5E5E] text-[10px] uppercase tracking-wider">SPECIALIZATION:</span>
                <span className="font-bold">Frontend Engineering & UI Architecture</span>
              </li>
              <li className="flex flex-col border-b border-[#1A1A1A]/10 pb-2">
                <span className="text-[#5E5E5E] text-[10px] uppercase tracking-wider">RESEARCH INTEREST:</span>
                <span className="font-bold">Sub-100ms Motion & AI Interactivity</span>
              </li>
              <li className="flex flex-col border-b border-[#1A1A1A]/10 pb-2">
                <span className="text-[#5E5E5E] text-[10px] uppercase tracking-wider">ACADEMIC STATUS:</span>
                <span className="font-bold">Computer Science Student</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[#5E5E5E] text-[10px] uppercase tracking-wider">AVAILABILITY:</span>
                <span className="font-bold text-[#A18262]">Available for Select Investigations</span>
              </li>
            </ul>
          </div>

          {/* Editorial Quality Standards */}
          <div className="border border-[#1A1A1A] p-6 bg-[#1A1A1A] text-[#F5F2ED]">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A18262] block mb-3 border-b border-[#F5F2ED]/20 pb-2">
              THE THREE MANIFESTOS
            </span>
            <ul className="space-y-3 font-serif italic text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#A18262]">I.</span>
                <span>"No unsolicited visual noise or generic templates."</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A18262]">II.</span>
                <span>"Sub-second performance is non-negotiable."</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A18262]">III.</span>
                <span>"Strict type safety and architectural maintainability."</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
