import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projectsData } from '../../data/projects'
import type { Project } from '../../data/projects'

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-t border-[var(--border-color)] bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* Plain Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-8">
          Projects
        </h2>

        {/* Uniform Height Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projectsData.map((project: Project) => (
            <article
              key={project.id}
              className="flex flex-col justify-between h-full p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm hover:border-[var(--accent)] transition-all"
            >
              <div>
                {/* Header: Title on Left, Status/Link on Right */}
                <div className="flex items-start justify-between gap-3 pb-3 mb-3 border-b border-[var(--border-color)]">
                  <div>
                    <h3 className="text-lg font-display font-bold text-[var(--text-primary)] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[var(--accent)] mt-0.5">
                      {project.metadata}
                    </p>
                  </div>

                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--accent)] text-[var(--accent-text)] hover:opacity-90 transition-opacity shrink-0"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-block px-2.5 py-1 rounded text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)] shrink-0">
                      {project.statusNote || 'Repository not publicly available'}
                    </span>
                  )}
                </div>

                {/* One-Sentence Technical Summary */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Exactly Three Short Bullets */}
                <ul className="space-y-2 text-xs text-[var(--text-secondary)] font-sans mb-6">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[var(--accent)] font-bold mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Footer */}
              <div className="pt-3 border-t border-[var(--border-color)] flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono text-[var(--text-secondary)] bg-[var(--bg-card)] border border-[var(--border-color)]"
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
