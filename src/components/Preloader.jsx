import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import './Preloader.css'

export default function Preloader({ onComplete }) {
  const rootRef = useRef(null)
  const barRef  = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.fromTo(
      barRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 1.8, ease: 'power2.inOut' }
    )
    tl.to(rootRef.current, {
      yPercent: -100,
      duration: 0.55,
      ease: 'power3.inOut',
      onComplete,
    })
  }, [onComplete])

  return (
    <div ref={rootRef} className='preloader'>
      <div className='preloader__logo'>
        <span className='preloader__ht'>HT</span>
        <span className='preloader__computers'>Computers</span>
      </div>
      <div className='preloader__track'>
        <div ref={barRef} className='preloader__bar' />
      </div>
    </div>
  )
}
