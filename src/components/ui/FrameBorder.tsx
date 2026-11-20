import React, { useState } from 'react'
import './FrameBorder.css'

export interface FrameBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  glowColor?: string
  borderColor?: string
  borderWidth?: number
  borderRadius?: string
  speed?: number
  cornerAccents?: boolean
  interactive?: boolean
}

export const FrameBorder: React.FC<FrameBorderProps> = ({
  children,
  className = '',
  glowColor = 'rgba(213, 245, 198, 0.55)',
  borderColor = 'rgba(255, 255, 255, 0.08)',
  borderWidth = 1.5,
  borderRadius = '0.75rem',
  speed = 4,
  cornerAccents = true,
  interactive = true,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`frame-border-container relative group h-full ${className}`}
      style={{
        borderRadius,
        padding: `${borderWidth}px`,
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Animated Rotating Conic Glow Beam */}
      <div
        className="frame-border-beam absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{
          borderRadius,
          opacity: interactive ? (isHovered ? 1 : 0.4) : 0.75,
          transition: 'opacity 300ms ease'
        }}
      >
        <div
          className="frame-border-gradient"
          style={{
            animationDuration: `${speed}s`,
            background: `conic-gradient(from 0deg, transparent 0deg, ${glowColor} 60deg, transparent 120deg, transparent 180deg, ${glowColor} 240deg, transparent 300deg)`
          }}
        />
      </div>

      {/* Crisp Static Base Border */}
      <div
        className="absolute inset-0 pointer-events-none -z-20 border"
        style={{
          borderRadius,
          borderColor
        }}
      />

      {/* Crisp Cyber Corner Accents */}
      {cornerAccents && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <span className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t-2 border-l-2 border-[var(--accent)] rounded-tl-sm opacity-80" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t-2 border-r-2 border-[var(--accent)] rounded-tr-sm opacity-80" />
          <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b-2 border-l-2 border-[var(--accent)] rounded-bl-sm opacity-80" />
          <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b-2 border-r-2 border-[var(--accent)] rounded-br-sm opacity-80" />
        </div>
      )}

      {/* Inner Content Container */}
      <div
        className="frame-border-content relative z-10 w-full h-full bg-[var(--bg-surface)]/90 backdrop-blur-md overflow-hidden flex flex-col justify-between"
        style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default FrameBorder
