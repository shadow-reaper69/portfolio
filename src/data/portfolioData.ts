import type { PortfolioConfig } from '../types/portfolio'

export const portfolioData: PortfolioConfig = {
  personal: {
    name: 'MOHAMED AFRAZ ALI',
    headline: 'Security-focused developer & aspiring pentester',
    subheadline:
      'Second-year B.Tech CSE Cybersecurity student with a focus on web application security, network reconnaissance, and Linux.',
    bio: [
      "I am a second-year Cybersecurity engineering student interested in web application security, vulnerability assessment, and Linux systems.",
      "I spend most of my time working through practical labs on PortSwigger Web Security Academy and TryHackMe, practicing with Burp Suite, and writing Python and Bash scripts to automate testing workflows."
    ],
    availability: 'Open to Cybersecurity Internships & Projects',
    email: 'afrazali290@gmail.com',
    github: 'https://github.com/shadow-reaper69',
    linkedin: 'https://www.linkedin.com/in/afraz-ali-1085a1372/',
    resumeUrl: '/resume.pdf',
    location: 'India'
  },

  projects: [
    {
      id: 'trustchain',
      title: 'TrustChain',
      tagline: 'Document Verification & Integrity Platform',
      badge: 'Live Platform',
      status: 'Live Platform',
      description:
        'A web platform built to verify certificates and documents using cryptographic hashing and image comparison to prevent credential tampering.',
      technicalPoints: [
        'Web interface with real-time certificate lookup and hash validation.',
        'Verifies file hashes against stored records to confirm document authenticity.',
        'Minimal dark interface with fast page loads and clear status feedback.'
      ],
      tags: ['Cryptography', 'Document Verification', 'Next.js', 'TypeScript', 'Web Security'],
      liveUrl: 'https://trustchain-v2.vercel.app/',
      githubUrl: 'https://github.com/shadow-reaper69'
    },
    {
      id: 'sentinelx',
      title: 'SentinelX',
      tagline: 'Rate-Limiting & Path-Tracing Gateway',
      badge: 'Security Gateway',
      status: 'Security Gateway',
      description:
        'A gateway component designed to rate-limit incoming API traffic and trace request paths to prevent endpoint abuse and brute-force attacks.',
      technicalPoints: [
        'Rate-limiting rules to protect login and sensitive endpoints from brute-force attempts.',
        'Path tracing to monitor endpoint access and spot anomalous request patterns.',
        'Low execution overhead for fast response times on application routes.'
      ],
      tags: ['API Security', 'Rate Limiting', 'Path Tracing', 'Threat Mitigation', 'Backend'],
      githubUrl: 'https://github.com/shadow-reaper69'
    },
    {
      id: 'recon-toolkit',
      title: 'Recon Automation Toolkit',
      tagline: 'Enumeration & Fingerprinting Scripts',
      badge: 'Automation Suite',
      status: 'Automation Suite',
      description:
        'A collection of Python and Bash scripts that automate the initial reconnaissance phase of web security assessments.',
      technicalPoints: [
        'Automates subdomain enumeration, DNS resolution, and live host filtering.',
        'Parses and cleans tool outputs into organized lists for manual review.',
        'Chains standard recon tools into simple, reproducible terminal workflows.'
      ],
      tags: ['Python', 'Bash', 'Reconnaissance', 'OSINT', 'Linux / Kali', 'Automation'],
      githubUrl: 'https://github.com/shadow-reaper69'
    }
  ],

  skillCategories: [
    {
      category: 'Web Security',
      iconName: 'Shield',
      description: 'Hands-on practice finding and understanding common web vulnerabilities.',
      skills: [
        { name: 'OWASP Top 10 Basics', level: 'Practicing', notes: 'SQLi, XSS, CSRF, IDOR, Broken Access Control' },
        { name: 'Burp Suite (Repeater & Intruder)', level: 'Practicing', notes: 'Request tampering, parameter fuzzing, header analysis' },
        { name: 'PortSwigger Web Security Labs', level: 'Practicing', notes: 'Apprentice and practitioner lab exercises' },
        { name: 'HTTP / HTTPS Fundamentals', level: 'Intermediate', notes: 'Headers, cookies, CORS, status codes, sessions' }
      ]
    },
    {
      category: 'Reconnaissance & Assessment',
      iconName: 'Scan',
      description: 'Systematic information gathering, asset discovery, and target mapping.',
      skills: [
        { name: 'Subdomain Enumeration', level: 'Practicing', notes: 'Passive discovery and active brute-forcing' },
        { name: 'Port Scanning & Fingerprinting', level: 'Practicing', notes: 'Nmap service scans, banner grabbing, NSE scripts' },
        { name: 'Directory & Parameter Fuzzing', level: 'Practicing', notes: 'Endpoint discovery using ffuf and Gobuster' },
        { name: 'Attack Surface Mapping', level: 'Foundational', notes: 'Identifying exposed entry points and misconfigurations' }
      ]
    },
    {
      category: 'Systems & Tooling',
      iconName: 'Terminal',
      description: 'Operating systems, terminal environments, and core tools.',
      skills: [
        { name: 'Linux / Kali Linux', level: 'Intermediate', notes: 'Daily driver for labs, command-line tools, file permissions' },
        { name: 'Bash Scripting', level: 'Practicing', notes: 'Workflow automation, pipe chaining, text processing (grep, sed, awk)' },
        { name: 'Networking Fundamentals', level: 'Intermediate', notes: 'TCP/IP 3-way handshake, DNS records, Subnets, OSI layers' },
        { name: 'Git & GitHub', level: 'Intermediate', notes: 'Branching, commit workflows, repository maintenance' }
      ]
    },
    {
      category: 'Programming & Scripting',
      iconName: 'Cpu',
      description: 'Software development foundation and scripting.',
      skills: [
        { name: 'Python for Security', level: 'Practicing', notes: 'Custom automation scripts, HTTP requests, text parsing' },
        { name: 'Frontend (React / TypeScript)', level: 'Practicing', notes: 'Building clean, functional web user interfaces' },
        { name: 'Security Scripting & Automation', level: 'Intermediate', notes: 'Building helper scripts for reconnaissance and testing' },
        { name: 'Basic Security Code Review', level: 'Foundational', notes: 'Checking source code for unvalidated inputs and logical flaws' }
      ]
    }
  ],

  journey: [
    {
      phase: 'COMPLETED',
      period: 'Foundation Phase',
      title: 'Systems & Core Networking',
      items: [
        'Built solid computer science foundations in 1st & 2nd year B.Tech courses.',
        'Configured dedicated Kali Linux environment and learned Linux command line workflows.',
        'Studied TCP/IP stack, packet flow, DNS resolution, and HTTP request mechanics.',
        'Completed beginner TryHackMe rooms and basic network challenges.',
        'Wrote helper scripts in Python and Bash for daily terminal tasks.'
      ]
    },
    {
      phase: 'CURRENTLY LEARNING',
      period: 'Active Practice',
      title: 'Web Application Security & Hands-on Labs',
      items: [
        'Practicing PortSwigger Web Security Academy practitioner-level labs.',
        'Deepening hands-on practice with Burp Suite (Repeater, Intruder, Match/Replace rules).',
        'Testing API security endpoints, authentication flows, and rate limits.',
        'Refining custom Recon Automation scripts to speed up enumeration.',
        'Preparing for practical certifications through structured lab practice.'
      ]
    },
    {
      phase: 'NEXT TARGET',
      period: 'Upcoming Horizon',
      title: 'Practical Certifications & Real Engagements',
      items: [
        'Complete C3SA (Certified Cybersecurity Specialist & Associate) from CyberWarFare Labs.',
        'Target hands-on penetration testing certifications (eJPT / CRTP roadmaps).',
        'Participate in responsible vulnerability disclosure programs and bug bounties.',
        'Contribute to open-source security scripts and utilities.',
        'Secure a cybersecurity internship in application security or vulnerability assessment.'
      ]
    }
  ],

  certifications: [
    {
      id: 'c3sa',
      title: 'C3SA — Certified Cybersecurity Specialist & Associate',
      issuer: 'CyberWarFare Labs',
      status: 'In Progress / Candidate',
      details:
        'Hands-on certification curriculum focused on foundational cyber defense, vulnerability identification, and threat analysis in simulated lab environments.',
      topics: [
        'Threat Landscape & Attack Vectors',
        'Vulnerability Assessment Methodology',
        'Network Reconnaissance & Analysis',
        'Practical Security Hardening'
      ]
    }
  ],

  hackathons: [
    {
      id: 'hackathon-1',
      eventName: 'System Siege / Collegiate Security Challenge',
      date: 'Recent Engagement',
      role: 'Security & Full-Stack Contributor',
      projectName: 'Security Defense / Verification Prototype',
      summary:
        'Collaborative hackathon solving security and software challenges within limited timeframes.',
      highlights: [
        'Built defensive features focusing on input sanitization and access validation.',
        'Collaborated on real-time problem solving with team members.',
        'Applied security-by-design principles during rapid prototyping.'
      ],
      tags: ['Hackathon', 'Security by Design', 'Rapid Prototyping', 'Teamwork']
    }
  ],

  interests: [
    'Web Application Penetration Testing',
    'Bug Bounty Hunting & Responsible Disclosure',
    'Reconnaissance & OSINT Methodology',
    'API Security Testing & Defense',
    'Vulnerability Research & Analysis',
    'Security Tool Development'
  ],

  futureGoals: [
    'Become a capable, methodical penetration tester.',
    'Build and maintain open-source reconnaissance and defensive tools.',
    'Report verified vulnerabilities responsibly through bug bounty programs.',
    'Deepen practical expertise in web and cloud security.',
    'Secure an internship with an application security or penetration testing team.'
  ]
}
