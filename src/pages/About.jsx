import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/pages.css'

gsap.registerPlugin(ScrollTrigger)

const difference = [
  {
    title: 'In-House R&D and Custom Engineering',
    desc: `Most IT companies sell what's in the catalogue. HTC builds what isn't. Our in-house research and development team engineers custom chargers, hubs, cables, docking solutions, and enterprise accessory kits — designed specifically for the way our clients work.`,
  },
  {
    title: 'Smart Inventory and Buffer Stock',
    desc: `We don't just order hardware when you ask for it. We conduct ongoing inventory analysis, track demand patterns, and hold buffer stock of the products our clients need most — so your project never stalls because of a supply chain delay.`,
  },
  {
    title: 'Authorised Vendor Partnerships',
    desc: `HTC is an authorised partner of Cisco, Dell, HP, Lenovo, Microsoft, and AWS. This means we deliver genuine, warranted hardware and software — not grey market products — backed by priority vendor support channels that most resellers simply don't have access to.`,
  },
  {
    title: 'Onshore and Offshore Model',
    desc: `Our clients benefit from dedicated AU/NZ-based account managers and onsite technicians, supported by a skilled offshore team for helpdesk and monitoring. This hybrid model gives you enterprise-quality service at a cost that makes sense.`,
  },
  {
    title: 'One Roof. Every Capability.',
    desc: `From IT hardware procurement to cloud migration, cybersecurity to custom software development — HTC handles it all. You get one point of contact, one accountable partner, and a team that understands your entire IT ecosystem.`,
  },
]

export default function About() {
  useEffect(() => {
    gsap.utils.toArray('.pf').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
    gsap.utils.toArray('.pf-stagger').forEach(container => {
      const children = container.querySelectorAll(':scope > *')
      gsap.fromTo(children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: container, start: 'top 85%' } }
      )
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section className='page-hero'>
          <div className='page-hero__inner pf'>
            <span className='page-hero__eyebrow'>About HT Computers</span>
            <h1 className='page-hero__title'>
              Australia and New Zealand's Most Capable End-to-End IT Partner
            </h1>
            <p className='page-hero__sub'>
              HT Computers isn't just a hardware reseller or a helpdesk provider. We are a
              full-spectrum technology partner — equipped to handle your IT from the first
              device purchase to the last line of support.
            </p>
          </div>
        </section>

        {/* ── Our Story ── */}
        <section className='page-section'>
          <div className='page-section__inner pf'>
            <span className='page-section__label'>Our Story</span>
            <h2 className='page-section__title'>Who We Are</h2>
            <p className='page-section__text'>
              HT Computers (HTC) was founded with a single purpose: to make IT simple,
              reliable, and stress-free for businesses of every size. Over more than a decade,
              we have grown from a hardware supply business into a complete technology solutions
              company — trusted by businesses, schools, corporates, and government teams across
              Australia and New Zealand.
            </p>
            <p className='page-section__text'>
              We don't just sell technology. We plan it, source it, deploy it, support it, and
              when the time comes, we refresh it. Every client engagement is built on the belief
              that IT should enable your business — not slow it down.
            </p>
          </div>
        </section>

        {/* ── Mission ── */}
        <section className='page-section page-section--surface'>
          <div className='page-section__inner pf'>
            <span className='page-section__label'>Our Mission</span>
            <h2 className='page-section__title'>Why We Exist</h2>
            <p className='page-section__text'>
              To deliver a seamless IT lifecycle experience for every business we serve —
              combining speed, precision, and genuine vendor expertise under one roof.
            </p>
          </div>
        </section>

        {/* ── HTC Difference ── */}
        <section className='page-section'>
          <div className='page-section__inner'>
            <h2 className='page-section__title pf'>The HTC Difference</h2>
            <div className='page-card-grid pf-stagger'>
              {difference.map((d, i) => (
                <div className='page-card' key={i}>
                  <h3 className='page-card__title'>{d.title}</h3>
                  <p className='page-card__desc'>{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className='page-section page-section--surface'>
          <div className='page-section__inner pf'>
            <span className='page-section__label'>Our Team</span>
            <h2 className='page-section__title'>The People Behind HTC</h2>
            <p className='page-section__text'>
              HTC is led by a team of experienced IT professionals who have worked across
              enterprise, government, education, and SMB sectors. Our account managers, project
              technicians, support engineers, and R&D specialists work together to deliver
              outcomes — not just products.
            </p>
            <p className='page-section__text'>
              <strong style={{ color: '#F0EDE6' }}>Contact:</strong> Rahul —{' '}
              <a href='mailto:rahul@htcomputers.com.au' style={{ color: '#C9A452' }}>
                rahul@htcomputers.com.au
              </a>{' '}
              | +61 493 314 230
            </p>
          </div>
        </section>

        {/* ── Coverage ── */}
        <section className='page-section'>
          <div className='page-section__inner pf'>
            <span className='page-section__label'>Coverage</span>
            <h2 className='page-section__title'>Serving Australia and New Zealand</h2>
            <p className='page-section__text'>
              HTC operates across Australia and New Zealand, with the capability to deliver
              hardware supply, onsite installations, managed support, and project resourcing
              to any location — from metro CBDs to regional sites.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className='page-cta pf'>
          <h2 className='page-cta__title'>Let's Work Together</h2>
          <p className='page-cta__sub'>
            Whether you're planning a technology refresh, a new office fit-out, or looking
            for a reliable managed IT partner — HTC is ready to talk.
          </p>
          <div className='page-cta__buttons'>
            <Link to='/contact' className='page-btn page-btn--primary'>Contact Us Today</Link>
            <a href='tel:+61493314230' className='page-btn page-btn--secondary'>Call +61 493 314 230</a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
