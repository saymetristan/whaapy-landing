'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const reasons = [
  {
    emoji: '⚡',
    title: 'Se configura en minutos',
    description: 'Nada de contratar técnicos ni esperar configuraciones. Tú mismo lo haces en 10 minutos desde tu computadora.'
  },
  {
    emoji: '🔒',
    title: 'Tu información está segura',
    description: 'Tus conversaciones y datos de clientes están protegidos. Cumplimos con todas las regulaciones de privacidad.'
  },
  {
    emoji: '🎮',
    title: 'Tú siempre tienes el control',
    description: 'La IA no hace nada sin tu permiso. Tú decides cuándo responde ella y cuándo respondes tú.'
  },
  {
    emoji: '🔗',
    title: 'Se conecta con lo que ya usas',
    description: '¿Ya usas algún sistema para tu negocio? Whaapy se puede conectar. Nada de empezar de cero.'
  },
  {
    emoji: '🇲🇽',
    title: 'Hecho para México',
    description: 'Soporte en español, horarios de México, entendemos cómo funciona tu negocio.'
  },
  {
    emoji: '👨‍💻',
    title: 'Gente real te ayuda',
    description: 'Nada de bots de soporte. Personas que entienden tu negocio y te ayudan a crecer.'
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
          const cards = entry.target.querySelectorAll('.why-card')
          
          anime({
            targets: cards,
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 800,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            delay: anime.stagger(100)
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
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            No somos solo <span className="gradient-text">otro bot</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Somos tu equipo de ventas que nunca duerme
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card opacity-0 bg-white rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl group"
            >
              {/* Emoji */}
              <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {reason.emoji}
              </div>
              
              {/* Título */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-text-primary">{reason.title}</h3>
              
              {/* Descripción */}
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust stats - SIN referencias técnicas */}
        <div className="bg-white rounded-3xl border-2 border-border p-8 md:p-12">
          <div className="grid grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">100+</div>
              <div className="text-xs md:text-sm text-text-muted mt-1">negocios activos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent">50k+</div>
              <div className="text-xs md:text-sm text-text-muted mt-1">mensajes/día</div>
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
