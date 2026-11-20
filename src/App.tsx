import { FloatingNavbar } from './components/layout/FloatingNavbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { JourneySection } from './components/sections/JourneySection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { GoalsSection } from './components/sections/GoalsSection'
import { ContactSection } from './components/sections/ContactSection'

export function App() {
  return (
    <div className="min-h-screen bg-[#080909] text-[#F5F5F5] relative selection:bg-[#D5F5C6]/20 selection:text-[#D5F5C6]">
      {/* Top Floating Glass Navigation */}
      <FloatingNavbar />

      {/* Main Single-Page Sections Flow */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <CertificationsSection />
        <GoalsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
