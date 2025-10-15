'use client'

import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { ArrowRight } from 'lucide-react'
import AnimatedMockup from './AnimatedMockup'
import MorphingShape from './MorphingShape'
import Particles from './Particles'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero headline - entrada staggered
    if (headlineRef.current) {
      const spans = headlineRef.current.querySelectorAll('span')
      anime.timeline()
        .add({
          targets: spans,
          translateY: [100, 0],
          opacity: [0, 1],
          duration: 1200,
          easing: 'cubicBezier(0.16, 1, 0.3, 1)',
          delay: anime.stagger(80)
        })
    }

    // Subheadline
    if (subheadlineRef.current) {
      anime({
        targets: subheadlineRef.current,
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'cubicBezier(0.16, 1, 0.3, 1)',
        delay: 600
      })
    }

    // CTAs
    if (ctaRef.current) {
      anime({
        targets: ctaRef.current,
        scale: [0.9, 1],
        opacity: [0, 1],
        duration: 800,
        easing: 'spring(1, 80, 10, 0)',
        delay: 1000
      })
    }
  }, [])

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const ripple = document.createElement('span')
    ripple.classList.add('ripple')
    button.appendChild(ripple)
    
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2
    
    ripple.style.width = ripple.style.height = size + 'px'
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    
    anime({
      targets: ripple,
      scale: [0, 2],
      opacity: [0.6, 0],
      duration: 600,
      easing: 'easeOutQuad',
      complete: () => ripple.remove()
    })
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden bg-gradient-to-b from-white to-surface">
      {/* Background decorative elements - más sutiles */}
      <div className="liquid-blob" style={{ top: '-10%', right: '-5%', opacity: 0.3 }} />
      <MorphingShape />
      <Particles count={20} />
      
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="gradient-text">Whaapy</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://app.whaapy.com/login" 
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              Login
            </a>
            <a 
              href="https://app.whaapy.com/register" 
              className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
            >
              Empezar gratis
            </a>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.04em] mb-6"
          >
            <span className="inline-block">Atiende</span>
            {' '}
            <span className="inline-block">a</span>
            {' '}
            <span className="inline-block">todos</span>
            {' '}
            <span className="inline-block">tus</span>
            {' '}
            <span className="inline-block">clientes</span>
            {' '}
            <span className="inline-block">de</span>
            <br />
            <span className="inline-block gradient-text">WhatsApp</span>
            {' '}
            <span className="inline-block">sin</span>
            {' '}
            <span className="inline-block">perder</span>
            {' '}
            <span className="inline-block">ni</span>
            <br className="hidden md:block" />
            <span className="inline-block">una</span>
            {' '}
            <span className="inline-block">conversación</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 opacity-0 leading-relaxed"
          >
            Conecta tu número de WhatsApp Business y deja que tu asistente de IA responda al instante. Tú decides cuándo toma el control y cuándo lo haces tú.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
            <button 
              onClick={handleCTAClick}
              className="relative px-10 py-5 bg-accent text-white rounded-2xl hover:bg-accent-hover transition-all hover:scale-[1.02] font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl overflow-hidden"
            >
              Conectar mi WhatsApp
              <ArrowRight size={22} />
            </button>
            <button 
              onClick={handleCTAClick}
              className="relative px-10 py-5 bg-white border-2 border-border text-text-primary rounded-2xl hover:border-accent/30 hover:bg-surface transition-all hover:scale-[1.02] font-semibold text-lg overflow-hidden"
            >
              Agendar demo
            </button>
          </div>
        </div>

        {/* Animated mockup */}
        <div className="relative">
          <AnimatedMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

