import React from 'react'
import { ArrowDown, Terminal, ShieldCheck, ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        {/* At most two chips */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-[#0E1010] text-xs font-sans text-[#8E9592]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
            <span className="font-medium text-[#F5F5F5]">B.Tech CSE, Cybersecurity (2nd year)</span>
          </div>

          <a
            href="https://tryhackme.com/p/afrazali290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-white/10 bg-[#0E1010] hover:border-[#D5F5C6]/40 text-xs font-sans text-[#8E9592] hover:text-[#D5F5C6] transition-colors group"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#D5F5C6]" />
            <span>TryHackMe Top 25%</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
        </div>

        {/* Name & Positioning Line */}
        <div className="space-y-3 max-w-4xl mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F5F5F5] tracking-tight leading-tight">
            Mohamed Afraz Ali
          </h1>
          <p className="text-xl sm:text-2xl font-display font-semibold text-[#D5F5C6] tracking-tight">
            Security-focused developer | Aspiring Web Application Pentester
          </p>
        </div>

        {/* Exactly Two Short Paragraphs */}
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[#8E9592] font-sans leading-relaxed mb-8">
          <p>
            I’m a second-year B.Tech Cybersecurity student at Hindustan Institute of Technology &amp; Science in Chennai, focused on web application security, vulnerability assessment, and reconnaissance. I learn by practical experimentation: PortSwigger Web Security Academy labs, TryHackMe rooms, and tools I build myself.
          </p>
          <p className="text-sm sm:text-base text-[#8E9592]">
            I’m available for a <strong className="text-[#F5F5F5]">Summer 2027 internship</strong> where I can work on real application security workflows and learn from experienced engineers.
          </p>
        </div>

        {/* Primary Action Buttons & Highlighted Social Redirects */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-xs font-mono font-semibold tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#practice"
            className="px-5 py-2.5 rounded-md border border-white/15 bg-[#0E1010] hover:bg-white/5 hover:border-[#D5F5C6]/40 text-[#F5F5F5] text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
          >
            <span>Web Security Practice</span>
            <Terminal className="w-3.5 h-3.5 text-[#D5F5C6]" />
          </a>

          {/* Prominently Highlighted GitHub Redirect */}
          <a
            href="https://github.com/shadow-reaper69/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/15 bg-[#141716] hover:border-[#D5F5C6] hover:bg-white/5 text-[#F5F5F5] hover:text-[#D5F5C6] text-xs font-mono font-medium transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <GithubIcon className="w-4 h-4 text-[#D5F5C6]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#D5F5C6]" />
          </a>

          {/* Prominently Highlighted LinkedIn Redirect */}
          <a
            href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/15 bg-[#141716] hover:border-[#D5F5C6] hover:bg-white/5 text-[#F5F5F5] hover:text-[#D5F5C6] text-xs font-mono font-medium transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <LinkedinIcon className="w-4 h-4 text-[#D5F5C6]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#D5F5C6]" />
          </a>
        </div>
      </div>
    </section>
  )
}
