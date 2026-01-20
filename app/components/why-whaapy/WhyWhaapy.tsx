'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Zap, Shield, Gamepad2, Link, Globe, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Se configura en minutos',
    description: 'Tú mismo lo haces en 10 minutos desde tu computadora. Nada de técnicos.'
  },
  {
    icon: Shield,
    title: 'Tu información está segura',
    description: 'Tus conversaciones y datos de clientes están protegidos con encriptación.'
  },
  {
    icon: Gamepad2,
    title: 'Tú siempre tienes el control',
    description: 'La IA no hace nada sin tu permiso. Tú decides cuándo responde ella y cuándo tú.'
  },
  {
    icon: Link,
    title: 'Se conecta con lo que ya usas',
    description: '¿Ya usas algún sistema? Whaapy se puede conectar. Nada de empezar de cero.'
  },
  {
    icon: Globe,
    title: 'Hecho para México',
    description: 'Soporte en español, horarios de México, entendemos cómo funciona tu negocio.'
  },
  {
    icon: Headphones,
    title: 'Gente real te ayuda',
    description: 'Nada de bots de soporte. Personas que entienden tu negocio.'
  }
]

export default function WhyWhaapy() {
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
          const items = entry.target.querySelectorAll('.why-item')
          
          anime({
            targets: items,
            translateX: [-20, 0],
            opacity: [0, 1],
            duration: 600,
            easing: 'easeOutQuad',
            delay: anime.stagger(80)
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-gradient-to-b from-surface to-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            No somos solo <span className="gradient-text">otro bot</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Somos tu equipo de ventas que nunca duerme
          </p>
        </div>

        {/* Compact list */}
        <div className="bg-white rounded-3xl border-2 border-border p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="why-item opacity-0 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary mb-1">{reason.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl border border-accent/20 p-8 md:p-12">
          <div className="grid grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
              <div className="text-xs md:text-sm text-text-muted mt-1">siempre disponible</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">10 min</div>
              <div className="text-xs md:text-sm text-text-muted mt-1">para configurar</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">&lt;2s</div>
              <div className="text-xs md:text-sm text-text-muted mt-1">tiempo respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
