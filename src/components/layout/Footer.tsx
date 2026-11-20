import React, { useState } from 'react'
import { Shield, Mail, Check, Copy, ArrowUp } from 'lucide-react'
import { portfolioData } from '../../data/portfolioData'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full border-t border-white/5 bg-[#080909] pt-16 pb-12 text-xs text-[#8E9592]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/5">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#D5F5C6]/15 border border-[#D5F5C6]/40 flex items-center justify-center">
                <Shield className="w-3 h-3 text-[#D5F5C6]" />
              </div>
              <span className="font-mono text-sm font-semibold text-[#F5F5F5]">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-xs text-[#8E9592] max-w-md leading-relaxed font-sans">
              {portfolioData.personal.headline}. Second-year B.Tech CSE Cybersecurity undergrad
              focusing on web application security, reconnaissance, and Linux.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/5 bg-[#0E1010] text-[11px] font-mono text-[#8E9592]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6]" />
              {portfolioData.personal.availability}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">Sections</h4>
            <ul className="space-y-1.5">
              <li><a href="#about" className="hover:text-[#D5F5C6] transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-[#D5F5C6] transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-[#D5F5C6] transition-colors">Projects</a></li>
              <li><a href="#journey" className="hover:text-[#D5F5C6] transition-colors">Journey</a></li>
              <li><a href="#certifications" className="hover:text-[#D5F5C6] transition-colors">Certifications & Hackathons</a></li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3 font-mono">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F5F5]">Connect</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 hover:text-[#D5F5C6] transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D5F5C6]" />
                  <span>afrazali290@gmail.com</span>
                  {copied ? <Check className="w-3 h-3 text-[#D5F5C6]" /> : <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
                </button>
              </li>
              <li>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D5F5C6] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>github.com/shadow-reaper69</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#D5F5C6] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>linkedin/in/afraz-ali-1085a1372</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            &copy; {CURRENT_YEAR} Mohamed Afraz Ali. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 bg-[#0E1010] text-[#8E9592] hover:text-[#D5F5C6] hover:border-[#D5F5C6]/30 transition-all"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
