'use client'

import { useRef, useState } from 'react'
import anime from 'animejs'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  strength?: number
}

export default function MagneticButton({ 
  children, 
  className = '', 
  onClick,
  strength = 20 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !isHovered) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const moveX = (x / rect.width) * strength
    const moveY = (y / rect.height) * strength

    anime({
      targets: buttonRef.current,
      translateX: moveX,
      translateY: moveY,
      duration: 300,
      easing: 'easeOutQuad'
    })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        scale: 1.05,
        duration: 300,
        easing: 'easeOutQuad'
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (buttonRef.current) {
      anime({
        targets: buttonRef.current,
        translateX: 0,
        translateY: 0,
        scale: 1,
        duration: 600,
        easing: 'easeOutElastic(1, .5)'
      })
    }
  }

  return (
    <button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}

