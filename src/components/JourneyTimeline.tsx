import React from 'react';
import { JOURNEY_TIMELINE } from '../constants/portfolioData';
import { Calendar, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

export const JourneyTimeline: React.FC = () => {
  return (
    <section id="journey" className="max-w-[1440px] mx-auto px-5 md:px-16 py-14 border-b-2 border-[#1A1A1A]">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-[#1A1A1A] pb-6 mb-12 gap-4">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#5E5E5E] mb-1">
            ACADEMIC & PROFESSIONAL CHRONICLES
          </div>
          <h3 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight italic text-[#1A1A1A]">
            THE CHRONICLES & MILESTONES
          </h3>
        </div>
        <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] border border-[#1A1A1A]/30 rounded-full px-4 py-1.5">
          2023 — PRESENT (2026)
        </div>
      </div>

      {/* Vertical Broadsheet Timeline Grid */}
      <div className="relative border-l-2 border-[#1A1A1A]/30 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
        {JOURNEY_TIMELINE.map((item, index) => (
          <div key={item.year} className="relative group">
            {/* Timeline Bullet Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#1A1A1A] border-2 border-[#F5F2ED] group-hover:scale-125 transition-transform" />

            <div className="border border-[#1A1A1A]/20 p-6 sm:p-8 bg-[#F5F2ED] group-hover:bg-white transition-all shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1A1A1A]/20 pb-3 mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#A18262]" />
                  <span className="bg-[#1A1A1A] text-[#F5F2ED] px-2 py-0.5 rounded-xs">{item.year}</span>
                  <span className="text-[#A18262]">•</span>
                  <span>{item.role}</span>
                </div>
                <span className="text-[#5E5E5E]">{item.organization}</span>
              </div>

              <h4 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-3 group-hover:text-[#A18262] transition-colors">
                {item.headline}
              </h4>

              <p className="font-sans text-sm md:text-base text-[#444444] font-light leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="border-t border-[#1A1A1A]/20 pt-4">
                <span className="font-mono text-[10px] font-bold uppercase text-[#5E5E5E] block mb-2 tracking-[0.2em]">
                  KEY ACCOMPLISHMENTS:
                </span>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 font-mono text-xs text-[#1A1A1A]">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 bg-[#1A1A1A]/5 p-2.5 border border-[#1A1A1A]/10">
                      <CheckCircle className="w-3.5 h-3.5 text-[#A18262] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
