import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './PageTransition.css'

export default function PageTransition() {
  const overlayRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const el = overlayRef.current
    const tl = gsap.timeline()
    tl.set(el, { yPercent: 100 })
    tl.to(el,  { yPercent: 0,    duration: 0.35, ease: 'power3.inOut' })
    tl.to(el,  { yPercent: -100, duration: 0.35, ease: 'power3.inOut', delay: 0.05 })
  }, [pathname])

  return <div ref={overlayRef} className='page-transition' />
}
