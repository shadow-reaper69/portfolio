import React from 'react'
import { Terminal, Award, BookOpen, Code2, Activity, ArrowRight, Shield, Zap } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { SpotlightCard } from '../ui/SpotlightCard'
import { AnimatedContent } from '../ui/AnimatedContent'
import { LetterGlitch } from '../ui/LetterGlitch'

export const AboutSection: React.FC = () => {
  const { bio } = portfolioData.personal

  return (
    <section id="about" className="py-16 sm:py-20 border-t border-white/5 bg-[#080909] relative overflow-hidden">
      {/* Interactive LetterGlitch Background (Exclusive to About Section) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto opacity-75">
        <LetterGlitch
          glitchColors={['#ffffff', '#D5F5C6', '#8E9592']}
          glitchAmount={0.35}
          speed={0.85}
          flow={0.4}
          clickEffect="tear"
          baseColor="#ffffff"
          fontSize={14}
          spacing={0.6}
          density={0.8}
          baseOpacity={0.07}
          smooth
          edgeFade={0.25}
          centerFade={0.4}
          interactive={true}
          cursorRadius={140}
          intro={true}
          lightMode={false}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center gap-2 text-[#D5F5C6] font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#D5F5C6] animate-pulse" />
            <span>01 / Background</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-[#F5F5F5] tracking-tight">
            Security Mindset & Engineering Approach
          </h2>
        </div>

        {/* 2-Column Split: Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative + Tactical Telemetry HUD */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#8E9592] leading-relaxed">
              {bio.map((paragraph, index) => (
                <p key={index} className="text-[#8E9592]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tactical Cyber Workflow HUD */}
            <div className="tactical-box scanline-glow p-5 rounded-xl border border-white/10 bg-[#0E1010]/95 backdrop-blur-md space-y-4 shadow-xl">
              {/* HUD Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <Activity className="w-3.5 h-3.5 text-[#D5F5C6]" />
                  <span className="text-[#F5F5F5] font-semibold tracking-wide">ATTACK SURFACE & RECON PIPELINE</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#D5F5C6] px-2 py-0.5 rounded border border-[#D5F5C6]/30 bg-[#D5F5C6]/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6] animate-ping" />
                  <span>ACTIVE LAB WORKFLOW</span>
                </div>
              </div>

              {/* 4-Stage Visual Attack Workflow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                {/* Stage 1 */}
                <div className="p-3 rounded-lg border border-white/5 bg-[#141716]/80 hover:border-[#D5F5C6]/30 hover:bg-[#141716] transition-all group">
                  <div className="flex items-center justify-between text-[#8E9592] mb-1">
                    <span className="text-[10px] text-[#5A625E]">STAGE 01</span>
                    <span className="text-[10px] text-[#D5F5C6] font-semibold">FOOTPRINTING</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D5F5C6] transition-colors flex items-center gap-1.5">
                    <span>Reconnaissance</span>
                    <ArrowRight className="w-3 h-3 text-[#5A625E] group-hover:text-[#D5F5C6] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-[#8E9592] mt-1 font-sans">
                    Subdomain discovery & port scanning via <code className="text-[#D5F5C6] font-mono">Nmap</code>, <code className="text-[#D5F5C6] font-mono">Subfinder</code>, and <code className="text-[#D5F5C6] font-mono">ffuf</code>.
                  </p>
                </div>

                {/* Stage 2 */}
                <div className="p-3 rounded-lg border border-white/5 bg-[#141716]/80 hover:border-[#D5F5C6]/30 hover:bg-[#141716] transition-all group">
                  <div className="flex items-center justify-between text-[#8E9592] mb-1">
                    <span className="text-[10px] text-[#5A625E]">STAGE 02</span>
                    <span className="text-[10px] text-[#D5F5C6] font-semibold">INTERCEPTION</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D5F5C6] transition-colors flex items-center gap-1.5">
                    <span>Traffic Analysis</span>
                    <ArrowRight className="w-3 h-3 text-[#5A625E] group-hover:text-[#D5F5C6] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-[#8E9592] mt-1 font-sans">
                    Live HTTP/S proxy inspection, parameter fuzzing, and request manipulation with <code className="text-[#D5F5C6] font-mono">Burp Suite</code>.
                  </p>
                </div>

                {/* Stage 3 */}
                <div className="p-3 rounded-lg border border-white/5 bg-[#141716]/80 hover:border-[#D5F5C6]/30 hover:bg-[#141716] transition-all group">
                  <div className="flex items-center justify-between text-[#8E9592] mb-1">
                    <span className="text-[10px] text-[#5A625E]">STAGE 03</span>
                    <span className="text-[10px] text-[#D5F5C6] font-semibold">AUDITING</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D5F5C6] transition-colors flex items-center gap-1.5">
                    <span>Vulnerability Triage</span>
                    <ArrowRight className="w-3 h-3 text-[#5A625E] group-hover:text-[#D5F5C6] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[11px] text-[#8E9592] mt-1 font-sans">
                    Systematic testing for IDOR, SQLi, SSRF, broken access control, and authentication logic flaws.
                  </p>
                </div>

                {/* Stage 4 */}
                <div className="p-3 rounded-lg border border-white/5 bg-[#141716]/80 hover:border-[#D5F5C6]/30 hover:bg-[#141716] transition-all group">
                  <div className="flex items-center justify-between text-[#8E9592] mb-1">
                    <span className="text-[10px] text-[#5A625E]">STAGE 04</span>
                    <span className="text-[10px] text-[#D5F5C6] font-semibold">AUTOMATION</span>
                  </div>
                  <div className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#D5F5C6] transition-colors flex items-center gap-1.5">
                    <span>Reproducible POCs</span>
                    <Zap className="w-3 h-3 text-[#D5F5C6]" />
                  </div>
                  <p className="text-[11px] text-[#8E9592] mt-1 font-sans">
                    Crafting lightweight Python and Bash automation scripts for repeatable validation and evidence generation.
                  </p>
                </div>
              </div>

              {/* HUD Telemetry Bar */}
              <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#8E9592]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-[#F5F5F5]">
                    <Shield className="w-3 h-3 text-[#D5F5C6]" />
                    <span>OS: Kali Linux 6.x</span>
                  </span>
                  <span className="text-white/20">•</span>
                  <span>PortSwigger Academy</span>
                  <span className="text-white/20">•</span>
                  <span>Burp Suite Pro</span>
                </div>
                <span className="text-[#5A625E] font-medium text-[10px] uppercase tracking-wider">
                  TARGET // DEV & SECURITY
                </span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards with Tactical Badges */}
          <div className="lg:col-span-5">
            <AnimatedContent
              distance={30}
              direction="vertical"
              duration={0.7}
              stagger={0.1}
              threshold={0.1}
              className="space-y-3.5"
            >
              <SpotlightCard className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center shrink-0">
                      <Terminal className="w-4 h-4 text-[#D5F5C6]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F5F5]">Daily Linux & Kali Practice</h3>
                      <p className="text-xs text-[#8E9592]">Terminal-first workflow, network analysis & automation</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-white/10 bg-[#141716] text-[#D5F5C6] shrink-0 font-semibold">
                    SYS_OPS
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#5A625E] pl-12">
                  &gt;_ /usr/bin/zsh -s "recon-mesh"
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-[#D5F5C6]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F5F5]">PortSwigger & Hands-on Labs</h3>
                      <p className="text-xs text-[#8E9592]">Practicing real vulnerability exploit mechanics & mitigations</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-white/10 bg-[#141716] text-[#D5F5C6] shrink-0 font-semibold">
                    PRACTITIONER
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#5A625E] pl-12">
                  &gt;_ burpsuite --project wsa-labs
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center shrink-0">
                      <Code2 className="w-4 h-4 text-[#D5F5C6]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F5F5]">AI-Assisted Security Dev</h3>
                      <p className="text-xs text-[#8E9592]">Using modern AI to audit code, write recon scripts & prototype</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-white/10 bg-[#141716] text-[#D5F5C6] shrink-0 font-semibold">
                    DEV_ENGINE
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#5A625E] pl-12">
                  &gt;_ python3 audit_exploit_poc.py
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#D5F5C6]/10 border border-[#D5F5C6]/30 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-[#D5F5C6]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#F5F5F5]">C3SA Candidate</h3>
                      <p className="text-xs text-[#8E9592]">CyberWarFare Labs hands-on cyber defense curriculum</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border border-white/10 bg-[#141716] text-[#D5F5C6] shrink-0 font-semibold">
                    EXAM_TRACK
                  </span>
                </div>
                <div className="text-[10px] font-mono text-[#5A625E] pl-12">
                  &gt;_ cwf-labs --module c3sa-assoc
                </div>
              </SpotlightCard>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  )
}
