export type Project = { title: string; meta: string; summary: string; details: { label: string; value: string }[]; href?: string; linkTodo?: string }

export const projects: Project[] = [
  {
    title: 'Cryo WiFi',
    meta: 'Defensive security · Wi-Fi monitoring',
    summary: 'A defensive Wi-Fi deauthentication-frame detector that monitors captured frame activity and raises an alert when it sees an unusually large burst of deauthentication traffic.',
    details: [
      { label: 'Detection approach', value: 'Compares observed frame volume: in my observations, ordinary Wi-Fi activity typically involved around 1–10 frames, while deauthentication activity produced bursts of roughly 100–200 frames.' },
      { label: 'Output', value: 'Captures the suspicious frame activity and displays an alert for the burst.' },
    ],
    linkTodo: 'GitHub repository',
  },
  {
    title: 'ESP32-C5 firmware modification',
    meta: 'Embedded systems · Reverse engineering · ESP-IDF',
    summary: 'I reverse-engineered an open-source Wi-Fi security tool to extend its network handling for use across more than one network on an ESP32-C5 Super Mini. Testing was limited to a network I own.',
    details: [
      { label: 'Problem', value: 'The original source did not support the multi-network workflow I needed.' },
      { label: 'Approach', value: 'Traced the firmware’s network-state handling and iteratively modified the code, working through build and runtime debugging on the ESP32-C5.' },
      { label: 'What I learned', value: 'Practised reading unfamiliar embedded code, tracing state across tasks, and debugging ESP-IDF/FreeRTOS firmware failures.' },
    ],
  },
  {
    title: 'Python recon automation',
    meta: 'Python · Attack-surface discovery',
    summary: 'A Python reconnaissance script that brings together Subfinder, httpx, Nmap, and Nuclei to support subdomain discovery, HTTP probing, network/service scanning, and vulnerability checks during authorized assessments.',
    details: [
      { label: 'Toolchain', value: 'Subfinder · httpx · Nmap · Nuclei' },
      { label: 'Purpose', value: 'Reduce repetitive recon work by coordinating commonly used discovery and assessment tools in one workflow.' },
    ],
    linkTodo: 'GitHub repository',
  },
  {
    title: 'Trust Chain',
    meta: 'Next.js · TypeScript · Solidity · Supabase · IPFS',
    summary: 'A digital credential verification prototype that issues QR-enabled PDF certificates, hashes documents with SHA-256, and supports certificate verification and revocation.',
    details: [
      { label: 'Approach', value: 'Uses a Solidity registry for certificate issue, verification, and revocation workflows, with Supabase-backed metadata and Pinata IPFS storage in the project architecture.' },
      { label: 'Additional work', value: 'The project documentation also describes QR-based certificate lookup and AI-assisted document anomaly analysis.' },
      { label: 'What I learned', value: 'Explored document integrity, smart-contract registry design, decentralized file storage, and end-to-end credential verification workflows.' },
    ],
    href: 'https://github.com/shadow-reaper69/Trust-Chain-Beta',
  },
]
