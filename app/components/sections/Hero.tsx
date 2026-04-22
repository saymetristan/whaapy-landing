'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { STATS_DISPLAY } from '../../lib/stats'
import MeshGradient from '../visuals/MeshGradient'
import Grid from '../visuals/Grid'
import LiquidBlobs from '../visuals/LiquidBlobs'
import ChatPattern from '../visuals/ChatPattern'
import MagneticButton from '../ui/MagneticButton'
import Tilt from '../ui/Tilt'
import InboxMockup from '../mockups/InboxMockup'
import AIChatMockup from '../mockups/AIChatMockup'
import SectionReveal from '../visuals/SectionReveal'

const STATS = [
  { value: STATS_DISPLAY.messages, label: 'mensajes procesados' },
  { value: STATS_DISPLAY.aiReplies, label: 'respuestas con IA' },
  { value: STATS_DISPLAY.contacts, label: 'contactos gestionados' },
  { value: STATS_DISPLAY.meta, label: 'conexión directa' },
] as const

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay },
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
      className="bg-surface px-3 py-4 text-center shadow-premium sm:px-5 sm:py-5"
    >
      <p className="font-display text-lg font-bold tracking-tight text-text sm:text-xl md:text-2xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] font-semibold text-text-muted sm:text-label">{label}</p>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-36">
      <LiquidBlobs placement="hero" className="-z-20" />
      <ChatPattern className="-z-10 opacity-[0.2]" />
      <MeshGradient variant="hero" className="-z-10 opacity-100" blur={100} noise={false} />
      <Grid variant="lines" className="-z-10 opacity-50" fade="radial" />

      <div className="container-page relative pb-14 md:pb-24">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10">
          <div className="max-w-xl">
            <motion.div {...fade()} className="flex justify-start">
              <span className="eyebrow">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                </span>
                En producción · Meta WhatsApp Cloud API
              </span>
            </motion.div>

            <SectionReveal className="mt-8">
              <h1 className="display text-display-2xl text-balance lg:max-w-[14ch]">
                La capa que convierte{' '}
                <span className="font-serif italic text-primary">WhatsApp</span>
                <br />
                en tu canal de{' '}
                <span className="gradient-text font-serif italic">venta principal</span>.
              </h1>
            </SectionReveal>

            <motion.p
              {...fade(0.12)}
              className="mt-5 max-w-lg text-[15px] leading-relaxed text-text-muted sm:mt-6 sm:text-base md:text-lg"
            >
              IA que atiende, vende y te avisa cuando intervenir. Conectada directo a Meta. Hecha en
              LATAM, para los equipos que viven en WhatsApp.
            </motion.p>

            <motion.div
              {...fade(0.2)}
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <MagneticButton href="#contacto" className="w-full sm:w-auto">
                Contáctanos
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-105" />
              </MagneticButton>
              <MagneticButton href="#producto" variant="ghost" className="w-full sm:w-auto">
                Ver el producto
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div {...fade(0.25)} className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 md:-inset-10"
            >
              <div className="absolute left-1/2 top-1/3 h-[260px] w-[min(100%,520px)] -translate-x-1/2 rounded-full bg-primary/20 blur-[80px] sm:h-[320px] sm:blur-[100px]" />
            </div>

            <div className="perspective-card relative mx-auto w-full max-w-2xl lg:mr-0 lg:ml-auto">
              <Tilt max={5} className="relative aspect-[5/4] w-full sm:aspect-[16/10]" glare>
                <InboxMockup className="h-full w-full" />
              </Tilt>

              <div className="pointer-events-none absolute -right-2 -top-10 z-10 hidden w-[min(100%,280px)] sm:block md:-right-6 md:w-[300px] lg:-right-8">
                <motion.div
                  initial={{ opacity: 0, y: -12, rotate: -4 }}
                  animate={{ opacity: 1, y: 0, rotate: -5 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[3/4]"
                >
                  <Tilt max={7} className="h-full w-full" glare>
                    <AIChatMockup className="h-full w-full shadow-premium-lg" />
                  </Tilt>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-14 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCell key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
