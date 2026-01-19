'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'

const features = [
  {
    emoji: '📥',
    title: 'Todas tus conversaciones en un solo lugar',
    description: 'Ve y responde desde tu computadora o celular. Busca clientes por nombre, filtra por estado, organiza con etiquetas.'
  },
  {
    emoji: '🎓',
    title: 'Un asistente que conoce tu negocio',
    description: 'Le subes tu catálogo, precios, políticas. El asistente responde con información real de TU negocio, no respuestas genéricas.'
  },
  {
    emoji: '👥',
    title: 'Tu equipo, todos conectados',
    description: 'Invita a tu personal. Cada quien ve sus conversaciones, pueden pasarse clientes entre ellos, y tú ves todo.'
  },
  {
    emoji: '📊',
    title: 'Sabes qué está pasando',
    description: '¿Cuántos mensajes llegaron hoy? ¿Qué tan rápido contestamos? ¿Qué producto preguntan más? Todo en gráficas fáciles.'
  },
  {
    emoji: '📢',
    title: 'Mensajes que sí llegan',
    description: 'Envía recordatorios, promociones o seguimientos. A todos tus clientes o solo a los que quieras. Sin miedo a que te bloqueen.'
  },
  {
    emoji: '🎮',
    title: 'Tú decides cuándo la IA responde',
    description: '¿Cliente importante? Apaga el asistente y atiéndelo tú. ¿Preguntas de siempre? Deja que la IA se encargue. Con un botón cambias.'
  }
]

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.feature-card')
          
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
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Todo lo que necesitas para <br className="hidden md:block" /><span className="gradient-text">atender sin estrés</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Simple de usar, poderoso de verdad
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card opacity-0 bg-white rounded-3xl p-8 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-xl group"
            >
              {/* Emoji grande */}
              <div className="text-4xl md:text-5xl mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.emoji}
              </div>
              
              {/* Título */}
              <h3 className="text-lg md:text-xl font-bold mb-3 text-text-primary">
                {feature.title}
              </h3>
              
              {/* Descripción */}
              <p className="text-text-secondary leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
