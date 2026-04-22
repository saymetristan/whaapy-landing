'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import LiquidBlobs from '../visuals/LiquidBlobs'
import SectionReveal from '../visuals/SectionReveal'

export default function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-hover to-[#0d6b5e] py-24 text-primary-foreground md:py-32">
      <LiquidBlobs placement="cta" className="opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl px-4 text-center md:px-8"
        >
          <p className="inline-flex rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-label text-primary-foreground/90">
            Listo para probar
          </p>
          <SectionReveal className="mt-6">
            <h2 className="font-display text-display-xl font-bold text-balance text-primary-foreground">
              Conecta tu WhatsApp.
              <br />
              <span className="font-serif italic text-primary-foreground/95">Deja que Whaapy haga el resto.</span>
            </h2>
          </SectionReveal>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Sin contratos largos. Sin instalación. Sin agencia. Solo conectas tu número y empiezas a
            vender mientras tu equipo se enfoca en cerrar.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="https://app.whaapy.com/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 bg-primary-foreground px-6 py-3 text-sm font-bold text-primary shadow-premium-lg transition hover:bg-primary-foreground/95"
            >
              Probar gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="mailto:soporte@whaapy.com?subject=Demo%20Whaapy"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
            >
              Hablar con el equipo
            </Link>
          </div>

          <p className="mt-8 text-xs text-primary-foreground/70">
            Sin tarjeta de crédito · Soporte en español · Conectado directo a Meta
          </p>
        </motion.div>
      </div>
    </section>
  )
}
