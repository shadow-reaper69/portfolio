import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  splitBy?: 'words' | 'characters'
  direction?: 'top' | 'bottom'
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  className = '',
  delay = 0.15,
  duration = 0.55,
  stagger = 0.04,
  splitBy = 'words',
  direction = 'bottom'
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const items = splitBy === 'words' ? text.split(' ') : text.split('')
  const initialY = direction === 'bottom' ? 10 : -10

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {items.map((item, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: 'blur(8px)', y: initialY }}
          animate={isInView ? { opacity: 1, filter: 'blur(0px)', y: 0 } : {}}
          transition={{
            duration,
            delay: delay + index * stagger,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {item}
        </motion.span>
      ))}
    </span>
  )
}

export default BlurText
