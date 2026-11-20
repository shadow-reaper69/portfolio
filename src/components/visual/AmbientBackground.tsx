import React, { useEffect, useState, useRef } from 'react'
import { NetworkCanvas } from './NetworkCanvas'

interface AmbientBackgroundProps {
  isDark?: boolean
}

export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ isDark = true }) => {
  const [canTrack] = useState(() => {
    if (typeof window === 'undefined') return false
    return !window.matchMedia('(hover: none)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const spotRef = useRef<HTMLDivElement>(null)
  const targetPos = useRef({ x: -1000, y: -1000 })
  const currentPos = useRef({ x: -1000, y: -1000 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    if (!canTrack) return

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY }
    }

    const animateSpotlight = () => {
      // Smooth lerp easing for ambient glide
      const dx = targetPos.current.x - currentPos.current.x
      const dy = targetPos.current.y - currentPos.current.y
      currentPos.current.x += dx * 0.08
      currentPos.current.y += dy * 0.08

      if (spotRef.current) {
        spotRef.current.style.transform = `translate3d(${currentPos.current.x - 350}px, ${currentPos.current.y - 350}px, 0)`
      }
      rafId.current = requestAnimationFrame(animateSpotlight)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    rafId.current = requestAnimationFrame(animateSpotlight)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId.current)
    }
  }, [canTrack])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* 1. Faint Cyber Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: isDark
            ? 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)'
            : 'linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Minimal Halftone / Stipple Dot Texture */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${isDark ? '#D5F5C6' : '#18251B'} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* 3. Subtle Particle Network (Slow, Smooth Movement) */}
      <div className="absolute inset-0 opacity-40 dark:opacity-55 pointer-events-none">
        <NetworkCanvas maxDistance={140} />
      </div>

      {/* 4. Ambient Cursor Spotlight (Soft Milk-Green Glow) */}
      {canTrack && (
        <div
          ref={spotRef}
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none transition-opacity duration-500 will-change-transform"
          style={{
            background: isDark
              ? 'radial-gradient(circle at center, rgba(213, 245, 198, 0.05) 0%, transparent 70%)'
              : 'radial-gradient(circle at center, rgba(34, 197, 94, 0.04) 0%, transparent 70%)'
          }}
        />
      )}
    </div>
  )
}

export default AmbientBackground
