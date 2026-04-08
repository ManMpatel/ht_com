import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: `HTC managed our entire office IT rollout across three locations. The team was professional, the hardware arrived on time, and everything was configured before it hit the desks. Highly recommended.`,
    author: 'IT Manager',
    company: 'Corporate Client',
  },
  {
    quote: `We have been working with HT Computers for over three years. Their buffer stock model means we have never had to wait on hardware. Brilliant team to work with.`,
    author: 'Operations Director',
    company: 'Corporate Client',
  },
]

export default function Testimonials() {
  const headingRef = useRef(null)
  const cardsRef   = useRef(null)

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      }
    )

    const cards = cardsRef.current.querySelectorAll('.testimonial-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: cardsRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section className='testimonials'>
      <div className='section-label'>
        <span className='section-label__line' />
        <span className='section-label__text'>Client Stories</span>
        <span className='section-label__line' />
      </div>

      <div className='testimonials__heading' ref={headingRef}>
        <h2 className='testimonials__title'>What Our Clients Say</h2>
      </div>

      <div className='testimonials__grid' ref={cardsRef}>
        {testimonials.map((t, i) => (
          <div className='testimonial-card' key={i}>
            <span className='testimonial-card__quote-mark'>"</span>
            <p className='testimonial-card__text'>{t.quote}</p>
            <div className='testimonial-card__author'>
              <span className='testimonial-card__name'>{t.author}</span>
              <span className='testimonial-card__company'>{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
