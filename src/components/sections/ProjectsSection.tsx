import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projectsData } from '../../data/projects'
import type { Project } from '../../data/projects'

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-t border-white/10 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* Plain Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F5] tracking-tight mb-8">
          Projects
        </h2>

        {/* Uniform Height Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projectsData.map((project: Project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between h-full p-6 rounded-xl border border-white/10 bg-[#0E1010]/85 shadow-md hover:border-[#D5F5C6]/30 transition-all card-border-glow"
            >
              <div>
                {/* Header: Title on Left, Status/Link on Right */}
                <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-white/10">
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#F5F5F5] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#D5F5C6] mt-0.5">
                      {project.metadata}
                    </p>
                  </div>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[#D5F5C6] text-[#080909] hover:bg-[#c2eeaf] transition-colors shrink-0"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono text-[#8E9592] bg-[#141716] border border-white/10 shrink-0">
                      {project.statusNote || 'Repository not publicly available'}
                    </span>
                  )}
                </div>

                {/* One-Sentence Technical Summary */}
                <p className="text-xs sm:text-sm text-[#8E9592] font-sans leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Exactly Three Short Bullets */}
                <ul className="space-y-2 text-xs text-[#8E9592] font-sans mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#D5F5C6] font-bold mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Footer */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-[#8E9592] bg-[#141716] border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
