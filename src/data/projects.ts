export interface Project {
  id: string;
  title: string;
  metadata: string;
  summary: string;
  bullets: string[];
  technologies: string[];
  repoUrl?: string;
  repoStatus?: 'public' | 'not-available' | 'none';
  statusNote?: string;
}

export const projectsData: Project[] = [
  {
    id: 'cryo-wifi',
    title: 'Cryo WiFi',
    metadata: 'C · Defensive Security · Wi-Fi Monitoring',
    summary:
      'A defensive Wi-Fi monitoring tool in C designed to identify abnormal bursts of 802.11 deauthentication frames.',
    bullets: [
      'Built a real-time frame parser in C to detect spikes in 802.11 management deauthentication traffic.',
      'Observed empirical traffic differences: typical baseline (1–10 frames) versus active burst events (100–200 frames).',
      'Learned 802.11 frame architecture, raw socket packet parsing, and defensive alerting logic.'
    ],
    technologies: ['C', '802.11 Frame Analysis', 'Packet Monitoring', 'Defensive Security'],
    repoStatus: 'not-available',
    statusNote: 'Repository not publicly available'
  },
  {
    id: 'esp32-c5-firmware',
    title: 'ESP32-C5 Firmware Modification',
    metadata: 'Embedded Systems · Reverse Engineering · ESP32-C5',
    summary:
      'Modified open-source Wi-Fi security firmware to extend network-handling workflows on an ESP32-C5 Super Mini.',
    bullets: [
      'Traced and modified network-state handling to expand functionality across multiple wireless networks.',
      'Conducted debugging and runtime testing exclusively on an isolated, privately owned network.',
      'Learned ESP-IDF embedded development, FreeRTOS task debugging, and firmware state tracking.'
    ],
    technologies: ['C', 'ESP-IDF', 'FreeRTOS', 'ESP32-C5 Super Mini', 'Reverse Engineering'],
    repoStatus: 'none',
    statusNote: 'Tested on owned network'
  },
  {
    id: 'python-recon-automation',
    title: 'Python Recon Automation',
    metadata: 'Python · Security Reconnaissance · VAPT',
    summary:
      'A Python CLI orchestration prototype uniting reconnaissance tools into a unified assessment pipeline.',
    bullets: [
      'Automated target reconnaissance by chaining Subfinder, httpx, Nmap, and Nuclei into a coordinated workflow.',
      'Standardized and deduplicated multi-tool CLI outputs to streamline initial attack surface scoping.',
      'Learned subprocess coordination, defensive assessment timing, and structured output parsing in Python.'
    ],
    technologies: ['Python', 'Subfinder', 'httpx', 'Nmap', 'Nuclei', 'Bash', 'VAPT'],
    repoStatus: 'not-available',
    statusNote: 'Repository not publicly available'
  },
  {
    id: 'trust-chain',
    title: 'Trust Chain',
    metadata: 'Next.js · TypeScript · Solidity · Supabase · IPFS',
    summary:
      'A digital credential verification prototype leveraging SHA-256 document hashing and smart contracts.',
    bullets: [
      'Implemented SHA-256 file hashing and QR-enabled PDF certificate generation for tamper-evident verification.',
      'Designed smart-contract registry workflows in Solidity with Supabase metadata and IPFS architecture.',
      'Learned cryptographic document integrity, smart-contract registry design, and decentralized storage concepts.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Solidity', 'Supabase', 'Pinata IPFS', 'SHA-256'],
    repoUrl: 'https://github.com/shadow-reaper69/Trust-Chain-Beta',
    repoStatus: 'public'
  }
];
