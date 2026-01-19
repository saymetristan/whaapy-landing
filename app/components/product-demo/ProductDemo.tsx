'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import anime from 'animejs'
import { Inbox, MessageSquare, Settings, ExternalLink } from 'lucide-react'

const tabs = [
  {
    id: 'inbox',
    icon: Inbox,
    label: 'Todas tus conversaciones',
    screenshot: '/images/product/inbox-screenshot.svg',
    description: 'Ve todos los mensajes en un solo lugar. Busca clientes, filtra por estado, y organiza con etiquetas.'
  },
  {
    id: 'chat',
    icon: MessageSquare,
    label: 'La IA responde por ti',
    screenshot: '/images/product/chat-screenshot.svg',
    description: 'Observa cómo el asistente contesta automáticamente. Tú puedes intervenir cuando quieras con un click.'
  },
  {
    id: 'config',
    icon: Settings,
    label: 'Tú tienes el control',
    screenshot: '/images/product/agent-config-screenshot.svg',
    description: 'Decide cómo se comporta el asistente. Qué tono usa, qué sabe de tu negocio, cuándo debe callarse.'
  }
]

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState('inbox')
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0]

  useEffect(() => {
    if (!sectionRef.current) return

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll('.animate-in')
          
          anime({
            targets: elements,
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            delay: anime.stagger(100)
          })
          
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  // Animate content change
  useEffect(() => {
    if (contentRef.current) {
      anime({
        targets: contentRef.current,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 400,
        easing: 'easeOutQuad'
      })
    }
  }, [activeTab])

  return (
    <section 
      id="demo" 
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="animate-in opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Así de fácil <span className="gradient-text">se ve</span>
          </h2>
          <p className="animate-in opacity-0 text-xl md:text-2xl text-text-secondary leading-relaxed">
            Una plataforma que cualquiera puede usar
          </p>
        </div>
        
        {/* Tab Buttons */}
        <div className="animate-in opacity-0 flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {tabs.map(tab => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-medium transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-accent text-white shadow-lg scale-105' 
                    : 'bg-surface text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                  }
                `}
              >
                <Icon size={20} />
                <span className="hidden sm:inline text-sm md:text-base">{tab.label}</span>
              </button>
            )
          })}
        </div>
        
        {/* Screenshot Container */}
        <div 
          ref={contentRef}
          className="animate-in opacity-0 relative bg-surface rounded-2xl md:rounded-3xl p-4 md:p-8 border-2 border-border shadow-premium-lg overflow-hidden"
        >
          <div className="relative aspect-[16/10] md:aspect-[16/9]">
            <Image
              src={currentTab.screenshot}
              alt={currentTab.label}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Description */}
        <p className="animate-in opacity-0 text-center text-lg md:text-xl text-text-secondary mt-6 md:mt-8 max-w-2xl mx-auto leading-relaxed">
          {currentTab.description}
        </p>
        
        {/* CTA */}
        <div className="animate-in opacity-0 text-center mt-8 md:mt-12">
          <a
            href="https://app.whaapy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold text-lg transition-colors group"
          >
            Quiero verlo en vivo
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
