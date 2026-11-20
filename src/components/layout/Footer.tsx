import React, { useState } from 'react'
import { Shield, Mail, Check, Copy, ArrowUp, ExternalLink, FileText } from 'lucide-react'
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

  return (
    <footer id="contact" className="w-full border-t border-[#36404A] bg-[#0F1419] pt-16 pb-12 text-[#E8ECEF]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#36404A]">
          {/* Identity Column (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1D4ED8]/20 border border-[#1D4ED8]/40 flex items-center justify-center text-[#9DB8FF]">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display text-base font-bold text-[#E8ECEF]">
                Mohamed Afraz Ali
              </span>
            </div>

            <p className="text-sm text-[#A9B3BD] max-w-md leading-relaxed font-sans">
              Security-focused developer | Aspiring Web Application Pentester. Second-year B.Tech CSE Cybersecurity student at Hindustan Institute of Technology &amp; Science, Chennai.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#36404A] bg-[#0F1419] text-xs font-sans text-[#A9B3BD]">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
              <span>Available for Summer 2027 Internship Opportunities</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8ECEF]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#A9B3BD]">
              <li>
                <a href="#about" className="hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline">
                  About &amp; Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline">
                  Security Projects
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline">
                  Web Security Practice
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#9DB8FF] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
                >
                  <FileText className="w-3.5 h-3.5 text-[#9DB8FF]" />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Channels (3 cols) */}
          <div className="md:col-span-3 space-y-3 font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E8ECEF]">
              Connect Directly
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A9B3BD]">
              <li>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-[#E8ECEF] hover:text-[#9DB8FF] transition-colors text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#9DB8FF] rounded"
                  title="Click to copy email address"
                  aria-label="Copy email address afrazali290@gmail.com"
                >
                  <Mail className="w-4 h-4 text-[#9DB8FF] shrink-0" />
                  <span className="font-mono text-xs">afrazali290@gmail.com</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                  )}
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/shadow-reaper69/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <GithubIcon className="w-4 h-4 shrink-0 text-[#9DB8FF]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <LinkedinIcon className="w-4 h-4 shrink-0 text-[#9DB8FF]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://tryhackme.com/p/afrazali290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <Shield className="w-4 h-4 shrink-0 text-[#9DB8FF]" />
                  <span>TryHackMe Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#A9B3BD]">
          <p className="m-0">
            &copy; 2026 Mohamed Afraz Ali
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A9B3BD] hover:text-[#9DB8FF] transition-colors focus-visible:outline-none focus-visible:underline"
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
