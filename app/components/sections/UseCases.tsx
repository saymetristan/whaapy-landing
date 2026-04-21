'use client'

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { useState, type ComponentType } from 'react'
import { ShoppingBag, UtensilsCrossed, Briefcase, Truck } from 'lucide-react'
import InboxMockup from '../mockups/InboxMockup'
import TemplatesMockup from '../mockups/TemplatesMockup'
import AIControlMockup from '../mockups/AIControlMockup'
import PipelineMockup from '../mockups/PipelineMockup'

type CaseId = 'ecommerce' | 'restaurantes' | 'servicios' | 'distribucion'

type Case = {
  id: CaseId
  label: string
  icon: typeof ShoppingBag
  headline: string
  body: string
  Mockup: ComponentType<{ className?: string }>
  metrics: { value: string; label: string }[]
}

const CASES: Case[] = [
  {
    id: 'ecommerce',
    label: 'E-commerce',
    icon: ShoppingBag,
    headline: 'La IA contesta stock, precios y envíos. El humano cierra.',
    body: 'Catálogo completo en la KB. La IA responde sobre disponibilidad, tiempos y promociones. Cuando el cliente está listo para pagar, te avisa.',
    Mockup: InboxMockup,
    metrics: [
      { value: 'Hasta 4 de cada 5', label: 'consultas resueltas sin humano' },
      { value: '< 1 min', label: 'tiempo medio de primera respuesta' },
    ],
  },
  {
    id: 'restaurantes',
    label: 'Restaurantes',
    icon: UtensilsCrossed,
    headline: 'Reservas, menús y horarios sin que tu mesero conteste el teléfono.',
    body: 'Templates Meta para confirmaciones automáticas. La IA toma reservas, pasa el menú y avisa cuando llega un grupo grande.',
    Mockup: TemplatesMockup,
    metrics: [
      { value: '24/7', label: 'reservas tomadas, también de madrugada' },
      { value: '0', label: 'reservas perdidas por no contestar' },
    ],
  },
  {
    id: 'servicios',
    label: 'Servicios',
    icon: Briefcase,
    headline: 'Modo sugerencia para sectores donde una palabra mal dicha cuesta caro.',
    body: 'Legal, salud, finanzas. La IA propone respuestas, tu equipo aprueba. Notas internas, exportación de conversaciones, auditoría completa.',
    Mockup: AIControlMockup,
    metrics: [
      { value: '100%', label: 'mensajes revisados antes de enviar' },
      { value: 'Auditable', label: 'cada conversación queda registrada' },
    ],
  },
  {
    id: 'distribucion',
    label: 'Distribución',
    icon: Truck,
    headline: 'Pipeline real de tu equipo, no más planillas.',
    body: 'Templates aprobados, segmentación por etiquetas, seguimiento automático. Visualiza el embudo y mueve oportunidades sin salir de WhatsApp.',
    Mockup: PipelineMockup,
    metrics: [
      { value: '+11K', label: 'destinatarios alcanzados con templates' },
      { value: 'Meta directo', label: 'cero intermediarios, cero recargos' },
    ],
  },
]

export default function UseCases() {
  const [active, setActive] = useState<CaseId>(CASES[0].id)
  const current = CASES.find((c) => c.id === active)!
  const Mockup = current.Mockup

  return (
    <section id="casos" className="relative py-32 md:py-40">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Casos de uso</p>
          <h2 className="display mt-6 text-display-lg text-balance">
            Equipos en producción, hoy.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Whaapy se adapta a cómo vendes. Cuatro formas reales de usarlo, mismo control.
          </p>
        </motion.div>

        <div className="mt-16">
          <LayoutGroup id="use-cases-tabs">
            <div
              role="tablist"
              aria-label="Casos de uso"
              className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2"
            >
              {CASES.map((c) => {
                const Icon = c.icon
                const isActive = c.id === active
                return (
                  <button
                    key={c.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${c.id}`}
                    id={`tab-${c.id}`}
                    onClick={() => setActive(c.id)}
                    className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                      isActive ? 'text-text' : 'text-text-muted hover:text-text'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="usecase-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-border bg-surface"
                        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                      />
                    )}
                    <Icon className="h-4 w-4" />
                    {c.label}
                  </button>
                )
              })}
            </div>
          </LayoutGroup>

          <div
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            className="mt-12"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:gap-14"
              >
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-medium leading-tight text-text md:text-3xl">
                    {current.headline}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">{current.body}</p>

                  <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
                    {current.metrics.map((m) => (
                      <div key={m.label} className="bg-bg/60 p-4">
                        <p className="font-mono text-sm font-medium text-text">{m.value}</p>
                        <p className="mt-1 text-xs text-text-subtle">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-[4/3] w-full lg:aspect-[16/11]">
                  <Mockup className="h-full w-full" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
