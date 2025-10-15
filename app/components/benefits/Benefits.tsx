'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { X, Check, TrendingUp, Clock, DollarSign } from 'lucide-react'

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
            translateY: [60, 0],
            opacity: [0, 1],
            duration: 1000,
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
    <section ref={sectionRef} className="relative py-40 px-6 bg-gradient-to-b from-white to-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            De caos a <span className="gradient-text">control total</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Deja de perder clientes por responder tarde. Whaapy transforma cómo manejas WhatsApp.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Sin Whaapy */}
          <div className="benefit-card opacity-0 bg-white rounded-3xl p-10 border-2 border-red-200">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center">
                <X size={28} className="text-red-600" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-red-900">Sin Whaapy</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg">
                <X size={24} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-secondary">Respondes mensajes uno por uno, todo el día</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <X size={24} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-secondary">Clientes esperan horas (o días) para una respuesta simple</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <X size={24} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-secondary">Pierdes ventas por no responder a tiempo</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <X size={24} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-secondary">Repites las mismas respuestas 50 veces al día</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <X size={24} className="text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-secondary">Contratar más personal para atender WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Con Whaapy */}
          <div className="benefit-card opacity-0 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-10 border-2 border-accent/30 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                <Check size={28} className="text-white" strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Con Whaapy</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-lg">
                <Check size={24} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-primary font-medium">IA responde al instante, 24/7, sin descanso</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <Check size={24} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-primary font-medium">Clientes obtienen respuesta en menos de 2 segundos</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <Check size={24} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-primary font-medium">Captura TODOS los leads, nunca pierdes una oportunidad</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <Check size={24} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-primary font-medium">IA maneja FAQs automáticamente, tú cierras ventas</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <Check size={24} className="text-accent flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-text-primary font-medium">Ahorra 15+ horas/semana sin contratar personal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ROI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="benefit-card opacity-0 bg-white rounded-3xl p-10 border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Clock size={32} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-4xl font-bold text-accent mb-2">15h</h3>
            <p className="text-lg text-text-secondary font-medium mb-3">Ahorradas por semana</p>
            <p className="text-base text-text-muted">Equivalente a 2 días completos de trabajo que ahora puedes usar en crecer tu negocio</p>
          </div>

          <div className="benefit-card opacity-0 bg-white rounded-3xl p-10 border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <TrendingUp size={32} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-4xl font-bold text-accent mb-2">3x</h3>
            <p className="text-lg text-text-secondary font-medium mb-3">Más conversiones</p>
            <p className="text-base text-text-muted">Los clientes que reciben respuesta instantánea tienen 3x más probabilidad de comprar</p>
          </div>

          <div className="benefit-card opacity-0 bg-white rounded-3xl p-10 border-2 border-border hover:border-accent/30 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <DollarSign size={32} className="text-accent" strokeWidth={2} />
            </div>
            <h3 className="text-4xl font-bold text-accent mb-2">$500</h3>
            <p className="text-lg text-text-secondary font-medium mb-3">ROI mensual promedio</p>
            <p className="text-base text-text-muted">Costo de Whaapy vs. contratar un asistente o perder ventas por responder tarde</p>
          </div>
        </div>
      </div>
    </section>
  )
}

