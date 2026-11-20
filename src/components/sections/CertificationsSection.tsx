import React from 'react'
import { Award, Trophy } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'

export const CertificationsSection: React.FC = () => {
  const { certifications, hackathons } = portfolioData

  return (
    <section id="certifications" className="py-24 border-t border-white/5 bg-[#080909] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>05 / Credentials & Hackathons</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Certifications & Competitive Engagements
          </h2>
          <p className="text-xs sm:text-sm font-mono text-[#8E9592] max-w-xl">
            Verified certification milestones and collaborative hackathon problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Certifications (CyberWarFare Labs C3SA) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E9592] uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#D5F5C6]" />
              <span>Certifications</span>
            </div>

            {certifications.map((cert) => (
              <SpotlightCard key={cert.id} className="p-6">
                <div className="flex items-start justify-between gap-4 pb-3 mb-3 border-b border-white/5">
                  <div>
                    <span className="text-[11px] font-mono text-[#D5F5C6] font-semibold">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-semibold text-[#F5F5F5] mt-0.5">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded border border-[#D5F5C6]/30 bg-[#D5F5C6]/10 text-[#D5F5C6] font-mono text-[10px] uppercase font-semibold shrink-0">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#8E9592] leading-relaxed mb-4">
                  {cert.details}
                </p>

                <div>
                  <span className="text-[11px] font-mono text-[#F5F5F5] font-semibold block mb-2">
                    Core Exam Domains Evaluated:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#8E9592]">
                    {cert.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-1.5 p-1.5 rounded bg-[#141716] border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* Hackathons */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E9592] uppercase tracking-wider">
              <Trophy className="w-4 h-4 text-[#D5F5C6]" />
              <span>Hackathon Participations</span>
            </div>

            {hackathons.map((hack) => (
              <SpotlightCard key={hack.id} className="p-6">
                <div className="flex items-start justify-between gap-4 pb-3 mb-3 border-b border-white/5">
                  <div>
                    <span className="text-[11px] font-mono text-[#D5F5C6] font-semibold">
                      {hack.eventName}
                    </span>
                    <h3 className="text-base font-semibold text-[#F5F5F5] mt-0.5">
                      {hack.projectName}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-[#5A625E] shrink-0">
                    Role: {hack.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#8E9592] leading-relaxed mb-4">
                  {hack.summary}
                </p>

                <div className="space-y-2 mb-4">
                  <span className="text-[11px] font-mono text-[#F5F5F5] font-semibold block">
                    Execution Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#8E9592]">
                    {hack.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-1.5">
                        <span className="text-[#D5F5C6] font-mono">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {hack.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded border border-white/5 bg-[#141716] text-[#8E9592] text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
