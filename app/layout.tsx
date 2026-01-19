import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PostHogAnalytics from './components/analytics/PostHogAnalytics'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Whaapy - Tu WhatsApp vende por ti mientras descansas',
  description: 'Un asistente inteligente que responde a tus clientes 24/7 por WhatsApp. Configúralo en 10 minutos, sin técnicos ni instalaciones.',
  keywords: ['WhatsApp Business', 'asistente WhatsApp', 'chatbot WhatsApp', 'atención automática', 'ventas WhatsApp', 'respuestas automáticas', 'negocio WhatsApp'],
  authors: [{ name: 'Whaapy' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/whaapy-icon-512.png',
  },
  metadataBase: new URL('https://whaapy.com'),
  openGraph: {
    title: 'Whaapy - Tu WhatsApp vende por ti mientras descansas',
    description: 'Un asistente inteligente que responde a tus clientes 24/7 por WhatsApp. Configúralo en 10 minutos.',
    url: 'https://whaapy.com',
    siteName: 'Whaapy',
    type: 'website',
    images: [
      {
        url: '/icons/whaapy-icon-512.png',
        width: 512,
        height: 512,
        alt: 'Whaapy - Tu WhatsApp vende por ti',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Whaapy - Tu WhatsApp vende por ti',
    description: 'Asistente inteligente que responde a tus clientes 24/7 por WhatsApp. Configúralo en minutos.',
    images: ['/icons/whaapy-icon-512.png'],
  },
  other: {
    'fb:app_id': '1227498005473392',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <PostHogAnalytics />
        {children}
      </body>
    </html>
  )
}

