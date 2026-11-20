import React from 'react'
import { CheckCircle2, Clock, Target } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'
import { AnimatedContent } from '../ui/AnimatedContent'

export const JourneySection: React.FC = () => {
  const { journey } = portfolioData

  const getPhaseHeader = (phase: string) => {
    switch (phase) {
      case 'COMPLETED':
        return {
          icon: <CheckCircle2 className="w-4 h-4 text-[#D5F5C6]" />,
          badgeColor: 'border-[#D5F5C6]/30 bg-[#D5F5C6]/10 text-[#D5F5C6]',
          glow: 'border-l-2 border-l-[#D5F5C6]',
        }
      case 'CURRENTLY LEARNING':
        return {
          icon: <Clock className="w-4 h-4 text-amber-300" />,
          badgeColor: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
          glow: 'border-l-2 border-l-amber-400',
        }
      case 'NEXT TARGET':
        return {
          icon: <Target className="w-4 h-4 text-sky-400" />,
          badgeColor: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
          glow: 'border-l-2 border-l-sky-400',
        }
      default:
        return {
          icon: <CheckCircle2 className="w-4 h-4 text-slate-300" />,
          badgeColor: 'border-white/10 bg-white/5 text-slate-300',
          glow: 'border-l-2 border-l-white/20',
        }
    }
  }

  return (
    <section id="journey" className="py-16 sm:py-20 border-t border-white/5 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>04 / Evolution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Security Learning Journey
          </h2>
        </div>

        {/* 3-Column Progression Grid with AnimatedContent */}
        <AnimatedContent
          distance={40}
          direction="vertical"
          duration={0.7}
          stagger={0.12}
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {journey.map((stage, idx) => {
            const style = getPhaseHeader(stage.phase)

            return (
              <SpotlightCard key={idx} className={`p-6 ${style.glow}`}>
                {/* Phase Tag */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    {style.icon}
                    <span
                      className={`text-[10px] font-mono uppercase font-semibold px-2 py-0.5 rounded border ${style.badgeColor}`}
                    >
                      {stage.phase}
                    </span>
                  </div>
                  {stage.period && (
                    <span className="text-[11px] font-mono text-[#5A625E]">
                      {stage.period}
                    </span>
                  )}
                </div>

                {/* Stage Title */}
                <h3 className="text-sm font-semibold text-[#F5F5F5] mb-4">
                  {stage.title}
                </h3>

                {/* Milestone Checklist */}
                <ul className="space-y-2.5 text-xs text-[#8E9592]">
                  {stage.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <span className="text-[#D5F5C6] font-mono mt-0.5">›</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            )
          })}
        </AnimatedContent>
      </div>
    </section>
  )
}
