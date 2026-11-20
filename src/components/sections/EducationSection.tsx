import React from 'react'
import { ExternalLink, Calendar, Award, GraduationCap } from 'lucide-react'

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 border-t border-[var(--border-color)] bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-8">
          Education &amp; Credentials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Academic Background Card */}
          <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Degree Program</span>
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
                B.Tech in Computer Science &amp; Engineering
              </h3>
              <p className="text-xs font-mono text-[var(--accent)] mt-0.5">
                Specialization in Cybersecurity &middot; Second Year
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
              Hindustan Institute of Technology &amp; Science, Chennai, Tamil Nadu. Focus on foundational computer systems, networking architecture, cryptography, and application security.
            </p>

            {/* Internship Availability placed here as requested */}
            <div className="pt-3 border-t border-[var(--border-color)] flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
              <Calendar className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
              <span>Internship Availability: <strong className="text-[var(--text-primary)]">Summer 2027</strong></span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--badge-border)]">
                  Completed
                </span>
              </div>

              <div>
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
                  Certified Cyber Security Analyst (C3SA)
                </h3>
                <p className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
                  CyberWarFare Labs &middot; Hands-on defense and threat assessment
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                Practical assessment curriculum focusing on incident analysis, threat identification, and hands-on defense methodologies.
              </p>
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-[var(--text-secondary)] bg-[var(--bg-card)] px-2.5 py-1 rounded border border-[var(--border-color)]">
                ID: C3SA-6ad0ccf6b6d122ea6a91de63
              </span>
              <a
                href="/certificates/c3sa-certificate.png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-semibold bg-[var(--accent)] text-[var(--accent-text)] hover:opacity-90 transition-opacity"
              >
                <span>View Cert</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
