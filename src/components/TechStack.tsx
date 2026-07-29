import React, { useState } from 'react';
import { TECH_STACK } from '../constants/portfolioData';
import { TechItem } from '../types';
import { Terminal } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(TECH_STACK[0]);

  const categories = ['ALL', 'FRONTEND', 'MOBILE', 'BACKEND & DB', 'DESIGN & MOTION'];

  const filteredTech = TECH_STACK.filter(
    (item) => activeCategory === 'ALL' || item.category.toUpperCase() === activeCategory
  );

  // Snippet generators for interactive preview
  const getCodeSnippet = (techName: string) => {
    switch (techName) {
      case 'React 19':
        return `// React 19 Action & Optimistic State Pattern
import { useOptimistic, useTransition } from 'react';

export function CartEngine({ cart, updateCart }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticCart, setOptimisticCart] = useOptimistic(
    cart,
    (state, newItem) => [...state, newItem]
  );

  return (
    <button onClick={() => startTransition(() => updateCart(item))}>
      Add to Broadhseet Cart
    </button>
  );
}`;
      case 'Next.js 16':
        return `// Next.js 16 Server Component with Dynamic Caching
import { cache } from 'react';

export const getDossier = cache(async (id: string) => {
  const res = await fetch(\`https://api.journal.org/case/\${id}\`, {
    next: { revalidate: 3600 }
  });
  return res.json();
});`;
      case 'TypeScript':
        return `// Strict Generic Interface for Broadsheet Dispatches
export interface Dispatch<TData = unknown> {
  readonly id: string;
  readonly timestamp: number;
  readonly payload: TData;
  verifyIntegrity(): boolean;
}`;
      default:
        return `// Architectural Pattern for ${techName}
// Clean code, strict types, sub-100ms frame latency
export class ${techName.replace(/[^a-zA-Z]/g, '')}Engine {
  private status = 'OPERATIONAL';
  
  public async execute() {
    return { latencyMs: 12, lighthouseScore: 100 };
  }
}`;
    }
  };

  return (
    <section id="stack" className="max-w-[1440px] mx-auto px-5 md:px-16 py-14 border-b-2 border-[#1A1A1A]">
      {/* Broadsheet Header */}
      <div className="text-center mb-10 border-b-2 border-[#1A1A1A] pb-6">
        <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A18262] mb-2">
          THE ENGINEERING TOOLKIT & ARCHITECTURE
        </div>
        <h3 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight text-[#1A1A1A] italic">
          TOOLS OF INVESTIGATION
        </h3>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Technology category filter">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
            className={`font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-5 py-2 border rounded-full transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none ${
              activeCategory === cat
                ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A]'
                : 'bg-transparent text-[#1A1A1A] border-[#1A1A1A]/30 hover:bg-[#1A1A1A]/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Grid & Code Preview Drawer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Tech Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {filteredTech.map((item) => {
            const isSelected = selectedTech?.name === item.name;
            return (
              <div
                key={item.name}
                tabIndex={0}
                role="button"
                aria-label={`Inspect ${item.name} engineering dossier`}
                onClick={() => setSelectedTech(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTech(item);
                  }
                }}
                className={`border p-4 bg-[#F5F2ED] cursor-pointer transition-all duration-150 relative focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none ${
                  isSelected ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-md' : 'border-[#1A1A1A]/20 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-serif font-bold text-lg md:text-xl block ${isSelected ? 'text-[#F5F2ED]' : 'text-[#1A1A1A]'}`}>
                    {item.name}
                  </span>
                  <span className={`font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 border ${
                    isSelected ? 'border-[#F5F2ED] text-[#F5F2ED]' : 'border-[#1A1A1A]/30 text-[#A18262]'
                  }`}>
                    {item.level}
                  </span>
                </div>
                <span className={`font-mono text-[10px] uppercase block tracking-wider ${isSelected ? 'text-[#A18262]' : 'text-[#5E5E5E]'}`}>
                  {item.category}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Column: Interactive Inspection Drawer */}
        <div className="lg:col-span-5 border border-[#1A1A1A]/20 p-6 bg-white shadow-xs">
          {selectedTech ? (
            <div>
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-3 mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#A18262]" />
                  <span>INSPECT TOOL: {selectedTech.name}</span>
                </div>
                <span className="bg-[#1A1A1A] text-[#F5F2ED] px-2 py-0.5 text-[10px]">
                  {selectedTech.level}
                </span>
              </div>

              <p className="font-sans text-sm text-[#444444] leading-relaxed mb-6 font-light">
                {selectedTech.description}
              </p>

              {/* Live Code Snippet Display */}
              <div className="border border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F2ED] p-4 font-mono text-xs overflow-x-auto shadow-sm">
                <div className="flex items-center justify-between text-[#A18262] text-[10px] uppercase border-b border-[#F5F2ED]/20 pb-2 mb-3 tracking-widest">
                  <span>SNIPPET.TS</span>
                  <span>TYPESCRIPT ES2024</span>
                </div>
                <pre className="whitespace-pre text-[#F5F2ED] leading-relaxed">
                  <code>{getCodeSnippet(selectedTech.name)}</code>
                </pre>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-[#5E5E5E] font-serif italic">
              Select any tool from the investigation matrix to inspect code patterns.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
