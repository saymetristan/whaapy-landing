import { Check } from 'lucide-react'
import MockFrame from './MockFrame'

const TEMPLATES = [
  {
    name: 'reserva_confirmada',
    category: 'UTILITY',
    preview: 'Hola {{1}}, confirmamos tu reserva para {{2}} personas el {{3}} a las {{4}} hs.',
  },
  {
    name: 'recordatorio_24h',
    category: 'UTILITY',
    preview: 'Te esperamos mañana {{1}}. Si necesitas modificar tu reserva, responde a este mensaje.',
  },
  {
    name: 'promo_lanzamiento',
    category: 'MARKETING',
    preview: '{{1}}, lanzamos algo nuevo. 15% off esta semana usando el código WHAAPY15.',
  },
  {
    name: 'pago_recibido',
    category: 'UTILITY',
    preview: '¡Listo {{1}}! Recibimos tu pago de {{2}}. Tu pedido ya está en preparación.',
  },
]

const CATEGORY_TONE: Record<string, string> = {
  UTILITY: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
  MARKETING: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
}

export default function TemplatesMockup({ className }: { className?: string }) {
  return (
    <MockFrame title="templates · Meta WhatsApp" className={className}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <p className="text-[11px] font-medium text-text">Plantillas aprobadas</p>
          <span className="font-mono text-[9px] text-text-subtle">12 activas</span>
        </div>
        <ul className="flex-1 divide-y divide-border overflow-hidden">
          {TEMPLATES.map((t) => (
            <li key={t.name} className="flex items-start gap-3 px-4 py-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-deep dark:text-accent-bright">
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <code className="font-mono text-[10px] text-text">{t.name}</code>
                  <span
                    className={`rounded-full px-1.5 py-0.5 text-[8px] font-medium ${CATEGORY_TONE[t.category]}`}
                  >
                    {t.category}
                  </span>
                  <span className="ml-auto rounded-full border border-accent/40 bg-accent/10 px-1.5 py-0.5 text-[8px] font-medium text-accent-deep dark:text-accent-bright">
                    Aprobado
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-text-muted">
                  {t.preview}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MockFrame>
  )
}
