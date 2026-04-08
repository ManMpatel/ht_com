import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Industries.css'

gsap.registerPlugin(ScrollTrigger)

const industries = [
  { number: '01', name: 'Corporate & Enterprise' },
  { number: '02', name: 'Education — Schools, TAFEs & Universities' },
  { number: '03', name: 'Government & Public Sector' },
  { number: '04', name: 'Healthcare & Medical' },
  { number: '05', name: 'SMBs & Growing Startups' },
  { number: '06', name: 'Legal & Professional Services' },
  { number: '07', name: 'Finance & Insurance' },
]

export default function Industries() {
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

    const cards = gridRef.current.querySelectorAll('.industry-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section className='industries'>
      <div className='section-label'>
        <span className='section-label__line' />
        <span className='section-label__text'>Industries We Serve</span>
        <span className='section-label__line' />
      </div>

      <div className='industries__heading' ref={headingRef}>
        <h2 className='industries__title'>Built for Every Industry</h2>
        <p className='industries__sub'>
          HTC delivers IT solutions across a wide range of sectors — each with their own
          procurement needs, compliance requirements, and operational demands.
        </p>
      </div>

      <div className='industries__grid' ref={gridRef}>
        {industries.map(ind => (
          <div className='industry-card' key={ind.number}>
            <span className='industry-card__number'>{ind.number}</span>
            <h3 className='industry-card__name'>{ind.name}</h3>
            <span className='industry-card__arrow'>→</span>
          </div>
        ))}
      </div>

      <div className='industries__cta'>
        <button className='industries__btn'>See Industry Solutions</button>
      </div>
    </section>
  )
}
