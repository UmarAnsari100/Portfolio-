import React, { useState } from 'react';
import { Send, Copy, Check, Linkedin, Github, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [inquiryType, setInquiryType] = useState('E-Commerce Architecture');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'umaransari0516@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoSubject = encodeURIComponent(`[NEW DISPATCH]: ${inquiryType} - ${senderName || 'Inquirer'}`);
    const mailtoBody = encodeURIComponent(
      `SENDER NAME: ${senderName}\nCONTACT EMAIL: ${senderEmail}\nINQUIRY TYPE: ${inquiryType}\n\nDISPATCH BODY:\n${message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-5 md:px-16 py-16 border-b-2 border-[#1A1A1A]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Dispatch Callout */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#A18262] mb-2">
              VOL. 2026 — ENGINEERING DISPATCH
            </div>
            <h3 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#1A1A1A] leading-none mb-4">
              AVAILABLE FOR NEW INVESTIGATIONS
            </h3>
            <p className="font-sans text-base sm:text-lg text-[#444444] font-light leading-relaxed">
              Do you have a project that requires a meticulous eye and technical precision? Send a dispatch today to initiate collaboration.
            </p>
          </div>

          {/* Email Address Block with One-Click Copy */}
          <div className="border border-[#1A1A1A]/20 p-6 bg-white shadow-xs">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#5E5E5E] block mb-2">
              DIRECT DISPATCH ADDRESS
            </span>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border-b border-[#1A1A1A]/20 pb-4 mb-4 min-w-0">
              <a
                href={`mailto:${emailAddress}`}
                className="font-serif font-bold text-base sm:text-xl xl:text-2xl text-[#1A1A1A] hover:text-[#A18262] transition-colors break-all sm:break-normal min-w-0"
              >
                {emailAddress}
              </a>
              <button
                onClick={copyEmail}
                className="border border-[#1A1A1A] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] transition-all cursor-pointer shrink-0 rounded-full"
              >
                {copied ? <Check className="w-4 h-4 text-[#A18262]" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'COPIED TO DISPATCH!' : 'COPY EMAIL'}</span>
              </button>
            </div>
            <p className="font-mono text-xs text-[#5E5E5E] uppercase tracking-wider">
              REPLY LATENCY: TYPICALLY UNDER 12 HOURS • RAWALPINDI (PK) TIMEZONE
            </p>
          </div>

          {/* Social Network Connections */}
          <div className="space-y-3 font-mono text-xs font-bold uppercase">
            <span className="text-[#A18262] tracking-[0.2em] block mb-2">
              VERIFIED CHANNELS & PROFILES
            </span>
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/20 pb-2">
              <span className="flex items-center gap-2 text-[#1A1A1A]">
                <Linkedin className="w-4 h-4 text-[#A18262]" /> LINKEDIN
              </span>
              <a
                href="https://www.linkedin.com/in/m-umar-ansari/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A18262] flex items-center gap-1 transition-colors"
              >
                <span>CONNECT</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/20 pb-2">
              <span className="flex items-center gap-2 text-[#1A1A1A]">
                <Github className="w-4 h-4 text-[#A18262]" /> GITHUB
              </span>
              <a
                href="https://github.com/UmarAnsari100"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A18262] flex items-center gap-1 transition-colors"
              >
                <span>VIEW REPOSITORIES</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
            <div className="flex justify-between items-center border-b border-[#1A1A1A]/20 pb-2">
              <span className="flex items-center gap-2 text-[#1A1A1A]">
                <Twitter className="w-4 h-4 text-[#A18262]" /> TWITTER / X
              </span>
              <a
                href="https://x.com/umar4185"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#A18262] flex items-center gap-1 transition-colors"
              >
                <span>FOLLOW DISPATCHES</span> <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Contact Form */}
        <div className="lg:col-span-6 border border-[#1A1A1A]/20 p-6 sm:p-8 bg-[#F5F2ED] shadow-xs">
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/20 pb-3 mb-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#A18262]" />
              <span>DISPATCH  FORM</span>
            </div>
            <span>FORM NO. 2026</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Inquiry Type Selector */}
            <div>
              <label className="font-mono text-xs font-bold uppercase tracking-[0.15em] block mb-2 text-[#1A1A1A]">
                SELECT INQUIRY TYPE:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'E-Commerce Architecture',
                  'Web App UI Engineering',
                  'AI & Gemini Integration',
                  'Frontend Performance Audit'
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setInquiryType(type)}
                    className={`font-mono text-xs uppercase p-2.5 border text-left transition-all cursor-pointer ${inquiryType === type
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] font-bold'
                      : 'bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#1A1A1A]'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Sender Name */}
            <div>
              <label htmlFor="sender-name-input" className="font-mono text-xs font-bold uppercase tracking-[0.15em] block mb-1 text-[#1A1A1A]">
                YOUR NAME / ORGANIZATION:
              </label>
              <input
                id="sender-name-input"
                type="text"
                required
                placeholder="E.G. TARIQ AL-MANSOOR"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="w-full font-mono text-xs uppercase p-3 border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
              />
            </div>

            {/* Sender Email */}
            <div>
              <label htmlFor="sender-email-input" className="font-mono text-xs font-bold uppercase tracking-[0.15em] block mb-1 text-[#1A1A1A]">
                RETURN DISPATCH EMAIL:
              </label>
              <input
                id="sender-email-input"
                type="email"
                required
                placeholder="NAME@ORGANIZATION.COM"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full font-mono text-xs uppercase p-3 border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
              />
            </div>

            {/* Message Body */}
            <div>
              <label htmlFor="sender-message-textarea" className="font-mono text-xs font-bold uppercase tracking-[0.15em] block mb-1 text-[#1A1A1A]">
                DISPATCH DETAILS / PROJECT SCOPE:
              </label>
              <textarea
                id="sender-message-textarea"
                required
                rows={4}
                placeholder="DESCRIBE THE OBJECTIVES, TIMELINE, OR SPECIAL REQUIREMENTS..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full font-mono text-xs uppercase p-3 border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full border border-[#1A1A1A] bg-[#1A1A1A] text-[#F5F2ED] hover:bg-transparent hover:text-[#1A1A1A] p-4 font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-sm rounded-full focus-visible:ring-2 focus-visible:ring-[#1A1A1A] focus-visible:outline-none"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>TRANSMIT DISPATCH</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
