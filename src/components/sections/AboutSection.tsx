import React from 'react'
import { Terminal, Shield, Award, BookOpen, Code2 } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'

export const AboutSection: React.FC = () => {
  const { bio } = portfolioData.personal

  return (
    <section id="about" className="py-24 border-t border-white/5 bg-[#080909] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6]" />
            <span>01 / Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Security Mindset & Engineering Approach
          </h2>
        </div>

        {/* 2-Column Split: Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#8E9592] leading-relaxed">
            {bio.map((paragraph, index) => (
              <p key={index} className="text-[#8E9592]">
                {paragraph}
              </p>
            ))}

            {/* Quote / Principle Banner */}
            <div className="p-4 rounded-xl border border-white/10 bg-[#0E1010] mt-6 flex items-start gap-3">
              <Shield className="w-5 h-5 text-[#D5F5C6] shrink-0 mt-0.5" />
              <div className="text-xs font-mono">
                <span className="text-[#F5F5F5] font-semibold">Core Operating Rule:</span>
                <p className="text-[#8E9592] mt-0.5">
                  "No exaggerated claims. Real lab progress, reproducible scripts, and verified understanding over buzzwords."
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            <SpotlightCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-[#D5F5C6]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">Daily Linux & Kali Practice</h3>
                  <p className="text-xs text-[#8E9592]">Terminal-first workflow, network analysis & automation</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-[#D5F5C6]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">PortSwigger & Hands-on Labs</h3>
                  <p className="text-xs text-[#8E9592]">Practicing real vulnerability exploit mechanics & mitigations</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-[#D5F5C6]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">AI-Assisted Security Dev</h3>
                  <p className="text-xs text-[#8E9592]">Using modern AI to audit code, write recon scripts & prototype</p>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="p-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center">
                  <Award className="w-4 h-4 text-[#D5F5C6]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F5F5]">C3SA Candidate</h3>
                  <p className="text-xs text-[#8E9592]">CyberWarFare Labs hands-on cyber defense curriculum</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  )
}
