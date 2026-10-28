import React from 'react';
import { ProjectCategory } from '../types/portfolio';

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  const categories: ProjectCategory[] = [
    'All',
    'Generative AI & Agents',
    'Computer Vision & ML',
    'Full-Stack & Systems',
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#0A101E] border border-slate-800/80 max-w-fit mx-auto shadow-inner">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        const count = counts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all flex items-center gap-1.5 ${
              isActive
                ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                isActive
                  ? 'bg-slate-950/20 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
