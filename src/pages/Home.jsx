import { useEffect } from 'react'
import Navbar       from '../components/Navbar'
import Footer       from '../components/Footer'
import Divider      from '../components/Divider'
import Hero         from '../sections/Hero'
import StatsBar     from '../sections/StatsBar'
import Services     from '../sections/Services'
import WhyHTC       from '../sections/WhyHTC'
import Industries   from '../sections/Industries'
import Partners     from '../sections/Partners'
import Testimonials from '../sections/Testimonials'
import FinalCTA     from '../sections/FinalCTA'
import Contact      from '../sections/Contact'
import { initCharReveal } from '../utils/charReveal'

export default function Home() {
  useEffect(() => {
    // Small delay to let all section headings render
    const t = setTimeout(initCharReveal, 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Divider />
      <Services />
      <Divider />
      <WhyHTC />
      <Divider />
      <Industries />
      <Divider />
      <Partners />
      <Divider />
      <Testimonials />
      <Divider />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  )
}
