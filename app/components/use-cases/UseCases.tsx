'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const useCases = [
  {
    emoji: '🛒',
    industry: 'E-commerce',
    title: 'Tienda en línea',
    before: 'Mi equipo de 3 personas no daba abasto contestando "¿tienen talla M?", "¿hacen envíos a Monterrey?"',
    after: 'El asistente contesta stock, tallas, envíos y formas de pago. El equipo solo cierra ventas.',
    result: '65% más ventas'
  },
  {
    emoji: '🍽️',
    industry: 'Restaurantes',
    title: 'Restaurante con 3 sucursales',
    before: 'Recibíamos reservaciones por WhatsApp y se cruzaban. Nadie sabía qué mesas había.',
    after: 'El asistente toma reservas según disponibilidad real y manda el menú actualizado.',
    result: 'Cero reservas perdidas'
  },
  {
    emoji: '🏠',
    industry: 'Inmobiliaria',
    title: 'Inmobiliaria con 10 agentes',
    before: 'Cada agente recibía 50+ mensajes diarios. La mayoría no calificaban.',
    after: 'El asistente califica leads, manda fichas técnicas. Agentes solo hablan con interesados reales.',
    result: '5x más cierres'
  },
  {
    emoji: '📦',
    industry: 'Distribuidora',
    title: 'Distribuidora B2B',
    before: 'Clientes pedían cotizaciones a las 10pm y para cuando contestábamos ya habían comprado con otro.',
    after: 'El asistente manda cotizaciones automáticas consultando precios actualizados. 24/7.',
    result: '45% más ventas nocturnas'
  },
  {
    emoji: '🏥',
    industry: 'Salud',
    title: 'Clínica médica',
    before: 'La recepcionista no daba abasto con citas, confirmaciones y preguntas de pacientes.',
    after: 'El asistente agenda según disponibilidad de cada doctor y manda recordatorios.',
    result: '60% menos carga admin'
  },
  {
    emoji: '🔧',
    industry: 'Servicios',
    title: 'Taller de reparaciones',
    before: 'Clientes preguntando "¿ya está mi equipo?" todo el día. No podía trabajar de tanto contestar.',
    after: 'El asistente informa status de reparaciones y agenda citas de entrega.',
    result: '3h más de trabajo/día'
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
            translateY: [60, 0],
            opacity: [0, 1],
            duration: 1000,
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
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Negocios como el tuyo <span className="gradient-text">ya lo usan</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Ve cómo otros resolvieron los mismos problemas que tú tienes
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="use-case-card opacity-0 bg-surface rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl group"
            >
              {/* Header con emoji e industria */}
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <span className="text-3xl md:text-4xl group-hover:scale-110 transition-transform duration-300">{useCase.emoji}</span>
                <div>
                  <span className="text-xs font-semibold text-accent uppercase tracking-wide">
                    {useCase.industry}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-text-primary">
                    {useCase.title}
                  </h3>
                </div>
              </div>

              {/* Antes */}
              <div className="mb-4">
                <span className="text-xs font-bold text-text-muted uppercase tracking-wide">
                  ANTES:
                </span>
                <p className="text-text-secondary italic mt-1 text-sm md:text-base">"{useCase.before}"</p>
              </div>

              {/* Ahora */}
              <div className="mb-5 md:mb-6">
                <span className="text-xs font-bold text-accent uppercase tracking-wide">
                  AHORA:
                </span>
                <p className="text-text-primary font-medium mt-1 text-sm md:text-base">{useCase.after}</p>
              </div>

              {/* Resultado */}
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-bold text-accent">
                  Resultado: {useCase.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
