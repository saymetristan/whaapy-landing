'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const steps = [
  {
    number: '1',
    emoji: '📱',
    title: 'Conecta tu WhatsApp',
    time: '⏱️ 2 minutos',
    description: 'Escaneas un código QR desde tu computadora, igual que cuando usas WhatsApp Web. Listo, ya estás conectado.'
  },
  {
    number: '2',
    emoji: '📄',
    title: 'Enséñale sobre tu negocio',
    time: '⏱️ 5 minutos',
    description: 'Sube tu catálogo, lista de precios, políticas. PDFs, Excel, Word, lo que tengas. El asistente lee todo y aprende solo.'
  },
  {
    number: '3',
    emoji: '☕',
    title: 'Actívalo y relájate',
    time: '⏱️ ¡Listo!',
    description: 'Elige qué conversaciones quieres que atienda y cuáles prefieres atender tú. El asistente empieza a trabajar de inmediato.'
  }
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate steps
          const steps = entry.target.querySelectorAll('.step-container')
          anime({
            targets: steps,
            translateY: [60, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            delay: anime.stagger(200, { start: 200 })
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
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Actívalo en <span className="gradient-text">10 minutos</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Sin técnicos, sin instalaciones, sin complicaciones
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-container opacity-0 bg-white rounded-3xl p-8 md:p-10 border-2 border-border hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              {/* Step number badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white font-bold text-xl md:text-2xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                {step.number}
              </div>

              {/* Emoji grande */}
              <div className="text-5xl md:text-6xl mb-5 md:mb-6">
                {step.emoji}
              </div>

              {/* Content */}
              <div className="mb-3 md:mb-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-text-primary">{step.title}</h3>
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">{step.time}</span>
              </div>
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Metrics banner */}
        <div className="mt-12 md:mt-20 bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 lg:p-16 border-2 border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">15h</div>
              <div className="text-base md:text-lg font-medium text-text-secondary">ahorradas por semana</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">24/7</div>
              <div className="text-base md:text-lg font-medium text-text-secondary">disponible</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">&lt;2s</div>
              <div className="text-base md:text-lg font-medium text-text-secondary">para responder</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
