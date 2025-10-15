import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import HowItWorks from './components/how-it-works/HowItWorks'
import FAQ from './components/faq/FAQ'
import CTA from './components/cta/CTA'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <CTA />
    </main>
  )
}

