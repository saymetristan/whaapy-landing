'use client'

import { Sparkles, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function AnnouncementBanner() {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-accent/10 border-b border-accent/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center gap-3 py-2 sm:py-2.5 relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-accent/10 text-accent px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
            <Sparkles size={12} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Anuncio de Tecnología</span>
            <span className="sm:hidden">Nuevo</span>
          </div>

          {/* Text */}
          <Link 
            href="/colme"
            className="text-xs sm:text-sm text-text-primary hover:text-accent transition-colors font-medium flex items-center gap-1.5 sm:gap-2"
          >
            <span>Presentamos <span className="text-accent font-bold">colme-1</span></span>
            <span className="hidden sm:inline">— Motor de Orquestación Colaborativo de LLMs</span>
            <span className="text-accent">→</span>
          </Link>

          {/* Close button */}
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute right-0 p-1 text-text-muted hover:text-text-primary transition-colors rounded-full hover:bg-accent/10"
            aria-label="Cerrar anuncio"
          >
            <X size={14} className="sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

