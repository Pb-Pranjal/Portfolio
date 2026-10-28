import React from 'react';
import { experienceItems } from '../data/portfolioData';
import { Trophy, Award, Briefcase, Calendar, CheckCircle2, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'Hackathon Award':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Hackathon Participant':
        return <Award className="w-4 h-4 text-purple-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#070B12] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Leadership & Hackathons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Experience & Practical Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
            Collaborating in fast-paced teams, leading technical initiatives, and building award-winning prototypes under competition constraints.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experienceItems.map((item) => {
            const isAward = item.type === 'Hackathon Award';
            
            return (
              <div
                key={item.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                  isAward
                    ? 'bg-gradient-to-b from-[#141C2E] to-[#0A101D] border-amber-500/40 shadow-xl shadow-amber-500/5'
                    : 'bg-[#0D1526]/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Glowing top line for award */}
                {isAward && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />
                )}

                <div className="space-y-4">
                  
                  {/* Top Badge & Date */}
                  <div className="flex items-center justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full ${
                      isAward
                        ? 'bg-amber-950/80 border border-amber-600/60 text-amber-300 font-semibold'
                        : 'bg-slate-900 border border-slate-800 text-slate-300'
                    }`}>
                      {getBadgeIcon(item.type)}
                      <span>{item.badge || item.type}</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-sky-400 mt-1">
                      {item.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    {item.highlights.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isAward ? 'text-amber-400' : 'text-sky-400'
                        }`} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Chitkara Campus Initiatives</span>
                  <span className="text-slate-400">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
