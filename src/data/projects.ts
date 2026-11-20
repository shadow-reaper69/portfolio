export type Project = { title: string; meta: string; summary: string; details: { label: string; value: string }[]; href?: string; linkTodo?: string }

export const projects: Project[] = [
  {
    title: 'Cryo WiFi',
    meta: 'Defensive · Wi-Fi · TODO: stack',
    summary: 'A detector for Wi-Fi deauthentication frames, built to spot someone knocking devices off a network.',
    details: [
      { label: 'Approach', value: 'TODO|How detection works and hardware used' },
      { label: 'What I learned', value: 'TODO|What I learned' },
    ],
    linkTodo: 'GitHub repository',
  },
  {
    title: 'ESP32-C5 firmware modification',
    meta: 'Reverse engineering · ESP32-C5 Super Mini',
    summary: 'I reverse-engineered an open-source Wi-Fi security tool so it could work across more than one network on my ESP32-C5 Super Mini. Tested only on a network I own.',
    details: [
      { label: 'Problem', value: 'The source I started from had no support for working across multiple networks.' },
      { label: 'Approach', value: 'After many failed attempts, I traced how the code handled its network state and extended it.' },
      { label: 'What I learned', value: 'TODO|What failed and how I diagnosed it' },
    ],
  },
  {
    title: 'Python recon script',
    meta: 'Python · Reconnaissance automation',
    summary: 'TODO|One sentence describing what it does, its inputs and its output',
    details: [
      { label: 'Why I built it', value: 'TODO|Why I built it' },
      { label: 'What I learned', value: 'TODO|What I learned' },
    ],
    linkTodo: 'GitHub repository',
  },
  {
    title: 'Trust Chain',
    meta: 'TODO: stack',
    summary: 'TODO|One-sentence project description',
    details: [
      { label: 'Approach', value: 'TODO|Approach' },
      { label: 'What I learned', value: 'TODO|What I learned' },
    ],
    linkTodo: 'GitHub repository',
  },
]
