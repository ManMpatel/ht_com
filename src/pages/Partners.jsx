import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/pages.css'

gsap.registerPlugin(ScrollTrigger)

const corePartners = [
  {
    name: 'Cisco',
    desc: `As a Cisco authorised partner, HTC delivers the full Cisco portfolio — switching, routing, wireless, security, and unified communications. Our engineers are trained on Cisco products and our clients benefit from direct access to Cisco's support ecosystem.`,
  },
  {
    name: 'Dell',
    desc: `HTC is an authorised Dell partner supplying the full range of Dell commercial hardware — laptops, desktops, workstations, servers, and storage — for businesses of every size. Genuine products, authorised warranties, and direct access to Dell's commercial support channels.`,
  },
  {
    name: 'HP',
    desc: `As an authorised HP partner, HTC supplies HP's full range of business computing devices, printers, and accessories. From HP EliteBooks to HP LaserJet Pro — sourced through authorised channels with full HP warranty coverage.`,
  },
  {
    name: 'Lenovo',
    desc: `HTC is an authorised Lenovo partner for the full range of ThinkPad, ThinkCentre, and IdeaPad commercial devices. Lenovo hardware is a trusted choice for enterprise and education clients across Australia and New Zealand.`,
  },
  {
    name: 'Microsoft',
    desc: `As a Microsoft authorised partner, HTC delivers Microsoft hardware (Surface range), Microsoft 365, Azure, Office licensing, and Microsoft security solutions. We manage licensing agreements, handle renewals, and ensure compliance across your Microsoft environment.`,
  },
  {
    name: 'AWS',
    desc: `HTC is an authorised AWS partner — delivering cloud migration, infrastructure management, cost optimisation, and security services on the AWS platform. Our cloud engineers are trained and certified in AWS architecture and operations.`,
  },
]

const extendedGroups = [
  { label: 'Unified Communications', partners: ['Zoom', 'Yealink', 'Jabra', 'Logitech', 'Poly', 'ALOGIC', 'eplug it'] },
  { label: 'Networking & Security',  partners: ['Aruba', 'TP-Link', 'Fortinet', 'Ubiquiti', 'WatchGuard', 'Sophos', 'Bitdefender'] },
  { label: 'Accessories & Peripherals', partners: ['ALOGIC', 'eplug it', 'Logitech', 'Jabra'] },
]

export default function PartnersPage() {
  useEffect(() => {
    gsap.utils.toArray('.pf').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
    const cards = document.querySelectorAll('.partner-full-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.partner-full-grid', start: 'top 85%' } }
    )
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className='page-hero'>
          <div className='page-hero__inner pf'>
            <span className='page-hero__eyebrow'>Our Partners</span>
            <h1 className='page-hero__title'>Authorised by the Brands That Define Enterprise IT</h1>
            <p className='page-hero__sub'>
              Being an authorised partner means genuine products with valid warranties, access
              to priority support channels, technical training that most resellers don't have,
              and the ability to deliver solutions that are backed — not just branded.
            </p>
          </div>
        </section>

        <section className='page-section'>
          <div className='page-section__inner'>
            <div className='partner-full-grid page-card-grid page-card-grid--2col'>
              {corePartners.map(p => (
                <div className='partner-full-card page-card' key={p.name}>
                  <h3 className='page-card__title' style={{ fontSize: '1.8rem' }}>{p.name}</h3>
                  <p className='page-card__desc'>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='page-section page-section--surface pf'>
          <div className='page-section__inner'>
            <h2 className='page-section__title'>Our Extended Technology Partner Network</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginTop: '2rem' }}>
              {extendedGroups.map(group => (
                <div key={group.label}>
                  <span className='page-section__label'>{group.label}</span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1rem', marginTop: '0.75rem' }}>
                    {group.partners.map(p => (
                      <span key={p} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', color: '#7A8499' }}>{p}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='page-cta pf'>
          <h2 className='page-cta__title'>Need a Specific Product or Vendor?</h2>
          <p className='page-cta__sub'>
            If you need hardware or software from a vendor not listed here, talk to us.
            HTC's procurement network is extensive and we can often source products that
            other resellers cannot.
          </p>
          <div className='page-cta__buttons'>
            <Link to='/contact' className='page-btn page-btn--primary'>Talk to Our Procurement Team</Link>
            <a href='tel:+61493314230' className='page-btn page-btn--secondary'>Call +61 493 314 230</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
