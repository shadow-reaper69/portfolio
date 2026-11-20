import React from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { AnimatedContent } from '../ui/AnimatedContent'
import { InteractiveTerminal } from '../terminal/InteractiveTerminal'
import { DecryptedText } from '../ui/DecryptedText'
import { MagneticButton } from '../ui/MagneticButton'

export const HeroSection: React.FC = () => {
  const { name, headline, subheadline } = portfolioData.personal

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-transparent"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#D5F5C6]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-none">
        {/* Left Column: Typographic Presence with AnimatedContent */}
        <div className="lg:col-span-7 pointer-events-auto">
          <AnimatedContent
            distance={30}
            direction="vertical"
            duration={0.7}
            ease="power2.out"
            trigger="mount"
            stagger={0.07}
            className="space-y-6"
          >
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#0E1010]/80 backdrop-blur-md text-xs font-mono text-[#8E9592]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5F5C6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5F5C6]"></span>
              </span>
              <span className="text-[#D5F5C6] font-medium">B.Tech CSE Cybersecurity Undergrad</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-display font-bold tracking-tight text-[#F5F5F5] leading-tight">
                <DecryptedText text={name} speed={30} maxIterations={8} />
              </h1>
              <p className="text-xl sm:text-2xl font-display font-medium text-[#D5F5C6] tracking-tight">
                {headline}
              </p>
            </div>

            {/* Positioning Description */}
            <p className="text-sm sm:text-base text-[#8E9592] max-w-xl leading-relaxed font-sans">
              {subheadline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#projects" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6] rounded-full">
                <MagneticButton
                  strength={10}
                  className="px-6 py-3 rounded-full bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] font-medium text-xs font-mono tracking-wide flex items-center gap-2 shadow-lg shadow-[#D5F5C6]/10"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </MagneticButton>
              </a>

              <a
                href="#contact"
                className="px-5 py-3 rounded-full border border-white/15 hover:border-[#D5F5C6]/40 bg-[#0E1010]/70 hover:bg-[#141716] text-[#F5F5F5] text-xs font-mono tracking-wide transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
              >
                <span>CONNECT</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D5F5C6]" />
              </a>
            </div>

            {/* Core Trait Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 font-mono text-[11px] text-[#8E9592]">
              <span className="text-[#5A625E]">Focus:</span>
              <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0E1010]">Web Application Pentesting</span>
              <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0E1010]">Reconnaissance Tooling</span>
              <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0E1010]">Burp Suite Labs</span>
              <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0E1010]">Python & Bash</span>
            </div>
          </AnimatedContent>
        </div>

        {/* Right Column: Interactive Mini-Terminal with Smooth Bound & Subtle Glow */}
        <div className="lg:col-span-5 w-full pointer-events-auto">
          <div className="relative group transition-all duration-300">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-[#D5F5C6]/20 via-[#D5F5C6]/5 to-transparent blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 transition-transform duration-300 group-hover:translate-y-[-2px]">
              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
