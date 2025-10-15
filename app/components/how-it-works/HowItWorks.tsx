'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { QrCode, Upload, Play } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: QrCode,
    title: 'Conecta tu WhatsApp',
    time: '2 minutos',
    description: 'Escanea un QR y listo. No necesitas meterte con el API de Meta ni trámites complicados.'
  },
  {
    number: '2',
    icon: Upload,
    title: 'Entrena tu IA',
    time: '5 minutos',
    description: 'Sube tus documentos: catálogo de productos, precios, políticas. La IA aprende automáticamente.'
  },
  {
    number: '3',
    icon: Play,
    title: 'Activa y Relájate ☕️',
    time: 'Listo',
    description: 'Tu asistente responde 24/7. Tú decides cuándo intervenir y cuándo dejar que trabaje solo.'
  }
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate path drawing
          if (pathRef.current) {
            anime({
              targets: pathRef.current,
              strokeDashoffset: [anime.setDashoffset, 0],
              opacity: [0, 0.3],
              duration: 2000,
              easing: 'easeInOutQuad',
              delay: 200
            })
          }

          // Animate steps
          const steps = entry.target.querySelectorAll('.step-container')
          anime({
            targets: steps,
            translateY: [60, 0],
            opacity: [0, 1],
            duration: 1000,
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
    <section ref={sectionRef} className="relative py-40 px-6 bg-gradient-to-b from-surface to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Activa en <span className="gradient-text">3 pasos simples</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Sin configuraciones complicadas. Menos de 10 minutos para estar operando.
          </p>
        </div>

        {/* Steps with connecting path */}
        <div className="relative">
          {/* SVG connecting line */}
          <svg 
            className="absolute inset-0 pointer-events-none hidden md:block" 
            style={{ width: '100%', height: '100%' }}
          >
            <path
              ref={pathRef}
              d="M 200 150 Q 400 100, 600 150 T 1000 150"
              stroke="#25D366"
              strokeWidth="2"
              fill="none"
              strokeDasharray="1000"
              strokeDashoffset="1000"
              opacity="0"
            />
          </svg>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <div
                  key={index}
                  className="step-container opacity-0 bg-white rounded-3xl p-10 border-2 border-border hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  {/* Step number badge - más grande */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-hover text-white font-bold text-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {step.number}
                  </div>

                  {/* Icon - más prominente */}
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6">
                    <Icon className="text-accent" size={40} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold mb-2 text-text-primary">{step.title}</h3>
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-full text-sm">{step.time}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed text-lg">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits callout - más prominente */}
        <div className="mt-20 bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 rounded-3xl p-12 md:p-16 border-2 border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">15h</div>
              <div className="text-lg font-medium text-text-secondary">Ahorradas por semana</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">24/7</div>
              <div className="text-lg font-medium text-text-secondary">Disponibilidad</div>
            </div>
            <div className="space-y-2">
              <div className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-accent to-accent-hover bg-clip-text text-transparent">10x</div>
              <div className="text-lg font-medium text-text-secondary">Más rápido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

