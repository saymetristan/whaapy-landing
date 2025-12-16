'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import anime from 'animejs'
import { ExternalLink, Code2, Zap } from 'lucide-react'
import ParallaxSection from '../shared/ParallaxSection'

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const screenshotsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !screenshotsRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate screenshots in
            anime({
              targets: screenshotsRef.current?.querySelectorAll('.screenshot-card'),
              translateY: [60, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'cubicBezier(0.16, 1, 0.3, 1)',
              delay: anime.stagger(150),
            })

            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <ParallaxSection>
      <section
        id="producto"
        ref={sectionRef}
        className="relative py-32 px-6 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              El Producto
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Una plataforma completa para gestionar WhatsApp con IA
            </p>
          </div>

          {/* Screenshots Grid */}
          <div ref={screenshotsRef} className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Inbox Screenshot */}
            <div className="screenshot-card group">
              <div className="relative aspect-[4/3] bg-surface rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/product/inbox-screenshot.svg"
                  alt="Inbox View - Lista de conversaciones"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-1">Inbox Inteligente</h3>
                  <p className="text-sm text-white/90">
                    Gestiona todas tus conversaciones con filtros avanzados
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Screenshot */}
            <div className="screenshot-card group">
              <div className="relative aspect-[4/3] bg-surface rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/product/chat-screenshot.svg"
                  alt="Chat Panel - IA respondiendo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-1">IA en Tiempo Real</h3>
                  <p className="text-sm text-white/90">
                    Observa cómo la IA responde automáticamente a tus clientes
                  </p>
                </div>
              </div>
            </div>

            {/* Agent Config Screenshot */}
            <div className="screenshot-card group">
              <div className="relative aspect-[4/3] bg-surface rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/product/agent-config-screenshot.svg"
                  alt="Agent Config - Configuración del agente"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-1">Control Total</h3>
                  <p className="text-sm text-white/90">
                    Personaliza cada aspecto de tu asistente de IA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-surface-elevated rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-text-primary">
                Arquitectura Técnica
              </h3>
            </div>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Arquitectura multi-servicio con backend REST API, frontend Next.js, 
              servicio de IA con Python + LangGraph, y comunicación en tiempo real 
              vía WebSocket. Integración oficial con WhatsApp Business API.
            </p>

            {/* Stack Pills */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-text-primary">Backend:</span>
                  <span className="text-text-secondary">Bun + Hono + PostgreSQL + Redis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-text-primary">Frontend:</span>
                  <span className="text-text-secondary">Next.js 15 + TypeScript + Tailwind</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-text-primary">IA:</span>
                  <span className="text-text-secondary">Python + LangChain + LangGraph + OpenAI/Groq</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-semibold text-text-primary">Real-time:</span>
                  <span className="text-text-secondary">WebSocket + Socket.io</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="https://app.whaapy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver producto en vivo
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  )
}

