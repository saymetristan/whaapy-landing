'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Zap, Shield, Clock, TrendingUp, Users, MessageSquare } from 'lucide-react'

const bentoItems = [
  {
    icon: Zap,
    title: 'Respuesta <2s',
    description: 'IA responde instantáneamente, sin hacer esperar a tus clientes',
    size: 'large',
    gradient: 'from-accent/10 to-accent/5'
  },
  {
    icon: Shield,
    title: '100% Seguro',
    description: 'Datos encriptados end-to-end',
    size: 'small',
    gradient: 'from-blue-500/10 to-blue-500/5'
  },
  {
    icon: Clock,
    title: '24/7',
    description: 'Disponibilidad total',
    size: 'small',
    gradient: 'from-purple-500/10 to-purple-500/5'
  },
  {
    icon: TrendingUp,
    title: 'Ahorra $11,500 MXN/mes',
    description: 'Whaapy cuesta $500/mes vs. $12,000 de contratar un asistente',
    size: 'medium',
    gradient: 'from-orange-500/10 to-orange-500/5',
    stat: true
  },
  {
    icon: Users,
    title: 'Multi-usuario',
    description: 'Todo tu equipo colaborando en tiempo real',
    size: 'medium',
    gradient: 'from-pink-500/10 to-pink-500/5'
  },
  {
    icon: MessageSquare,
    title: '10k+ mensajes',
    description: 'Procesados diariamente sin esfuerzo',
    size: 'small',
    gradient: 'from-green-500/10 to-green-500/5'
  }
]

export default function BentoShowcase() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.bento-item')
          
          anime({
            targets: items,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 1000,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            delay: anime.stagger(100, { grid: [3, 2], from: 'center' })
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-4 md:px-6 bg-white overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,211,102,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(37,211,102,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Diseñado para <span className="gradient-text">escalar</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary leading-relaxed">
            Desde tu primer mensaje hasta millones de conversaciones
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
          {/* Large item - spans 2 columns */}
          <div className="bento-item opacity-0 md:col-span-2 glass-dark rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-border hover:border-accent/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mb-4 md:mb-6">
                <Zap size={28} className="md:w-8 md:h-8 text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">{bentoItems[0].title}</h3>
              <p className="text-base md:text-xl text-text-secondary">{bentoItems[0].description}</p>
            </div>
          </div>

          {/* Small items */}
          <div className="bento-item opacity-0 glass-dark rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-border hover:border-blue-500/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <Shield size={24} className="md:w-7 md:h-7 text-blue-600 mb-3 md:mb-4" strokeWidth={2} />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{bentoItems[1].title}</h3>
              <p className="text-sm md:text-base text-text-secondary">{bentoItems[1].description}</p>
            </div>
          </div>

          <div className="bento-item opacity-0 glass-dark rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-border hover:border-purple-500/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <Clock size={24} className="md:w-7 md:h-7 text-purple-600 mb-3 md:mb-4" strokeWidth={2} />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{bentoItems[2].title}</h3>
              <p className="text-sm md:text-base text-text-secondary">{bentoItems[2].description}</p>
            </div>
          </div>

          {/* ROI Card - destacada */}
          <div className="bento-item opacity-0 md:col-span-2 glass-dark rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-orange-500/20 hover:border-orange-500/40 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden bg-gradient-to-br from-orange-500/5 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 flex items-center justify-center mb-4 md:mb-6">
                <TrendingUp size={28} className="md:w-8 md:h-8 text-orange-600" strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-orange-600">{bentoItems[3].title}</h3>
              <p className="text-base md:text-lg lg:text-xl text-text-secondary leading-relaxed">{bentoItems[3].description}</p>
              <div className="mt-4 md:mt-6 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-orange-600">
                <span className="text-text-muted">ROI mensual promedio</span>
              </div>
            </div>
          </div>

          {/* Another medium item */}
          <div className="bento-item opacity-0 md:col-span-2 glass-dark rounded-2xl md:rounded-3xl p-6 md:p-10 border-2 border-border hover:border-pink-500/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <Users size={28} className="md:w-8 md:h-8 text-pink-600 mb-3 md:mb-4" strokeWidth={2} />
              <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-3">{bentoItems[4].title}</h3>
              <p className="text-base md:text-lg text-text-secondary">{bentoItems[4].description}</p>
            </div>
          </div>

          {/* Small item */}
          <div className="bento-item opacity-0 glass-dark rounded-2xl md:rounded-3xl p-6 md:p-8 border-2 border-border hover:border-green-500/30 shadow-premium hover:shadow-premium-lg transition-all duration-500 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-center">
              <MessageSquare size={24} className="md:w-7 md:h-7 text-green-600 mb-3 md:mb-4" strokeWidth={2} />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{bentoItems[5].title}</h3>
              <p className="text-sm md:text-base text-text-secondary">{bentoItems[5].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

