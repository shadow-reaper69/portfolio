import type { PortfolioConfig } from '../types/portfolio'

export const portfolioData: PortfolioConfig = {
  personal: {
    name: 'MOHAMED AFRAZ ALI T A',
    headline: 'Security-focused developer & aspiring pentester',
    subheadline:
      'Second-year B.Tech CSE Cybersecurity undergraduate developing practical capability in web application security, reconnaissance workflows, vulnerability assessment, Linux, and AI-assisted tooling.',
    bio: [
      "I am a second-year Cybersecurity engineering student with a deep interest in understanding how systems break and how to defend them effectively. My approach is practical: rather than stopping at theory, I spend time in hands-on labs, CTF challenges, and building custom tooling.",
      "My development workflow bridges cybersecurity and software engineering. I utilize Linux daily, analyze network traffic and web protocol behaviors, and use AI-assisted tools to accelerate code auditing, script repetitive pentest tasks, and prototype security tools with speed and precision.",
      "I believe in technical honesty and continuous learning. I am steadily working through hands-on lab environments like PortSwigger Web Security Academy and TryHackMe, continually refining my skills in Burp Suite, reconnaissance automation, and defensive architecture."
    ],
    availability: 'Open to Cybersecurity Internships & Collaborative Projects',
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
      tagline: 'Universal Credential Verification & Document Integrity Platform',
      badge: 'Live Production',
      status: 'Live Platform',
      description:
        'Enterprise-grade document and credential verification architecture utilizing cryptographic logic and visual inspection workflows to prevent credential tampering and counterfeit certificates.',
      technicalPoints: [
        'Built with a high-performance minimalist interface featuring zero-latency document validation.',
        'Implements cryptographic integrity checks designed to guarantee non-repudiation.',
        'Engineered responsive dark-mode architecture with subtle micro-interactions and high-contrast accessibility.'
      ],
      tags: ['Cryptography', 'Document Verification', 'Next.js', 'TypeScript', 'Web Security'],
      liveUrl: 'https://trustchain-v2.vercel.app/',
      githubUrl: 'https://github.com/shadow-reaper69'
    },
    {
      id: 'sentinelx',
      title: 'SentinelX',
      tagline: 'Security-Focused Rate Limiting & Path-Tracing Gateway',
      badge: 'Security Gateway',
      status: 'Security Gateway',
      description:
        'A defensive gateway component designed to regulate inbound request velocities, mitigate automated scraping/brute-force attacks, and trace request path patterns across critical endpoints.',
      technicalPoints: [
        'Structured rate-limiting logic to protect authentication and high-frequency API routes from abuse.',
        'Granular path-tracing telemetry to map request journeys and identify anomalous traversal patterns.',
        'Designed with lightweight execution overhead for minimal latency impact on application backends.'
      ],
      tags: ['API Security', 'Rate Limiting', 'Path Tracing', 'Threat Mitigation', 'Backend'],
      githubUrl: 'https://github.com/shadow-reaper69'
    },
    {
      id: 'recon-toolkit',
      title: 'Recon Automation Toolkit',
      tagline: 'Automated Enumeration & Target Fingerprinting Pipeline',
      badge: 'Automation Suite',
      status: 'Automation Suite',
      description:
        'A collection of Python and Bash automation scripts crafted to accelerate the initial reconnaissance phase of web application assessments and security research.',
      technicalPoints: [
        'Chains subdomain discovery, DNS resolution, and active host filtering into single-command pipelines.',
        'Parses output into structured formats for accelerated attack surface mapping without manual repitition.',
        'Integrates standard reconnaissance utilities with custom sanity-checking and endpoint filtering.'
      ],
      tags: ['Python', 'Bash', 'Reconnaissance', 'OSINT', 'Linux / Kali', 'Automation'],
      githubUrl: 'https://github.com/shadow-reaper69'
    }
  ],

  skillCategories: [
    {
      category: 'Web Security',
      iconName: 'Shield',
      description: 'Hands-on practice identifying and understanding common web application vulnerabilities.',
      skills: [
        { name: 'OWASP Top 10 Fundamentals', level: 'Practicing', notes: 'SQLi, XSS, CSRF, IDOR, Broken Access Control' },
        { name: 'Burp Suite Intercept & Repeater', level: 'Practicing', notes: 'Request tampering, header manipulation, fuzzing' },
        { name: 'PortSwigger Web Security Labs', level: 'Practicing', notes: 'Apprentice & Practitioner-track exercises' },
        { name: 'HTTP/HTTPS Protocol Internals', level: 'Intermediate', notes: 'Headers, cookies, CORS, status codes, session lifecycles' }
      ]
    },
    {
      category: 'Reconnaissance & Assessment',
      iconName: 'Scan',
      description: 'Systematic information gathering, asset discovery, and target surface mapping.',
      skills: [
        { name: 'Subdomain Enumeration', level: 'Practicing', notes: 'Passive OSINT & active brute-force discovery' },
        { name: 'Port Scanning & Fingerprinting', level: 'Practicing', notes: 'Nmap service discovery, banner grabbing, NSE scripts' },
        { name: 'Directory & Parameter Fuzzing', level: 'Practicing', notes: 'Endpoint discovery using Gobuster & ffuf' },
        { name: 'Attack Surface Mapping', level: 'Foundational', notes: 'Identifying exposed entry points & forgotten subdomains' }
      ]
    },
    {
      category: 'Systems & Tooling',
      iconName: 'Terminal',
      description: 'Operating systems, command-line environments, and foundational security utilities.',
      skills: [
        { name: 'Linux / Kali Linux', level: 'Intermediate', notes: 'Primary security environment, process analysis, file permissions' },
        { name: 'Bash Scripting', level: 'Practicing', notes: 'Workflow automation, pipe chaining, text processing (grep, awk, sed)' },
        { name: 'Networking Fundamentals', level: 'Intermediate', notes: 'TCP/IP 3-way handshake, DNS resolution, Subnets, OSI layers' },
        { name: 'Git & Version Control', level: 'Intermediate', notes: 'Branching, repository maintenance, collaborative code workflows' }
      ]
    },
    {
      category: 'Programming & AI Tooling',
      iconName: 'Cpu',
      description: 'Software development foundation and modern AI-augmented engineering workflows.',
      skills: [
        { name: 'Python for Security', level: 'Practicing', notes: 'Custom automation scripts, HTTP requests handling, data parsing' },
        { name: 'Frontend Basics (React / TS)', level: 'Practicing', notes: 'Building functional, clean interfaces & dashboards' },
        { name: 'AI-Assisted Development', level: 'Intermediate', notes: 'Accelerating script creation, security code review, prototyping' },
        { name: 'Security Code Review Basics', level: 'Foundational', notes: 'Analyzing source code for unsanitized inputs & logical flaws' }
      ]
    }
  ],

  journey: [
    {
      phase: 'COMPLETED',
      period: 'Foundation Phase',
      title: 'Foundational Systems & Core Networking',
      items: [
        'Solidified core computer science fundamentals in 1st & 2nd year B.Tech coursework.',
        'Mastered Linux command line environment and configured dedicated Kali Linux workspace.',
        'Deep-dived into TCP/IP protocol stack, packet flow, DNS records, and HTTP request/response mechanics.',
        'Completed foundational TryHackMe beginner rooms and fundamental network security challenges.',
        'Authored Python and Bash helper scripts for repetitive CLI tasks.'
      ]
    },
    {
      phase: 'CURRENTLY LEARNING',
      period: 'Active Practice',
      title: 'Practical Web Security & Lab Methodology',
      items: [
        'Practicing PortSwigger Web Security Academy practitioner-level vulnerability labs.',
        'Deepening hands-on mastery of Burp Suite (Intruder, Repeater, Logger, and Match/Replace rules).',
        'Studying modern API security vulnerabilities, authentication bypasses, and rate-limiting testing.',
        'Refining custom Recon Automation Toolkit to reduce reconnaissance turnaround time.',
        'Preparing for practical cybersecurity certifications with structured lab challenges.'
      ]
    },
    {
      phase: 'NEXT TARGET',
      period: 'Upcoming Horizon',
      title: 'Specialized Certifications & Controlled Engagements',
      items: [
        'Complete C3SA (Certified Cybersecurity Specialist & Associate) from CyberWarFare Labs.',
        'Target hands-on practical penetration testing roadmaps (such as eJPT / CRTP).',
        'Participate in responsible vulnerability disclosure programs and bug bounties.',
        'Contribute to open-source security utilities and defensive toolkits.',
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
        'A comprehensive hands-on certification curriculum focused on foundational cyber defense, vulnerability identification, and threat analysis in simulated lab environments.',
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
        'Collaborative competitive environment developing fast, resilient security-oriented solutions under constrained time limits.',
      highlights: [
        'Engineered defensive features prioritizing input sanitization and resilient access gates.',
        'Collaborated on real-time problem solving with cross-functional team members.',
        'Applied rapid prototyping with security-by-design considerations.'
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
    'AI-Augmented Security Engineering',
    'Building Lightweight Security Utilities'
  ],

  futureGoals: [
    'Become a thoroughly capable, methodical penetration tester.',
    'Build and maintain open-source reconnaissance and defensive tools.',
    'Contribute responsibly to public bug bounty programs through high-signal reports.',
    'Deepen expertise in cloud security and modern microservices architecture.',
    'Secure an internship at a security consulting or application defense team.'
  ]
}
