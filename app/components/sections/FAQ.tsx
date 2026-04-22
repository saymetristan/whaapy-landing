'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import SectionReveal from '../visuals/SectionReveal'

const FAQS = [
  {
    q: '¿Tengo que cambiar mi número de WhatsApp?',
    a: 'No. Conectas tu número actual a través del embedded signup oficial de Meta. Tu número, tu cuenta de Meta Business, tu historial.',
  },
  {
    q: '¿La IA puede equivocarse?',
    a: 'Sí, como cualquier IA. Por eso Whaapy te deja activarla por conversación, usar modo sugerencia (la IA propone, tú apruebas) o apagarla por completo. Tú defines el riesgo que aceptas.',
  },
  {
    q: '¿Qué pasa si mis clientes prefieren hablar con una persona?',
    a: 'La IA detecta cuándo escalar y te avisa al instante. Tu equipo retoma la conversación sin perder contexto: ve el historial completo y las notas internas.',
  },
  {
    q: '¿Cómo le enseño a la IA mi negocio?',
    a: 'Subes tus documentos (PDF, Word, links), tu catálogo y tus preguntas frecuentes. La IA usa esa información para responder, sin inventar lo que no sabe.',
  },
  {
    q: '¿Se integra con mi CRM o con n8n?',
    a: 'Integraciones nativas con HighLevel, Meta Lead Ads y n8n. Webhooks y API pública para conectar con cualquier sistema. Compatible con la API de Meta WhatsApp Cloud.',
  },
  {
    q: '¿Puedo enviar mensajes masivos?',
    a: 'Sí, vía templates aprobados por Meta. Segmentas por etiquetas o por estado del pipeline. Sin trucos que arriesguen tu número.',
  },
  {
    q: '¿Y si quiero hablar con alguien antes de probar?',
    a: 'Escríbenos a soporte@whaapy.com. Te respondemos en español, en horas de oficina LATAM, sin formularios eternos.',
  },
] as const

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const panelId = `panel-${id}`
  const buttonId = `button-${id}`

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        id={buttonId}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          setOpen((v) => !v)
          window.requestAnimationFrame(() => {
            window.setTimeout(() => window.__lenis?.resize(), 380)
          })
        }}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-primary md:gap-6 md:py-6"
      >
        <span className="text-[15px] font-semibold leading-snug text-text md:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border bg-surface text-text-muted shadow-premium"
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 pr-2 text-sm leading-relaxed text-text-muted md:pr-12 md:text-base">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-bg py-20 md:py-32 lg:py-40">
      <div className="container-page grid gap-12 md:gap-16 lg:grid-cols-[1fr,1.6fr] lg:gap-24">
        <div>
          <p className="eyebrow">FAQ</p>
          <SectionReveal className="mt-6">
            <h2 className="display text-display-lg text-balance">Lo que importa antes de probar.</h2>
          </SectionReveal>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            ¿Te queda alguna duda? Escríbenos a{' '}
            <a
              href="mailto:soporte@whaapy.com"
              className="font-semibold text-primary underline decoration-primary/40 decoration-2 underline-offset-4 hover:decoration-primary"
            >
              soporte@whaapy.com
            </a>{' '}
            y te respondemos en español.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-2 shadow-premium-lg md:p-4">
          {FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
