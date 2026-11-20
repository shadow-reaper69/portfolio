import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-[var(--border-color)] bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-6">
          About
        </h2>

        <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]/85 backdrop-blur-md space-y-5 shadow-sm">
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            Analytical, hands-on cybersecurity undergraduate focusing on web application security, manual verification over scanner noise, and reconnaissance automation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono text-[var(--text-secondary)]">
            <div className="p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-semibold block mb-1">Core Focus</span>
              <span>Web App Security, VAPT &amp; Recon</span>
            </div>
            <div className="p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-semibold block mb-1">Methodology</span>
              <span>Manual verification &middot; Linux-first</span>
            </div>
            <div className="p-3.5 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-semibold block mb-1">Environment</span>
              <span>Kali Linux, Burp Suite, Python, C</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
