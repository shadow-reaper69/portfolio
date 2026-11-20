import React from 'react'
import { Globe, Search, Terminal, Code2 } from 'lucide-react'

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Web Application Security',
    icon: <Globe className="w-5 h-5 text-[#1D4ED8]" />,
    description: 'Vulnerability assessment, request tampering, and web security lab testing.',
    skills: [
      'Burp Suite (Proxy, Repeater, Intruder)',
      'PortSwigger Web Security Labs',
      'Broken Access Control & IDOR',
      'SSRF & CSRF Verification',
      'API Security Testing & Parameter Tampering',
      'OWASP Top 10 Methodologies'
    ]
  },
  {
    title: 'Reconnaissance & Assessment',
    icon: <Search className="w-5 h-5 text-[#1D4ED8]" />,
    description: 'Target reconnaissance, asset enumeration, and automated probing.',
    skills: [
      'Subfinder (Subdomain Discovery)',
      'httpx (HTTP Service Probing)',
      'Nmap (Network & Service Scanning)',
      'Nuclei (Template-based Vulnerability Screening)',
      'ffuf (Fuzzing & Directory Enumeration)',
      'Attack Surface Discovery'
    ]
  },
  {
    title: 'Systems & Security Tooling',
    icon: <Terminal className="w-5 h-5 text-[#1D4ED8]" />,
    description: 'Operating systems, network frame monitoring, and security workflow environments.',
    skills: [
      'Linux / Kali Linux Workflows',
      'Bash Scripting & Command Chaining',
      '802.11 Wi-Fi Frame Monitoring',
      'ESP-IDF & FreeRTOS Debugging',
      'Git & Version Control'
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: <Code2 className="w-5 h-5 text-[#1D4ED8]" />,
    description: 'Languages used for security automation, embedded debugging, and development.',
    skills: [
      'Python (CLI Tooling & Subprocess Automation)',
      'C (Embedded Systems & Packet Parsing)',
      'TypeScript / JavaScript',
      'Solidity (Smart Contract Verification Basics)',
      'HTML / CSS / React'
    ]
  }
]

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-[#D5DADF] bg-[#F3F4F5]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-[#1D4ED8] font-sans text-xs uppercase tracking-wider font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
            <span>02 / Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F1419] tracking-tight">
            Security &amp; Engineering Tooling
          </h2>
          <p className="text-sm sm:text-base text-[#46505B] mt-2 max-w-2xl font-sans">
            Technical competencies applied across web penetration testing labs, network reconnaissance, and defensive tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[#D5DADF] bg-[#FFFFFF] shadow-2xs hover:border-[#1D4ED8]/40 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-start gap-3.5 pb-4 mb-4 border-b border-[#D5DADF]">
                <div className="w-10 h-10 rounded-xl bg-[#F3F4F5] border border-[#D5DADF] flex items-center justify-center shrink-0">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-[#0F1419]">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#46505B] mt-0.5 font-sans">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <ul className="space-y-2 font-sans text-xs sm:text-sm text-[#46505B]">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] shrink-0" />
                    <span>{skill}</span>
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
