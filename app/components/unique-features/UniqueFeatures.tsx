'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Puzzle, Sliders, BookOpen, Webhook, Filter } from 'lucide-react'
import UniqueFeatureCard from './UniqueFeatureCard'

const uniqueFeatures = [
  {
    icon: Puzzle,
    title: 'Integración Sencilla con CRMs',
    description: 'API REST con 48 endpoints documentados en OpenAPI. Conecta Whaapy con tu CRM, ERP, o sistema actual en minutos. Webhooks configurables, ejemplos listos para n8n, Make, Zapier.',
    badge: '100% abierta'
  },
  {
    icon: Sliders,
    title: 'Control de IA por Conversación',
    description: 'Activa o pausa la IA por conversación individual. Si intervienes manualmente, la IA se pausa automáticamente por el tiempo que configures (5-60 min). Control total en tus manos.',
    badge: 'Tecnología exclusiva'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base Multi-Documento',
    description: 'Sube catálogos, políticas, precios, manuales completos. La IA consulta automáticamente el documento correcto según la pregunta del cliente. Sin límite de documentos.',
    badge: 'Ilimitado'
  },
  {
    icon: Webhook,
    title: 'Webhooks en Tiempo Real',
    description: 'Recibe notificaciones instantáneas de nuevos mensajes, cambios de estado, asignaciones. Configura eventos personalizados y conecta con tus sistemas externos automáticamente.',
    badge: 'Eventos configurables'
  },
  {
    icon: Filter,
    title: 'Segmentación Dinámica',
    description: 'Filtra y agrupa contactos con reglas avanzadas. Envía templates masivos solo a segmentos específicos. Ejemplo: "Clientes sin compra en 30 días" - template de descuento automático.',
    badge: 'Único en el mercado'
  }
]

export default function UniqueFeatures() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.unique-feature-card')
          
          anime({
            targets: cards,
            translateY: [80, 0],
            opacity: [0, 1],
            duration: 1200,
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
    <section ref={sectionRef} className="relative py-40 px-6 bg-gradient-to-b from-surface via-white to-surface overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-accent uppercase tracking-wider bg-accent/10 px-4 py-2 rounded-full">
              Features únicos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lo que Whaapy hace que <br className="hidden md:block" />
            <span className="gradient-text">nadie más puede</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            Features diferenciadores que justifican la inversión y te dan ventaja competitiva
          </p>
        </div>

        {/* Features grid - 2 columnas en desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {uniqueFeatures.map((feature, index) => (
            <UniqueFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              index={index}
            />
          ))}
        </div>

        {/* CTA para documentación API */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/saymetristan/whaapy-docs" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-hover text-white rounded-2xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Ver documentación completa de API
          </a>
        </div>
      </div>
    </section>
  )
}

