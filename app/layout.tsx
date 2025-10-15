import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Whaapy - Automatiza WhatsApp con IA',
  description: 'Atiende a todos tus clientes de WhatsApp sin perder ni una conversación. Conecta tu número y deja que tu asistente de IA responda al instante.',
  keywords: ['WhatsApp', 'Automatización', 'IA', 'Chatbot', 'WhatsApp Business'],
  authors: [{ name: 'Whaapy' }],
  openGraph: {
    title: 'Whaapy - Automatiza WhatsApp con IA',
    description: 'Atiende a todos tus clientes de WhatsApp sin perder ni una conversación',
    type: 'website',
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

