import React, { useState } from 'react';
import { EDITORIAL_ARTICLES, TESTIMONIALS } from '../constants/portfolioData';
import { EditorialArticle } from '../types';
import { Quote, ArrowRight, X } from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<EditorialArticle | null>(null);

  return (
    <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-14 border-b-2 border-[#1A1A1A]">
      {/* Essays Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-[#1A1A1A] pb-6 mb-10 gap-4">
        <div>
          <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#5E5E5E] mb-1">
            CRITICAL ESSAYS & ESSAYS ON FRONTEND
          </div>
          <h3 className="font-serif font-bold text-3xl md:text-5xl uppercase tracking-tight italic text-[#1A1A1A]">
            EDITORIAL DISPATCHES
          </h3>
        </div>
        <div className="font-mono text-xs uppercase font-bold text-[#1A1A1A] border border-[#1A1A1A]/30 rounded-full px-4 py-1.5">
          THE GAZETTE PRESS
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {EDITORIAL_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="border border-[#1A1A1A]/20 p-6 md:p-8 bg-white hover:bg-[#F5F2ED] transition-all flex flex-col justify-between cursor-pointer group shadow-xs"
            onClick={() => setActiveArticle(article)}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-2 mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#1A1A1A]">
                <span className="text-[#A18262]">{article.issueNo}</span>
                <span>{article.readTime}</span>
              </div>

              <h4 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-3 group-hover:italic group-hover:text-[#A18262] transition-colors">
                {article.title}
              </h4>

              <p className="font-sans text-sm text-[#444444] font-light leading-relaxed mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.2em] border-t border-[#1A1A1A]/20 pt-4 text-[#1A1A1A] group-hover:text-[#A18262]">
              <span>READ ESSAY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      {/* Testimonials Band */}
      <div className="border-t-2 border-[#1A1A1A] pt-12">
        <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A18262] mb-6 text-center">
          VERIFIED EDITORIAL TESTIMONIALS
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="border border-[#1A1A1A]/20 p-6 bg-[#F5F2ED] relative flex flex-col justify-between">
              <Quote className="w-6 h-6 text-[#A18262]/40 mb-3" />
              <p className="font-serif italic text-base text-[#222222] leading-relaxed mb-6 font-normal">
                "{test.quote}"
              </p>
              <div className="border-t border-[#1A1A1A]/20 pt-3 font-mono text-xs uppercase text-[#1A1A1A]">
                <span className="font-bold block text-[#1A1A1A]">{test.author}</span>
                <span className="text-[#5E5E5E] text-[10px] block">{test.role} • {test.organization}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1A1A]/80 backdrop-blur-xs">
          <div className="relative w-full max-w-3xl bg-[#F5F2ED] border-2 border-[#1A1A1A] p-8 max-h-[85vh] overflow-y-auto text-[#1A1A1A] shadow-2xl">
            <div className="flex justify-between items-center border-b-2 border-[#1A1A1A] pb-3 mb-6">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A18262]">
                {activeArticle.issueNo} • {activeArticle.date}
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="border border-[#1A1A1A] p-1.5 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] transition-all rounded-full cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <h3 className="font-serif font-bold text-3xl sm:text-4xl text-[#1A1A1A] mb-4">
              {activeArticle.title}
            </h3>

            <div className="font-sans text-base leading-relaxed font-light space-y-4 whitespace-pre-line text-[#222222] border-t border-[#1A1A1A]/20 pt-4">
              {activeArticle.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
