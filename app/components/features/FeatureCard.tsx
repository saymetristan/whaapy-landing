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
    
    const rotateX = ((y - centerY) / centerY) * 5 // Max 5deg
    const rotateY = ((x - centerX) / centerX) * -5
    
    anime({
      targets: cardRef.current,
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 500,
      easing: 'easeOutQuad'
    })
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return

    anime({
      targets: cardRef.current,
      rotateX: 0,
      rotateY: 0,
      duration: 500,
      easing: 'easeOutQuad'
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="feature-card feature-card-3d opacity-0 bg-surface-elevated rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-400 relative overflow-hidden group"
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude'
      }} />

      {/* Background glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-400" style={{
        background: 'radial-gradient(circle at center, var(--accent-light) 0%, transparent 70%)'
      }} />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="text-accent" size={24} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

