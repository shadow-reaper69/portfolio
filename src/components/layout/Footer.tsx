import React, { useState } from 'react'
import { Mail, Check, Copy, ArrowUp, ExternalLink, FileText } from 'lucide-react'
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
    <footer id="contact" className="w-full border-t border-white/10 bg-[#080909] pt-14 pb-12 text-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Identity Column (6 cols) */}
          <div className="md:col-span-6 space-y-3">
            <h3 className="font-display text-base font-bold text-[#F5F5F5]">
              Mohamed Afraz Ali
            </h3>

            <p className="text-sm text-[#8E9592] max-w-md leading-relaxed font-sans">
              Security-focused developer | Aspiring Web Application Pentester. Second-year B.Tech CSE Cybersecurity student at Hindustan Institute of Technology &amp; Science, Chennai.
            </p>

            {/* Availability stated once in footer */}
            <p className="text-xs text-[#D5F5C6] font-mono">
              Available for Summer 2027 internships.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D5F5C6] font-mono">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-sm text-[#8E9592]">
              <li>
                <a href="#about" className="hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline">
                  About &amp; Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline">
                  Tooling &amp; Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline">
                  Web Security Practice
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5F5C6] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:underline"
                >
                  <FileText className="w-3.5 h-3.5 text-[#D5F5C6]" />
                  <span>Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Channels (3 cols) */}
          <div className="md:col-span-3 space-y-2.5 font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D5F5C6] font-mono">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-[#8E9592]">
              <li>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#D5F5C6] transition-colors text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6] rounded"
                  title="Click to copy email address"
                  aria-label="Copy email address afrazali290@gmail.com"
                >
                  <Mail className="w-4 h-4 text-[#D5F5C6] shrink-0" />
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
                  className="flex items-center gap-2 hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <GithubIcon className="w-4 h-4 shrink-0 text-[#D5F5C6]" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <LinkedinIcon className="w-4 h-4 shrink-0 text-[#D5F5C6]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://tryhackme.com/p/afrazali290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  <span className="font-mono text-xs font-bold text-[#D5F5C6]">THM</span>
                  <span>TryHackMe Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#8E9592]">
          <p className="m-0">
            &copy; 2026 Mohamed Afraz Ali
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#8E9592] hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:underline"
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
