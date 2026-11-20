import React from 'react'
import { Shield, Scan, Terminal, Cpu } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Shield':
        return <Shield className="w-4 h-4 text-[#D5F5C6]" />
      case 'Scan':
        return <Scan className="w-4 h-4 text-[#D5F5C6]" />
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-[#D5F5C6]" />
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-[#D5F5C6]" />
      default:
        return <Shield className="w-4 h-4 text-[#D5F5C6]" />
    }
  }

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Intermediate':
        return 'text-[#D5F5C6] bg-[#D5F5C6]/10 border-[#D5F5C6]/30'
      case 'Practicing':
        return 'text-amber-300 bg-amber-400/10 border-amber-400/20'
      case 'Foundational':
        return 'text-slate-300 bg-white/5 border-white/10'
      default:
        return 'text-slate-400 bg-white/5 border-white/10'
    }
  }

  return (
    <section id="skills" className="py-24 border-t border-white/5 bg-[#080909] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>02 / Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Security & Development Skills Matrix
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#8E9592] max-w-xl">
            Accurately classified by current hands-on proficiency. No inflated 99% progress bars.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <SpotlightCard key={idx} className="p-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/5">
                <div className="w-8 h-8 rounded-lg bg-[#D5F5C6]/15 border border-[#D5F5C6]/30 flex items-center justify-center">
                  {renderIcon(cat.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F5F5F5]">{cat.category}</h3>
                  <p className="text-xs text-[#8E9592]">{cat.description}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-3 font-mono text-xs">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-lg border border-white/5 bg-[#141716]/60 hover:bg-[#141716] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                  >
                    <div>
                      <div className="text-[#F5F5F5] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]/70" />
                        {skill.name}
                      </div>
                      {skill.notes && (
                        <p className="text-[11px] text-[#8E9592] ml-3 mt-0.5">{skill.notes}</p>
                      )}
                    </div>

                    <span
                      className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded border self-start sm:self-center shrink-0 ${getLevelBadgeClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
