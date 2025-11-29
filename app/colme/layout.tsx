import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'colme-1: Collaborative LLM Engine | Whaapy',
  description: 'Presentamos colme-1, nuestro motor de orquestación colaborativo de LLMs para conversaciones con clientes. Inteligencia antes de inferencia, multi-modelo, auto-corrección.',
  keywords: ['colme', 'LLM', 'orquestación', 'IA conversacional', 'WhatsApp', 'chatbot', 'multi-modelo', 'RAG'],
  openGraph: {
    title: 'colme-1: Collaborative LLM Engine',
    description: 'Motor de orquestación colaborativo de LLMs para conversaciones con clientes que realmente funcionan en producción.',
    type: 'article',
    publishedTime: '2025-11-29',
    authors: ['Whaapy'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'colme-1: Collaborative LLM Engine',
    description: 'Motor de orquestación colaborativo de LLMs para conversaciones con clientes.',
  },
}

export default function ColmeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

