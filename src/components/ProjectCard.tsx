import React from 'react';
import { Project } from '../types/portfolio';
import { Github, ArrowUpRight, Trophy, Users } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Generative AI & Agents':
        return 'text-sky-400 bg-sky-950/60 border-sky-800/60';
      case 'Computer Vision & ML':
        return 'text-cyan-300 bg-cyan-950/60 border-cyan-800/60';
      case 'Full-Stack & Systems':
        return 'text-blue-400 bg-blue-950/60 border-blue-800/60';
      default:
        return 'text-slate-400 bg-slate-900 border-slate-700';
    }
  };

  const isLead = project.role.toLowerCase().includes('lead');
  const isAward = project.tags.some(t => t.toLowerCase().includes('award') || t.toLowerCase().includes('winner')) || 
                  project.keyMetrics.some(m => m.label.toLowerCase().includes('hackathon') || m.value.toLowerCase().includes('award'));

  return (
    <div className="group relative rounded-xl bg-[#0D1526] border border-slate-800/90 hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg shadow-black/40 hover:shadow-sky-500/10">
      
      {/* Top subtle highlight gradient on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500/0 group-hover:via-sky-400/80 to-transparent transition-all duration-500" />

      {/* Card Header & Content */}
      <div className="p-6 space-y-4">
        
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
              {project.category}
            </span>

            {isLead && (
              <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-950/50 border border-amber-700/50 text-amber-300">
                <Users className="w-3 h-3" /> Team Lead ({project.teamSize || 4})
              </span>
            )}

            {!isLead && (
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                Individual Project
              </span>
            )}
          </div>

          {isAward && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <Trophy className="w-3 h-3 text-amber-400" /> Award Winner
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors tracking-tight flex items-center justify-between">
            <span>{project.title}</span>
          </h3>
          <p className="text-xs text-sky-400/90 font-mono mt-1">
            {project.role}
          </p>
          <p className="text-sm text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Key Metrics / Highlights Strip */}
        <div className="grid grid-cols-2 gap-2 pt-2 pb-1 border-y border-slate-800/80 bg-slate-900/40 p-2.5 rounded-lg">
          {project.keyMetrics.slice(0, 2).map((metric, idx) => (
            <div key={idx} className="space-y-0.5">
              <span className="text-[10px] uppercase font-mono text-slate-400 block tracking-wider">
                {metric.label}
              </span>
              <span className="text-xs font-semibold text-slate-200 font-mono block">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 5).map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 border border-slate-800 text-slate-300"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/60 text-slate-400">
              +{project.tags.length - 5}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer / Actions */}
      <div className="px-6 py-4 bg-[#090F1C] border-t border-slate-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelect(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/60 text-xs font-semibold text-sky-300 transition-all"
        >
          <span>Case Study & Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors"
          title="Verified GitHub Repository"
        >
          <Github className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
