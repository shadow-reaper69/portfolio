export interface ProjectItem {
  id: string
  title: string
  tagline: string
  badge: string
  description: string
  technicalPoints: string[]
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  status: 'Live Platform' | 'Security Gateway' | 'Automation Suite'
}

export interface SkillCategory {
  category: string
  iconName: string
  description: string
  skills: {
    name: string
    level: 'Foundational' | 'Practicing' | 'Intermediate'
    notes?: string
  }[]
}

export interface JourneyMilestone {
  phase: 'COMPLETED' | 'CURRENTLY LEARNING' | 'NEXT TARGET'
  period?: string
  title: string
  items: string[]
}

export interface CertificationItem {
  id: string
  title: string
  issuer: string
  status: 'In Progress / Candidate' | 'Completed'
  details: string
  topics: string[]
  credentialUrl?: string
}

export interface HackathonItem {
  id: string
  eventName: string
  date: string
  role: string
  projectName: string
  summary: string
  highlights: string[]
  tags: string[]
}

export interface PortfolioConfig {
  personal: {
    name: string
    headline: string
    subheadline: string
    bio: string[]
    availability: string
    email: string
    github: string
    linkedin: string
    resumeUrl: string
    location: string
  }
  projects: ProjectItem[]
  skillCategories: SkillCategory[]
  journey: JourneyMilestone[]
  certifications: CertificationItem[]
  hackathons: HackathonItem[]
  interests: string[]
  futureGoals: string[]
}
