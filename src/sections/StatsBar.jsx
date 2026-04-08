import { useEffect, useRef, Fragment } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './StatsBar.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 10,  suffix: '+', label: 'Years in Business' },
  { number: 6,   suffix: '',  label: 'Authorised Global Vendor Partnerships' },
  { number: 100, suffix: '+', label: 'Businesses Served' },
  { number: 2,   suffix: '',  label: 'Countries — Australia & New Zealand' },
]

export default function StatsBar() {
  const ref = useRef(null)

  useEffect(() => {
    const items     = ref.current.querySelectorAll('.stat-item')
    const counters  = ref.current.querySelectorAll('.stat-number')
    const dividers  = ref.current.querySelectorAll('.stat-divider')

    // Stagger stat cards up
    gsap.fromTo(items,
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      }
    )

    // Divider clip-path reveal (scaleY 0 → 1 from top)
    gsap.fromTo(dividers,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      }
    )

    // Count-up numbers
    counters.forEach((el, i) => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: stats[i].number,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => { el.textContent = Math.floor(obj.val) + stats[i].suffix },
      })
    })
  }, [])

  return (
    <section className='stats-bar' ref={ref}>
      {stats.map((s, i) => (
        <Fragment key={i}>
          <div className='stat-item'>
            <span className='stat-number'>{s.number}{s.suffix}</span>
            <span className='stat-label'>{s.label}</span>
          </div>
          {i < stats.length - 1 && <div className='stat-divider' />}
        </Fragment>
      ))}
    </section>
  )
}
