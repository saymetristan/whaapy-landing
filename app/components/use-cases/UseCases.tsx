'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { ShoppingBag, Utensils, Home, Wrench, Briefcase, Store } from 'lucide-react'

const useCases = [
  {
    icon: ShoppingBag,
    industry: 'E-commerce',
    title: 'E-commerce Mediano (50-200 pedidos/día)',
    problem: 'Equipo de 3-5 personas sobrepasado por consultas repetitivas de stock, envíos, devoluciones',
    solution: 'IA maneja 80% de FAQs. Equipo se enfoca en resolver casos complejos y cerrar ventas grandes',
    result: '+65% conversiones, -40% carga'
  },
  {
    icon: Utensils,
    industry: 'Restaurantes',
    title: 'Cadena de Restaurantes (3-10 sucursales)',
    problem: 'Reservaciones cruzadas, menús desactualizados, equipo no coordina entre sucursales',
    solution: 'IA toma reservas por sucursal, envía menú actualizado, coordina con sistema de gestión vía API',
    result: '0 reservas perdidas, +30% ocupación'
  },
  {
    icon: Home,
    industry: 'Inmobiliarias',
    title: 'Inmobiliaria (10-30 agentes)',
    problem: 'Agentes reciben 50+ consultas diarias, muchos leads no califican, pierden tiempo en WhatsApp',
    solution: 'IA califica leads, agenda visitas, envía fichas técnicas. Agentes solo hablan con leads calificados',
    result: '5x más leads calificados por agente'
  },
  {
    icon: Briefcase,
    industry: 'B2B',
    title: 'Distribuidora B2B',
    problem: 'Clientes solicitan cotizaciones, precios, disponibilidad fuera de horario',
    solution: 'IA consulta catálogo actualizado vía API, envía cotizaciones automáticas, agenda llamadas con vendedores',
    result: '24/7 atención, +45% ventas fuera de horario'
  },
  {
    icon: Wrench,
    industry: 'Soporte',
    title: 'Call Center / Soporte Técnico',
    problem: 'Alto volumen de tickets repetitivos, tiempo de primera respuesta alto',
    solution: 'IA resuelve casos nivel 1-2, escala a humano solo casos complejos. Integración con Zendesk/Freshdesk vía API',
    result: '-70% tickets a humanos, <2s respuesta'
  },
  {
    icon: Store,
    industry: 'Salud',
    title: 'Clínica/Hospital (múltiples consultorios)',
    problem: 'Recepción sobrepasada con citas, confirmaciones, resultados, FAQs de pacientes',
    solution: 'IA agenda citas según disponibilidad real, envía recordatorios, responde FAQs médicas básicas',
    result: '-60% carga administrativa, 0 ausencias'
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

