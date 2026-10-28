import React from 'react';
import { certifications, educationInfo, personalInfo } from '../data/portfolioData';
import { GraduationCap, CheckCircle2, ShieldCheck, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#070B12] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Rigor & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Official Cloud Credentials
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Consistently disciplined academic performance backed by Microsoft certified foundational cloud expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education Spotlight (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1526] border border-slate-800 p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <GraduationCap className="w-32 h-32 text-sky-400" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 font-medium">
                Undergraduate Degree
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight pt-1">
                {educationInfo.degree}
              </h3>
              <p className="text-sm font-mono text-sky-400 font-medium">
                {educationInfo.institution}
              </p>
              <p className="text-xs font-mono text-slate-400">
                Duration: {educationInfo.period} · Punjab, India
              </p>
            </div>

            {/* CGPA Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/60 to-blue-950/40 border border-sky-500/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-sky-300 uppercase block tracking-wider font-semibold">
                  Cumulative GPA
                </span>
                <span className="text-3xl font-extrabold text-white font-mono">
                  {educationInfo.cgpa}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-300 font-mono font-semibold">
                  Top Percentile
                </span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-sky-400" /> Core Coursework & Focus
              </h4>
              <ul className="space-y-2">
                {educationInfo.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LeetCode link pill */}
            <div className="pt-2">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-amber-500 font-bold">LC</span>
                  <span>LeetCode Problem Solving Profile</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Microsoft Azure Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>Microsoft Certified Credentials</span>
              </h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                All 3 Verified
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="rounded-xl bg-[#0D1526]/80 border border-slate-800 hover:border-sky-500/30 p-5 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-sky-950/80 border border-sky-800/60 flex items-center justify-center text-sky-400 shrink-0 font-bold font-mono text-xs">
                        {cert.code.split('-')[0]}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">
                          {cert.title}
                        </h4>
                        <span className="text-xs font-mono text-slate-400">
                          Issuer: {cert.issuer} · Exam Code: {cert.code}
                        </span>
                      </div>
                    </div>

                    <span className="self-start sm:self-auto text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300">
                      ✓ {cert.status}
                    </span>
                  </div>

                  {/* Covered Topics */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
