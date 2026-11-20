import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Practice', href: '#practice' },
  { label: 'Contact', href: '#contact' },
]

export const FloatingNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 180

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full border-b border-white/10 bg-[#080909]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name on the left */}
        <a
          href="#"
          className="font-display font-bold text-base text-[#F5F5F5] hover:text-[#D5F5C6] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6] rounded"
          aria-label="Mohamed Afraz Ali - Home"
        >
          Mohamed Afraz Ali
        </a>

        {/* Desktop Nav Links & Social Redirects on the right */}
        <div className="hidden md:flex items-center gap-5">
          <nav className="flex items-center gap-1 font-sans text-xs text-[#8E9592]" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6] ${
                    isActive
                      ? 'text-[#F5F5F5] bg-white/5 font-semibold'
                      : 'hover:text-[#F5F5F5] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Highlighted GitHub & LinkedIn Redirects */}
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <a
              href="https://github.com/shadow-reaper69/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-white/10 bg-[#0E1010] text-[#8E9592] hover:text-[#D5F5C6] hover:border-[#D5F5C6]/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
              title="GitHub Profile"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-white/10 bg-[#0E1010] text-[#8E9592] hover:text-[#D5F5C6] hover:border-[#D5F5C6]/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#D5F5C6] hover:bg-[#c2eeaf] text-[#080909] text-xs font-mono font-semibold transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger & Quick Socials */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://github.com/shadow-reaper69/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded border border-white/10 bg-[#0E1010] text-[#8E9592] hover:text-[#D5F5C6]"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded border border-white/10 bg-[#0E1010] text-[#8E9592] hover:text-[#D5F5C6]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-[#D5F5C6] text-[#080909] text-[11px] font-mono font-semibold flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md border border-white/10 bg-[#0E1010] text-[#F5F5F5] hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D5F5C6]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#080909] px-6 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-[#F5F5F5] hover:bg-white/5 hover:text-[#D5F5C6] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center gap-3">
            <a
              href="https://github.com/shadow-reaper69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#D5F5C6] hover:underline flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#D5F5C6] hover:underline flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
