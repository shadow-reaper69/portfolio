import React, { useState, useEffect } from 'react'
import { Shield, ArrowUpRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const FloatingNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      const scrollPosition = window.scrollY + 200

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
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-4 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? 'bg-[#080909]/90 border-white/10 backdrop-blur-md shadow-2xl shadow-black/80'
            : 'bg-[#0E1010]/75 border-white/10 backdrop-blur-sm'
        }`}
      >
        {/* Monogram / Brand */}
        <a
          href="#"
          className="flex items-center gap-2 text-white hover:opacity-85 transition-opacity py-1 pr-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6] rounded-full"
          aria-label="Mohamed Afraz Ali Home"
        >
          <div className="w-7 h-7 rounded-full bg-[#D5F5C6]/15 border border-[#D5F5C6]/40 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-[#D5F5C6]" />
          </div>
          <span className="font-semibold text-xs tracking-wider font-mono text-[#F5F5F5]">
            AFRAZ<span className="text-[#D5F5C6]">.SEC</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 font-mono text-xs text-[#8E9592]"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6] ${
                  isActive
                    ? 'text-[#080909] bg-[#D5F5C6] font-semibold shadow-sm'
                    : 'hover:text-[#F5F5F5] hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Status Pill & Action */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/5 bg-[#141716] text-[11px] font-mono text-[#8E9592]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D5F5C6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D5F5C6]"></span>
            </span>
            <span>Internship Ready</span>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-mono border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
            aria-label="Open Resume in new tab"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-[#D5F5C6]" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-lg text-[#8E9592] hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D5F5C6]"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="pointer-events-auto absolute top-16 inset-x-4 p-4 rounded-2xl bg-[#0E1010]/95 border border-white/10 backdrop-blur-xl md:hidden shadow-2xl flex flex-col gap-2 font-mono text-sm"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-[#8E9592] hover:text-[#D5F5C6] hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-[#8E9592]">Status: Open to Internships</span>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1 rounded-full bg-[#D5F5C6] text-[#080909] text-xs font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
