import { FloatingNavbar } from './components/layout/FloatingNavbar'
import { Footer } from './components/layout/Footer'
import { DotGrid } from './components/ui/DotGrid'
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
      {/* Global Interactive DotGrid Background for all sections except About */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <DotGrid
          baseColor="#151b17"
          activeColor="#D5F5C6"
          shape="circle"
          dotSize={3.5}
          gap={22}
          proximity={130}
          strength={1.2}
          bounce={0.55}
          tension={0.35}
          returnDuration={0.8}
          shockRadius={300}
          shockStrength={4.5}
          swell={0.7}
          stretch={0.4}
          glow={0.5}
          fade={0.15}
          opacity={0.85}
          mouseInteraction={true}
          clickShock={true}
          className="w-full h-full"
        />
      </div>

      {/* Top Floating Glass Navigation */}
      <FloatingNavbar />

      {/* Main Single-Page Sections Flow */}
      <main className="relative z-10">
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
