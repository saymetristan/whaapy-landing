'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { Bot, MessageSquareText, Settings2, ShieldCheck, ListChecks, Workflow } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import InboxMockup from '../mockups/InboxMockup'
import AIChatMockup from '../mockups/AIChatMockup'
import AIControlMockup from '../mockups/AIControlMockup'
import IntegrationsMockup from '../mockups/IntegrationsMockup'
import TemplatesMockup from '../mockups/TemplatesMockup'
import PipelineMockup from '../mockups/PipelineMockup'
import MeshGradient from '../visuals/MeshGradient'
import SectionReveal from '../visuals/SectionReveal'

type Cell = {
  id: string
  span: string
  title: string
  body: string
  icon: LucideIcon
  Mockup: React.ComponentType<{ className?: string }>
  mockupClass?: string
}

const CELLS: Cell[] = [
  {
    id: 'inbox',
    span: 'lg:col-span-8 lg:row-span-2',
    title: 'Inbox unificado.',
    body: 'Cada conversación, cada contacto, cada nota interna en una sola pantalla. Tu equipo deja de saltar entre apps.',
    icon: MessageSquareText,
    Mockup: InboxMockup,
    mockupClass: 'aspect-[16/10]',
  },
  {
    id: 'ai',
    span: 'lg:col-span-4',
    title: 'IA con tu negocio.',
    body: 'Catálogo, políticas, tono. Responde como tú, en segundos.',
    icon: Bot,
    Mockup: AIChatMockup,
    mockupClass: 'aspect-[3/4]',
  },
  {
    id: 'control',
    span: 'lg:col-span-4',
    title: 'Control por chat.',
    body: 'Auto, sugerencia o pausada. Tú decides el riesgo.',
    icon: ShieldCheck,
    Mockup: AIControlMockup,
    mockupClass: 'aspect-[3/4]',
  },
  {
    id: 'pipeline',
    span: 'lg:col-span-8',
    title: 'Pipeline de tu equipo.',
    body: 'Mueve oportunidades, etiqueta contactos y cierra deals sin salir de WhatsApp.',
    icon: ListChecks,
    Mockup: PipelineMockup,
    mockupClass: 'aspect-[16/8]',
  },
  {
    id: 'templates',
    span: 'lg:col-span-7',
    title: 'Templates aprobados por Meta.',
    body: 'Broadcasts a miles sin pelearte con la ventana de 24h. Segmentación por etiquetas.',
    icon: Settings2,
    Mockup: TemplatesMockup,
    mockupClass: 'aspect-[16/9]',
  },
  {
    id: 'integrations',
    span: 'lg:col-span-5',
    title: 'Conectado a tu stack.',
    body: 'Meta, n8n, HighLevel, webhooks, API.',
    icon: Workflow,
    Mockup: IntegrationsMockup,
    mockupClass: 'aspect-square',
  },
]

function BentoCard({ cell, index }: { cell: Cell; index: number }) {
  const Icon = cell.icon
  const Mockup = cell.Mockup
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group bento-hover relative flex flex-col gap-5 rounded-3xl border border-border bg-surface p-5 shadow-premium-lg md:p-7 ${cell.span}`}
    >
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/20 bg-primary-light text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold tracking-tight text-text md:text-xl">
            {cell.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{cell.body}</p>
        </div>
      </div>

      <div className={`relative w-full overflow-hidden ${cell.mockupClass ?? ''}`}>
        <Mockup className="h-full w-full" />
      </div>
    </motion.article>
  )
}

export default function ProductBento() {
  return (
    <section id="producto" className="relative bg-bg py-32 md:py-40">
      <MeshGradient variant="subtle" className="-z-10 opacity-80" blur={140} noise={false} />

      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow">Producto</p>
          <SectionReveal className="mt-6">
            <h2 className="display text-display-lg text-balance">
              Una <span className="font-serif italic text-primary">capa</span>. Toda tu operación en{' '}
              <span className="gradient-text font-serif italic">WhatsApp</span>.
            </h2>
          </SectionReveal>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Seis piezas que ya viven en producción. No es una promesa, es lo que tu equipo abre
            cada mañana.
          </p>
        </motion.div>

        <Block />
      </div>
    </section>
  )
}

function Block(): ReactNode {
  return (
    <div className="mt-16 grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-12">
      {CELLS.map((cell, i) => (
        <BentoCard key={cell.id} cell={cell} index={i} />
      ))}
    </div>
  )
}
