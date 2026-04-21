'use client'

import { motion } from 'framer-motion'
import { Plug, BookOpen, Zap } from 'lucide-react'

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
    <section className="relative py-32 md:py-40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Onboarding</p>
          <h2 className="display mt-6 text-display-lg text-balance">
            De cero a vendiendo, en{' '}
            <span className="text-gradient-accent">15 minutos</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Tres pasos. Sin código. Sin agencia. Sin esperar dos meses a que un proveedor te
            integre.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px md:block"
            style={{
              backgroundImage:
                'linear-gradient(90deg, transparent 0%, rgb(var(--border)) 12%, rgb(var(--border)) 88%, transparent 100%)',
            }}
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="relative z-10 mx-auto grid h-24 w-24 place-items-center rounded-full border border-border bg-surface">
                    <div
                      aria-hidden
                      className="absolute inset-0 rounded-full opacity-40 blur-xl"
                      style={{
                        background:
                          'radial-gradient(circle, rgba(37,211,102,0.25), transparent 70%)',
                      }}
                    />
                    <Icon className="h-7 w-7 text-accent" />
                  </div>

                  <div className="mt-8 text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-subtle">
                      Paso {step.n} · {step.time}
                    </p>
                    <h3 className="mt-3 text-lg font-medium text-text">{step.title}</h3>
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
