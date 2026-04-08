import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/pages.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { number: '01', title: 'IT Hardware Supply',          desc: 'Authorised hardware from Cisco, Dell, HP, Lenovo, and more — sourced, stocked, and delivered fast. Bulk fleet supply, same-day dispatch, asset tagging, and multi-site distribution.', to: '/services/hardware' },
  { number: '02', title: 'Enterprise Installations',    desc: 'End-to-end workstation, docking, and infrastructure installation by trained onsite technicians. Full QA and documentation included.', to: '/services/installations' },
  { number: '03', title: 'Managed IT Support',          desc: 'SLA-based helpdesk, remote monitoring, device maintenance, and dedicated account management — keeping your IT running without interruption.', to: '/services/managed-it' },
  { number: '04', title: 'IT Resourcing',               desc: 'On-demand project technicians, support staff augmentation, and skilled IT professionals for short and long-term engagements.', to: '/services/resourcing' },
  { number: '05', title: 'Cloud & Licensing',           desc: 'AWS migrations, Microsoft 365 deployments, Azure management, hybrid cloud strategies, and enterprise licensing packages.', to: '/services/cloud' },
  { number: '06', title: 'Networking & Infrastructure', desc: 'Cisco-powered switching, Wi-Fi 6, firewall architecture, structured cabling, UPS solutions, and cloud-managed networking.', to: '/services/networking' },
  { number: '07', title: 'Cybersecurity',               desc: 'Endpoint protection, network security, identity and access management, email protection, and cloud security.', to: '/services/cybersecurity' },
  { number: '08', title: 'Unified Communications',      desc: 'Meeting room design, Zoom and Teams deployments, enterprise headset fleets, docking solutions, and hot-desk station builds.', to: '/services/unified-comms' },
  { number: '09', title: 'Custom Accessories & R&D',    desc: 'In-house designed and manufactured chargers, USB-C hubs, cables, docking stations, and bespoke enterprise accessory kits.', to: '/services/accessories' },
  { number: '10', title: 'Web & Software Development',  desc: 'Business websites, custom web applications, internal tools, CRM development, mobile apps, and API integrations.', to: '/services/software' },
]

export default function ServicesHub() {
  useEffect(() => {
    gsap.fromTo('.pf',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.pf', start: 'top 85%' } }
    )
    const cards = document.querySelectorAll('.hub-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: '.hub-grid', start: 'top 85%' } }
    )
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className='page-hero'>
          <div className='page-hero__inner pf'>
            <span className='page-hero__eyebrow'>Our Services</span>
            <h1 className='page-hero__title'>Comprehensive IT Capabilities. One Trusted Partner.</h1>
            <p className='page-hero__sub'>
              HTC delivers across the full technology spectrum — from the hardware on your desk
              to the cloud powering your business. Every service is delivered by specialists,
              backed by authorised vendor relationships, and supported by a team that takes
              full ownership.
            </p>
          </div>
        </section>

        <section className='page-section'>
          <div className='page-section__inner'>
            <div className='hub-grid page-card-grid'>
              {services.map(s => (
                <Link to={s.to} className='hub-card page-card' key={s.number} style={{ textDecoration: 'none' }}>
                  <span className='page-card__number'>{s.number}</span>
                  <h3 className='page-card__title'>{s.title}</h3>
                  <p className='page-card__desc'>{s.desc}</p>
                  <span style={{ display: 'block', marginTop: '1.25rem', fontSize: '0.78rem', color: '#C9A452', letterSpacing: '0.06em' }}>
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className='page-cta pf'>
          <h2 className='page-cta__title'>Not Sure What You Need?</h2>
          <p className='page-cta__sub'>
            Talk to an HTC expert. We'll assess your current IT setup and recommend the right
            combination of services for your business size, industry, and budget.
          </p>
          <div className='page-cta__buttons'>
            <Link to='/contact' className='page-btn page-btn--primary'>Talk to an Expert</Link>
            <a href='tel:+61493314230' className='page-btn page-btn--secondary'>Call +61 493 314 230</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
