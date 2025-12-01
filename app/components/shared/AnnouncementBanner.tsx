'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function AnnouncementBanner() {
  const [isDismissed, setIsDismissed] = useState(false)

  if (isDismissed) return null

  return (
    <Link 
      href="/colme"
      className="fixed top-0 left-0 right-0 z-[60] group"
    >
      <div className="h-7 bg-gradient-to-r from-bg-primary via-accent/5 to-bg-primary flex items-center justify-center gap-2 text-xs border-b border-border-subtle/30 hover:border-accent/30 transition-all duration-300">
        {/* Dot pulsante */}
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
        </span>
        
        {/* Texto minimalista */}
        <span className="text-text-muted group-hover:text-text-primary transition-colors">
          <span className="font-medium text-accent">colme-1</span>
          <span className="hidden sm:inline ml-1.5">— Nuestro motor de orquestación ya está disponible</span>
          <span className="sm:hidden ml-1">disponible</span>
        </span>
        
        {/* Flecha sutil */}
        <span className="text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-300">
          →
        </span>
        
        {/* Close - muy sutil */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsDismissed(true)
          }}
          className="absolute right-3 text-text-muted/40 hover:text-text-muted transition-colors text-[10px]"
          aria-label="Cerrar"
        >
          ✕
        </button>
      </div>
    </Link>
  )
}
