'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const steps = [
  {
    number: '1',
    title: 'Conecta tu WhatsApp',
    time: '2 min',
    description: 'Escaneas un código QR desde tu computadora, igual que cuando usas WhatsApp Web. Listo, ya estás conectado.'
  },
  {
    number: '2',
    title: 'Enséñale sobre tu negocio',
    time: '5 min',
    description: 'Sube tu catálogo, lista de precios, políticas. PDFs, Excel, Word, lo que tengas. El asistente lee todo y aprende.'
  },
  {
    number: '3',
    title: 'Actívalo y relájate',
    time: 'Listo',
    description: 'Elige qué conversaciones quieres que atienda y cuáles prefieres atender tú. El asistente empieza a trabajar.'
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
          // Animate the timeline line
          const line = entry.target.querySelector('.timeline-line')
          if (line) {
            anime({
              targets: line,
              scaleX: [0, 1],
              duration: 1000,
              easing: 'easeOutQuad',
              delay: 200
            })
          }

          // Animate steps
          const steps = entry.target.querySelectorAll('.step-container')
          anime({
            targets: steps,
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            delay: anime.stagger(200, { start: 400 })
          })

          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-gradient-to-b from-surface to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Actívalo en <span className="gradient-text">10 minutos</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Sin técnicos, sin instalaciones, sin complicaciones
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[16.666%] right-[16.666%] h-0.5 bg-border">
            <div className="timeline-line absolute inset-0 bg-accent origin-left scale-x-0" />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="step-container opacity-0 text-center">
                {/* Number circle */}
                <div className="relative inline-flex items-center justify-center w-32 h-32 mb-8">
                  <div className="absolute inset-0 rounded-full bg-accent/10" />
                  <div className="relative w-24 h-24 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-accent">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">
                    {step.time}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile (vertical) */}
        <div className="md:hidden relative">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-border">
            <div className="timeline-line absolute inset-0 bg-accent origin-top scale-y-0" style={{ transform: 'scaleY(1)' }} />
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="step-container opacity-0 relative pl-20">
                {/* Number circle */}
                <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-white border-4 border-accent flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-accent">{step.number}</span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm mb-2">
                    {step.time}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom metrics */}
        <div className="mt-16 md:mt-24 bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-3xl p-8 md:p-12 border border-accent/20">
          <div className="grid grid-cols-3 gap-6 md:gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">15h</div>
              <div className="text-sm md:text-base text-text-secondary mt-1">ahorradas/semana</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">24/7</div>
              <div className="text-sm md:text-base text-text-secondary mt-1">disponible</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">&lt;2s</div>
              <div className="text-sm md:text-base text-text-secondary mt-1">respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
