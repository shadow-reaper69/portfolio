import React from 'react'
import { ExternalLink } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'
import { AnimatedContent } from '../ui/AnimatedContent'
import { GithubIcon } from '../ui/Icons'

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData

  return (
    <section id="projects" className="py-16 sm:py-20 border-t border-white/5 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>03 / Projects</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Security Tooling & Projects
          </h2>
        </div>

        {/* Projects Cards Grid with AnimatedContent */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.7}
          stagger={0.12}
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((proj, idx) => (
            <SpotlightCard key={proj.id} className="flex flex-col justify-between p-6 h-full">
              <div>
                {/* Header Metadata */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <span className="font-mono text-xs text-[#5A625E]">0{idx + 1} // PROJECT</span>
                  <span className="px-2.5 py-0.5 rounded-full border border-[#D5F5C6]/30 bg-[#D5F5C6]/10 text-[#D5F5C6] font-mono text-[10px] font-semibold">
                    {proj.badge}
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <h3 className="text-lg font-display font-bold text-[#F5F5F5] tracking-tight">
                  {proj.title}
                </h3>
                <p className="text-xs font-mono text-[#D5F5C6] mt-1 mb-3">
                  {proj.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#8E9592] leading-relaxed mb-4 font-sans">
                  {proj.description}
                </p>

                {/* Technical Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono text-[#F5F5F5] font-semibold block">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#8E9592] font-sans">
                    {proj.technicalPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1.5">
                        <span className="text-[#D5F5C6] font-mono mt-0.5">›</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Section: Tags & Action Links */}
              <div>
                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded border border-white/5 bg-[#141716] text-[#8E9592] text-[10px] font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5 font-mono text-xs">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] font-medium transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#D5F5C6]/40 bg-[#141716] text-[#F5F5F5] hover:text-[#D5F5C6] transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </AnimatedContent>
      </div>
    </section>
  )
}
