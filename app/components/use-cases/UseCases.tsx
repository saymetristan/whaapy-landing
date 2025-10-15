'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { ShoppingBag, Utensils, Home, Wrench, Briefcase, Store } from 'lucide-react'

const useCases = [
  {
    icon: ShoppingBag,
    industry: 'E-commerce',
    title: 'Tienda Online',
    problem: 'Preguntas sobre productos, stock, envíos',
    solution: 'IA responde disponibilidad, precios, tiempos de envío al instante',
    result: '+40% conversiones'
  },
  {
    icon: Utensils,
    industry: 'Restaurantes',
    title: 'Restaurante',
    problem: 'Reservaciones, menú, horarios todo el día',
    solution: 'IA toma reservas, envía menú, horarios automáticamente',
    result: '80% menos llamadas'
  },
  {
    icon: Home,
    industry: 'Inmobiliarias',
    title: 'Bienes Raíces',
    problem: 'Consultas sobre propiedades, visitas, precios',
    solution: 'IA califica leads, agenda visitas, envía fichas técnicas',
    result: '5x más leads calificados'
  },
  {
    icon: Wrench,
    industry: 'Servicios',
    title: 'Plomería / Electricista',
    problem: 'Emergencias, presupuestos, disponibilidad',
    solution: 'IA agenda citas, envía precios, maneja urgencias',
    result: '0 llamadas perdidas'
  },
  {
    icon: Briefcase,
    industry: 'Profesionales',
    title: 'Consultorio Médico',
    problem: 'Citas, horarios, recordatorios, FAQs',
    solution: 'IA agenda, confirma, envía recordatorios automáticos',
    result: '-60% ausencias'
  },
  {
    icon: Store,
    industry: 'Retail',
    title: 'Tienda Física',
    problem: 'Preguntas fuera de horario, apartados',
    solution: 'IA responde 24/7, gestiona apartados, envía promos',
    result: '24/7 disponibilidad'
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
    <section ref={sectionRef} className="relative py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Funciona para <span className="gradient-text">cualquier negocio</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Desde e-commerce hasta servicios profesionales, Whaapy se adapta a tu industria
          </p>
        </div>

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            
            return (
              <div
                key={index}
                className="use-case-card opacity-0 bg-surface rounded-3xl p-8 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl group"
              >
                {/* Icon & Industry */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon size={28} className="text-accent" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-accent uppercase tracking-wide">{useCase.industry}</div>
                    <div className="text-lg font-bold text-text-primary">{useCase.title}</div>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-text-muted uppercase tracking-wide mb-2">Problema común:</div>
                  <p className="text-base text-text-secondary">{useCase.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <div className="text-sm font-bold text-accent uppercase tracking-wide mb-2">Con Whaapy:</div>
                  <p className="text-base text-text-primary font-medium">{useCase.solution}</p>
                </div>

                {/* Result */}
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                  <span className="text-sm font-bold text-accent">{useCase.result}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

