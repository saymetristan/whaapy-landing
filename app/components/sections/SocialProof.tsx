'use client'

import { motion } from 'framer-motion'
import { Quote, TrendingUp, Users, Zap } from 'lucide-react'
import { STATS_DISPLAY } from '../../lib/stats'
import MeshGradient from '../visuals/MeshGradient'

const STATS = [
  { icon: Users, value: STATS_DISPLAY.contacts, label: 'contactos gestionados', sub: 'En negocios reales hoy mismo' },
  { icon: Zap, value: '< 30s', label: 'tiempo medio de respuesta IA', sub: 'Mientras tu equipo duerme' },
  { icon: TrendingUp, value: '4 de 5', label: 'consultas resueltas sin humano', sub: 'En negocios bien entrenados' },
]

export default function SocialProof() {
  return (
    <section className="relative py-32 md:py-40">
      <MeshGradient variant="corner" className="-z-10 opacity-50" blur={130} noise={false} />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Equipos en producción</p>
          <h2 className="display mt-6 text-display-lg text-balance">
            No es una <span className="font-display italic text-text-muted">demo</span>.
            Es el trabajo real.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-3xl border border-border bg-surface/40 p-8 backdrop-blur-md md:p-12 lg:col-span-7"
          >
            <Quote className="absolute right-6 top-6 h-16 w-16 text-accent/10" />

            <blockquote className="relative">
              <p className="font-display text-2xl leading-tight tracking-tight text-text md:text-3xl">
                &ldquo;Pasamos de perder mensajes los fines de semana a cerrar ventas a las 3am.
                <span className="text-text-muted">
                  {' '}
                  La IA contesta lo repetitivo y el equipo solo entra cuando hay que cerrar.
                </span>
                &rdquo;
              </p>
            </blockquote>

            <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-fuchsia-400 to-rose-500 text-base font-medium text-white">
                S
              </div>
              <div>
                <p className="text-sm font-medium text-text">Equipo de ventas</p>
                <p className="text-xs text-text-muted">Negocio LATAM · 60 días con Whaapy</p>
              </div>
              <div className="ml-auto rounded-xl border border-accent/30 bg-accent/10 px-3 py-2 text-right">
                <p className="font-mono text-lg font-medium text-accent-bright">3×</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-text-subtle">
                  más conversaciones cerradas
                </p>
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
                  className="flex items-start gap-4 rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur-md"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-bright">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-2xl font-medium tracking-tight text-text">
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-text">{s.label}</p>
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
