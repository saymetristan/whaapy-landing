'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { X, Check } from 'lucide-react'

const sinWhaapy = [
  'Contestas mensajes todo el día, hasta en el baño',
  'Clientes esperan horas para saber un precio',
  'Pierdes ventas porque no viste el mensaje a tiempo',
  'Repites lo mismo 50 veces: "Sí tenemos", "El precio es..."',
  'Despiertas pensando en los mensajes que no contestaste'
]

const conWhaapy = [
  'Un asistente responde al instante, aunque estés dormido',
  'Tus clientes saben precio y disponibilidad en 2 segundos',
  'No pierdes ni una oportunidad, ni de noche ni en domingo',
  'Tú solo intervienes para cerrar la venta o resolver algo especial',
  'Revisas tu WhatsApp cuando quieres, no porque tienes que hacerlo'
]

export default function Benefits() {
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
          const cards = entry.target.querySelectorAll('.benefit-card')
          
          anime({
            targets: cards,
            translateY: [40, 0],
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
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-gradient-to-b from-white to-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Tu día a día, <span className="gradient-text">antes y después</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Lo que cambia cuando tu WhatsApp trabaja solo
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Sin Whaapy */}
          <div className="benefit-card opacity-0 bg-white rounded-3xl p-8 md:p-10 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                <X size={28} className="text-red-600" strokeWidth={3} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-red-900">Así se siente hoy</h3>
            </div>
            
            <ul className="space-y-4 md:space-y-5">
              {sinWhaapy.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Con Whaapy */}
          <div className="benefit-card opacity-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 md:p-10 border-2 border-accent/30 shadow-xl">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-accent flex items-center justify-center">
                <Check size={28} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">Así se siente con Whaapy</h3>
            </div>
            
            <ul className="space-y-4 md:space-y-5">
              {conWhaapy.map((item, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-primary font-medium text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metric Cards - Sin emojis, solo tipografía */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="benefit-card opacity-0 bg-white rounded-3xl p-8 md:p-10 border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent mb-3">15h</div>
            <p className="text-lg md:text-xl text-text-primary font-semibold mb-1">menos frente al teléfono</p>
            <p className="text-sm md:text-base text-text-muted">cada semana</p>
          </div>

          <div className="benefit-card opacity-0 bg-white rounded-3xl p-8 md:p-10 border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent mb-3">3x</div>
            <p className="text-lg md:text-xl text-text-primary font-semibold mb-1">más ventas</p>
            <p className="text-sm md:text-base text-text-muted">al contestar al instante</p>
          </div>

          <div className="benefit-card opacity-0 bg-white rounded-3xl p-8 md:p-10 border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent mb-3">$0</div>
            <p className="text-lg md:text-xl text-text-primary font-semibold mb-1">extra en personal</p>
            <p className="text-sm md:text-base text-text-muted">el asistente no pide aumento</p>
          </div>
        </div>
      </div>
    </section>
  )
}
