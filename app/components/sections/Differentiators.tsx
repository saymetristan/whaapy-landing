'use client'

import { motion } from 'framer-motion'
import { SlidersHorizontal, Plug, Network, Globe2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import AIControlMockup from '../mockups/AIControlMockup'
import IntegrationsMockup from '../mockups/IntegrationsMockup'
import MetaConnectMockup from '../mockups/MetaConnectMockup'
import LatamMapMockup from '../mockups/LatamMapMockup'
import SectionReveal from '../visuals/SectionReveal'

type Card = {
  icon: LucideIcon
  title: string
  body: string
  detail: string
  Mockup: React.ComponentType<{ className?: string }>
  span: string
}

const CARDS: Card[] = [
  {
    icon: SlidersHorizontal,
    title: 'Control de la IA por conversación',
    body: 'Activa, pausa o cambia a modo sugerencia en cada chat. La IA nunca toma decisiones que tú no autorizaste.',
    detail: 'Auto · Sugerencia · Pausada',
    Mockup: AIControlMockup,
    span: 'lg:col-span-7',
  },
  {
    icon: Plug,
    title: 'Meta directo, sin intermediarios',
    body: 'Embedded signup oficial. Tu número, tu cuenta de Meta Business. Sin proxies, sin recargos por mensaje.',
    detail: 'WhatsApp Cloud API',
    Mockup: MetaConnectMockup,
    span: 'lg:col-span-5',
  },
  {
    icon: Globe2,
    title: 'Hecho y soportado en LATAM',
    body: 'Equipo en español, infraestructura cerca, soporte humano. Sin esperar 48 horas a que conteste un bot en inglés.',
    detail: 'Soporte en español, hoy',
    Mockup: LatamMapMockup,
    span: 'lg:col-span-5',
  },
  {
    icon: Network,
    title: 'Integra con lo que ya usas',
    body: 'HighLevel, Meta Lead Ads, n8n, webhooks y API pública. Lo que corre en tu negocio ahora habla con WhatsApp.',
    detail: 'API · Webhooks · n8n',
    Mockup: IntegrationsMockup,
    span: 'lg:col-span-7',
  },
]

export default function Differentiators() {
  return (
    <section id="diferenciadores" className="relative bg-bg py-20 md:py-32 lg:py-40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Diferenciadores</p>
          <SectionReveal className="mt-6">
            <h2 className="display text-display-lg text-balance">
              Por qué Whaapy y no <span className="font-serif italic text-text-muted">otro bot</span>.
            </h2>
          </SectionReveal>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:gap-5 lg:grid-cols-12">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            const Mockup = card.Mockup
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                onMouseMove={(e: ReactMouseEvent<HTMLElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
                  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
                }}
                className={`group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-premium-lg md:p-8 ${card.span}`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(37,211,102,0.1), transparent 65%)',
                  }}
                />

                <div className="relative flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-primary/20 bg-primary-light text-primary transition-all duration-500 group-hover:shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg font-bold tracking-tight text-text md:text-xl">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.body}</p>
                    <p className="mt-3 text-label text-text-subtle">{card.detail}</p>
                  </div>
                </div>

                <div className="relative mt-2 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-surface-alt/50">
                  <Mockup className="h-full w-full" />
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
