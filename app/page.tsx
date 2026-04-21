import Header from './components/shell/Header'
import Footer from './components/shell/Footer'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import ProductBento from './components/sections/ProductBento'
import HowItWorks from './components/sections/HowItWorks'
import UseCases from './components/sections/UseCases'
import Differentiators from './components/sections/Differentiators'
import SocialProof from './components/sections/SocialProof'
import FAQ from './components/sections/FAQ'
import CTAFinal from './components/sections/CTAFinal'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Marquee />
        <ProductBento />
        <HowItWorks />
        <UseCases />
        <Differentiators />
        <SocialProof />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
