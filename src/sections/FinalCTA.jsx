import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './FinalCTA.css'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: contentRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <section className='final-cta'>
      <div className='final-cta__glow' />
      <div className='final-cta__content' ref={contentRef}>
        <h2 className='final-cta__title char-reveal'>Ready to Simplify Your IT?</h2>
        <p className='final-cta__sub'>
          Whether you need to refresh a fleet, migrate to the cloud, secure your endpoints,
          or build something new — HTC is ready. Let's talk.
        </p>
        <div className='final-cta__buttons'>
          <Link to='/contact'         className='final-cta__btn final-cta__btn--primary'>Get a Quote Today</Link>
          <a    href='tel:+61493314230' className='final-cta__btn final-cta__btn--secondary'>Call +61 493 314 230</a>
        </div>
      </div>
    </section>
  )
}
