import React from 'react'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 border-t border-[var(--border-color)] bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-6">
          About
        </h2>

        <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] space-y-4 shadow-sm">
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            I approach cybersecurity from an analytical, hands-on perspective. My daily work revolves around analyzing web applications for authentication bypasses, broken access control, and server-side vulnerabilities, alongside writing custom Python and Bash utilities to streamline attack surface discovery.
          </p>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-sans leading-relaxed">
            Rather than relying solely on automated scanner output, I focus on understanding underlying HTTP protocol mechanisms, debugging edge cases, and verifying security findings through Burp Suite and terminal-first Linux workflows.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)]">
            <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-semibold block mb-1">Methodology</span>
              <span>Manual verification over scanner noise</span>
            </div>
            <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-semibold block mb-1">Core Focus</span>
              <span>Web App Security, VAPT &amp; Recon</span>
            </div>
            <div className="p-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)]">
              <span className="text-[var(--accent)] font-semibold block mb-1">Environment</span>
              <span>Linux / Kali, Python, C, Burp Suite</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
