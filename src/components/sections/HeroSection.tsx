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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-sans text-[var(--text-secondary)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-medium text-[var(--text-primary)]">B.Tech CSE, Cybersecurity (2nd year)</span>
          </div>

          <a
            href="https://tryhackme.com/p/afrazali290"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] text-xs font-sans text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span>TryHackMe Top 25%</span>
            <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
          </a>
        </div>

        {/* Name & Positioning Line */}
        <div className="space-y-3 max-w-4xl mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            Mohamed Afraz Ali
          </h1>
          <p className="text-xl sm:text-2xl font-display font-semibold text-[var(--accent)] tracking-tight">
            Cybersecurity Undergraduate | Web Application Security
          </p>
        </div>

        {/* Narrative Paragraph */}
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-[var(--text-secondary)] font-sans leading-relaxed mb-8">
          <p>
            I am a second-year B.Tech Cybersecurity undergraduate at Hindustan Institute of Technology &amp; Science, Chennai. My focus is web application security, vulnerability assessment and reconnaissance. I develop my skills through structured PortSwigger Web Security Academy labs, TryHackMe rooms and security tools that I build and test myself.
          </p>
        </div>

        {/* Primary Action Buttons & Highlighted Social Redirects */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-md bg-[var(--accent)] hover:opacity-90 text-[var(--accent-text)] text-xs font-mono font-semibold tracking-wide flex items-center gap-2 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="#practice"
            className="px-5 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] text-[var(--text-primary)] text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <span>Web Security Practice</span>
            <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
          </a>

          {/* Highlighted GitHub Redirect */}
          <a
            href="https://github.com/shadow-reaper69/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] text-xs font-mono font-medium transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <GithubIcon className="w-4 h-4 text-[var(--accent)]" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--accent)]" />
          </a>

          {/* Highlighted LinkedIn Redirect */}
          <a
            href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] text-xs font-mono font-medium transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <LinkedinIcon className="w-4 h-4 text-[var(--accent)]" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--accent)]" />
          </a>
        </div>
      </div>
    </section>
  )
}
