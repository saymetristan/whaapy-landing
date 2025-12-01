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
  title: 'Whaapy - Asistente de IA para WhatsApp Business',
  description: 'Automatiza tu atención al cliente en WhatsApp con IA. Respuestas instantáneas 24/7, ROI de 24x. Conecta tu número de WhatsApp Business en minutos.',
  keywords: ['WhatsApp Business', 'IA', 'Chatbot', 'Atención al cliente', 'Automatización', 'ROI', 'WhatsApp API', 'Asistente virtual'],
  authors: [{ name: 'Whaapy' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/whaapy-icon-512.png',
  },
  metadataBase: new URL('https://whaapy.com'),
  openGraph: {
    title: 'Whaapy - Asistente de IA para WhatsApp Business',
    description: 'Automatiza tu atención al cliente en WhatsApp con IA. Respuestas instantáneas 24/7, ROI de 24x.',
    url: 'https://whaapy.com',
    siteName: 'Whaapy',
    type: 'website',
    images: [
      {
        url: '/icons/whaapy-icon-512.png',
        width: 512,
        height: 512,
        alt: 'Whaapy Logo',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Whaapy - Asistente de IA para WhatsApp Business',
    description: 'Automatiza tu atención al cliente en WhatsApp con IA. ROI de 24x.',
    images: ['/icons/whaapy-icon-512.png'],
  },
  other: {
    'fb:app_id': '1227498005473392', // TODO: Reemplaza con tu App ID real
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

