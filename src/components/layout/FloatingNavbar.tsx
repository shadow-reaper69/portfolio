import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X, FileText, Sun, Moon } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { useTheme } from '../../context/useTheme'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Practice', href: '#practice' },
  { label: 'Contact', href: '#contact' },
]

export const FloatingNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const el = document.getElementById(targetId)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
      setActiveSection(targetId)
      window.history.pushState(null, '', href)
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className="sticky top-0 inset-x-0 z-50 w-full border-b border-[var(--border-color)] bg-[var(--bg-surface)]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Name on the left */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display font-bold text-base text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded cursor-pointer"
          aria-label="Mohamed Afraz Ali - Home"
        >
          Mohamed Afraz Ali
        </a>

        {/* Desktop Nav Links & Action Buttons on the right */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-1 font-sans text-xs text-[var(--text-secondary)]" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] ${
                    isActive
                      ? 'text-[var(--text-primary)] bg-[var(--badge-bg)] font-semibold'
                      : 'hover:text-[var(--text-primary)] hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Social Profiles */}
          <div className="flex items-center gap-2 pl-2 border-l border-[var(--border-color)]">
            <a
              href="https://github.com/shadow-reaper69/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
              title="GitHub Profile"
              aria-label="GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile (opens in new tab)"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Light / Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] cursor-pointer"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[var(--accent)] hover:opacity-90 text-[var(--accent-text)] text-xs font-mono font-semibold transition-opacity shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger & Actions */}
        <div className="flex md:hidden items-center gap-2">
          {/* Light / Dark Mode Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent)]"
            aria-label="Toggle theme mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-[var(--accent)] text-[var(--accent-text)] text-[11px] font-mono font-semibold flex items-center gap-1"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-6 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 rounded-md text-sm text-[var(--text-primary)] hover:bg-[var(--bg-card)] hover:text-[var(--accent)] font-medium transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[var(--border-color)] flex items-center gap-4">
            <a
              href="https://github.com/shadow-reaper69/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/afraz-ali-1085a1372/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[var(--accent)] hover:underline flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
