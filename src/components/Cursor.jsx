import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current

    const xRing = gsap.quickTo(ring, 'x', { duration: 0.12, ease: 'power3.out' })
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.12, ease: 'power3.out' })

    const onMove = ({ clientX: x, clientY: y }) => {
      gsap.set(dot, { x: x - 3, y: y - 3 })
      xRing(x - 18)
      yRing(y - 18)
    }

    const onEnter = e => {
      const isLogo = e.target.closest?.('.navbar__logo')
      gsap.to(ring, { scale: isLogo ? 3 : 2, opacity: 0.6, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot,  { scale: 0, duration: 0.2 })
    }

    const onLeave = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
      gsap.to(dot,  { scale: 1, duration: 0.2 })
    }

    // Use event delegation — one listener on document, no re-attachment needed
    const onEnterDelegate = e => {
      const target = e.target.closest('a, button, .service-card, .industry-card')
      if (target) onEnter(e)
    }
    const onLeaveDelegate = e => {
      const target = e.target.closest('a, button, .service-card, .industry-card')
      if (target) onLeave()
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover',  onEnterDelegate)
    document.addEventListener('mouseout',   onLeaveDelegate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onEnterDelegate)
      document.removeEventListener('mouseout',   onLeaveDelegate)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className='cursor__dot'  />
      <div ref={ringRef} className='cursor__ring' />
    </>
  )
}
