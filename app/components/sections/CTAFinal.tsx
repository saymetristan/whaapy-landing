'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="frame relative overflow-hidden px-8 py-16 text-center md:px-16 md:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[500px] w-[800px] glow-accent blur-3xl opacity-50"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] mask-fade-b opacity-20"
          />

          <p className="eyebrow relative">Listo para probar</p>
          <h2 className="display relative mx-auto mt-6 max-w-[24ch] text-display-xl text-balance">
            Conecta tu WhatsApp.
            <br />
            <span className="text-gradient-accent">Deja que Whaapy haga el resto.</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-muted">
            Sin contratos largos. Sin instalación. Sin agencia. Solo conectas tu número y empiezas a
            vender mientras tu equipo se enfoca en cerrar.
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="https://app.whaapy.com/signup" className="btn-primary group">
              Probar gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="mailto:soporte@whaapy.com?subject=Demo%20Whaapy"
              className="btn-ghost"
            >
              Hablar con el equipo
            </Link>
          </div>

          <p className="relative mt-8 text-xs text-text-subtle">
            Sin tarjeta de crédito · Soporte en español · Conectado directo a Meta
          </p>
        </motion.div>
      </div>
    </section>
  )
}
