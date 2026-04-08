import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../sections/Hero'
import StatsBar from '../sections/StatsBar'
import Services from '../sections/Services'
import WhyHTC from '../sections/WhyHTC'
import Industries from '../sections/Industries'
import Partners from '../sections/Partners'
import Testimonials from '../sections/Testimonials'
import FinalCTA from '../sections/FinalCTA'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <WhyHTC />
      <Industries />
      <Partners />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
    </>
  )
}
