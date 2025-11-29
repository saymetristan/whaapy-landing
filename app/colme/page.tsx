'use client'

import { ArrowLeft, Brain, Zap, Target, Shield, RefreshCw, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Componente TypewriterBrand
const TypewriterBrand = () => {
  const [displayText, setDisplayText] = useState('colme')
  const [isFullPhrase, setIsFullPhrase] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let isCancelled = false
    
    const typeDelay = (ms: number) => new Promise(resolve => {
      timeoutId = setTimeout(resolve, ms)
    })

    const animate = async () => {
      while (!isCancelled) {
        // 1. Estado inicial: "colme" (verde)
        setDisplayText('colme')
        setIsFullPhrase(false)
        setShowCursor(true)
        await typeDelay(2500)
        if (isCancelled) break

        // 2. Borrar "me"
        setDisplayText('col')
        await typeDelay(100)

        // 3. Escribir "laborative"
        const text1 = 'laborative'
        for (let i = 1; i <= text1.length; i++) {
          if (isCancelled) break
          setDisplayText('col' + text1.substring(0, i))
          await typeDelay(30)
        }

        // 4. Escribir "llm"
        const text2 = 'llm'
        for (let i = 1; i <= text2.length; i++) {
          if (isCancelled) break
          setDisplayText('collaborative' + text2.substring(0, i))
          await typeDelay(30)
        }

        // 5. Escribir "engine"
        const text3 = 'engine'
        for (let i = 1; i <= text3.length; i++) {
          if (isCancelled) break
          setDisplayText('collaborativellm' + text3.substring(0, i))
          await typeDelay(30)
        }

        // 6. Estado final: Highlight roots
        setIsFullPhrase(true)
        await typeDelay(500) 
        setShowCursor(false) // Ocultar cursor para foto finish
        
        // 7. Mantener frase completa 4 segundos
        await typeDelay(4000)
        if (isCancelled) break
        
        // 8. Reset
        setShowCursor(true)
        setIsFullPhrase(false) // Volver a verde para borrado
        
        // Borrado rápido
        const fullText = 'collaborativellmengine'
        for (let i = fullText.length; i >= 3; i--) { 
           if (isCancelled) break
           setDisplayText(fullText.substring(0, i))
           await typeDelay(10)
        }
        
        // 9. Escribir "me"
        setDisplayText('colm')
        await typeDelay(50)
        setDisplayText('colme')
      }
    }

    animate()

    return () => {
      isCancelled = true
      clearTimeout(timeoutId)
    }
  }, [])

  const renderText = () => {
    if (isFullPhrase) {
      return (
        <>
          <span className="text-accent font-bold">co</span>
          <span className="text-text-muted">llaborative</span>
          <span className="text-accent font-bold">ll</span>
          <span className="text-text-muted">m</span>
          <span className="text-accent font-bold">e</span>
          <span className="text-text-muted">ngine</span>
        </>
      )
    }
    return <span className="text-accent font-bold">{displayText}</span>
  }

  return (
    <div className="font-mono text-sm md:text-base tracking-wide h-8 flex items-center justify-center select-none">
      {renderText()}
      <span 
        className={`ml-1.5 w-2 h-4 bg-accent inline-block ${showCursor ? 'animate-pulse' : 'opacity-0'}`}
      />
    </div>
  )
}

