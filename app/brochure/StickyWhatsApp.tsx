'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

const WHATSAPP_URL =
  'https://wa.me/19288000091?text=Hola%2C%20me%20interesa%20conocer%20Whaapy'

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 360)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribenos por WhatsApp"
      className={`fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-white shadow-premium-lg transition-all duration-300 hover:scale-[1.02] hover:bg-accent-hover sm:bottom-6 sm:right-6 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="hidden sm:inline">Hablemos</span>
    </a>
  )
}
