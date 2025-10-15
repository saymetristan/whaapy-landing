'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { MessageSquare, Bot, Users, TrendingUp, Zap, Settings } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: MessageSquare,
    title: 'Inbox Inteligente',
    description: 'Todas tus conversaciones de WhatsApp en un solo lugar. Filtros, búsqueda, asignaciones automáticas.'
  },
  {
    icon: Bot,
    title: 'Asistente de IA Entrenado',
    description: 'Agente entrenado con tus documentos. Responde preguntas sobre productos, precios, horarios, lo que necesites.'
  },
  {
    icon: Users,
    title: 'Equipos Colaborativos',
    description: 'Invita a tu equipo. Asigna conversaciones, ve quién está respondiendo, trabaja en conjunto.'
  },
  {
    icon: TrendingUp,
    title: 'Métricas en Tiempo Real',
    description: 'Dashboard con tiempo de respuesta, conversaciones activas, efectividad de la IA.'
  },
  {
    icon: Zap,
    title: 'Templates de WhatsApp',
    description: 'Usa templates pre-aprobados de Meta. Envía notificaciones, confirmaciones, seguimientos.'
  },
  {
    icon: Settings,
    title: 'Control Granular',
    description: 'Decide cuándo la IA responde: siempre, nunca, o manualmente por conversación.'
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
    <section ref={sectionRef} className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Todo lo que necesitas para <span className="gradient-text">automatizar WhatsApp</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Herramientas profesionales para gestionar conversaciones a escala
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

