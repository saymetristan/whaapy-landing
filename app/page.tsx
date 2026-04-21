import Header from './components/shell/Header'
import Footer from './components/shell/Footer'
import Hero from './components/sections/Hero'
import ProductScroll from './components/sections/ProductScroll'
import HowItWorks from './components/sections/HowItWorks'
import UseCases from './components/sections/UseCases'
import Differentiators from './components/sections/Differentiators'
import FAQ from './components/sections/FAQ'
import CTAFinal from './components/sections/CTAFinal'

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <ProductScroll />
        <HowItWorks />
        <UseCases />
        <Differentiators />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </>
  )
}
