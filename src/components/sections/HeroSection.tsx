import React, { useState } from 'react'
import { ArrowDown, Terminal, ShieldCheck, ExternalLink, ArrowUpRight, User } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Essential details & Quick Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* At most two chips */}
            <div className="flex flex-wrap items-center gap-2.5">
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
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                Mohamed Afraz Ali
              </h1>
              <p className="text-lg sm:text-xl font-display font-semibold text-[var(--accent)] tracking-tight">
                Cybersecurity Undergraduate | Web Application Security
              </p>
            </div>

            {/* Short, Punchy Summary - No Long Paragraphs */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed max-w-xl">
              2nd-year Cybersecurity undergraduate at HITS Chennai. Focused on web application security, manual vulnerability assessment, and reconnaissance automation.
            </p>

            {/* Primary Action Buttons & Social Redirects */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-4 py-2 rounded-md bg-[var(--accent)] hover:opacity-90 text-[var(--accent-text)] text-xs font-mono font-semibold tracking-wide flex items-center gap-2 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#practice"
                className="px-4 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] text-[var(--text-primary)] text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                <span>Web Practice</span>
                <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
              </a>

              {/* Highlighted GitHub Redirect */}
              <a
                href="https://github.com/shadow-reaper69/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] text-xs font-mono font-medium transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--accent)]" />
              </a>

              {/* Highlighted LinkedIn Redirect */}
              <a
                href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] text-[var(--text-primary)] hover:text-[var(--accent)] text-xs font-mono font-medium transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[var(--accent)]" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Photo Cutout Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]/85 backdrop-blur-md p-4 shadow-xl overflow-hidden group">
              {/* Ambient Cyber Backlight */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                  background: 'radial-gradient(circle at 50% 40%, var(--accent), transparent 70%)'
                }}
              />

              {/* Cutout Image Frame */}
              <div className="relative rounded-xl overflow-hidden bg-[var(--bg-card)] aspect-square flex flex-col items-center justify-center border border-[var(--border-color)]">
                {!imageError ? (
                  <img
                    src="/profile-cutout.png"
                    alt="Mohamed Afraz Ali - Profile Cutout"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <div className="w-20 h-20 rounded-full border-2 border-[var(--accent)]/40 bg-[var(--bg-surface)] flex items-center justify-center shadow-lg">
                      <User className="w-10 h-10 text-[var(--accent)]" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold tracking-wider text-[var(--text-primary)] block">
                        AFRAZ ALI
                      </span>
                      <span className="text-[11px] font-mono text-[var(--accent)] block mt-0.5">
                        SEC_ID: 290 // ACTIVE
                      </span>
                    </div>
                    <p className="text-[10px] font-mono text-[var(--text-secondary)] border border-dashed border-[var(--border-color)] px-2.5 py-1.5 rounded bg-[var(--bg-surface)]">
                      Drop profile-cutout.png in public/
                    </p>
                  </div>
                )}

                {/* Subtitle Tech Tag on Bottom */}
                <div className="absolute bottom-2 left-2 right-2 px-3 py-1.5 rounded-lg bg-[var(--bg-surface)]/90 backdrop-blur-md border border-[var(--border-color)] flex items-center justify-between text-[10px] font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    <span className="text-[var(--text-primary)] font-medium">AFRAZ ALI</span>
                  </div>
                  <span className="text-[var(--accent)]">DEFENSE &middot; RECON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
