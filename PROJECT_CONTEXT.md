# PROJECT CONTEXT — MOHAMED AFRAZ ALI T A PORTFOLIO

## 1. Project Overview & Identity
- **Owner**: Mohamed Afraz Ali T A
- **Current Position**: Second-Year B.Tech CSE Cybersecurity Undergraduate
- **Aspirational Role**: Penetration Tester, Security-Focused Developer, AI-Assisted Developer
- **Tone & Persona**: Technical, grounded, precise, honest (evidence over claims, lab-driven progress).

## 2. Design System & Design Tokens
- **Background Void**: `#080909` (Strict near-black, zero glare)
- **Surface Elevation 1**: `#0E1010` (Card container background)
- **Surface Elevation 2**: `#141716` / `#151817` (Interactive hover & elevated components)
- **Main Text**: `#F5F5F5` (High-contrast soft white)
- **Secondary Text**: `#8E9592` (Tactical slate gray)
- **Muted Text**: `#5A625E` (Timestamps, brackets, borders)
- **Accent**: Milk Green `#D5F5C6` (Signature status indicators, active tabs, buttons, focal points)
- **Border Subtle**: `rgba(255, 255, 255, 0.08)`
- **Border Accent**: `rgba(213, 245, 198, 0.28)`
- **Typography Scale**:
  - Headings / Display: `Space Grotesk`
  - Body: `Inter`
  - Code / Technical / Terminal: `JetBrains Mono`

## 3. Technical Stack
- **Framework**: React 19 + TypeScript + Vite 8 (Dev server on port `3000`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: `lucide-react` + inline SVGs for branded icons (`GithubIcon`, `LinkedinIcon`)
- **Animations**: Framer Motion (tactile spring physics on MagneticButton)
- **Graphics / Visuals**: Pure HTML5 2D Canvas (`NetworkCanvas`) with DPR retina scaling, touch interaction, and `prefers-reduced-motion` support
- **Favicon**: Bespoke SVG security shield with milk-green checkmark and obsidian background

## 4. Implementation Phase Status
| Phase | Title | Status | Scope & Deliverables |
| :--- | :--- | :--- | :--- |
| **Phase 1** | Foundation | **DONE** | Project inspection, Design tokens, Typography, Responsive layout primitives, Floating Navbar, Context file |
| **Phase 2** | Hero Section | **DONE** | Split typography, live status pill, interactive network canvas, interactive terminal with Tab-complete |
| **Phase 3** | About & Skills | **DONE** | Grounded student narrative, categorized skills matrix without fake percentages (Foundational, Practicing, Intermediate) |
| **Phase 4** | Projects | **DONE** | TrustChain (Live + GitHub), SentinelX, Recon Automation Toolkit with SpotlightCard and security highlights |
| **Phase 5** | Learning Journey | **DONE** | 3-tier timeline (Completed, Currently Learning, Next Target) covering PortSwigger, Burp Suite, Linux, CTFs |
| **Phase 6** | Certs & Hackathons | **DONE** | CyberWarFare Labs C3SA curriculum, Hackathon participation (System Siege / Collegiate Challenge) |
| **Phase 7** | Contact & Channels | **DONE** | Email copy with toast feedback, direct GitHub, LinkedIn, and Resume PDF download |
| **Phase 8** | Final Polish | **DONE** | A11y audit, keyboard navigation, custom security favicon, reduced-motion compliance, clean production build |

## 5. Directory & Component Structure
```
src/
├── App.tsx                     # Main layout & single-page section orchestration
├── index.css                   # Tailwind v4 import & custom token layer
├── main.tsx                    # React DOM root entry
├── types/
│   └── portfolio.ts            # Type definitions for all models
├── data/
│   └── portfolioData.ts        # Central single source of truth for text and links
├── lib/
│   └── utils.ts                # cn utility (clsx + twMerge)
└── components/
    ├── layout/
    │   ├── FloatingNavbar.tsx  # Sleek pill header with status badge and mobile drawer
    │   └── Footer.tsx          # Minimal footer with links & copy email
    ├── ui/
    │   ├── SpotlightCard.tsx   # React Bits mouse-following radial border glow
    │   ├── DecryptedText.tsx   # React Bits character scramble effect
    │   ├── MagneticButton.tsx  # React Bits spring-based cursor attraction
    │   └── Icons.tsx           # GitHub and LinkedIn SVG components
    ├── visual/
    │   └── NetworkCanvas.tsx   # Lightweight 2D canvas recon mesh with touch & DPR support
    ├── terminal/
    │   └── InteractiveTerminal.tsx # Simulated security terminal with Tab completion & command history
    └── sections/
        ├── HeroSection.tsx     # Typography hero + Terminal + Network canvas
        ├── AboutSection.tsx    # Cybersecurity journey & mindset
        ├── SkillsSection.tsx   # Honest categorized skills matrix
        ├── ProjectsSection.tsx # TrustChain, SentinelX, Recon Toolkit
        ├── JourneySection.tsx  # 3-tier progression roadmap
        ├── CertificationsSection.tsx # C3SA & Hackathons
        ├── GoalsSection.tsx    # Research vectors & 12-month targets
        └── ContactSection.tsx  # Direct communication & resume download
```

## 6. Strict Rules Maintained
1. Never invent fake credentials, statistics, or certifications.
2. Modular, small, reusable components.
3. No non-functional buttons or dead links.
4. Phase-by-phase execution with user approval gates.
5. High performance (pure static output, sub-second build times, zero tracking).
