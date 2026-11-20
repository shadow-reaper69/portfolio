import React from 'react'
import { ArrowDown, Terminal, ShieldCheck, ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { HalftoneReveal } from '../ui/HalftoneReveal'
import { useTheme } from '../../context/useTheme'
import { BlurText } from '../ui/BlurText'
import { DecryptedText } from '../ui/DecryptedText'

export const HeroSection: React.FC = () => {
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Essential details & Quick Actions (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* At most two chips */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs font-sans text-[var(--text-secondary)] shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-medium text-[var(--text-primary)]">
                  <DecryptedText text="B.Tech CSE, Cybersecurity (2nd year)" speed={25} maxIterations={8} />
                </span>
              </div>

              <a
                href="https://tryhackme.com/p/afrazali290"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] hover:border-[var(--accent)] text-xs font-sans text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group shadow-sm"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>
                  <DecryptedText text="TryHackMe Top 25%" speed={30} maxIterations={8} />
                </span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
              </a>
            </div>

            {/* Name & Positioning Line with DecryptedText and BlurText */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-[var(--text-primary)] tracking-tight leading-tight cursor-default">
                <DecryptedText
                  text="Mohamed Afraz Ali"
                  animateOn="inViewHover"
                  effect="scramble"
                  sequential={true}
                  revealDirection="start"
                  speed={28}
                  maxIterations={10}
                  scrambleColor="#D5F5C6"
                  className="text-[var(--text-primary)]"
                  encryptedClassName="text-[var(--accent)]"
                />
              </h1>
              <div className="text-lg sm:text-xl font-display font-semibold text-[var(--accent)] tracking-tight">
                <BlurText text="Cybersecurity Undergraduate | Web Application Security" delay={0.25} duration={0.5} />
              </div>
            </div>

            {/* Short, Punchy Summary with Subtle BlurText */}
            <div className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed max-w-xl">
              <BlurText
                text="2nd-year Cybersecurity undergraduate at HITS Chennai. Focused on web application security, manual vulnerability assessment, and reconnaissance automation."
                delay={0.38}
                duration={0.5}
                stagger={0.02}
              />
            </div>

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

          {/* Right Column: Large Frameless Cutout with HalftoneReveal (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-end relative">
            <div className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[580px] xl:max-w-[640px] h-[440px] sm:h-[500px] lg:h-[560px] xl:h-[620px] flex items-center justify-center">
              {/* Soft Ambient Cyber Backlight Aura */}
              <div
                className="absolute inset-0 -z-10 pointer-events-none opacity-30 dark:opacity-45 blur-3xl scale-100"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, var(--accent) 0%, transparent 70%)'
                }}
              />

              {/* Pure Frameless HalftoneReveal on Cutout with Smooth Bottom Dissolve */}
              <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
                <HalftoneReveal
                  src="/profile-cutout.png"
                  fit="cover"
                  imageScale={1.22}
                  mode="duotone"
                  shape="dot"
                  cellSize={5}
                  angle={45}
                  dotScale={1.05}
                  inkColor={isDark ? '#D5F5C6' : '#18251B'}
                  accentColor={isDark ? '#4ADE80' : '#2E5A36'}
                  paperColor={isDark ? '#080909' : '#F5F7F6'}
                  revealRadius={150}
                  softness={0.5}
                  linger={1.5}
                  wander={true}
                  clickBurst={true}
                  transparent={true}
                  className="w-full h-full cursor-crosshair"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
