import Header from './components/shared/Header'
import Hero from './components/hero/Hero'
import Benefits from './components/benefits/Benefits'
import ProductDemo from './components/product-demo/ProductDemo'
import Features from './components/features/Features'
import HowItWorks from './components/how-it-works/HowItWorks'
import UseCases from './components/use-cases/UseCases'
import WhyWhaapy from './components/why-whaapy/WhyWhaapy'
import FAQ from './components/faq/FAQ'
import Team from './components/team/Team'
import CTA from './components/cta/CTA'
import Footer from './components/shared/Footer'
import ScrollProgress from './components/shared/ScrollProgress'
import SmoothScroll from './components/shared/SmoothScroll'

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      
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
        <ProductDemo />
        <Features />
        <HowItWorks />
        <UseCases />
        <WhyWhaapy />
        <FAQ />
        <Team />
        <CTA />
      </main>
      
      <Footer />
    </>
  )
}
