import React, { useState, useEffect } from 'react'
import { Shield, ArrowUpRight, Menu, X, FileText } from 'lucide-react'

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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

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
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl px-4 py-2.5 rounded-full border transition-all duration-200 ${
          scrolled
            ? 'bg-[#FFFFFF]/95 border-[#D5DADF] shadow-md shadow-[#0F1419]/5 backdrop-blur-md'
            : 'bg-[#FFFFFF]/90 border-[#D5DADF] shadow-sm backdrop-blur-sm'
        }`}
      >
        {/* Monogram / Brand */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-[#0F1419] hover:opacity-85 transition-opacity py-1 pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-full"
          aria-label="Mohamed Afraz Ali - Security Portfolio"
        >
          <div className="w-7 h-7 rounded-full bg-[#1D4ED8]/10 border border-[#1D4ED8]/25 flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-[#1D4ED8]" />
          </div>
          <span className="font-bold text-xs tracking-tight font-display text-[#0F1419]">
            Mohamed Afraz Ali
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="hidden md:flex items-center gap-1 font-sans text-xs text-[#46505B]"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                  isActive
                    ? 'text-[#1D4ED8] bg-[#1D4ED8]/10 font-semibold'
                    : 'hover:text-[#0F1419] hover:bg-[#F3F4F5]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right Action Items */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#D5DADF] bg-[#F3F4F5] text-[11px] font-sans text-[#46505B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            <span>Summer 2027</span>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1D4ED8] hover:bg-[#123499] text-white text-xs font-medium transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-full bg-[#1D4ED8] text-white text-[11px] font-medium flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg border border-[#D5DADF] bg-[#FFFFFF] text-[#0F1419] hover:bg-[#F3F4F5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto p-4 rounded-2xl border border-[#D5DADF] bg-[#FFFFFF] shadow-xl md:hidden space-y-2">
          <div className="flex flex-col space-y-1 font-sans text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-[#0F1419] hover:bg-[#F3F4F5] hover:text-[#1D4ED8] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-[#D5DADF] flex items-center justify-between text-xs text-[#46505B]">
            <span>Availability: Summer 2027</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#1D4ED8] hover:underline"
            >
              View Resume &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
