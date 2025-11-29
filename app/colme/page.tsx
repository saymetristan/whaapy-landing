'use client'

import { ArrowLeft, Brain, Zap, Target, Shield, RefreshCw, Sparkles } from 'lucide-react'
import Link from 'next/link'

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

          {/* Subtitle explanation */}
          <p className="text-center text-text-muted mt-6 font-mono text-sm animate-fade-in">
            colme = <span className="text-accent">co</span>llaborative <span className="text-accent">l</span>lm <span className="text-accent">e</span>ngine
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 pb-24">
        
        {/* Intro */}
        <section className="mb-16">
          <div className="glass-dark rounded-2xl p-8 md:p-10 shadow-premium">
            <p className="text-lg md:text-xl text-text-primary leading-relaxed">
              <strong>TL;DR:</strong> Después de meses construyendo AI agents para customer service 
              en WhatsApp, nos dimos cuenta de que los LLMs por sí solos no son 
              suficientes. Hoy anunciamos <strong className="text-accent">colme-1</strong> — un 
              multi-layer orchestration system que hace que las conversaciones con IA realmente 
              funcionen en production.
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
              Todo el mundo está construyendo &quot;AI agents&quot; wrapping ChatGPT con un 
              system prompt. Funciona para demos. Falla en production.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              ¿Por qué? Porque las conversaciones reales con clientes no son uniformes:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>Un &quot;Hola&quot; no necesita el mismo processing que &quot;¿Cuánto cuesta el plan enterprise?&quot;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>No todas las preguntas requieren buscar en tu knowledge base</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>A veces la IA simplemente debería... callarse y hacer handoff a un humano</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1.5">→</span>
                <span>Y cuando la IA da una respuesta mediocre, ¿quién está haciendo quality validation?</span>
              </li>
            </ul>
            <p className="text-text-secondary text-lg leading-relaxed mt-6">
              Pasamos meses viendo a nuestros agents fallar de maneras sutiles. Clientes 
              recibiendo respuestas irrelevantes. Tokens burning en saludos simples. 
              Preguntas críticas yendo a la IA cuando deberían haber ido a sales.
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
              No es un modelo. No es un prompt. Es una orchestration layer que se sitúa 
              entre tus clientes y múltiples LLMs, tomando decisiones en real-time sobre 
              cómo manejar cada mensaje.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Piensa en él como el &quot;brain&quot; que decide:
            </p>
          </div>

          {/* Decision cards */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              {
                icon: Zap,
                title: "¿Esto necesita inference?",
                description: "40% de mensajes usan fast-path sin LLM"
              },
              {
                icon: Brain,
                title: "¿Cuál LLM debería manejarlo?",
                description: "Smart routing entre speed vs quality"
              },
              {
                icon: Target,
                title: "¿Necesita RAG context?",
                description: "Y cómo hacer el retrieval correcto"
              },
              {
                icon: RefreshCw,
                title: "¿Esta respuesta es buena?",
                description: "Self-correction automática si no lo es"
              },
              {
                icon: Shield,
                title: "¿Debería hacer handoff?",
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
              <h3 className="text-xl font-bold">Intelligence Before Inference</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              La mayoría de AI systems procesan cada mensaje de la misma manera. 
              colme-1 analiza intent, complexity y sentiment <em>antes</em> de decidir 
              cómo responder.
            </p>
            <div className="mt-4 ml-11 flex flex-wrap gap-3">
              <span className="bg-surface px-4 py-2 rounded-lg text-sm">
                <span className="text-accent font-semibold">~200ms</span> fast-path response
              </span>
              <span className="bg-surface px-4 py-2 rounded-lg text-sm">
                <span className="text-accent font-semibold">~2s</span> full RAG pipeline
              </span>
            </div>
            <p className="text-text-muted text-sm mt-3 ml-11">
              Misma calidad. Fracción del token cost.
            </p>
          </div>

          {/* Differentiator 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">2</span>
              <h3 className="text-xl font-bold">Multi-Model Orchestration</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              No creemos en &quot;one model to rule them all&quot;. colme-1 routea diferentes 
              operaciones a diferentes modelos basándose en lo que cada uno hace mejor:
            </p>
            <ul className="mt-4 ml-11 space-y-2 text-text-secondary">
              <li>• Fast models para routing decisions</li>
              <li>• Reasoning models para complex analysis</li>
              <li>• Specialized models para knowledge retrieval</li>
              <li>• Quality models para response validation</li>
            </ul>
            <p className="text-text-muted text-sm mt-4 ml-11 italic">
              El cliente ve una conversación seamless. Under the hood, múltiples modelos están colaborando.
            </p>
          </div>

          {/* Differentiator 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">3</span>
              <h3 className="text-xl font-bold">Adaptive Knowledge Retrieval</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              RAG está broken en la mayoría de implementaciones. Buscas, obtienes 5 chunks, 
              los stuffeas en context. Hope for the best.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4 ml-11">
              El approach de colme-1:
            </p>
            <ul className="mt-3 ml-11 space-y-2 text-text-secondary">
              <li>• Decide dinámicamente <em>si</em> se necesita knowledge</li>
              <li>• Multi-query expansion cuando la pregunta es ambigua</li>
              <li>• LLM-based reranking antes de usar el context</li>
              <li>• Graceful fallback cuando nada matchea</li>
            </ul>
          </div>

          {/* Differentiator 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">4</span>
              <h3 className="text-xl font-bold">Built-in Self-Correction</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              Cuando el confidence score es bajo, colme-1 no simplemente envía la respuesta y pray. 
              Valida quality, identifica issues, y regenera cuando es necesario.
            </p>
            <p className="text-text-muted text-sm mt-3 ml-11 italic">
              Esto sucede automáticamente, invisible al usuario, antes de que el cliente vea nada.
            </p>
          </div>

          {/* Differentiator 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">5</span>
              <h3 className="text-xl font-bold">Intelligent Handoff</h3>
            </div>
            <p className="text-text-secondary text-lg leading-relaxed ml-11">
              El problema más difícil en AI customer service: saber cuándo parar.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mt-4 ml-11">
              colme-1 trackea conversation dynamics, detecta frustration patterns, 
              y proactivamente triggerea handoff antes de que el cliente tenga que pedirlo.
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
              AI-native para customer service en WhatsApp.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Nuestros primeros clientes usaban basic LLM integrations. Funcionaban... 
              hasta que no. Una mala AI response en el momento equivocado puede perder 
              una venta, damage trust, o peor.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              colme-1 es nuestra respuesta a &quot;¿cómo haces que la IA sea reliable enough 
              para real business conversations?&quot;
            </p>
            <p className="text-text-primary text-xl font-semibold">
              No se trata de hacer la IA más inteligente. Se trata de hacer los{' '}
              <em>AI systems</em> más inteligentes.
            </p>
          </div>
        </section>

        {/* What's Next */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What&apos;s Next
          </h2>
          <div className="glass-dark rounded-2xl p-8 shadow-premium">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              colme-1 está live in production, powering conversaciones para nuestros 
              clientes hoy.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-4">
              Ya estamos trabajando en <strong className="text-accent">colme-2</strong>, 
              que introducirá:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Persistent agent memory across conversations
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Proactive customer outreach
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Multi-language optimization
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Voice conversation support
              </li>
            </ul>
          </div>
        </section>

        {/* Closing */}
        <section>
          <div className="text-center border-t border-border pt-12">
            <p className="text-text-secondary text-lg mb-6">
              Si estás construyendo AI para customer conversations, conoces el pain.{' '}
              <br className="hidden md:block" />
              Raw LLMs no son suficientes. The future is orchestration.
            </p>
            <p className="text-text-muted text-sm mb-8 italic">
              colme-1 es el orchestration engine detrás de Whaapy.{' '}
              <br className="hidden md:block" />
              No es open-source (yet), pero estamos happy to chat sobre los problemas que resolvemos.
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
            © 2025 Whaapy by Datagora. Todos los derechos reservados.
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
