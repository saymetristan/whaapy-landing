'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { STATS_DISPLAY } from '../../lib/stats'

const STATS = [
  { value: STATS_DISPLAY.messages, label: 'mensajes procesados' },
  { value: STATS_DISPLAY.aiReplies, label: 'respuestas con IA' },
  { value: STATS_DISPLAY.contacts, label: 'contactos gestionados' },
  { value: STATS_DISPLAY.meta, label: 'conexión directa' },
] as const

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
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
    <section className="relative overflow-hidden pt-36 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-faint [background-size:48px_48px] mask-fade-b opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[640px] w-[1100px] -translate-x-1/2 glow-accent glow-blend blur-3xl opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-noise opacity-[0.5] dark:opacity-[0.4]"
      />

      <div className="container-page">
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
          className="display mx-auto mt-8 max-w-[18ch] text-center text-display-xl text-balance md:max-w-[20ch]"
        >
          La capa que convierte{' '}
          <span className="italic text-text-muted">WhatsApp</span>
          <br className="hidden md:block" /> en tu canal de{' '}
          <span className="text-gradient-accent">venta principal</span>.
        </motion.h1>

        <motion.p
          {...fade(0.15)}
          className="mx-auto mt-6 max-w-[58ch] text-center text-base leading-relaxed text-text-muted md:text-lg"
        >
          IA que atiende, vende y te avisa cuando intervenir. Conectada directo a Meta. Hecha en
          LATAM, para los equipos que viven en WhatsApp.
        </motion.p>

        <motion.div
          {...fade(0.25)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="https://app.whaapy.com/signup" className="btn-primary group">
            Probar gratis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="#producto" className="btn-ghost group">
            Ver el producto
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
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
