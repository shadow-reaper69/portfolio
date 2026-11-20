export interface PortSwiggerTopic {
  title: string;
  referenceUrl: string;
  description: string;
}

export interface TryHackMeRoom {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Info';
}

export interface WriteupsData {
  sectionTitle: string;
  intro: string;
  portSwigger: {
    totalLabsCompleted: number;
    rank: string;
    levelTitle: string;
    vulnerabilityProgress: string;
    apprenticeLabs: string;
    practitionerLabs: string;
    expertLabs: string;
    screenshotUrl: string;
    profilePlaceholder: string;
    topics: PortSwiggerTopic[];
  };
  tryHackMe: {
    profileUrl: string;
    ranking: string;
    capabilityScore: number;
    annualEvents: number;
    highestStreak: number;
    enrolledPath: string;
    pathStatus: string;
    screenshotUrl: string;
    curatedRooms: TryHackMeRoom[];
  };
}

export const writeupsData: WriteupsData = {
  sectionTitle: 'Web Security Practice',
  intro:
    'I practise web application security through structured labs, hands-on testing, and technical learning. My current focus includes access control, request handling, server-side vulnerabilities, and API security.',
  portSwigger: {
    totalLabsCompleted: 15,
    rank: '# 267569',
    levelTitle: 'NEWBIE',
    vulnerabilityProgress: '5%',
    apprenticeLabs: '8 / 61',
    practitionerLabs: '6 / 173',
    expertLabs: '1 / 39',
    screenshotUrl: '/practice/portswigger-progress.png',
    profilePlaceholder: 'PortSwigger Profile URL to be linked',
    topics: [
      {
        title: 'API Testing',
        referenceUrl: 'https://portswigger.net/web-security/api-testing',
        description:
          'Analyzing API endpoint structures, HTTP verb tampering, hidden parameter identification, and REST endpoint authorization validation.'
      },
      {
        title: 'Server-Side Request Forgery (SSRF)',
        referenceUrl: 'https://portswigger.net/web-security/ssrf',
        description:
          'Practicing loopback redirection, bypasses for internal IP address filters, and testing backend service requests via vulnerable input vectors.'
      },
      {
        title: 'Cross-Site Request Forgery (CSRF)',
        referenceUrl: 'https://portswigger.net/web-security/csrf',
        description:
          'Testing session validation, flawed CSRF token validation mechanisms, and SameSite cookie attribute protections across state-changing actions.'
      },
      {
        title: 'Access Control',
        referenceUrl: 'https://portswigger.net/web-security/access-control',
        description:
          'Identifying vertical privilege escalation, horizontal IDOR vulnerabilities, and broken access controls on sensitive administrative workflows.'
      }
    ]
  },
  tryHackMe: {
    profileUrl: 'https://tryhackme.com/p/afrazali290',
    ranking: 'Top 25%',
    capabilityScore: 38,
    annualEvents: 226,
    highestStreak: 2,
    enrolledPath: 'Web Application Red Teaming',
    pathStatus: 'In progress',
    screenshotUrl: '/practice/tryhackme-profile.jpg',
    curatedRooms: [
      { name: 'Wgel CTF', difficulty: 'Easy' },
      { name: 'Brooklyn Nine Nine', difficulty: 'Easy' },
      { name: 'Bounty Hacker', difficulty: 'Easy' },
      { name: 'Corridor', difficulty: 'Easy' },
      { name: 'Neighbour', difficulty: 'Easy' },
      { name: 'XSS', difficulty: 'Easy' },
      { name: 'Custom Tooling Using Python', difficulty: 'Easy' }
    ]
  }
};
