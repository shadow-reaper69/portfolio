import React, { useEffect, useState, useCallback } from 'react'

interface DecryptedTextProps {
  text: string
  speed?: number
  maxIterations?: number
  className?: string
  revealOnScroll?: boolean
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;<>,.?/~'

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  speed = 40,
  maxIterations = 10,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)

  const triggerDecrypt = useCallback(() => {
    let iteration = 0
    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' '
            if (index < iteration) {
              return text[index]
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(interval)
      }

      iteration += 1 / (maxIterations / text.length)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, maxIterations])

  useEffect(() => {
    const cleanup = triggerDecrypt()
    return cleanup
  }, [triggerDecrypt])

  const handleMouseEnter = () => {
    if (!isHovered) {
      setIsHovered(true)
      triggerDecrypt()
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <span
      className={`font-mono inline-block cursor-default select-none ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title="Decrypted on inspect"
    >
      {displayText}
    </span>
  )
}
