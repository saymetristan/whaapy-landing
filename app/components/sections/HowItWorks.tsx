'use client'

import { motion } from 'framer-motion'
import { Plug, BookOpen, Zap } from 'lucide-react'
import SectionReveal from '../visuals/SectionReveal'

const STEPS = [
  {
    n: '01',
    icon: Plug,
    title: 'Conectas tu WhatsApp con Meta',
    body: 'Sin QR ni intermediarios. Embedded signup oficial de Meta WhatsApp Cloud API. Tu número, tu cuenta, tus reglas.',
    time: '5 min',
  },
  {
    n: '02',
    icon: BookOpen,
    title: 'Le enseñas tu negocio',
    body: 'Subes tus documentos, tu catálogo, tu tono. La IA aprende cómo respondes y deja de inventar.',
    time: '5 min',
  },
  {
    n: '03',
    icon: Zap,
    title: 'La IA empieza a vender',
    body: 'Activas la IA en las conversaciones que quieras. Modo automático o sugerencia. Tu equipo se enfoca en cerrar.',
    time: '5 min',
  },
] as const

export default function HowItWorks() {
  return (
    <section className="relative bg-surface-alt py-32 md:py-40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Onboarding</p>
          <SectionReveal className="mt-6">
            <h2 className="display text-display-lg text-balance">
              De cero a vendiendo, en{' '}
              <span className="gradient-text font-serif italic">15 minutos</span>.
            </h2>
          </SectionReveal>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Tres pasos. Sin código. Sin agencia. Sin esperar dos meses a que un proveedor te
            integre.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-0 border-t-2 border-dashed border-primary/35 md:block"
          />

          <div className="grid gap-14 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 grid h-24 w-24 place-items-center rounded-full border-2 border-primary/25 bg-primary-light shadow-premium">
                    <span className="font-display text-2xl font-black text-primary">{step.n}</span>
                    <span className="absolute -bottom-1 grid h-9 w-9 place-items-center rounded-full border border-border bg-surface shadow-premium">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  </div>

                  <div className="mt-10 max-w-sm">
                    <p className="text-label text-text-subtle">
                      Paso {step.n} · {step.time}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-bold text-text">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.body}</p>
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
