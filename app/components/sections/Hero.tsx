'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { STATS_DISPLAY } from '../../lib/stats'
import MeshGradient from '../visuals/MeshGradient'
import Grid from '../visuals/Grid'
import MagneticButton from '../ui/MagneticButton'
import Tilt from '../ui/Tilt'
import InboxMockup from '../mockups/InboxMockup'
import AIChatMockup from '../mockups/AIChatMockup'

const STATS = [
  { value: STATS_DISPLAY.messages, label: 'mensajes procesados' },
  { value: STATS_DISPLAY.aiReplies, label: 'respuestas con IA' },
  { value: STATS_DISPLAY.contacts, label: 'contactos gestionados' },
  { value: STATS_DISPLAY.meta, label: 'conexión directa' },
] as const

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
})

function StatCell({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-bg/80 px-5 py-5 text-center backdrop-blur-md"
    >
      <p className="font-mono text-base font-medium tracking-tight text-text">{value}</p>
      <p className="mt-1 text-xs text-text-subtle">{label}</p>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40">
      <MeshGradient variant="hero" className="-z-10 opacity-90" blur={110} />
      <Grid variant="dotted" className="-z-10 opacity-60" fade="radial" />

      <div className="container-page relative">
        <motion.div {...fade()} className="flex justify-center">
          <span className="eyebrow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            En producción · Conectado a Meta WhatsApp Cloud API
          </span>
        </motion.div>

        <motion.h1
          {...fade(0.05)}
          className="display mx-auto mt-8 max-w-[20ch] text-center text-display-2xl text-balance"
        >
          La capa que convierte{' '}
          <span className="font-display italic text-text-muted">WhatsApp</span>
          <br className="hidden md:block" /> en tu canal de{' '}
          <span className="text-gradient-iridescent font-display italic">venta principal</span>.
        </motion.h1>

        <motion.p
          {...fade(0.15)}
          className="mx-auto mt-7 max-w-[58ch] text-center text-base leading-relaxed text-text-muted md:text-lg"
        >
          IA que atiende, vende y te avisa cuando intervenir. Conectada directo a Meta. Hecha en
          LATAM, para los equipos que viven en WhatsApp.
        </motion.p>

        <motion.div
          {...fade(0.25)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton href="https://app.whaapy.com/signup">
            Probar gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
          <MagneticButton href="#producto" variant="ghost">
            Ver el producto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </MagneticButton>
        </motion.div>

        <motion.div {...fade(0.35)} className="relative mx-auto mt-20 max-w-6xl">
          <div className="perspective-card relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-20 -top-10 bottom-0 -z-10"
            >
              <div className="absolute left-1/2 top-1/4 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/30 blur-[120px] glow-blend" />
            </div>

            <Tilt max={4} className="relative aspect-[16/10] w-full" glare>
              <InboxMockup className="h-full w-full" />
            </Tilt>

            <div className="pointer-events-none absolute -right-4 -top-12 hidden w-[300px] md:block lg:-right-12 lg:w-[340px]">
              <motion.div
                initial={{ opacity: 0, y: -16, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[3/4]"
              >
                <Tilt max={6} className="h-full w-full">
                  <AIChatMockup className="h-full w-full" />
                </Tilt>
              </motion.div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg"
            />
          </div>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCell key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
