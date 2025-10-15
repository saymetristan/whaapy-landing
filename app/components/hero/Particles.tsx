'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

interface ParticlesProps {
  count: number
}

export default function Particles({ count }: ParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      container.appendChild(particle)
      
      anime({
        targets: particle,
        translateY: [0, anime.random(-100, -200)],
        translateX: [0, anime.random(-50, 50)],
        opacity: [0, 0.3, 0],
        scale: [0, 1, 0],
        duration: anime.random(3000, 6000),
        easing: 'easeInOutQuad',
        loop: true,
        delay: anime.random(0, 3000)
      })
    }

    return () => {
      container.innerHTML = ''
    }
  }, [count])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0" />
}

