'use client'

import { useRef } from 'react'
import anime from 'animejs'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  feature: {
    icon: LucideIcon
    title: string
    description: string
  }
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { icon: Icon, title, description } = feature

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * 3 // Más sutil: Max 3deg
    const rotateY = ((x - centerX) / centerX) * -3
    
    anime({
      targets: cardRef.current,
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 400,
      easing: 'easeOutQuad'
    })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return

    anime({
      targets: cardRef.current,
      rotateX: 0,
      rotateY: 0,
      duration: 400,
      easing: 'easeOutQuad'
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="feature-card feature-card-3d opacity-0 bg-white rounded-3xl p-10 border-2 border-border hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden group"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon - más grande y prominente */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
          <Icon className="text-accent" size={32} strokeWidth={2} />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 text-text-primary">{title}</h3>
        <p className="text-text-secondary leading-relaxed text-lg">{description}</p>
      </div>
    </div>
  )
}
