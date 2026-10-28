import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Send, 
  Phone, 
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio Inquiry from ${formState.name}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\n${formState.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#070B12] relative border-t border-slate-800/80">
      
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Discuss AI Opportunities & Collaborations
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            I am currently open to AI/ML engineering internships, research fellowships, and technical project collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Primary Email Card */}
            <div className="rounded-2xl bg-[#0D1526] border border-slate-800 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400 tracking-wider font-semibold">
                  Primary Contact
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Inbox
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-mono">Email Address</span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-white truncate font-medium">
                      {personalInfo.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block font-mono">Mobile / WhatsApp</span>
                <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="flex items-center gap-2.5 truncate">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm text-white truncate font-medium">
                      {personalInfo.phone}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors shrink-0"
                    title="Copy to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Location info */}
              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>📍 Location: {personalInfo.location}</span>
                <span>Timezone: IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Social / Technical Profiles */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D1526] border border-slate-800 hover:border-slate-700 flex flex-col items-center justify-center text-center gap-1.5 group transition-all"
              >
                <Github className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                <span className="text-xs font-mono font-medium text-slate-200">GitHub</span>
                <span className="text-[10px] text-slate-400 font-mono">11 Repos</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D1526] border border-slate-800 hover:border-sky-500/40 flex flex-col items-center justify-center text-center gap-1.5 group transition-all"
              >
                <Linkedin className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors" />
                <span className="text-xs font-mono font-medium text-slate-200">LinkedIn</span>
                <span className="text-[10px] text-slate-400 font-mono">Connect</span>
              </a>

              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#0D1526] border border-slate-800 hover:border-amber-500/40 flex flex-col items-center justify-center text-center gap-1.5 group transition-all"
              >
                <span className="text-sm font-bold text-amber-500 group-hover:text-amber-400 transition-colors">LC</span>
                <span className="text-xs font-mono font-medium text-slate-200">LeetCode</span>
                <span className="text-[10px] text-slate-400 font-mono">Problems</span>
              </a>
            </div>

          </div>

          {/* Right Column: Direct Message Composer (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1526] border border-slate-800 p-6 md:p-8 space-y-5 shadow-xl">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400">
                Fills a pre-formatted email to {personalInfo.email} with your inquiry details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300 block">
                    Your Name / Company
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe (Tech Recruiter)"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D18] border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder-slate-500 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300 block">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D18] border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder-slate-500 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300 block">
                  Subject / Topic
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="e.g. AI/ML Engineering Internship Discussion"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D18] border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder-slate-500 font-mono"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-mono text-slate-300 block">
                  Message / Details
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Hi Pranjal, I reviewed your Maya Voice Agent and Smart Attendance projects..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#080D18] border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder-slate-500 font-mono resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-all shadow-md shadow-sky-500/20"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email Client</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Draft created! Email client opened with your message parameters.</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
