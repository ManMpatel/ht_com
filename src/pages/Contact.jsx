import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactSection from '../sections/Contact'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}
