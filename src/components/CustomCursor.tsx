import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('a, button, input, textarea, select, [role="button"], [tabindex="0"]');
        setIsPointer(!!clickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Hide on touch devices or before initial movement
  if (!isVisible || (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0))) {
    return null;
  }

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${pos.x - 14}px, ${pos.y - 14}px, 0)`,
      }}
    >
      {/* Magnifying Glass Loupe SVG & Glow Container */}
      <div className="relative flex items-center justify-center">
        <svg
          width={isPointer ? "36" : "28"}
          height={isPointer ? "36" : "28"}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-200 ease-out filter drop-shadow-xs ${
            isPointer ? 'scale-110' : 'scale-100'
          }`}
        >
          {/* Glass Lens Interior Fill with subtle newspaper tint */}
          <circle
            cx="13"
            cy="13"
            r="9"
            fill={isPointer ? "#A18262" : "#F5F2ED"}
            fillOpacity={isPointer ? "0.2" : "0.6"}
            stroke="#1A1A1A"
            strokeWidth="1.75"
          />

          {/* Optical Glass Lens Flare/Highlight Arc */}
          <path
            d="M8.5 10.5C9.2 9.2 10.5 8.5 12 8.5"
            stroke="#1A1A1A"
            strokeWidth="1"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />

          {/* Focal Cross Dot in Center when inspecting clickable items */}
          {isPointer && (
            <circle cx="13" cy="13" r="1.5" fill="#1A1A1A" />
          )}

          {/* Magnifier Metal Ring Frame */}
          <circle
            cx="13"
            cy="13"
            r="9"
            stroke="#1A1A1A"
            strokeWidth="2"
          />

          {/* Sturdy Detective Loupe Handle extending at 45 degrees */}
          <path
            d="M19.5 19.5L27 27"
            stroke="#1A1A1A"
            strokeWidth="3.25"
            strokeLinecap="round"
          />
          {/* Brass/Wood Handle Detail Accent Line */}
          <path
            d="M21 21L25.5 25.5"
            stroke={isPointer ? "#A18262" : "#F5F2ED"}
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        {/* Editorial Inspection Badge when hovering clickable element */}
        {isPointer && (
          <span className="absolute left-8 -top-1 text-[8px] font-mono font-bold uppercase tracking-[0.15em] bg-[#1A1A1A] text-[#F5F2ED] px-1.5 py-0.5 whitespace-nowrap shadow-xs border border-[#A18262]">
            INSPECT
          </span>
        )}
      </div>
    </div>
  );
};

