'use client'

import { motion } from 'framer-motion'
import { Quote, TrendingUp, Users, Zap } from 'lucide-react'
import { STATS_DISPLAY } from '../../lib/stats'
import MeshGradient from '../visuals/MeshGradient'
import SectionReveal from '../visuals/SectionReveal'

const STATS = [
  { icon: Users, value: STATS_DISPLAY.contacts, label: 'contactos gestionados', sub: 'En negocios reales hoy mismo' },
  { icon: Zap, value: '< 30s', label: 'tiempo medio de respuesta IA', sub: 'Mientras tu equipo duerme' },
  { icon: TrendingUp, value: '4 de 5', label: 'consultas resueltas sin humano', sub: 'En negocios bien entrenados' },
]

export default function SocialProof() {
  return (
    <section className="relative bg-surface py-32 md:py-40">
      <MeshGradient variant="corner" className="-z-10 opacity-70" blur={130} noise={false} />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Equipos en producción</p>
          <SectionReveal className="mt-6">
            <h2 className="display text-display-lg text-balance">
              No es una <span className="font-serif italic text-text-muted">demo</span>. Es el trabajo
              real.
            </h2>
          </SectionReveal>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-premium-lg md:p-12 lg:col-span-7"
          >
            <Quote className="absolute right-6 top-6 h-20 w-20 text-accent/15" />

            <blockquote className="relative">
              <p className="font-display text-2xl font-bold leading-tight tracking-tight text-text md:text-3xl">
                &ldquo;Pasamos de perder mensajes los fines de semana a cerrar ventas a las 3am.
                <span className="font-normal text-text-muted">
                  {' '}
                  La IA contesta lo repetitivo y el equipo solo entra cuando hay que cerrar.
                </span>
                &rdquo;
              </p>
            </blockquote>

            <figcaption className="mt-8 flex flex-wrap items-center gap-4 border-t border-border pt-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-fuchsia-400 to-rose-500 font-display text-base font-bold text-white">
                S
              </div>
              <div>
                <p className="text-sm font-semibold text-text">Equipo de ventas</p>
                <p className="text-xs text-text-muted">Negocio LATAM · 60 días con Whaapy</p>
              </div>
              <div className="ml-auto rounded-xl border border-primary/30 bg-primary-light px-3 py-2 text-right shadow-premium">
                <p className="font-display text-xl font-black text-primary">3×</p>
                <p className="text-label text-text-subtle">más conversaciones cerradas</p>
              </div>
            </figcaption>
          </motion.figure>

          <div className="grid grid-cols-1 gap-5 lg:col-span-5">
            {STATS.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 shadow-premium"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary-light text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-2xl font-bold tracking-tight text-text">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text">{s.label}</p>
                    <p className="mt-1 text-xs text-text-subtle">{s.sub}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
