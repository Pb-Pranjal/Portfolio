import React, { useState, useMemo } from 'react';
import { featuredProjects } from './data/portfolioData';
import { Project, ProjectCategory } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectFilter } from './components/ProjectFilter';
import { CaseStudyModal } from './components/CaseStudyModal';
import { InteractiveArchitecture } from './components/InteractiveArchitecture';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationCertifications } from './components/EducationCertifications';
import { AdditionalRepos } from './components/AdditionalRepos';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { Layers, ShieldCheck, Trophy, Code2 } from 'lucide-react';

export const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<ProjectCategory, number> = {
      'All': featuredProjects.length,
      'Generative AI & Agents': 0,
      'Computer Vision & ML': 0,
      'Full-Stack & Systems': 0,
    };

    featuredProjects.forEach((p) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return featuredProjects;
    return featuredProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#070B12] text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-sky-200">
      
      {/* Global Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Engineering Highlights Ribbon */}
        <section className="border-y border-slate-800/80 bg-[#090F1C]/80 backdrop-blur-sm py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono flex items-center justify-center gap-1">
                  <span>9.66</span>
                  <span className="text-xs text-sky-400 font-sans">/10</span>
                </span>
                <span className="text-xs text-slate-400 font-mono block">Chitkara University CGPA</span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span>3x</span>
                </span>
                <span className="text-xs text-slate-400 font-mono block">Azure Cloud Certifications</span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono flex items-center justify-center gap-1.5">
                  <Trophy className="w-5 h-5 text-amber-400" />
                  <span>Best Tech</span>
                </span>
                <span className="text-xs text-slate-400 font-mono block">Implementation Award Winner</span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-300 font-mono flex items-center justify-center gap-1.5">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                  <span>11 Repos</span>
                </span>
                <span className="text-xs text-slate-400 font-mono block">Verified Public GitHub Code</span>
              </div>

            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 bg-[#070B12] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Engineering Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured AI & Engineering Projects
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                Practical applications with real tool calling, voice streaming, RAG pipelines, and computer vision algorithms. Click any project for the architectural deep-dive and transparent implementation breakdown.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="mb-10">
              <ProjectFilter
                activeCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                counts={categoryCounts}
              />
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setActiveProject}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Interactive Architecture Section */}
        <InteractiveArchitecture />

        {/* Skills Section */}
        <SkillsSection />

        {/* Experience & Leadership */}
        <ExperienceSection />

        {/* Education & Certifications */}
        <EducationCertifications />

        {/* Additional Repositories */}
        <AdditionalRepos />

        {/* Contact Section */}
        <ContactSection />

      </main>

      {/* Global Footer */}
      <Footer />

      {/* Project Case Study Dossier Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
};

export default App;
