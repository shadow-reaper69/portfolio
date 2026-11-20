import React from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { LetterGlitch } from '../ui/LetterGlitch'
import { InteractiveTerminal } from '../terminal/InteractiveTerminal'
import { DecryptedText } from '../ui/DecryptedText'
import { MagneticButton } from '../ui/MagneticButton'

export const HeroSection: React.FC = () => {
  const { name, headline, subheadline } = portfolioData.personal

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#D5F5C6]/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Interactive LetterGlitch Background (React Bits) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
        <LetterGlitch
          glitchColors={['#ffffff', '#D5F5C6', '#8E9592']}
          glitchAmount={0.4}
          speed={0.9}
          flow={0.5}
          clickEffect="tear"
          baseColor="#ffffff"
          fontSize={14}
          spacing={0.6}
          density={0.85}
          baseOpacity={0.09}
          smooth
          edgeFade={0.2}
          centerFade={0.35}
          interactive
          cursorRadius={140}
          intro
          lightMode={false}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pointer-events-none">
        {/* Left Column: Typographic Presence */}
        <div className="lg:col-span-7 space-y-6 pointer-events-auto">
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
          <p className="text-sm sm:text-base text-[#8E9592] max-w-xl leading-relaxed">
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
            <span className="px-2 py-0.5 rounded border border-white/5 bg-[#0E1010]">AI-Assisted Dev</span>
          </div>
        </div>

        {/* Right Column: Interactive Mini-Terminal Component */}
        <div className="lg:col-span-5 w-full pointer-events-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#D5F5C6]/10 to-transparent blur-xl pointer-events-none" />
            <InteractiveTerminal />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="hidden sm:flex justify-center items-center mt-12 text-[#5A625E] font-mono text-[10px] tracking-widest uppercase pointer-events-auto">
        <a href="#about" className="flex items-center gap-1.5 hover:text-[#D5F5C6] transition-colors">
          <span>Scroll to inspect profile</span>
          <ArrowDown className="w-3 h-3 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
