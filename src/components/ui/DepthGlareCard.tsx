import React, { useRef, useState } from 'react'

export interface DepthGlareCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  glareColor?: string
}

export const DepthGlareCard: React.FC<DepthGlareCardProps> = ({
  children,
  className = '',
  maxTilt = 4,
  glareColor = 'rgba(213, 245, 198, 0.12)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 50, y: 50 })
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [canHover] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(hover: none)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const tiltX = (y - 0.5) * -maxTilt
    const tiltY = (x - 0.5) * maxTilt

    setCoords({ x: x * 100, y: y * 100 })
    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseEnter = () => {
    if (canHover) setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d'
      }}
      className="relative h-full"
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.01, 1.01, 1)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          transition: isHovered
            ? 'transform 100ms ease-out'
            : 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)'
        }}
        className={`relative h-full overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)]/85 backdrop-blur-md transition-colors duration-300 hover:border-[var(--accent)] shadow-sm ${className}`}
        {...props}
      >
        {/* Soft Milk-Green Glare Sweep */}
        {canHover && (
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(450px circle at ${coords.x}% ${coords.y}%, ${glareColor}, transparent 65%)`
            }}
          />
        )}

        <div className="relative z-10 h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </div>
  )
}

export default DepthGlareCard
