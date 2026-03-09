import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'colme-2: Nueva arquitectura de agentes | Whaapy',
  description:
    'Presentamos colme-2, la nueva arquitectura de agentes de Whaapy: inspirada en OpenClaw, construida para tools, handoff, control operativo y agentes de negocio en WhatsApp.',
  keywords: [
    'colme-2',
    'colme',
    'OpenClaw',
    'agent runtime',
    'IA conversacional',
    'WhatsApp',
    'tools',
    'RAG',
  ],
  openGraph: {
    title: 'colme-2: Nueva arquitectura de agentes',
    description:
      'La evolución de colme-1: un runtime de agentes más determinista, más operable y mejor preparado para negocios reales.',
    type: 'article',
    publishedTime: '2026-03-09',
    authors: ['Whaapy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'colme-2: Nueva arquitectura de agentes',
    description:
      'La evolución de colme-1 para agentes de negocio en WhatsApp, inspirada en OpenClaw y construida para producción.',
  },
}

export default function Colme2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
