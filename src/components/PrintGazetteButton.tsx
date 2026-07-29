import React, { useState } from 'react';
import { Printer, Check, Download } from 'lucide-react';

interface PrintGazetteButtonProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const PrintGazetteButton: React.FC<PrintGazetteButtonProps> = ({ variant = 'header', className = '' }) => {
  const [status, setStatus] = useState<'idle' | 'preparing' | 'downloading'>('idle');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleDownload = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;

    setStatus('preparing');

    // Trigger PDF Download
    const pdfUrl = '/Muhammad_Umar_CV.pdf';
    const filename = 'Muhammad_Umar_CV.pdf';

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);

    setTimeout(() => {
      setStatus('downloading');
      try {
        link.click();
      } catch {
        window.open(pdfUrl, '_blank');
      } finally {
        if (document.body.contains(link)) {
          document.body.removeChild(link);
        }
      }

      // Revert status after 1.2s
      setTimeout(() => {
        setStatus('idle');
      }, 1200);
    }, 300);
  };

  const isHeader = variant === 'header';

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <button
        onClick={handleDownload}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleDownload(e);
          }
        }}
        aria-label="Download Muhammad Umar's professional resume PDF"
        title="Download Professional Resume (PDF)"
        className={
          className ||
          (isHeader
            ? 'hidden sm:flex items-center gap-1.5 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] cursor-pointer py-1 px-2.5 border border-[#1A1A1A]/30 text-[10px] font-mono font-bold uppercase tracking-[0.15em] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none rounded-xs'
            : 'hover:text-[#A18262] flex items-center gap-1.5 cursor-pointer font-mono text-xs uppercase tracking-[0.15em] transition-colors focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none')
        }
      >
        {status === 'idle' && (
          <>
            <Printer className="w-3.5 h-3.5 text-[#A18262] shrink-0" aria-hidden="true" />
            <span>PRINT GAZETTE</span>
          </>
        )}

        {status === 'preparing' && (
          <>
            <Download className="w-3.5 h-3.5 text-[#A18262] animate-pulse shrink-0" aria-hidden="true" />
            <span className="text-[#A18262] font-semibold">PREPARING GAZETTE...</span>
          </>
        )}

        {status === 'downloading' && (
          <>
            <Check className="w-3.5 h-3.5 text-[#A18262] shrink-0" aria-hidden="true" />
            <span className="text-[#A18262] font-bold">✓ GAZETTE PREPARED</span>
          </>
        )}
      </button>

      {/* Subtle Editorial Tooltip & Metadata Badge */}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-50 pointer-events-none w-max max-w-[260px] bg-[#1A1A1A] text-[#F5F2ED] border border-[#1A1A1A] p-2 rounded-xs shadow-lg text-center font-mono text-[9px] uppercase tracking-wider space-y-0.5"
        >
          <div className="font-bold text-[#F5F2ED]">
            Download Professional Resume (PDF)
          </div>
          <div className="text-[#A18262] text-[8px] tracking-widest border-t border-[#F5F2ED]/10 pt-1 mt-1">
            Editorial Edition · PDF · 1 Page
          </div>
        </div>
      )}
    </div>
  );
};
