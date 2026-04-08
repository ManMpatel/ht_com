import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Partners.css'

gsap.registerPlugin(ScrollTrigger)

const corePartners = ['Cisco', 'Dell', 'HP', 'Lenovo', 'Microsoft', 'AWS']

const extended = [
  {
    label: 'Unified Communications',
    partners: ['Zoom', 'Yealink', 'Jabra', 'Logitech', 'Poly', 'ALOGIC', 'eplug it'],
  },
  {
    label: 'Networking & Security',
    partners: ['Aruba', 'TP-Link', 'Fortinet', 'Ubiquiti', 'WatchGuard', 'Sophos', 'Bitdefender'],
  },
  {
    label: 'Accessories & Peripherals',
    partners: ['ALOGIC', 'eplug it', 'Logitech', 'Jabra'],
  },
]

export default function Partners() {
  const headingRef  = useRef(null)
  const coreRef     = useRef(null)
  const extendedRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      }
    )

    const coreCards = coreRef.current.querySelectorAll('.partner-core-card')
    gsap.fromTo(coreCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.08,
        scrollTrigger: { trigger: coreRef.current, start: 'top 85%' },
      }
    )

    gsap.fromTo(extendedRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: extendedRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section className='partners'>
      <div className='section-label'>
        <span className='section-label__line' />
        <span className='section-label__text'>Our Partners</span>
        <span className='section-label__line' />
      </div>

      <div className='partners__heading' ref={headingRef}>
        <h2 className='partners__title'>Authorised By the Brands That Matter</h2>
        <p className='partners__sub'>
          Being an authorised partner means genuine products with valid warranties, priority
          support channels, and the accountability that businesses depend on.
        </p>
      </div>

      <div className='partners__core' ref={coreRef}>
        {corePartners.map(name => (
          <div className='partner-core-card' key={name}>
            <span className='partner-core-card__name'>{name}</span>
          </div>
        ))}
      </div>

      <div className='partners__extended' ref={extendedRef}>
        {extended.map(group => (
          <div className='partner-group' key={group.label}>
            <span className='partner-group__label'>{group.label}</span>
            <div className='partner-group__list'>
              {group.partners.map(p => (
                <span className='partner-group__item' key={p}>{p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
