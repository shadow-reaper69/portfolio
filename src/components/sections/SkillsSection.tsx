import React from 'react'

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
    <section id="skills" className="py-16 border-t border-white/10 bg-transparent">
      <div className="max-w-5xl mx-auto px-6">
        {/* Plain Section Heading */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#F5F5F5] tracking-tight mb-8">
          Tooling &amp; Technical Skills
        </h2>

        {/* 3 Groups in clean cards without icon-in-a-box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOOL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-white/10 bg-[#0E1010]/80 shadow-md space-y-3"
            >
              <h3 className="text-base font-display font-bold text-[#F5F5F5] pb-2 border-b border-white/10">
                {group.category}
              </h3>

              <ul className="space-y-2 text-xs sm:text-sm text-[#8E9592] font-sans">
                {group.tools.map((tool, tIdx) => (
                  <li key={tIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D5F5C6] shrink-0" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
