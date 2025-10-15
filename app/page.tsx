import Hero from './components/hero/Hero'
import Benefits from './components/benefits/Benefits'
import BentoShowcase from './components/bento-showcase/BentoShowcase'
import Features from './components/features/Features'
import UseCases from './components/use-cases/UseCases'
import HowItWorks from './components/how-it-works/HowItWorks'
import WhyWhaapy from './components/why-whaapy/WhyWhaapy'
import FAQ from './components/faq/FAQ'
import CTA from './components/cta/CTA'
import ScrollProgress from './components/shared/ScrollProgress'
import SmoothScroll from './components/shared/SmoothScroll'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      
      <main className="relative overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="gradient-mesh" />
        
        {/* Grid overlay */}
        <div className="grid-overlay" />
        
        {/* Background decorative elements */}
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        
        <Hero />
        <Benefits />
        <BentoShowcase />
        <Features />
        <UseCases />
        <HowItWorks />
        <WhyWhaapy />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}

