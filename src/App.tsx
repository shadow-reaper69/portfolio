import { FloatingNavbar } from './components/layout/FloatingNavbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { PracticeSection } from './components/sections/PracticeSection'

export function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F5] text-[#0F1419] flex flex-col selection:bg-[#1D4ED8]/15 selection:text-[#1D4ED8]">
      {/* Top Floating Glass Navigation */}
      <FloatingNavbar />

      {/* Main Single-Page Sections Flow */}
      <main className="flex-1 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <PracticeSection />
      </main>

      {/* Dark Footer with Exact Tokens */}
      <Footer />
    </div>
  )
}

export default App
