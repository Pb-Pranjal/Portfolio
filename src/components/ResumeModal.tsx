import React, { useEffect } from 'react';
import { personalInfo, educationInfo } from '../data/portfolioData';
import { X, Download, ExternalLink, FileText, ShieldCheck, Mail, Phone } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl bg-[#090F1C] border border-slate-800 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#0D1526] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/80 flex items-center justify-center text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <span>{personalInfo.name} — Technical Resume</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300">
                  Verified PDF
                </span>
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                B.E. CSE (AI & ML) · Chitkara University · CGPA 9.66/10
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download="Pranjal_AI_ML_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-semibold transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalInfo.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF or PDF Viewer with Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden min-h-[500px]">
          
          {/* PDF Viewer Frame (8 cols on desktop) */}
          <div className="lg:col-span-8 bg-[#05080E] border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col h-[520px] lg:h-[640px]">
            <iframe
              src={`${personalInfo.resumePath}#toolbar=0&navpanes=0`}
              title="Pranjal Resume PDF"
              className="w-full h-full border-0"
            />
          </div>

          {/* Quick Dossier Sidebar (4 cols on desktop) */}
          <div className="lg:col-span-4 p-5 overflow-y-auto space-y-5 bg-[#090F1C] text-xs">
            
            <div className="space-y-1 pb-3 border-b border-slate-800">
              <span className="text-[10px] font-mono uppercase text-sky-400 tracking-wider font-semibold">
                Candidate Summary
              </span>
              <h4 className="text-sm font-bold text-white">
                {personalInfo.name}
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                {personalInfo.shortBio}
              </p>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-2 pb-3 border-b border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                Direct Contact
              </span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-mono">{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-mono">{personalInfo.phone}</span>
              </div>
            </div>

            {/* Academic Snapshot */}
            <div className="space-y-2 pb-3 border-b border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                Academics
              </span>
              <p className="text-slate-200 font-medium">
                {educationInfo.degree}
              </p>
              <p className="text-slate-400">
                {educationInfo.institution} (2024 – 2028)
              </p>
              <div className="inline-block px-2 py-0.5 rounded bg-sky-950 border border-sky-800 text-sky-300 font-mono font-semibold text-xs mt-1">
                CGPA: 9.66 / 10.00
              </div>
            </div>

            {/* Cloud Credentials */}
            <div className="space-y-2 pb-3 border-b border-slate-800">
              <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold block">
                Certifications
              </span>
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Microsoft Azure AI-900 (AI Fundamentals)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Microsoft Azure DP-900 (Data Fundamentals)</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span>Microsoft Azure AZ-900 (Azure Fundamentals)</span>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <a
                href={personalInfo.resumePath}
                download="Pranjal_AI_ML_Resume.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all shadow-md shadow-sky-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Save Local Copy (.pdf)</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
