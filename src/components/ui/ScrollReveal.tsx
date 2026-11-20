import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  distance?: number
  duration?: number
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  distance = 20,
  duration = 0.55,
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 }
      case 'down':
        return { y: -distance, x: 0 }
      case 'left':
        return { x: distance, y: 0 }
      case 'right':
        return { x: -distance, y: 0 }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal
