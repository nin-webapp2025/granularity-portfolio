import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Expertise from './components/Expertise'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustedBy />
        <Expertise />
        <About />
        <Services />
        <Work />
        <Process />
        <Testimonials />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
