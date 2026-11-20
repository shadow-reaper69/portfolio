import { ThemeProvider } from './context/ThemeContext'
import { useTheme } from './context/useTheme'
import { FloatingNavbar } from './components/layout/FloatingNavbar'
import { Footer } from './components/layout/Footer'
import { GradientBars } from './components/ui/GradientBars'
import { LetterGlitch } from './components/ui/LetterGlitch'
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
      {/* Dual Blended Ambient Cyber Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Layer 1: Vertical Gradient Bars shifting in waves */}
        <GradientBars isDark={isDark} barWidth={28} gap={12} speed={0.0018} amplitude={130} />

        {/* Layer 2: Subtle, smooth Letter Glitch effect delicately blended with low opacity */}
        <div className="absolute inset-0 opacity-20 dark:opacity-25 pointer-events-none">
          <LetterGlitch
            glitchColors={isDark ? ['#ffffff', '#D5F5C6', '#8E9592'] : ['#1D4ED8', '#46505B', '#0F1419']}
            baseColor={isDark ? '#D5F5C6' : '#1D4ED8'}
            baseOpacity={0.02}
            glitchAmount={0.1}
            speed={0.4}
            flow={0.2}
            clickEffect="none"
            fontSize={13}
            spacing={0.65}
            density={0.7}
            smooth={true}
            edgeFade={0.45}
            centerFade={0.4}
            interactive={false}
            lightMode={!isDark}
            className="w-full h-full pointer-events-none"
          />
        </div>
      </div>

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
