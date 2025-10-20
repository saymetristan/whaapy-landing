'use client'

import { useEffect, useRef, useState } from 'react'
import anime from 'animejs'
import { ArrowRight } from 'lucide-react'
import AnimatedMockup from './AnimatedMockup'
import MorphingShape from './MorphingShape'
import Particles from './Particles'
import MagneticButton from '../shared/MagneticButton'
import ContactModal from '../shared/ContactModal'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadlineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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

  const handleDemoClick = () => {
    setIsContactModalOpen(true)
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-surface">
      {/* Background decorative elements - más sutiles */}
      <div className="liquid-blob" style={{ top: '-10%', right: '-5%', opacity: 0.3 }} />
      <MorphingShape />
      <Particles count={20} />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 
            ref={headlineRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.04em] mb-6"
          >
            <span className="inline-block">Controla</span>
            {' '}
            <span className="inline-block">totalmente</span>
            {' '}
            <span className="inline-block">cómo</span>
            {' '}
            <span className="inline-block">tu</span>
            {' '}
            <span className="inline-block gradient-text">IA</span>
            {' '}
            <br className="hidden md:block" />
            <span className="inline-block">atiende</span>
            {' '}
            <span className="inline-block gradient-text">WhatsApp</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 opacity-0 leading-relaxed"
          >
            La única plataforma que te da control granular sobre tu asistente de IA. Activa, pausa, o toma control por conversación. Entrena con tus documentos. Integra con cualquier herramienta.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
            <MagneticButton
              onClick={handleDemoClick}
              className="btn-primary group relative px-10 py-5 text-white rounded-2xl transition-all font-bold text-lg flex items-center gap-3 shadow-premium-lg hover:glow-accent-strong shimmer"
              strength={15}
            >
              Agendar demo
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <a 
              href="https://app.whaapy.com/login"
              className="glass-dark group relative px-10 py-5 text-text-primary rounded-2xl hover:border-accent/30 transition-all font-bold text-lg overflow-hidden shadow-premium hover:shadow-premium-lg inline-block"
            >
              Iniciar sesión
            </a>
          </div>
        </div>

        {/* Animated mockup with floating effect */}
        <div className="relative floating">
          <AnimatedMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-bounce" />
        </div>
      </div>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        type="demo"
      />
    </section>
  )
}

