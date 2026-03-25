import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Whaapy Brochure | Tu WhatsApp vende por ti',
  description:
    'Descubre como Whaapy atiende, vende y agenda por tu negocio desde WhatsApp. IA 24/7, inbox inteligente, pipeline y metricas en un solo lugar.',
  openGraph: {
    title: 'Whaapy | Brochure Web',
    description:
      'IA para WhatsApp que responde, vende y agenda por tu negocio. Conoce el producto en minutos.',
    url: 'https://whaapy.com/brochure',
    type: 'website',
    images: [
      {
        url: '/brochure/inbox-chat.png',
        width: 1024,
        height: 1024,
        alt: 'Whaapy brochure web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whaapy | Brochure Web',
    description:
      'Conoce Whaapy: IA para WhatsApp que atiende, vende y agenda por tu negocio.',
    images: ['/brochure/inbox-chat.png'],
  },
}

export default function BrochureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
