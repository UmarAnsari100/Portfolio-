import React, { useState } from 'react';
import { Project } from '../types';
import { PORTFOLIO_PROJECTS } from '../constants/portfolioData';
import { Search, ArrowUpRight, FileText, Terminal, Clock } from 'lucide-react';
import { EvidenceScreenshot } from './EvidenceScreenshot';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['ALL', 'ENTERPRISE', 'E-COMMERCE', 'WEB APP', 'AI & ML'];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'ALL' || p.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="max-w-[1440px] mx-auto px-5 md:px-16 py-16 border-b-2 border-[#1A1A1A]">
      {/* Section Title Bar */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end pb-6 mb-12 border-b-2 border-[#1A1A1A] gap-6 max-w-full overflow-hidden">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#A18262] mb-1.5 flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#A18262]" />
            <span>INVESTIGATIVE ENGINEERING DOSSIERS • SECTION B</span>
          </div>
          <h3 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight italic text-[#1A1A1A]">
            CASE FILES & DISPATCHES
          </h3>
          <p className="font-sans text-sm text-[#5E5E5E] font-light max-w-2xl mt-2">
            Detailed engineering documentation of production web platforms, architecture designs, and high-performance applications.
          </p>
        </div>

        {/* Filter Toolbar — Refined Editorial Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full xl:w-auto items-stretch sm:items-center max-w-full shrink pt-2 xl:pt-0">
          {/* Search Input */}
          <div className="relative w-full sm:w-64 shrink">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/50 stroke-[1.75]" aria-hidden="true" />
            <input
              type="text"
              aria-label="Search dispatches and case studies"
              placeholder="SEARCH CASE FILES..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-mono text-xs uppercase pl-9 pr-3.5 py-2 border border-[#1A1A1A]/25 bg-white/60 text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#1A1A1A] focus:bg-white focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none transition-all duration-200 w-full rounded-xs shadow-2xs"
            />
          </div>

          {/* Category Filters */}
          <nav
            aria-label="Category filters"
            className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar whitespace-nowrap max-w-full py-0.5"
          >
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all duration-200 cursor-pointer rounded-xs focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none shrink-0 ${
                    isSelected
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] shadow-2xs'
                      : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:bg-[#1A1A1A]/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Projects List */}
      {filteredProjects.length === 0 ? (
        <div className="border border-[#1A1A1A]/20 p-12 text-center my-8 bg-[#1A1A1A]/5">
          <p className="font-serif italic text-lg text-[#5E5E5E]">
            No investigation case files match query "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('ALL');
            }}
            className="mt-4 font-mono text-xs font-bold uppercase underline text-[#A18262] hover:text-[#1A1A1A]"
          >
            RESET DOSSIER FILTERS
          </button>
        </div>
      ) : (
        <div className="space-y-12">
          {/* 1. Flagship Lead Project */}
          {filteredProjects.length > 0 && (
            <div className="mb-12">
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#A18262] mb-3 flex items-center gap-2">
                <span>FLAGSHIP DISPATCH • LEAD CASE STUDY</span>
              </div>

              {(() => {
                const lead = filteredProjects[0];
                const exhibitText = lead.exhibitLabel || `${lead.caseNo}, EXHIBIT A`;
                const captionText = lead.evidenceCaption || `FIG 1.1 — Dispatch telemetry and system architecture recorded during field test.`;
                const timelineText = lead.timeline || `${lead.year} | VERIFIED FIELD INVESTIGATION`;

                return (
                  <article
                    key={lead.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open lead case file ${lead.caseNo}: ${lead.title}`}
                    onClick={() => onSelectProject(lead)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectProject(lead);
                      }
                    }}
                    className="group border-2 border-[#1A1A1A] bg-[#F5F2ED] hover:bg-white transition-all duration-300 p-6 sm:p-10 cursor-pointer relative shadow-sm hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
                  >
                    {/* Header bar */}
                    <div className="flex flex-wrap items-center justify-between border-b-2 border-[#1A1A1A] pb-3 mb-6 gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#1A1A1A] text-[#F5F2ED] px-3 py-1 text-[11px]">
                          {exhibitText}
                        </span>
                        <span className="text-[#A18262]">{lead.caseNo}</span>
                        <span className="text-[#1A1A1A]/30">•</span>
                        <span className="text-[#1A1A1A]">{lead.category}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#A18262]">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="text-[11px]">{timelineText}</span>
                      </div>
                    </div>

                    {/* Flagship layout: Grid with Left Screenshot/Artifact and Right Editorial Story */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-6 w-full max-w-full">
                      {/* Left: Reusable Evidence Screenshot Component */}
                      <div className="lg:col-span-6 flex flex-col min-w-0 w-full max-w-full">
                        <EvidenceScreenshot
                          src={lead.imageUrl || `/projects/${lead.id}.webp`}
                          alt={`${lead.title} production UI interface screenshot displaying ${lead.subtitle}`}
                          exhibitLabel={exhibitText}
                          recoveredFrom={`RECOVERED FROM: ${lead.category.toUpperCase()} PRODUCTION FIELD AUDIT`}
                          caption={captionText}
                          width={640}
                          height={360}
                        />

                        {lead.metrics && (
                          <div className="grid grid-cols-3 gap-2 mt-3 p-2 bg-white border border-[#1A1A1A]/20 text-[#1A1A1A] w-full max-w-full min-w-0">
                            {lead.metrics.slice(0, 3).map((m, mIdx) => (
                              <div key={mIdx} className="bg-[#F5F2ED] p-2 text-center border border-[#1A1A1A]/10 min-w-0 truncate">
                                <span className="font-serif text-xs sm:text-sm font-bold block text-[#1A1A1A] truncate">{m.value}</span>
                                <span className="font-mono text-[8px] sm:text-[9px] uppercase text-[#A18262] block leading-tight truncate">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Lead Title & Short Hook Narrative */}
                      <div className="lg:col-span-6 space-y-4 min-w-0 w-full max-w-full">
                        <div>
                          <h4 className="font-serif font-bold text-2xl sm:text-4xl text-[#1A1A1A] mb-2 group-hover:italic group-hover:text-[#A18262] transition-colors">
                            {lead.title}
                          </h4>
                          <p className="font-mono text-xs uppercase font-semibold text-[#5E5E5E] tracking-wider">
                            {lead.subtitle}
                          </p>
                        </div>

                        <p className="font-sans text-sm text-[#333333] font-light leading-relaxed">
                          {lead.investigationSummaryParagraphs?.[0] || lead.summary}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {lead.techStack.map((tech) => (
                            <span key={tech} className="font-mono text-[10px] font-bold uppercase border border-[#1A1A1A]/30 px-2.5 py-1 bg-white text-[#1A1A1A]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA bar */}
                    <div className="pt-4 border-t-2 border-[#1A1A1A] flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                      <span className="font-mono text-xs font-bold text-[#A18262] uppercase tracking-wider">
                        FULL ENGINEERING DOSSIER AVAILABLE
                      </span>
                      <div className="border-2 border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F2ED] group-hover:bg-[#A18262] transition-colors px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 rounded-full shrink-0">
                        <span>OPEN CASE FILE [{lead.caseNo}]</span>
                        <ArrowUpRight className="w-4 h-4 text-[#F5F2ED]" />
                      </div>
                    </div>
                  </article>
                );
              })()}
            </div>
          )}

          {/* 2. Grid of Dispatches */}
          {filteredProjects.length > 1 && (
            <div>
              <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#1A1A1A] mb-6 pb-2 border-b-2 border-[#1A1A1A] flex items-center justify-between">
                <span>ADDITIONAL CASE FILES & EVIDENCE EXHIBITS</span>
                <span className="text-[#A18262]">EXHIBITS B – D</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.slice(1).map((project, idx) => {
                  const exhibitText = project.exhibitLabel || `EXHIBIT ${String.fromCharCode(66 + idx)}`;
                  const captionText = project.evidenceCaption || `FIG ${idx + 2}.1 — Operational evidence recorded during ${project.title} field study.`;

                  return (
                    <article
                      key={project.id}
                      tabIndex={0}
                      role="button"
                      aria-label={`Open case file ${project.caseNo}: ${project.title}`}
                      onClick={() => onSelectProject(project)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onSelectProject(project);
                        }
                      }}
                      className="group border-2 border-[#1A1A1A] bg-[#F5F2ED] hover:bg-white transition-all duration-300 p-5 cursor-pointer relative flex flex-col justify-between shadow-sm hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none min-w-0 w-full max-w-full overflow-hidden"
                    >
                      <div>
                        {/* Exhibit Header */}
                        <div className="flex items-center justify-between border-b border-[#1A1A1A]/30 pb-2 mb-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#A18262]">
                          <span>{exhibitText}</span>
                          <span className="text-[#1A1A1A]">{project.caseNo}</span>
                        </div>

                        {/* Title & Subtitle */}
                        <div className="mb-3">
                          <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#1A1A1A] mb-1 group-hover:italic group-hover:text-[#A18262] transition-colors leading-tight">
                            {project.title}
                          </h4>
                          <p className="font-mono text-[11px] font-semibold text-[#5E5E5E] uppercase tracking-wider line-clamp-1">
                            {project.subtitle}
                          </p>
                        </div>

                        {/* Reusable Evidence Screenshot Component */}
                        <EvidenceScreenshot
                          src={project.imageUrl || `/projects/${project.id}.webp`}
                          alt={`${project.title} interface screenshot showing ${project.subtitle}`}
                          exhibitLabel={exhibitText}
                          recoveredFrom={`RECOVERED FROM: ${project.category.toUpperCase()} SYSTEM (${project.year})`}
                          caption={captionText}
                          width={480}
                          height={270}
                          className="mb-4"
                        />

                        {/* Tech Dossier Chips */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.techStack.slice(0, 4).map((tech) => (
                            <span key={tech} className="font-mono text-[9px] font-bold uppercase border border-[#1A1A1A]/30 px-2 py-0.5 bg-white text-[#1A1A1A]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Baseline CTA Row */}
                      <div className="pt-3 border-t border-[#1A1A1A]/30 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] group-hover:text-[#A18262] transition-colors">
                        <span>OPEN CASE FILE</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

