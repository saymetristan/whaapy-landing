'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function MorphingShape() {
  const shapeRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!shapeRef.current) return

    anime({
      targets: shapeRef.current,
      d: [
        { value: 'M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z' }, // Círculo
        { value: 'M0,0 L100,0 L100,100 L0,100 Z' }, // Cuadrado
        { value: 'M50,0 L93.3,25 L93.3,75 L50,100 L6.7,75 L6.7,25 Z' }, // Hexágono
        { value: 'M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z' } // Back to círculo
      ],
      easing: 'easeInOutQuad',
      duration: 8000,
      loop: true,
    })
  }, [])

  return (
    <svg 
      className="absolute top-[20%] right-[10%] pointer-events-none z-0" 
      viewBox="0 0 100 100" 
      style={{ width: '400px', height: '400px', opacity: 0.6 }}
    >
      <path 
        ref={shapeRef}
        d="M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z"
        fill="rgba(37, 211, 102, 0.06)"
      />
    </svg>
  )
}

