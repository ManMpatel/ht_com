import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './Hero.css'

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.hero-tag',      { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo('.hero-title',    { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-buttons',  { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo('.hero-scroll',   { opacity: 0 },        { opacity: 1, duration: 0.5 },        '-=0.2')

    tl.add(() => {
      gsap.to('.hero-glow', { y: -30, duration: 4, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    })

    // Magnetic effect — targets .hero-btn (Link renders as <a>)
    const btns = document.querySelectorAll('.hero-buttons .hero-btn')
    const cleanups = []
    btns.forEach(btn => {
      const onMove  = e => gsap.to(btn, {
        x: (e.offsetX - btn.offsetWidth  / 2) * 0.3,
        y: (e.offsetY - btn.offsetHeight / 2) * 0.3,
        duration: 0.3,
      })
      const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.5 })
      btn.addEventListener('mousemove',  onMove)
      btn.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        btn.removeEventListener('mousemove',  onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => cleanups.forEach(fn => fn())
  }, [])

  return (
    <section className='hero'>
      <div className='hero-glow' />
      <span className='hero-tag'>Australia &amp; New Zealand's IT Partner</span>
      <h1 className='hero-title'>One Partner. <br /><em>Every Layer of Your IT.</em></h1>
      <p className='hero-subtitle'>From hardware supply and enterprise installations to cloud migration, cybersecurity, managed support, and custom software — HT Computers is the single IT partner that handles it all.</p>
      <div className='hero-buttons'>
        <Link to='/contact'  className='hero-btn btn-primary'>Get a Quote</Link>
        <Link to='/services' className='hero-btn btn-secondary'>Explore Our Services</Link>
      </div>
      <div className='hero-scroll'>
        <span>Scroll</span>
        <div className='hero-scroll-line' />
      </div>
    </section>
  )
}
