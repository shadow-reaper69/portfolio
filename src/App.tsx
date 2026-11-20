import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/useTheme'
import { FloatingNavbar } from './components/layout/FloatingNavbar'
import { Footer } from './components/layout/Footer'
import { GradientBars } from './components/ui/GradientBars'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { EducationSection } from './components/sections/EducationSection'
import { PracticeSection } from './components/sections/PracticeSection'

function AppContent() {
  const { isDark } = useTheme()

  return (
    <div className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] relative selection:bg-[var(--accent)]/20 selection:text-[var(--accent)] transition-colors duration-200">
      {/* Animated Gradient Bars (Vertical gradient bars shifting in waves) */}
      <GradientBars isDark={isDark} barWidth={28} gap={12} speed={0.0018} amplitude={130} />

      {/* Top Navigation Bar with Light/Dark Mode Switch */}
      <FloatingNavbar />

      {/* Main Sections Flow in Requested Order */}
      <main className="relative z-10 w-full">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <PracticeSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