export default function ColmePage() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* Background effects */}
      <div className="gradient-mesh" />
      <div className="absolute inset-0 grid-overlay opacity-50" />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Volver a inicio</span>
          </Link>
          <span className="text-xs font-mono text-text-muted bg-surface px-3 py-1 rounded-full">
            v1.0 • Noviembre 2025
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              Anuncio de Tecnología
            </span>
          </div>

          {/* Title */}
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Presentamos{' '}
              <span className="gradient-text">colme-1</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Nuestro Motor de Orquestación Colaborativo de LLMs para 
              Conversaciones con Clientes
            </p>
          </div>

          {/* Subtitle explanation - Animated Typewriter */}
          <div className="text-center mt-6 animate-fade-in">
            <TypewriterBrand />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 pb-24">
        
        {/* Intro */}
        <section className="mb-16">
          <div className="glass-dark rounded-2xl p-8 md:p-10 shadow-premium">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed">
              <strong>TL;DR:</strong> Después de meses construyendo agentes de IA para atención 
              al cliente en WhatsApp, nos dimos cuenta de que los LLMs por sí solos no son 
              suficientes. Hoy anunciamos <strong className="text-accent">colme-1</strong> — un 
              sistema de orquestación multi-capa que hace que las conversaciones con IA realmente 
              funcionen en producción.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            El Problema que Nadie Menciona
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Todo el mundo está construyendo &quot;agentes de IA&quot; envolviendo ChatGPT con un 
              system prompt. Funciona para demos. Falla en producción.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              ¿Por qué? Porque las conversaciones reales con clientes no son uniformes:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>Un &quot;Hola&quot; no necesita el mismo procesamiento que &quot;¿Cuánto cuesta el plan enterprise?&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>No todas las preguntas requieren buscar en tu base de conocimiento</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>A veces la IA simplemente debería... callarse y escalar a un humano</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>Y cuando la IA da una respuesta mediocre, ¿quién la está validando?</span>
              </li>
            </ul>
            <p className="text-text-secondary text-lg leading-relaxed mt-6">
              Pasamos meses viendo a nuestros agentes fallar de maneras sutiles. Clientes 
              recibiendo respuestas irrelevantes. Tokens quemándose en saludos simples. 
              Preguntas críticas yendo a la IA cuando deberían haber ido a ventas.
            </p>
            <p className="text-text-primary text-xl font-semibold mt-8">
              Así que construimos algo diferente.
            </p>
          </div>
        </section>

        {/* What is colme */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Qué es colme-1?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              <strong className="text-text-primary">colme</strong> significa{' '}
              <strong className="text-accent">Collaborative LLM Engine</strong>.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              No es un modelo. No es un prompt. Es una capa de orquestación que se sitúa 
              entre tus clientes y múltiples LLMs, tomando decisiones en tiempo real sobre 
              cómo manejar cada mensaje.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Piensa en él como el &quot;cerebro&quot; que decide:
            </p>
          </div>

          {/* Decision cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              {
                icon: Zap,
                title: "¿Esto necesita un LLM?",
                description: "40% de mensajes usan fast-path directo"
              },
              {
                icon: Brain,
                title: "¿Cuál modelo debería manejarlo?",
                description: "Routing inteligente: velocidad vs calidad"
              },
              {
                icon: Target,
                title: "¿Necesita contexto de RAG?",
                description: "Y cómo hacer el retrieval correcto"
              },
              {
                icon: RefreshCw,
                title: "¿Esta respuesta es buena?",
                description: "Auto-corrección si no lo es"
              },
              {
                icon: Shield,
                title: "¿Debería escalar a humano?",
                description: "Antes de que el cliente se frustre"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-dark rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{item.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Differentiators */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Lo que lo Hace Diferente
          </h2>

          {/* Differentiator 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">1</span>
              <h3 className="text-xl font-bold">Inteligencia Antes de Inferencia</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              La mayoría de sistemas de IA procesan cada mensaje de la misma manera. 
              colme-1 analiza intención, complejidad y sentimiento <em>antes</em> de decidir 
              cómo responder.
            </p>
            <div className="mt-4 ml-11 flex flex-wrap gap-3">
              <span className="bg-surface px-4 py-2 rounded-lg text-sm">
                <span className="text-accent font-semibold">~200ms</span> respuesta fast-path
              </span>
              <span className="bg-surface px-4 py-2 rounded-lg text-sm">
                <span className="text-accent font-semibold">~2s</span> pipeline RAG completo
              </span>
            </div>
            <p className="text-text-muted text-sm mt-3 ml-11">
              Misma calidad. Fracción del costo en tokens.
            </p>
          </div>

          {/* Differentiator 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</span>
              <h3 className="text-xl font-bold">Orquestación Multi-Modelo</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              No creemos en &quot;un modelo para todo&quot;. colme-1 enruta diferentes 
              operaciones a diferentes modelos basándose en lo que cada uno hace mejor:
            </p>
            <ul className="mt-4 ml-11 space-y-2 text-text-secondary">
              <li>• Modelos rápidos para decisiones de routing</li>
              <li>• Modelos de reasoning para análisis complejo</li>
              <li>• Modelos especializados para retrieval de conocimiento</li>
              <li>• Modelos de calidad para validación de respuestas</li>
            </ul>
            <p className="text-text-muted text-sm mt-4 ml-11 italic">
              El cliente ve una conversación fluida. Por debajo, múltiples modelos colaborando.
            </p>
          </div>

          {/* Differentiator 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">3</span>
              <h3 className="text-xl font-bold">RAG Adaptativo</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              RAG está roto en la mayoría de implementaciones. Buscas, obtienes 5 chunks, 
              los metes en contexto. Esperas lo mejor.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4 ml-11">
              El enfoque de colme-1:
            </p>
            <ul className="mt-3 ml-11 space-y-2 text-text-secondary">
              <li>• Decide dinámicamente <em>si</em> se necesita conocimiento</li>
              <li>• Expansión multi-query cuando la pregunta es ambigua</li>
              <li>• Reranking con LLM antes de usar el contexto</li>
              <li>• Fallback elegante cuando nada coincide</li>
            </ul>
          </div>

          {/* Differentiator 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">4</span>
              <h3 className="text-xl font-bold">Auto-Corrección Integrada</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              Cuando el nivel de confianza es bajo, colme-1 no simplemente envía la respuesta. 
              Valida la calidad, identifica problemas, y regenera cuando es necesario.
            </p>
            <p className="text-text-muted text-sm mt-3 ml-11 italic">
              Esto sucede automáticamente, invisible al usuario, antes de que el cliente vea nada.
            </p>
          </div>

          {/* Differentiator 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">5</span>
              <h3 className="text-xl font-bold">Handoff Inteligente</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              El problema más difícil en atención al cliente con IA: saber cuándo parar.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4 ml-11">
              colme-1 analiza la dinámica de la conversación, detecta patrones de frustración, 
              y proactivamente escala a humano antes de que el cliente tenga que pedirlo.
            </p>
          </div>
        </section>

        {/* Why we built this */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por Qué Construimos Esto
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Estamos construyendo <strong className="text-accent">Whaapy</strong> — una plataforma 
              nativa de IA para atención al cliente en WhatsApp.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Nuestros primeros clientes usaban integraciones básicas de LLM. Funcionaban... 
              hasta que no. Una mala respuesta de IA en el momento equivocado puede perder 
              una venta, dañar la confianza, o peor.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              colme-1 es nuestra respuesta a &quot;¿cómo haces que la IA sea lo suficientemente 
              confiable para conversaciones de negocio reales?&quot;
            </p>
            <p className="text-text-primary text-xl font-semibold">
              No se trata de hacer la IA más inteligente. Se trata de hacer los{' '}
              <em>sistemas</em> de IA más inteligentes.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section>
          <div className="glass-dark rounded-2xl p-8 shadow-premium mb-12">
            <p className="text-lg text-text-primary leading-relaxed text-center">
              <strong className="text-accent">colme-1 ya está disponible</strong> para todos los clientes de Whaapy.{' '}
              Cada conversación que pasa por nuestra plataforma está potenciada por este motor de orquestación.
            </p>
          </div>
          <div className="text-center border-t border-border pt-12">
            <p className="text-text-secondary text-lg mb-6">
              Si estás construyendo IA para conversaciones con clientes, conoces el dolor.{' '}
              <br className="hidden md:block" />
              Los LLMs solos no son suficientes. El futuro es la orquestación.
            </p>
            <p className="text-text-muted text-sm mb-8 italic">
              colme-1 es el motor de orquestación detrás de Whaapy.{' '}
              <br className="hidden md:block" />
              No es open-source (aún), pero estamos felices de conversar sobre los problemas que resolvemos.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Conoce Whaapy
              </Link>
              <a
                href="mailto:hola@whaapy.com"
                className="inline-flex items-center gap-2 bg-surface hover:bg-border text-text-primary px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </section>

      </article>

      {/* Footer */}
      <footer className="border-t-2 border-border py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-text-secondary">
            © 2025 Whaapy. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex gap-6 justify-center flex-wrap">
            <Link href="/terminos" className="text-accent hover:underline">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="text-accent hover:underline">
              Aviso de Privacidad
            </Link>
            <Link href="/colme" className="text-accent hover:underline font-semibold">
              colme-1
            </Link>
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  )
}
