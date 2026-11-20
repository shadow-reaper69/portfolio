import React from 'react'
import { Target, Compass } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'

export const GoalsSection: React.FC = () => {
  const { interests, futureGoals } = portfolioData

  return (
    <section id="goals" className="py-16 sm:py-20 border-t border-white/5 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>06 / Vision</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Research Interests & 12-Month Targets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Interests Card */}
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/5">
              <Compass className="w-4 h-4 text-[#D5F5C6]" />
              <h3 className="text-base font-semibold text-[#F5F5F5]">Primary Research Vectors</h3>
            </div>

            <p className="text-xs text-[#8E9592] mb-5">
              Specific domains within cybersecurity and development where I spend time experimenting and reading:
            </p>

            <ul className="space-y-2.5 text-xs font-mono text-[#8E9592]">
              {interests.map((interest, idx) => (
                <li
                  key={idx}
                  className="p-2 rounded border border-white/5 bg-[#141716] flex items-center gap-2 hover:border-[#D5F5C6]/30 hover:text-[#F5F5F5] transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>

          {/* 12-Month Goals Card */}
          <SpotlightCard className="p-6">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-white/5">
              <Target className="w-4 h-4 text-[#D5F5C6]" />
              <h3 className="text-base font-semibold text-[#F5F5F5]">12-Month Concrete Targets</h3>
            </div>

            <p className="text-xs text-[#8E9592] mb-5">
              Measurable milestones to build practical expertise and transition into professional penetration testing:
            </p>

            <ul className="space-y-3 text-xs text-[#8E9592]">
              {futureGoals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#D5F5C6]/15 border border-[#D5F5C6]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[10px] font-mono text-[#D5F5C6] font-bold">{idx + 1}</span>
                  </div>
                  <span className="leading-relaxed text-[#F5F5F5] font-normal">{goal}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  )
}
