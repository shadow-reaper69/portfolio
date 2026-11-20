import React, { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
}

interface NetworkCanvasProps {
  className?: string
  nodeCount?: number
  maxDistance?: number
}

export const NetworkCanvas: React.FC<NetworkCanvasProps> = ({
  className = 'w-full h-full',
  nodeCount,
  maxDistance = 135,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Accessibility check: reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animationFrameId: number
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    let cssWidth = canvas.parentElement?.clientWidth || window.innerWidth
    let cssHeight = canvas.parentElement?.clientHeight || window.innerHeight

    // Responsive node count: fewer nodes on mobile for maximum battery and FPS efficiency
    const effectiveNodeCount =
      nodeCount ?? (cssWidth < 768 ? 24 : cssWidth < 1200 ? 36 : 48)

    canvas.width = cssWidth * dpr
    canvas.height = cssHeight * dpr
    ctx.scale(dpr, dpr)

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 120,
    }

    const nodes: Node[] = []
    for (let i = 0; i < effectiveNodeCount; i++) {
      nodes.push({
        x: Math.random() * cssWidth,
        y: Math.random() * cssHeight,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
      })
    }

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return
      cssWidth = canvas.parentElement.clientWidth
      cssHeight = canvas.parentElement.clientHeight
      canvas.width = cssWidth * dpr
      canvas.height = cssHeight * dpr
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      }
    }

    const handleResetPointer = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handleResetPointer)

    const draw = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight)

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.2
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(213, 245, 198, ${alpha})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      // Draw nodes and update positions
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        // Mouse/touch interaction
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius
          node.x -= (dx / dist) * force * 1.5
          node.y -= (dy / dist) * force * 1.5
        }

        if (!prefersReducedMotion) {
          node.x += node.vx
          node.y += node.vy

          // Bounce off boundaries smoothly
          if (node.x < 0 || node.x > cssWidth) node.vx *= -1
          if (node.y < 0 || node.y > cssHeight) node.vy *= -1
        }

        // Render point
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(213, 245, 198, ${node.baseAlpha})`
        ctx.fill()
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleResetPointer)
      cancelAnimationFrame(animationFrameId)
    }
  }, [nodeCount, maxDistance])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto ${className}`}
      aria-label="Interactive reconnaissance network node visualization"
    />
  )
}
