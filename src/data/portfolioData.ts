export interface PersonalInfo {
  name: string;
  headline: string;
  subheadline: string;
  positioning: string;
  degree: string;
  year: string;
  college: string;
  location: string;
  internshipAvailability: string;
  careerFocus: string[];
  bio: string[];
  email: string;
  github: string;
  linkedin: string;
  tryHackMe: string;
  resumeUrl: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: 'Completed';
  placeholderNote: string;
  details: string;
  topics: string[];
}

export interface SkillItem {
  name: string;
  level: 'Foundational' | 'Practicing' | 'Intermediate';
  notes?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  certifications: Certification[];
  skillCategories: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Mohamed Afraz Ali',
    headline: 'Security-focused developer | Aspiring Web Application Pentester',
    subheadline:
      'Second-year B.Tech Cybersecurity student at Hindustan Institute of Technology & Science, Chennai. Focused on web application security, vulnerability assessment, and reconnaissance.',
    positioning: 'Security-focused developer | Aspiring Web Application Pentester',
    degree: 'B.Tech CSE — Cybersecurity',
    year: 'Second year',
    college: 'Hindustan Institute of Technology & Science',
    location: 'Chennai, Tamil Nadu',
    internshipAvailability: 'Summer 2027',
    careerFocus: [
      'Web Application Security',
      'VAPT',
      'Reconnaissance',
      'Security Research'
    ],
    bio: [
      'I’m a second-year B.Tech Cybersecurity student at Hindustan Institute of Technology & Science, focused on web application security, vulnerability assessment and reconnaissance.',
      'I learn by doing: PortSwigger Web Security Academy labs on access control, SSRF, CSRF and API testing, TryHackMe rooms, and tools I build myself, including a Python recon workflow and a defensive Wi-Fi deauthentication detector.',
      'I’m looking for a Summer 2027 internship where I can work on real application security and learn from experienced engineers.'
    ],
    email: 'afrazali290@gmail.com',
    github: 'https://github.com/shadow-reaper69/',
    linkedin: 'https://www.linkedin.com/in/afraz-ali-1085a1372/',
    tryHackMe: 'https://tryhackme.com/p/afrazali290',
    resumeUrl: '/resume.pdf'
  },
  certifications: [
    {
      id: 'c3sa',
      title: 'Certified Cyber Security Specialist & Associate (C3SA)',
      issuer: 'CyberWarFare Labs',
      status: 'Completed',
      placeholderNote: 'Certificate URL to be linked',
      details:
        'Hands-on technical curriculum covering baseline offensive and defensive security operations, threat analysis, and practical security fundamentals.',
      topics: [
        'Offensive Security Fundamentals',
        'Vulnerability Assessment Methodology',
        'Network Reconnaissance & Traffic Analysis',
        'Host & Endpoint Security Defense'
      ]
    }
  ],
  skillCategories: [
    {
      category: 'Web Application Security',
      iconName: 'Shield',
      description: 'Hands-on practice auditing, testing, and mitigating web vulnerabilities.',
      skills: [
        { name: 'OWASP Top 10 Practice', level: 'Practicing', notes: 'Access Control, SSRF, CSRF, SQLi, and logic flaws' },
        { name: 'Burp Suite Pro / Community', level: 'Practicing', notes: 'Repeater, Intruder, parameter fuzzing, request interception' },
        { name: 'PortSwigger Web Security Labs', level: 'Practicing', notes: '15 practical labs completed across API, SSRF, CSRF & Access Control' },
        { name: 'HTTP / HTTPS Internals', level: 'Intermediate', notes: 'Methods, headers, status codes, sessions, CORS, and cookie flags' }
      ]
    },
    {
      category: 'Reconnaissance & Assessment',
      iconName: 'Scan',
      description: 'Systematic attack surface discovery, network scanning, and asset enumeration.',
      skills: [
        { name: 'Subdomain Discovery', level: 'Practicing', notes: 'Subfinder, passive OSINT sources, DNS resolution' },
        { name: 'Port & Service Scanning', level: 'Practicing', notes: 'Nmap service discovery, banner grabbing, NSE scripting' },
        { name: 'Web Service Probing & Fuzzing', level: 'Practicing', notes: 'httpx active validation, ffuf endpoint fuzzing' },
        { name: 'Vulnerability Template Scanning', level: 'Foundational', notes: 'Nuclei targeted template-based checks' }
      ]
    },
    {
      category: 'Systems & Tooling',
      iconName: 'Terminal',
      description: 'Operating systems, terminal workflows, and networking diagnostics.',
      skills: [
        { name: 'Linux / Kali Linux Administration', level: 'Intermediate', notes: 'Terminal-first workflow, system management, permissions' },
        { name: 'Network Protocol Diagnostics', level: 'Intermediate', notes: 'TCP/IP fundamentals, DNS records, Wireshark packet capture' },
        { name: 'Git & Version Control', level: 'Intermediate', notes: 'Branching, repository maintenance, collaborative workflows' },
        { name: 'Embedded Firmware Debugging', level: 'Foundational', notes: 'ESP-IDF, FreeRTOS tracing on ESP32-C5 hardware' }
      ]
    },
    {
      category: 'Programming & Scripting',
      iconName: 'Cpu',
      description: 'Languages used for security automation, tooling prototypes, and development.',
      skills: [
        { name: 'Python', level: 'Intermediate', notes: 'Recon tooling orchestration, subprocess chaining, text parsing' },
        { name: 'C', level: 'Foundational', notes: '802.11 frame detection (Cryo WiFi), embedded ESP32-C5 firmware' },
        { name: 'Bash Scripting', level: 'Practicing', notes: 'CLI pipeline chaining, automation routines on Linux' },
        { name: 'TypeScript / React', level: 'Practicing', notes: 'Frontend development, secure web application prototyping' }
      ]
    }
  ]
};
