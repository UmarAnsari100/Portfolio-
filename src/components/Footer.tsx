import React from 'react';
import { ArrowUp, Printer } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="max-w-[1440px] mx-auto px-5 md:px-16 py-8 border-t border-[#1A1A1A]/20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs uppercase tracking-[0.15em] text-[#1A1A1A]">
        <div>
          <span>© 2026 MUHAMMAD UMAR — ALL RIGHTS RESERVED</span>
        </div>

        <div className="flex items-center gap-6 text-[11px] text-[#5E5E5E]">
          <span className="italic font-serif">PRINTED ON DIGITAL PAPER</span>
          <span className="text-[#A18262]">•</span>
          <span className="font-bold text-[#1A1A1A]">PRICE: TIME & ATTENTION</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePrint}
            className="hover:text-[#A18262] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-[#A18262]" />
            <span>PRINT</span>
          </button>
          <span className="text-[#A18262]">•</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#A18262] flex items-center gap-1 cursor-pointer font-bold transition-colors"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#A18262]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
