import React from 'react'
import { ScrollReveal } from '../ui/ScrollReveal'
import { DepthGlareCard } from '../ui/DepthGlareCard'

interface ToolGroup {
  category: string;
  tools: string[];
}

const TOOL_GROUPS: ToolGroup[] = [
  {
    category: 'Web Application Security',
    tools: [
      'Burp Suite (Proxy, Repeater)',
      'PortSwigger Labs',
      'Access Control & IDOR',
      'SSRF & CSRF Testing',
      'API Endpoint Testing'
    ]
  },
  {
    category: 'Reconnaissance & Scanning',
    tools: [
      'Subfinder',
      'httpx',
      'Nmap',
      'Nuclei',
      'ffuf'
    ]
  },
  {
    category: 'Systems & Programming',
    tools: [
      'Linux / Kali Linux',
      'Python',
      'C',
      'Bash Scripting',
      'Git'
    ]
  }
]

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-t border-[var(--border-color)] bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* Plain Section Heading with ScrollReveal */}
        <ScrollReveal distance={16} duration={0.5}>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] tracking-tight mb-8">
            Tooling &amp; Technical Skills
          </h2>
        </ScrollReveal>

        {/* 3 Groups in clean cards with subtle depth glare interaction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOL_GROUPS.map((group, idx) => (
            <DepthGlareCard
              key={idx}
              maxTilt={2.5}
              glareColor="rgba(213, 245, 198, 0.08)"
              className="p-5 space-y-3"
            >
              <h3 className="text-base font-display font-bold text-[var(--text-primary)] pb-2 border-b border-[var(--border-color)]">
                {group.category}
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-[var(--text-secondary)] font-sans">
                {group.tools.map((tool, tIdx) => (
                  <li key={tIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </DepthGlareCard>
          ))}
        </div>
      </div>
    </section>
  )
}
