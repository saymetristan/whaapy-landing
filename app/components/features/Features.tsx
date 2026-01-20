'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Inbox, GraduationCap, Users, BarChart3, Megaphone, Gamepad2 } from 'lucide-react'

const features = [
  {
    icon: Inbox,
    title: 'Todas tus conversaciones en un solo lugar',
    description: 'Ve y responde desde tu computadora o celular. Busca clientes por nombre, filtra por estado, organiza con etiquetas.',
    size: 'large'
  },
  {
    icon: GraduationCap,
    title: 'Un asistente que conoce tu negocio',
    description: 'Le subes tu catálogo, precios, políticas. Responde con información real de TU negocio.',
    size: 'medium'
  },
  {
    icon: Users,
    title: 'Tu equipo, todos conectados',
    description: 'Invita a tu personal. Cada quien ve sus conversaciones y tú ves todo.',
    size: 'medium'
  },
  {
    icon: BarChart3,
    title: 'Sabes qué está pasando',
    description: '¿Cuántos mensajes llegaron? ¿Qué producto preguntan más? Todo en gráficas fáciles.',
    size: 'small'
  },
  {
    icon: Megaphone,
    title: 'Mensajes que sí llegan',
    description: 'Envía promociones o seguimientos a todos tus clientes o solo a los que quieras.',
    size: 'small'
  },
  {
    icon: Gamepad2,
    title: 'Tú decides cuándo la IA responde',
    description: '¿Cliente importante? Atiéndelo tú. ¿Preguntas de siempre? La IA se encarga.',
    size: 'small'
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
            translateY: [40, 0],
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Card Grande - 2 columnas, 2 filas */}
          <div className="feature-card opacity-0 md:col-span-2 md:row-span-2 bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 md:p-10 border border-accent/20 group hover:shadow-xl transition-all duration-500">
            <div className="h-full flex flex-col">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Inbox className="w-7 h-7 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                {features[0].title}
              </h3>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed flex-grow">
                {features[0].description}
              </p>
            </div>
          </div>

          {/* Cards Medianas */}
          {features.slice(1, 3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="feature-card opacity-0 bg-white rounded-3xl p-6 md:p-8 border-2 border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-text-primary">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}

          {/* Cards Pequeñas */}
          {features.slice(3).map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index + 3}
                className="feature-card opacity-0 bg-surface rounded-2xl p-5 md:p-6 border border-border hover:border-accent/20 transition-all duration-500 hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold mb-1 text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
