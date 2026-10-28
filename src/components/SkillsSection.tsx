import React, { useState } from 'react';
import { skillGroups } from '../data/portfolioData';
import { Bot, Eye, Server, Code, Layout, Search, Sparkles, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getGroupIcon = (icon: string) => {
    switch (icon) {
      case 'Bot': return <Bot className="w-5 h-5 text-sky-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-purple-400" />;
      case 'Code': return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-amber-400" />;
      default: return <Code className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#070B12] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills Grouped by Engineering Domain
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Demonstrated through functional codebases, live APIs, and hackathon implementations. Not just a generic list of buzzwords.
            </p>
          </div>

          {/* Search / Filter Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Filter skills (e.g. FastAPI, OpenCV)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#0D1526] border border-slate-800 focus:border-sky-500 focus:outline-none text-xs text-white placeholder-slate-500 font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const filteredSkills = group.skills.filter((skill) =>
              skill.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            const hasMatches = filteredSkills.length > 0;

            if (searchQuery && !hasMatches) return null;

            return (
              <div
                key={group.id}
                className="rounded-2xl bg-[#0D1526]/80 border border-slate-800/90 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-200 shadow-md"
              >
                <div className="space-y-4">
                  
                  {/* Category Header */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {getGroupIcon(group.icon)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {group.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {filteredSkills.map((skill, idx) => {
                      const isHighlighted = searchQuery && skill.name.toLowerCase().includes(searchQuery.toLowerCase());
                      const isCore = skill.level === 'Core';

                      return (
                        <div
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                            isHighlighted
                              ? 'bg-sky-500 text-slate-950 font-bold ring-2 ring-sky-300'
                              : isCore
                              ? 'bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-sky-500/50'
                              : 'bg-slate-950/60 text-slate-400 border border-slate-800/80'
                          }`}
                        >
                          <span>{skill.name}</span>
                          <span
                            className={`text-[9px] uppercase px-1 py-0.2 rounded font-semibold ${
                              isCore
                                ? 'bg-sky-950 text-sky-400 border border-sky-800/60'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Footer badge */}
                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Verified in projects
                  </span>
                  <span>{filteredSkills.length} competencies</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
