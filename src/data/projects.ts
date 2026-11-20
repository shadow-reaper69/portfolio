export interface Project {
  id: string;
  title: string;
  metadata: string;
  summary: string;
  problemOrObjective: string;
  approach: string[];
  whatILearned: string[];
  technologies: string[];
  output?: string;
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
      'A defensive Wi-Fi deauthentication-frame detection project designed to identify unusually high bursts of deauthentication traffic and alert the user.',
    problemOrObjective:
      'Identify potential wireless denial-of-service attempts by detecting abnormal spikes in 802.11 management deauthentication frame activity.',
    approach: [
      'Captures live Wi-Fi frame activity on local wireless channels.',
      'Monitors the frequency and volume of 802.11 deauthentication frames.',
      'Based on personal observations, ordinary Wi-Fi activity typically involved approximately 1–10 deauthentication frames, while active deauthentication bursts generated approximately 100–200 frames.',
      'Uses this observed baseline difference to flag suspicious behaviour and issue a real-time detection alert.'
    ],
    whatILearned: [
      '802.11 management frame architecture and deauthentication mechanics.',
      'Raw packet monitoring and frame parsing in C.',
      'Establishing empirical threshold observations without over-claiming statistical certainty.',
      'Defensive signal-to-noise separation in local wireless environments.'
    ],
    technologies: ['C', '802.11 Frame Analysis', 'Packet Monitoring', 'Defensive Security'],
    output: 'Detection alert when suspicious frame activity is identified.',
    repoStatus: 'not-available',
    statusNote: 'Repository not publicly available'
  },
  {
    id: 'esp32-c5-firmware',
    title: 'ESP32-C5 Firmware Modification',
    metadata: 'Embedded Systems · Reverse Engineering · ESP32-C5',
    summary:
      'Modified an open-source Wi-Fi security tool to extend its network-handling capability for use across more than one network on an ESP32-C5 Super Mini.',
    problemOrObjective:
      'The original open-source firmware was architected to handle only a single network workflow, limiting testing across multi-network environments.',
    approach: [
      'Analyzed and traced how the existing codebase managed internal network state and memory allocation.',
      'After several unsuccessful attempts, identified and extended the network-state handling implementation.',
      'Debugged embedded runtime behavior and fixed build configuration issues across multiple iterations.',
      'Testing was strictly limited to an isolated test network that I own.'
    ],
    whatILearned: [
      'Reading and understanding unfamiliar embedded C firmware codebases.',
      'Tracing and modifying multi-network state machines.',
      'ESP-IDF embedded build systems and compilation workflows.',
      'FreeRTOS task synchronization and debugging.',
      'Diagnosing embedded memory constraints and runtime crashes.'
    ],
    technologies: ['C', 'ESP-IDF', 'FreeRTOS', 'ESP32-C5 Super Mini', 'Reverse Engineering'],
    repoStatus: 'none',
    statusNote: 'Testing conducted on privately owned test network'
  },
  {
    id: 'python-recon-automation',
    title: 'Python Recon Automation',
    metadata: 'Python · Security Reconnaissance · VAPT',
    summary:
      'A personal Python reconnaissance automation project that brings together commonly used security tools to streamline authorized attack-surface discovery and initial assessment workflows.',
    problemOrObjective:
      'Reduce repetitive manual command execution during initial security assessments by orchestrating multiple reconnaissance tools into a unified pipeline.',
    approach: [
      'Subfinder integration for passive and active subdomain enumeration.',
      'httpx integration for probing live HTTP services, title extraction, and status validation.',
      'Nmap orchestration for targeted network port and service scanning.',
      'Nuclei integration for template-based initial vulnerability screening.',
      'Coordinated execution designed to save time during authorized reconnaissance.'
    ],
    whatILearned: [
      'Chaining command-line security utilities via structured Python subprocess wrappers.',
      'Parsing, standardizing, and deduplicating diverse JSON and text CLI outputs.',
      'Structuring modular automation for reproducible assessment workflows.',
      'Defensive considerations for avoiding noisy or uncoordinated assessment traffic.'
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
      'A digital credential verification prototype designed to improve certificate authenticity and integrity through document hashing, blockchain-based verification workflows, and decentralized storage.',
    problemOrObjective:
      'Prevent credential fraud and unauthorized certificate alteration by establishing a tamper-evident verification pipeline utilizing cryptographic hashes and decentralized storage.',
    approach: [
      'Calculates SHA-256 document hashes to establish an immutable fingerprint of certificate files.',
      'Supports QR-enabled PDF certificate generation for rapid public verification lookups.',
      'Includes certificate issue, verification, and revocation workflows through a Solidity smart-contract registry.',
      'Uses Supabase for application data storage and access management.',
      'Includes Pinata IPFS decentralized file storage in the documented architecture.',
      'Project documentation describes AI-assisted document anomaly analysis concepts.'
    ],
    whatILearned: [
      'Document integrity principles using SHA-256 cryptographic hashing.',
      'Smart-contract registry design and state verification in Solidity.',
      'End-to-end certificate issuance, verification, and revocation lifecycles.',
      'Decentralized file persistence using IPFS.',
      'Bridging frontend React interfaces with backend databases and blockchain contracts.'
    ],
    technologies: ['Next.js', 'TypeScript', 'Solidity', 'Supabase', 'Pinata IPFS', 'SHA-256'],
    repoUrl: 'https://github.com/shadow-reaper69/Trust-Chain-Beta',
    repoStatus: 'public'
  }
];
