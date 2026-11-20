import React from 'react'
import { ShieldAlert, Cpu, Terminal, Layers, ArrowUpRight } from 'lucide-react'
import { projectsData } from '../../data/projects'
import type { Project } from '../../data/projects'

export const ProjectsSection: React.FC = () => {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'cryo-wifi':
        return <ShieldAlert className="w-5 h-5 text-[#1D4ED8]" />
      case 'esp32-c5-firmware':
        return <Cpu className="w-5 h-5 text-[#1D4ED8]" />
      case 'python-recon-automation':
        return <Terminal className="w-5 h-5 text-[#1D4ED8]" />
      case 'trust-chain':
        return <Layers className="w-5 h-5 text-[#1D4ED8]" />
      default:
        return <Terminal className="w-5 h-5 text-[#1D4ED8]" />
    }
  }

  return (
    <section id="projects" className="py-20 border-t border-[#D5DADF] bg-[#FFFFFF]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#1D4ED8] font-sans text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span>03 / Security Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F1419] tracking-tight">
            Security Tooling &amp; Technical Prototypes
          </h2>
          <p className="text-sm sm:text-base text-[#46505B] mt-2 max-w-2xl font-sans">
            Hands-on implementations in Wi-Fi frame monitoring, embedded firmware debugging, recon workflow automation, and digital verification.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project: Project, index: number) => (
            <article
              key={project.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-[#D5DADF] bg-[#F3F4F5] shadow-2xs hover:border-[#1D4ED8]/50 transition-all"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#D5DADF]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FFFFFF] border border-[#D5DADF] flex items-center justify-center shrink-0">
                      {getProjectIcon(project.id)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#46505B]">
                      0{index + 1} // PROJECT
                    </span>
                  </div>

                  {/* Repository / Access Status Chip */}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#1D4ED8] text-white hover:bg-[#123499] transition-colors shadow-2xs"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-sans font-medium text-[#46505B] bg-[#FFFFFF] border border-[#D5DADF]">
                      {project.statusNote || 'Repository not publicly available'}
                    </span>
                  )}
                </div>

                {/* Title & Metadata */}
                <h3 className="text-xl font-display font-bold text-[#0F1419] tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#1D4ED8] mt-1 mb-3">
                  {project.metadata}
                </p>

                {/* Summary */}
                <p className="text-sm text-[#46505B] font-sans leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Problem or Objective */}
                <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#D5DADF] mb-4 space-y-1">
                  <span className="text-xs font-semibold text-[#0F1419] font-sans block">
                    Problem / Objective:
                  </span>
                  <p className="text-xs text-[#46505B] font-sans leading-relaxed">
                    {project.problemOrObjective}
                  </p>
                </div>

                {/* Implementation Approach */}
                <div className="space-y-2 mb-4">
                  <span className="text-xs font-semibold text-[#0F1419] font-sans block">
                    Implementation Approach:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#46505B] font-sans">
                    {project.approach.map((step, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <span className="text-[#1D4ED8] font-bold mt-0.5">&bull;</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What I Learned */}
                <div className="space-y-2 mb-5">
                  <span className="text-xs font-semibold text-[#0F1419] font-sans block">
                    What I Learned:
                  </span>
                  <ul className="space-y-1 text-xs text-[#46505B] font-sans">
                    {project.whatILearned.map((item, lIdx) => (
                      <li key={lIdx} className="flex items-start gap-2">
                        <span className="text-[#1D4ED8] font-bold mt-0.5">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Footer */}
              <div className="pt-4 border-t border-[#D5DADF] flex flex-wrap gap-1.5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono text-[#46505B] bg-[#FFFFFF] border border-[#D5DADF]"
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
