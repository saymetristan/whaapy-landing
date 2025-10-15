'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Shield, Zap, Users, Globe, Lock, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Setup en 5 minutos',
    description: 'No necesitas ser técnico. Escaneas un QR y listo. Sin APIs complicadas, sin integraciones eternas.'
  },
  {
    icon: Shield,
    title: '100% Seguro y Privado',
    description: 'Tus datos y conversaciones están encriptados. Cumplimos con todas las regulaciones de privacidad.'
  },
  {
    icon: Users,
    title: 'Control Humano Siempre',
    description: 'Tú decides cuándo la IA responde y cuándo intervienes. Transiciones suaves entre IA y humano.'
  },
  {
    icon: Globe,
    title: 'Funciona en México',
    description: 'Diseñado para negocios mexicanos. Soporte en español, horarios locales, templates en español.'
  },
  {
    icon: Lock,
    title: 'Sin Vendor Lock-in',
    description: 'Tus datos son tuyos. Exporta conversaciones cuando quieras. Cancela sin penalización.'
  },
  {
    icon: HeartHandshake,
    title: 'Soporte Real',
    description: 'Equipo mexicano listo para ayudarte. No bots, personas reales que entienden tu negocio.'
  }
]

export default function WhyWhaapy() {
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
          const cards = entry.target.querySelectorAll('.why-card')
          
          anime({
            targets: cards,
            scale: [0.9, 1],
            opacity: [0, 1],
            duration: 800,
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
    <section ref={sectionRef} className="relative py-40 px-6 bg-gradient-to-b from-surface to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Por qué elegir <span className="gradient-text">Whaapy</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            No somos solo otro chatbot. Somos tu equipo de soporte que nunca duerme.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            
            return (
              <div
                key={index}
                className="why-card opacity-0 bg-white rounded-3xl p-8 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-accent" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text-primary">{reason.title}</h3>
                <p className="text-lg text-text-secondary leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust badges */}
        <div className="bg-white rounded-3xl border-2 border-border p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-2">Empresas que confían en Whaapy</h3>
            <p className="text-lg text-text-secondary">Más de 50 negocios ya están automatizando WhatsApp con nosotros</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">50+</div>
                <div className="text-sm text-text-muted">Negocios activos</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">10k+</div>
                <div className="text-sm text-text-muted">Mensajes/día</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-text-muted">Satisfacción</div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">&lt;2s</div>
                <div className="text-sm text-text-muted">Tiempo respuesta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

