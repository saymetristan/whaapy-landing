'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const useCases = [
  {
    industry: 'E-commerce',
    color: 'bg-blue-500',
    title: 'Tienda en línea',
    quote: 'Mi equipo de 3 personas no daba abasto contestando "¿tienen talla M?", "¿hacen envíos a Monterrey?"',
    solution: 'El asistente contesta stock, tallas, envíos y formas de pago. El equipo solo cierra ventas.',
    result: '+65%',
    resultLabel: 'ventas'
  },
  {
    industry: 'Restaurantes',
    color: 'bg-orange-500',
    title: 'Restaurante con 3 sucursales',
    quote: 'Recibíamos reservaciones por WhatsApp y se cruzaban. Nadie sabía qué mesas había.',
    solution: 'El asistente toma reservas según disponibilidad real y manda el menú actualizado.',
    result: '0',
    resultLabel: 'reservas perdidas'
  },
  {
    industry: 'Inmobiliaria',
    color: 'bg-purple-500',
    title: 'Inmobiliaria con 10 agentes',
    quote: 'Cada agente recibía 50+ mensajes diarios. La mayoría no calificaban.',
    solution: 'El asistente califica leads, manda fichas técnicas. Agentes solo hablan con interesados reales.',
    result: '5x',
    resultLabel: 'más cierres'
  },
  {
    industry: 'Distribuidora',
    color: 'bg-emerald-500',
    title: 'Distribuidora B2B',
    quote: 'Clientes pedían cotizaciones a las 10pm y para cuando contestábamos ya habían comprado con otro.',
    solution: 'El asistente manda cotizaciones automáticas consultando precios actualizados. 24/7.',
    result: '+45%',
    resultLabel: 'ventas nocturnas'
  }
]

export default function UseCases() {
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
          const cards = entry.target.querySelectorAll('.use-case-card')
          
          anime({
            targets: cards,
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            delay: anime.stagger(150)
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Negocios como el tuyo <span className="gradient-text">ya lo usan</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Ve cómo otros resolvieron los mismos problemas que tú tienes
          </p>
        </div>

        {/* Use cases - horizontal cards */}
        <div className="space-y-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`use-case-card opacity-0 bg-surface rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-lg ${
                index % 2 === 1 ? 'md:ml-12' : 'md:mr-12'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Left side - Quote and info */}
                <div className="flex-1 space-y-4">
                  {/* Industry badge */}
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${useCase.color}`} />
                    <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      {useCase.industry}
                    </span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm text-text-secondary">{useCase.title}</span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-text-primary font-medium leading-relaxed">
                    "{useCase.quote}"
                  </blockquote>

                  {/* Solution */}
                  <p className="text-text-secondary">
                    <span className="font-semibold text-accent">Ahora:</span> {useCase.solution}
                  </p>
                </div>

                {/* Right side - Result */}
                <div className="md:w-32 md:text-center md:border-l md:border-border md:pl-8">
                  <div className="flex md:flex-col items-center gap-2 md:gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-accent">{useCase.result}</span>
                    <span className="text-sm text-text-muted">{useCase.resultLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
