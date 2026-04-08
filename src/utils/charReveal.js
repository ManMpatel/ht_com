import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Splits every .char-reveal element into individual character <span>s
 * and animates them in with GSAP + ScrollTrigger stagger.
 * Safe to call multiple times — already-processed elements are skipped.
 */
export function initCharReveal() {
  const elements = document.querySelectorAll('.char-reveal:not([data-cr])')

  elements.forEach(el => {
    el.setAttribute('data-cr', '1')

    const text = el.textContent
    el.textContent = ''

    const chars = text.split('').map(char => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.cssText = 'display:inline-block;opacity:0;transform:translateY(20px)'
      el.appendChild(span)
      return span
    })

    gsap.to(chars, {
      opacity:  1,
      y:        0,
      duration: 0.55,
      stagger:  0.03,
      ease:     'power3.out',
      scrollTrigger: {
        trigger: el,
        start:   'top 88%',
      },
    })
  })
}
