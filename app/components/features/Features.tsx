'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { MessageSquare, Bot, Users, TrendingUp, Zap, Settings } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: MessageSquare,
    title: 'Inbox Inteligente',
    description: 'Inbox centralizado con filtros avanzados, búsqueda full-text, etiquetas personalizadas, y asignación automática a tu equipo.'
  },
  {
    icon: Bot,
    title: 'Asistente de IA Entrenado',
    description: 'Agente de IA que entrenas con tus documentos (PDFs, Word, TXT). Responde basándose en tu catálogo, precios, y políticas reales.'
  },
  {
    icon: Users,
    title: 'Equipos Colaborativos',
    description: 'Sistema multiusuario con roles (Admin, Agente). Asigna conversaciones automáticamente, ve quién está respondiendo en tiempo real.'
  },
  {
    icon: TrendingUp,
    title: 'Métricas en Tiempo Real',
    description: 'Dashboard con tiempo de respuesta promedio, tasa de efectividad de IA, conversaciones activas, comparativas día actual vs ayer.'
  },
  {
    icon: Zap,
    title: 'Templates de WhatsApp',
    description: 'Sincroniza templates aprobados de Meta, envía masivos a segmentos específicos. Sin salir de Whaapy.'
  },
  {
    icon: Settings,
    title: 'Control Granular',
    description: 'Activa/desactiva IA por conversación. Configura auto-pausa cuando humano interviene. Define keywords de handoff automático a humano.'
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
    <section ref={sectionRef} className="relative py-40 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Todo lo que necesitas para <br className="hidden md:block" /><span className="gradient-text">automatizar WhatsApp</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Herramientas profesionales para gestionar conversaciones a escala
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

