'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AnnouncementBadge() {
  return (
    <Link 
      href="/colme"
      className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full 
                 bg-gradient-to-r from-accent/10 via-accent/5 to-transparent
                 border border-accent/20 hover:border-accent/40
                 backdrop-blur-sm
                 transition-all duration-500 ease-out
                 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.3)]
                 animate-fade-in-up"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      
      {/* Glow ring on hover */}
      <div className="absolute -inset-px rounded-full bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      {/* Badge "NEW" */}
      <span className="relative flex items-center justify-center px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-accent text-white rounded-full">
        New
      </span>
      
      {/* Text */}
      <span className="relative text-sm font-medium text-text-primary">
        Presentamos <span className="text-accent font-semibold">colme-1</span>
      </span>
      
      {/* Arrow */}
      <ArrowRight 
        size={14} 
        className="relative text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" 
      />
    </Link>
  )
}
