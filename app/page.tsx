import Hero from './components/hero/Hero'
import Benefits from './components/benefits/Benefits'
import Features from './components/features/Features'
import UseCases from './components/use-cases/UseCases'
import HowItWorks from './components/how-it-works/HowItWorks'
import WhyWhaapy from './components/why-whaapy/WhyWhaapy'
import FAQ from './components/faq/FAQ'
import CTA from './components/cta/CTA'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="gradient-orb gradient-orb-1" />
      <div className="gradient-orb gradient-orb-2" />
      
      <Hero />
      <Benefits />
      <Features />
      <UseCases />
      <HowItWorks />
      <WhyWhaapy />
      <FAQ />
      <CTA />
    </main>
  )
}

