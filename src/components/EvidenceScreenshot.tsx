import React, { useState } from 'react';
import { Camera } from 'lucide-react';

export interface EvidenceScreenshotProps {
  src: string;
  alt: string;
  exhibitLabel?: string;
  recoveredFrom?: string;
  caption?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  className?: string;
}

export const EvidenceScreenshot: React.FC<EvidenceScreenshotProps> = ({
  src,
  alt,
  exhibitLabel = 'EXHIBIT DOSSIER',
  recoveredFrom = 'Production System Audit',
  caption,
  width = 640,
  height = 360,
  aspectRatio = 'aspect-video',
  className = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <figure className={`group relative flex flex-col w-full max-w-full min-w-0 overflow-hidden ${className}`}>
      {/* Header Metadata Bar: Single small exhibit label and single subtle 'Recovered from...' line */}
      <div className="flex flex-wrap items-center justify-between font-mono text-[10px] uppercase tracking-wider pb-2 mb-2 border-b border-[#1A1A1A]/10 gap-1.5 w-full max-w-full overflow-hidden">
        <span className="font-bold text-[#A18262] tracking-[0.18em] shrink-0">
          {exhibitLabel}
        </span>
        <span className="text-[#5E5E5E] normal-case italic font-serif text-[10px] sm:text-[11px] truncate">
          Recovered from: {recoveredFrom}
        </span>
      </div>

      {/* Main Image Container: Thin warm-gray border (#D8D2C4) with subtle warm neutral backdrop (#EFECE6) */}
      <div className={`relative ${aspectRatio} w-full max-w-full overflow-hidden border border-[#D8D2C4] bg-[#EFECE6] shadow-xs transition-all duration-300 group-hover:border-[#1A1A1A]/40 group-hover:shadow-md flex items-center justify-center p-1 sm:p-2 shrink-0`}>
        
        {/* Loading State */}
        {!imageLoaded && !imageFailed && (
          <div className="absolute inset-0 bg-[#EFECE6] animate-pulse flex items-center justify-center text-[#5E5E5E]">
            <span className="font-mono text-[10px] uppercase tracking-widest">LOADING EVIDENCE PHOTO...</span>
          </div>
        )}

        {/* Real Screenshot Image (100% Uncropped with object-contain) */}
        {!imageFailed && src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
            className={`w-full h-full max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.01] ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Minimalist Editorial Placeholder Frame */}
        {(imageFailed || !src) && (
          <div className="absolute inset-0 p-4 sm:p-6 bg-[#F9F7F4] flex flex-col items-center justify-center text-center space-y-1.5 w-full max-w-full">
            <Camera className="w-5 h-5 text-[#A18262]/60 stroke-[1.5] shrink-0" aria-hidden="true" />
            <div className="space-y-0.5 max-w-full overflow-hidden">
              <span className="font-mono text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest block truncate">
                PROJECT SCREENSHOT PLACEHOLDER
              </span>
              <span className="font-mono text-[9px] text-[#A18262] block truncate px-2">
                {src || '/projects/screenshot.webp'}
              </span>
            </div>
            <span className="font-serif italic text-[10px] sm:text-[11px] text-[#5E5E5E] max-w-xs line-clamp-2">
              Drop screenshot file to render in full resolution.
            </span>
          </div>
        )}
      </div>

      {/* Single Small Italic Figure Caption Below Image */}
      {caption && (
        <figcaption className="font-serif italic text-[11px] sm:text-xs text-[#5E5E5E] mt-2.5 leading-relaxed break-words">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
