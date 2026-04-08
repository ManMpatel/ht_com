import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from './Navbar'
import Footer from './Footer'
import './ServicePage.css'

gsap.registerPlugin(ScrollTrigger)

export default function ServicePage({ service }) {
  const { hero, what, advantages, extra, vendors, cta } = service

  useEffect(() => {
    gsap.utils.toArray('.sp-fade').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
    gsap.utils.toArray('.sp-stagger').forEach(container => {
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
      <main className='sp'>

        {/* ── Hero ── */}
        <section className='sp__hero'>
          <div className='sp__hero-inner sp-fade'>
            <span className='sp__eyebrow'>{hero.eyebrow}</span>
            <h1 className='sp__title'>{hero.title}</h1>
            <p className='sp__sub'>{hero.sub}</p>
          </div>
        </section>

        {/* ── What we do/supply ── */}
        {what && (
          <section className='sp__section sp-fade'>
            <h2 className='sp__section-title'>{what.heading}</h2>
            <ul className='sp__bullets'>
              {what.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>
        )}

        {/* ── Advantages / features ── */}
        {advantages && (
          <section className='sp__section'>
            <h2 className='sp__section-title sp-fade'>{advantages.heading}</h2>
            <div className='sp__cards sp-stagger'>
              {advantages.items.map((item, i) => (
                <div className='sp__card' key={i}>
                  <h3 className='sp__card-title'>{item.title}</h3>
                  <p className='sp__card-desc'>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Extra flexible sections ── */}
        {extra && extra.map((sec, i) => (
          <section className='sp__section sp-fade' key={i}>
            {sec.label && <span className='sp__section-label'>{sec.label}</span>}
            <h2 className='sp__section-title'>{sec.heading}</h2>
            {sec.text && <p className='sp__section-text'>{sec.text}</p>}
            {sec.bullets && (
              <ul className='sp__bullets'>
                {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
            {sec.cards && (
              <div className='sp__cards sp-stagger'>
                {sec.cards.map((card, j) => (
                  <div className='sp__card' key={j}>
                    <h3 className='sp__card-title'>{card.title}</h3>
                    <p className='sp__card-desc'>{card.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}

        {/* ── Vendors ── */}
        {vendors && (
          <section className='sp__section sp-fade'>
            <h2 className='sp__section-title'>{vendors.heading}</h2>
            <div className='sp__vendors'>
              {vendors.items.map((v, i) => (
                <span className='sp__vendor' key={i}>{v}</span>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className='sp__cta sp-fade'>
          <h2 className='sp__cta-title'>{cta.heading}</h2>
          {cta.sub && <p className='sp__cta-sub'>{cta.sub}</p>}
          <div className='sp__cta-buttons'>
            <Link to='/contact' className='sp__btn sp__btn--primary'>{cta.btn1}</Link>
            {cta.btn2 && (
              <a href='tel:+61493314230' className='sp__btn sp__btn--secondary'>{cta.btn2}</a>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
