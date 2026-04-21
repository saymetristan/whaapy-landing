import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Instrument_Serif } from 'next/font/google'
import './globals.css'
import PostHogAnalytics from './components/analytics/PostHogAnalytics'
import LenisProvider from './components/providers/LenisProvider'
import MotionProvider from './components/providers/MotionProvider'
import ThemeProvider from './components/providers/ThemeProvider'
import CursorBlob from './components/visuals/CursorBlob'
import ScrollProgress from './components/visuals/ScrollProgress'

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAFA' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://whaapy.com'),
  title: 'Whaapy — La capa que convierte WhatsApp en tu canal de venta principal',
  description:
    'IA que atiende, vende y te avisa cuando intervenir. Conectada directo a Meta. Hecha en LATAM.',
  keywords: [
    'WhatsApp Business API',
    'IA para WhatsApp',
    'Meta Cloud API',
    'CRM WhatsApp',
    'plataforma WhatsApp',
    'ventas WhatsApp',
    'atención al cliente WhatsApp',
  ],
  authors: [{ name: 'Whaapy' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/whaapy-icon-512.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Whaapy',
    url: 'https://whaapy.com',
    title: 'Whaapy — La capa que convierte WhatsApp en tu canal de venta principal',
    description:
      'IA que atiende, vende y te avisa cuando intervenir. Conectada directo a Meta. Hecha en LATAM.',
    images: [
      {
        url: '/icons/whaapy-icon-512.png',
        width: 512,
        height: 512,
        alt: 'Whaapy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whaapy — La capa que convierte WhatsApp en tu canal de venta principal',
    description:
      'IA que atiende, vende y te avisa cuando intervenir. Conectada directo a Meta.',
    images: ['/icons/whaapy-icon-512.png'],
  },
  other: {
    'fb:app_id': '1227498005473392',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrument.variable}`}
    >
      <body className="bg-bg text-text font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <LenisProvider>
              <PostHogAnalytics />
              <ScrollProgress />
              <CursorBlob />
              {children}
            </LenisProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
