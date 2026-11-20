import React, { useState } from 'react'
import { Mail, Check, Copy, ArrowUp, ArrowUpRight, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('afrazali290@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer id="contact" className="w-full border-t border-[var(--border-color)] bg-[var(--bg-surface)] pt-14 pb-12 text-[var(--text-primary)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-color)]">
          {/* Identity Column (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="font-display text-base font-bold text-[var(--text-primary)]">
              Mohamed Afraz Ali
            </h3>

            <p className="text-sm text-[var(--text-secondary)] max-w-md leading-relaxed font-sans">
              Cybersecurity Undergraduate | Web Application Security. Second-year B.Tech CSE Cybersecurity student at Hindustan Institute of Technology &amp; Science, Chennai.
            </p>

            <p className="text-xs text-[var(--accent)] font-mono font-medium">
              Available for Summer 2027 internships.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-mono">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleNavClick(e, 'skills')}
                  className="hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
                >
                  Tooling &amp; Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, 'projects')}
                  className="hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={(e) => handleNavClick(e, 'education')}
                  className="hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
                >
                  Education &amp; Credentials
                </a>
              </li>
              <li>
                <a
                  href="#practice"
                  onClick={(e) => handleNavClick(e, 'practice')}
                  className="hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
                >
                  Web Security Practice
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
                >
                  <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Highlighted Connect & Social Redirects (4 cols) */}
          <div className="md:col-span-4 space-y-2.5 font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] font-mono">
              Connect &amp; Profiles
            </h4>
            <div className="space-y-2">
              <button
                onClick={copyEmail}
                className="w-full p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] cursor-pointer"
                title="Click to copy email address"
                aria-label="Copy email address afrazali290@gmail.com"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span>afrazali290@gmail.com</span>
                </div>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </button>

              {/* Highlighted GitHub Redirect Card */}
              <a
                href="https://github.com/shadow-reaper69/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                aria-label="GitHub Profile (opens in new tab)"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span className="font-semibold">GitHub</span>
                  <span className="text-[10px] text-[var(--text-secondary)]">/shadow-reaper69</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Highlighted LinkedIn Redirect Card */}
              <a
                href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-all group shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                aria-label="LinkedIn Profile (opens in new tab)"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-[var(--accent)] shrink-0" />
                  <span className="font-semibold">LinkedIn</span>
                  <span className="text-[10px] text-[var(--text-secondary)]">/afraz-ali</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* TryHackMe Redirect Card */}
              <a
                href="https://tryhackme.com/p/afrazali290"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-2.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] hover:border-[var(--accent)] flex items-center justify-between text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent)] transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                aria-label="TryHackMe Profile (opens in new tab)"
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-[var(--accent)]">THM</span>
                  <span>TryHackMe Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--accent)] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[var(--text-secondary)]">
          <p className="m-0">
            &copy; 2026 Mohamed Afraz Ali
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:underline cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
