import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './WhyHTC.css'

gsap.registerPlugin(ScrollTrigger)

const reasons = [
  {
    number: '01',
    title: 'We Customise Everything',
    desc: `Our in-house R&D team designs and builds custom accessories, workstation kits, and technology bundles tailored to your specific needs. Nothing generic. Everything fit for purpose.`,
  },
  {
    number: '02',
    title: 'Always Stocked. Never Delayed.',
    desc: `We conduct ongoing inventory analysis and maintain smart buffer stock of high-demand hardware and accessories. Your projects don't wait for supply chains — we've already planned ahead.`,
  },
  {
    number: '03',
    title: `Authorised by the World's Best`,
    desc: `As an authorised partner of Cisco, Dell, HP, Lenovo, Microsoft, and AWS, we deliver genuine products, warranted hardware, and priority vendor support — not grey market shortcuts.`,
  },
  {
    number: '04',
    title: 'Robust End-to-End Delivery',
    desc: `From the first purchase order to the last technician sign-off — HTC owns the entire IT lifecycle. One contact. Full accountability. Zero finger-pointing between providers.`,
  },
  {
    number: '05',
    title: 'Onshore + Offshore Strength',
    desc: `Our AU and NZ-based account managers and onsite technicians are backed by a skilled offshore support team — giving you enterprise-grade coverage at a scalable cost.`,
  },
  {
    number: '06',
    title: 'Cost Efficiency at Scale',
    desc: `Our managed supply model reduces per-device costs, eliminates incorrect orders, prevents supply disruptions, and stabilises your IT procurement budget from the very first engagement.`,
  },
]

export default function WhyHTC() {
  const headingRef = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      }
    )

    const cards = gridRef.current.querySelectorAll('.why-card')
    gsap.fromTo(cards,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section className='why-htc'>
      <div className='why-htc__deco' aria-hidden='true'>HTC</div>

      <div className='section-label'>
        <span className='section-label__line' />
        <span className='section-label__text'>Why Choose Us</span>
        <span className='section-label__line' />
      </div>

      <div className='why-htc__heading' ref={headingRef}>
        <h2 className='why-htc__title'>
          Why Businesses Across Australia and New Zealand Choose HTC
        </h2>
      </div>

      <div className='why-htc__grid' ref={gridRef}>
        {reasons.map(r => (
          <div className='why-card' key={r.number}>
            <span className='why-card__number'>{r.number}</span>
            <h3 className='why-card__title'>{r.title}</h3>
            <p className='why-card__desc'>{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
