import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3.out' })

    const onMove = e => {
      xTo(e.clientX - 5)
      yTo(e.clientY - 5)
    }

    const onEnter = () => gsap.to(cursor, { scale: 2.5, duration: 0.3, ease: 'power2.out' })
    const onLeave = () => gsap.to(cursor, { scale: 1,   duration: 0.3, ease: 'power2.out' })

    const targets = document.querySelectorAll('button, a')

    window.addEventListener('mousemove', onMove)
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return <div ref={cursorRef} className='cursor' />
}
