'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Linkedin } from 'lucide-react'
import ParallaxSection from '../shared/ParallaxSection'

interface TeamMember {
  name: string
  role: string
  why: string
  linkedin: string
  initials: string
  color: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jorge Tristan',
    role: 'CEO & Founder',
    why: 'Founder de Datágora (plataforma de IA desde 2022). Ha desarrollado soluciones AI-powered que transforman procesos empresariales. Lidera la arquitectura técnica de Whaapy y el desarrollo del agente conversacional con LangChain/LangGraph.',
    linkedin: 'https://www.linkedin.com/in/saymetristan/',
    initials: 'JT',
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
  },
  {
    name: 'Alejandro Martinez Licon',
    role: 'Co-Founder & CMO',
    why: 'Ingeniero Mecatrónico + 6 años en marketing digital (VADAI). Combina visión técnica de automatización con profundo entendimiento de cómo las PyMEs necesitan comunicarse. Traduce IA compleja en soluciones simples para negocios reales.',
    linkedin: 'https://www.linkedin.com/in/alejandro-martinez-licon-2ba2b8249/',
    initials: 'AM',
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
  },
  {
    name: 'Roberto Martinez',
    role: 'Co-Founder & COO',
    why: '6+ años escalando operaciones de marketing en VADAI (desde 2019). Experto en estrategias 360º y gestión de equipos. Lidera el go-to-market de Whaapy y asegura que el producto escale sin perder calidad en la ejecución.',
    linkedin: 'https://www.linkedin.com/in/roberto-martinez-4b547717b/',
    initials: 'RM',
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
  },
]

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate team cards in
            anime({
              targets: cardsRef.current?.querySelectorAll('.team-card'),
              translateY: [60, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: 'cubicBezier(0.16, 1, 0.3, 1)',
              delay: anime.stagger(200),
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
        id="equipo"
        ref={sectionRef}
        className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-surface"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              El Equipo Detrás de Whaapy
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              La combinación perfecta de IA, ingeniería y operaciones para construir 
              la mejor plataforma conversacional
            </p>
          </div>

          {/* Team Cards */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="team-card group bg-white rounded-2xl p-8 border border-border shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg`}
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {member.role}
                  </p>
                </div>

                {/* Why Section */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-text-primary mb-2">
                    Por qué construyó Whaapy:
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {member.why}
                  </p>
                </div>

                {/* LinkedIn Link */}
                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                    Ver perfil
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-surface-elevated rounded-xl px-8 py-4 border border-border">
              <p className="text-text-secondary text-sm">
                <span className="font-semibold text-text-primary">Hecho en México</span> 🇲🇽 • 
                Startup tecnológica fundada en 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </ParallaxSection>
  )
}

