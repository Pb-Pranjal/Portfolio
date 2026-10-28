import React, { useEffect, useState } from 'react';
import { Project } from '../types/portfolio';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Check, 
  Copy,
  Users
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'client':
        return 'text-sky-400 border-sky-800 bg-sky-950/40';
      case 'api':
        return 'text-cyan-300 border-cyan-800 bg-cyan-950/40';
      case 'ai':
        return 'text-purple-300 border-purple-800 bg-purple-950/40';
      case 'db':
        return 'text-emerald-300 border-emerald-800 bg-emerald-950/40';
      default:
        return 'text-slate-300 border-slate-700 bg-slate-900';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fadeIn">
      {/* Modal Dialog */}
      <div 
        className="relative w-full max-w-4xl bg-[#090F1C] border border-slate-800 rounded-2xl shadow-2xl shadow-black overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0D1526] border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-sky-950 border border-sky-800 text-sky-300">
                {project.category}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                {project.role}
              </span>
              {project.teamSize && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-950/60 border border-amber-800/60 text-amber-300 flex items-center gap-1">
                  <Users className="w-3 h-3" /> Team Size: {project.teamSize}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs font-mono text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 border border-slate-700 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-8 overflow-y-auto text-slate-200 text-sm">

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0D1526]/80 p-3 rounded-xl border border-slate-800/80">
            {project.keyMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                  {metric.label}
                </span>
                <span className="text-sm font-bold text-white font-mono block">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Problem vs What Was Built */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 bg-[#0D1526]/40 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-400" /> The Problem It Solves
              </h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.whatProblemItSolves}
              </p>
            </div>

            <div className="space-y-3 bg-[#0D1526]/40 p-4 rounded-xl border border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" /> My Direct Role & Contribution
              </h4>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.myRoleContribution}
              </p>
            </div>
          </div>

          {/* What I Built */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-sky-400" /> What I Built & Key Implementations
            </h4>
            <ul className="grid grid-cols-1 gap-2.5">
              {project.whatIBuilt.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-[#0B1220] p-3 rounded-lg border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture / Data Flow Pipeline */}
          {project.architectureFlow && project.architectureFlow.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" /> Architecture & Data Flow
              </h4>
              
              <div className="relative pl-6 space-y-4 border-l-2 border-slate-800 ml-2 py-1">
                {project.architectureFlow.map((step) => (
                  <div key={step.step} className="relative group">
                    <div className="absolute -left-[31px] top-1 w-6 h-6 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-[10px] font-mono font-bold text-sky-400">
                      {step.step}
                    </div>
                    <div className={`p-3 rounded-lg border ${getTypeColor(step.type)}`}>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs sm:text-sm text-white font-mono">
                          {step.title}
                        </span>
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-black/40 text-slate-400">
                          {step.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Decisions & Tradeoffs */}
          {project.technicalDecisions && project.technicalDecisions.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-purple-400" /> Technical Decisions & Tradeoffs
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {project.technicalDecisions.map((dec, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#0D1526]/70 border border-slate-800 space-y-2">
                    <span className="font-semibold text-xs sm:text-sm text-white font-mono block">
                      Decision: {dec.title}
                    </span>
                    <p className="text-xs text-slate-300">
                      <strong className="text-sky-300 font-medium">Rationale: </strong>
                      {dec.rationale}
                    </p>
                    <p className="text-xs text-slate-400">
                      <strong className="text-amber-300 font-medium">Tradeoff Considered: </strong>
                      {dec.tradeoff}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Strict Honesty: Real vs Simulated vs Current Prototype Limitations */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Engineering Transparency & Boundary Verification
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              
              {/* Real Components */}
              <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Real Implementations
                </span>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  {project.realVsSimulated.real.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>

              {/* Simulated Elements */}
              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-amber-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Simulated / Mocked
                </span>
                {project.realVsSimulated.simulated.length > 0 ? (
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    {project.realVsSimulated.simulated.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-400 italic">No mocked components in this project.</p>
                )}
              </div>

              {/* Current Prototype Limitations */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                <span className="text-[11px] font-mono uppercase font-bold text-slate-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> Prototype Boundaries
                </span>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  {project.realVsSimulated.limitations.map((l, i) => (
                    <li key={i}>{l}</li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Actual Tech Stack Breakdown */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Verified Technology Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {project.actualTechStack.map((group, idx) => (
                <div key={idx} className="p-2.5 rounded bg-[#0A101D] border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1 font-semibold">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((item, i) => (
                      <span key={i} className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Code Snippet / Payload */}
          {project.codeSnippet && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-sky-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" /> {project.codeSnippet.filename}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 transition-colors"
                >
                  {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-[#05080E] p-4 rounded-xl border border-slate-800 overflow-x-auto">
                <pre className="text-xs font-mono text-sky-200 leading-relaxed">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0D1526] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Source checked from Pb-Pranjal GitHub
          </span>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
