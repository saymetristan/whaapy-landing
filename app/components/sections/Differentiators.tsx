'use client'

import { motion } from 'framer-motion'
import { SlidersHorizontal, Plug, Network, Globe2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Card = {
  icon: LucideIcon
  title: string
  body: string
  detail: string
}

const CARDS: Card[] = [
  {
    icon: SlidersHorizontal,
    title: 'Control de la IA por conversación',
    body: 'Activa, pausa o cambia a modo sugerencia en cada chat. La IA nunca toma decisiones que tú no autorizaste.',
    detail: 'Auto · Sugerencia · Pausada',
  },
  {
    icon: Plug,
    title: 'Meta directo, sin intermediarios',
    body: 'Embedded signup oficial de WhatsApp Cloud API. Tu número es tuyo. Sin proxies, sin recargos por mensaje.',
    detail: 'WhatsApp Cloud API',
  },
  {
    icon: Network,
    title: 'Integra con lo que ya usas',
    body: 'HighLevel, Meta Lead Ads, n8n, webhooks y API pública. Lo que ya está corriendo en tu negocio, ahora habla con WhatsApp.',
    detail: 'API · Webhooks · n8n',
  },
  {
    icon: Globe2,
    title: 'Hecho y soportado en LATAM',
    body: 'Equipo en español, infraestructura cerca, soporte humano. Sin esperar 48 horas a que conteste un bot en inglés.',
    detail: 'Soporte en español, hoy',
  },
]

export default function Differentiators() {
  return (
    <section id="diferenciadores" className="relative py-32 md:py-40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Diferenciadores</p>
          <h2 className="display mt-6 text-display-lg text-balance">
            Por qué Whaapy y no <span className="italic text-text-muted">otro bot</span>.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="group relative bg-bg/60 p-8 transition-colors hover:bg-surface md:p-10"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(400px circle at var(--mx,50%) var(--my,50%), rgba(37,211,102,0.08), transparent 60%)',
                  }}
                />

                <div className="relative flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:shadow-glow">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-medium text-text">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{card.body}</p>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-text-subtle">
                      {card.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
