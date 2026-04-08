import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/pages.css'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  {
    number: '01',
    name: 'Corporate & Enterprise',
    desc: `Large-scale procurement, multi-site deployments, fleet management, managed support, and strategic IT planning — HTC operates at enterprise scale with the speed and responsiveness of a specialist partner. Whether you're refreshing 50 devices or rolling out a new office across three floors, HTC handles it.`,
  },
  {
    number: '02',
    name: 'Education — Schools, TAFEs & Universities',
    desc: `Schools, TAFEs, and universities have unique demands — volume hardware requirements, tight budget cycles, compliance obligations, and the need to keep student and staff devices running without interruption. HTC works closely with education institutions across Australia and New Zealand to deliver value at scale.`,
  },
  {
    number: '03',
    name: 'Government & Public Sector',
    desc: `Government procurement has strict standards around vendor authorisation, security, and accountability. HTC meets those standards — with authorised hardware supply, documented deployments, and a track record of delivering for public sector clients.`,
  },
  {
    number: '04',
    name: 'Healthcare & Medical',
    desc: `Healthcare IT must be reliable, secure, and compliant. From clinical workstations and endpoint security to networking and cloud infrastructure — HTC understands the high stakes of healthcare technology and delivers solutions that support patient safety and operational continuity.`,
  },
  {
    number: '05',
    name: 'SMBs & Growing Startups',
    desc: `Small and medium businesses deserve enterprise-quality IT. HTC makes that accessible — with flexible engagement models, honest advice, and a right-sized approach that doesn't over-engineer or over-spend.`,
  },
  {
    number: '06',
    name: 'Legal & Professional Services',
    desc: `Law firms, accounting practices, and consulting firms need reliable, secure, and well-supported IT. HTC provides hardware, managed support, and cybersecurity tailored to the confidentiality and uptime requirements of professional services environments.`,
  },
  {
    number: '07',
    name: 'Finance & Insurance',
    desc: `Financial services organisations operate under strict compliance requirements and zero tolerance for downtime. HTC delivers secure, auditable IT infrastructure, endpoint protection, and managed support that meets the demands of regulated financial environments.`,
  },
]

export default function IndustriesPage() {
  useEffect(() => {
    gsap.utils.toArray('.pf').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
    const cards = document.querySelectorAll('.ind-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: '.ind-grid', start: 'top 85%' } }
    )
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className='page-hero'>
          <div className='page-hero__inner pf'>
            <span className='page-hero__eyebrow'>Industries We Serve</span>
            <h1 className='page-hero__title'>IT Solutions Built Around Your Industry</h1>
            <p className='page-hero__sub'>
              Different industries have different IT requirements — different compliance
              obligations, different scale challenges, different budget cycles, and different
              levels of tolerance for downtime. HTC has experience across all of them.
            </p>
          </div>
        </section>

        <section className='page-section'>
          <div className='page-section__inner'>
            <div className='ind-grid page-card-grid'>
              {industries.map(ind => (
                <div className='ind-card page-card' key={ind.number}>
                  <span className='page-card__number'>{ind.number}</span>
                  <h3 className='page-card__title'>{ind.name}</h3>
                  <p className='page-card__desc'>{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='page-cta pf'>
          <h2 className='page-cta__title'>Don't See Your Industry?</h2>
          <p className='page-cta__sub'>
            HTC works across many more sectors. Talk to us about your specific requirements
            — we'll tell you how we can help.
          </p>
          <div className='page-cta__buttons'>
            <Link to='/contact' className='page-btn page-btn--primary'>Contact HTC</Link>
            <a href='tel:+61493314230' className='page-btn page-btn--secondary'>Call +61 493 314 230</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
