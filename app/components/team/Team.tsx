'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { Linkedin } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  emoji: string
  tagline: string
  linkedin: string
  initials: string
  color: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Jorge Tristan',
    role: 'El que programa',
    emoji: '👨‍💻',
    tagline: 'Emprendedor tech desde 2022. Construye Whaapy porque cree que los negocios pequeños merecen herramientas de los grandes.',
    linkedin: 'https://www.linkedin.com/in/saymetristan/',
    initials: 'JT',
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'Alejandro Martinez',
    role: 'El que entiende PyMEs',
    emoji: '🎯',
    tagline: 'Ingeniero + 6 años ayudando a negocios a vender más. Sabe exactamente qué necesitas porque lo ha vivido contigo.',
    linkedin: 'https://www.linkedin.com/in/alejandro-martinez-licon-2ba2b8249/',
    initials: 'AM',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Roberto Martinez',
    role: 'El que hace que funcione',
    emoji: '🚀',
    tagline: '6+ años escalando negocios. Se asegura de que Whaapy funcione perfecto y de que siempre tengas soporte real.',
    linkedin: 'https://www.linkedin.com/in/roberto-martinez-4b547717b/',
    initials: 'RM',
    color: 'from-purple-500 to-pink-600',
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
            anime({
              targets: cardsRef.current?.querySelectorAll('.team-card'),
              translateY: [40, 0],
              opacity: [0, 1],
              duration: 800,
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
    <section
      id="equipo"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-white to-surface"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Gente real <span className="gradient-text">detrás de Whaapy</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            No somos una corporación gigante. Somos tres mexicanos 
            que queremos ayudarte a vender más y trabajar menos.
          </p>
        </div>

        {/* Team Cards - Horizontal en desktop */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="team-card opacity-0 group bg-white rounded-2xl p-6 md:p-8 border-2 border-border hover:border-accent/30 transition-all duration-300 hover:shadow-xl text-center"
            >
              {/* Emoji grande */}
              <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {member.emoji}
              </div>

              {/* Nombre y rol */}
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-accent mb-4">
                {member.role}
              </p>

              {/* Tagline */}
              <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-6">
                {member.tagline}
              </p>

              {/* LinkedIn - más sutil */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-[#0A66C2] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Badge */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface rounded-full border border-border">
            <span className="text-xl">🇲🇽</span>
            <span className="text-sm text-text-secondary">
              Hecho en México, para negocios de toda Latinoamérica
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
