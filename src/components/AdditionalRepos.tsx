import React from 'react';
import { additionalRepositories, personalInfo } from '../data/portfolioData';
import { FolderGit2, ArrowUpRight } from 'lucide-react';

export const AdditionalRepos: React.FC = () => {
  return (
    <section className="py-16 bg-[#070B12] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Public Code Repositories</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Additional Projects & Technical Explorations
            </h3>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>View All on GitHub ({personalInfo.github.replace('https://', '')})</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {additionalRepositories.map((repo, idx) => (
            <a
              key={idx}
              href={repo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-[#0D1526]/60 border border-slate-800/80 hover:border-slate-700 hover:bg-[#0D1526] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-sky-400 group-hover:text-sky-300 transition-colors" />
                    <span className="font-mono font-semibold text-xs sm:text-sm text-white group-hover:text-sky-300 transition-colors">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-300 transition-colors" />
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  {repo.language}
                </span>
                <span className="text-slate-400 group-hover:text-slate-300">GitHub</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
