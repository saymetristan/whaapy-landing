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
    <section ref={sectionRef} className="relative py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Activa en <span className="gradient-text">3 pasos simples</span>
          </h2>
          <p className="text-lg text-text-secondary">
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
                  className="step-container opacity-0 bg-surface-elevated rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-all"
                >
                  {/* Step number badge */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent text-white font-bold text-xl mb-4">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center mb-4">
                    <Icon className="text-accent" size={32} />
                  </div>

                  {/* Content */}
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <span className="text-sm text-accent font-medium">{step.time}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Benefits callout */}
        <div className="mt-16 bg-gradient-to-r from-accent-light to-surface-elevated rounded-2xl p-8 border border-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">15h</div>
              <div className="text-text-secondary">Ahorradas por semana</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-text-secondary">Disponibilidad</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10x</div>
              <div className="text-text-secondary">Más rápido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

