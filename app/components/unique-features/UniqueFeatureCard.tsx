'use client'

import { LucideIcon } from 'lucide-react'

interface UniqueFeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  badge: string
  index: number
}

export default function UniqueFeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  badge,
  index 
}: UniqueFeatureCardProps) {
  return (
    <div 
      className="unique-feature-card opacity-0 group relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Badge */}
      <div className="absolute top-6 right-6">
        <span className="badge-unique">{badge}</span>
      </div>

      {/* Icon */}
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
        <Icon size={40} className="text-accent" strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-lg text-text-secondary leading-relaxed">
        {description}
      </p>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  )
}

