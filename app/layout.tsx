import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Whaapy - Asistente de IA para WhatsApp Business',
  description: 'Automatiza tu atención al cliente en WhatsApp con IA. Respuestas instantáneas 24/7, ROI de 24x. Conecta tu WhatsApp Business en minutos.',
  keywords: ['WhatsApp Business', 'IA', 'chatbot', 'atención al cliente', 'automatización', 'ROI', 'asistente virtual'],
  authors: [{ name: 'Whaapy by Datagora' }],
  openGraph: {
    title: 'Whaapy - Asistente de IA para WhatsApp Business',
    description: 'Automatiza tu atención al cliente en WhatsApp con IA. Respuestas instantáneas 24/7, ROI de 24x.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Whaapy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whaapy - Asistente de IA para WhatsApp Business',
    description: 'Automatiza tu atención al cliente en WhatsApp con IA. ROI de 24x.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/whaapy_icons_v2/whaapy_icon_v2_512x512.png',
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
        {children}
      </body>
    </html>
  )
}

