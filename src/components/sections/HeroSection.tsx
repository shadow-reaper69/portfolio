import React from 'react'
import { ArrowDown, ArrowUpRight, ShieldCheck, Terminal, Award, ExternalLink, FileText } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[88vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-[#D5F5C6]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* Top Badges / Chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#0E1010]/80 backdrop-blur-md text-xs font-sans text-[#8E9592]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5F5C6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5F5C6]"></span>
            </span>
            <span className="font-medium text-[#F5F5F5]">B.Tech CSE — Cybersecurity (2nd Year)</span>
          </div>

          <a
            href="https://tryhackme.com/p/afrazali290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#0E1010]/80 hover:border-[#D5F5C6]/40 text-xs font-sans text-[#8E9592] hover:text-[#D5F5C6] transition-colors group"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#D5F5C6]" />
            <span>TryHackMe Top 25%</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#0E1010]/80 text-xs font-sans text-[#8E9592]">
            <Award className="w-3.5 h-3.5 text-[#D5F5C6]" />
            <span>15 PortSwigger Labs</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-[#0E1010]/80 text-xs font-sans text-[#8E9592]">
            <span className="font-medium text-[#D5F5C6]">Summer 2027 Internship Ready</span>
          </div>
        </div>

        {/* Headline & Positioning */}
        <div className="space-y-4 max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F5F5F5] tracking-tight leading-[1.12]">
            Mohamed Afraz Ali
          </h1>
          <p className="text-xl sm:text-2xl font-display font-semibold text-[#D5F5C6] tracking-tight">
            Security-focused developer | Aspiring Web Application Pentester
          </p>
        </div>

        {/* Narrative / Bio Intro */}
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[#8E9592] font-sans leading-relaxed mb-10">
          <p>
            I’m a second-year B.Tech Cybersecurity student at Hindustan Institute of Technology &amp; Science in Chennai, focused on web application security, vulnerability assessment, and reconnaissance.
          </p>
          <p className="text-sm sm:text-base text-[#8E9592]">
            I learn by doing: PortSwigger Web Security Academy labs on access control, SSRF, CSRF, and API testing, TryHackMe rooms, and tools I build myself, including a Python recon workflow and a defensive Wi-Fi deauthentication detector.
          </p>
          <p className="text-sm sm:text-base text-[#8E9592]">
            I’m looking for a <strong className="text-[#F5F5F5]">Summer 2027 internship</strong> where I can work on real application security and learn from experienced engineers.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center gap-3.5 pt-2">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-xs font-mono font-semibold tracking-wide flex items-center gap-2 shadow-lg shadow-[#D5F5C6]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
          >
            <span>VIEW PROJECTS</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#practice"
            className="px-6 py-3 rounded-full border border-white/15 bg-[#0E1010]/80 hover:bg-[#141716] hover:border-[#D5F5C6]/40 text-[#F5F5F5] text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
          >
            <span>WEB SECURITY PRACTICE</span>
            <Terminal className="w-3.5 h-3.5 text-[#D5F5C6]" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full border border-white/10 bg-[#0E1010]/60 hover:bg-[#141716] text-[#8E9592] hover:text-[#F5F5F5] text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
          >
            <FileText className="w-3.5 h-3.5 text-[#D5F5C6]" />
            <span>RESUME</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  )
}
