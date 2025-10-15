'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      const totalHeight = documentHeight - windowHeight
      const progress = (scrollTop / totalHeight) * 100
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-surface/50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-accent via-accent-hover to-accent transition-all duration-300 ease-out shadow-lg shadow-accent/20"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Circular progress indicator (visible after 20% scroll) */}
      {scrollProgress > 20 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-surface/80 backdrop-blur-xl border-2 border-border shadow-premium-lg hover:shadow-premium hover:scale-110 transition-all duration-300 group"
          aria-label="Volver arriba"
        >
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              className="text-border"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - scrollProgress / 100)}`}
              strokeLinecap="round"
              className="text-accent transition-all duration-300"
            />
          </svg>
          
          {/* Arrow icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-text-primary group-hover:-translate-y-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  )
}

