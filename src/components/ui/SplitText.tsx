import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  splitBy?: 'characters' | 'words'
  textAlign?: 'left' | 'center' | 'right'
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0.08,
  duration = 0.45,
  stagger = 0.025,
  splitBy = 'characters',
  textAlign = 'left'
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-block ${className}`} style={{ textAlign }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
          {splitBy === 'characters'
            ? word.split('').map((char, charIndex) => {
                const globalIndex = words.slice(0, wordIndex).join('').length + charIndex
                return (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 18, filter: 'blur(3px)' }}
                    animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                    transition={{
                      duration,
                      delay: delay + globalIndex * stagger,
                      ease: [0.25, 1, 0.5, 1]
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                )
              })
            : (
                <motion.span
                  initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
                  animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
                  transition={{
                    duration,
                    delay: delay + wordIndex * stagger * 2.5,
                    ease: [0.25, 1, 0.5, 1]
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              )}
        </span>
      ))}
    </span>
  )
}

export default SplitText
