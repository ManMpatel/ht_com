import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Contact.css'

gsap.registerPlugin(ScrollTrigger)

const commitments = [
  'We respond to every enquiry within 4 business hours.',
  'You will speak to a real person — not a ticket system.',
  'Your first conversation is always obligation-free.',
  'We give straight advice — even if the answer is not HTC.',
]

const services = [
  'Hardware Supply', 'Installation & Deployment', 'Managed IT Support',
  'IT Resourcing', 'Cloud & Licensing', 'Networking & Infrastructure',
  'Cybersecurity', 'Unified Communications', 'Custom Accessories & R&D',
  'Web & App Development', 'Other',
]

const sizes = ['1–10', '11–50', '51–200', '200–500', '500+']

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
      }
    )
  }, [])

  return (
    <section className='contact'>
      <div className='section-label'>
        <span className='section-label__line' />
        <span className='section-label__text'>Get In Touch</span>
        <span className='section-label__line' />
      </div>

      <div className='contact__inner' ref={sectionRef}>
        {/* ── Left ── */}
        <div className='contact__info'>
          <h2 className='contact__title'>Let's Talk.</h2>
          <p className='contact__sub'>
            Whether you need hardware tomorrow, a managed IT partner for the long term,
            or help figuring out what your business actually needs — HTC is ready to have
            a straight, honest conversation.
          </p>

          <ul className='contact__details'>
            <li><span className='contact__dot' />+61 493 314 230</li>
            <li><span className='contact__dot' />rahul@htcomputers.com.au</li>
            <li><span className='contact__dot' />htcomputers.com.au</li>
            <li><span className='contact__dot' />Australia &amp; New Zealand</li>
          </ul>

          <div className='contact__commitments'>
            <p className='contact__commitments-label'>Our Commitment</p>
            {commitments.map((c, i) => (
              <p className='contact__commitment' key={i}>{c}</p>
            ))}
          </div>
        </div>

        {/* ── Right ── */}
        <form className='contact__form' onSubmit={e => e.preventDefault()}>
          <div className='contact__row'>
            <input className='contact__input' type='text'  placeholder='Your Name'     required />
            <input className='contact__input' type='text'  placeholder='Company Name'  />
          </div>
          <div className='contact__row'>
            <input className='contact__input' type='tel'   placeholder='Phone Number'  />
            <input className='contact__input' type='email' placeholder='Email Address' required />
          </div>
          <select className='contact__input contact__select'>
            <option value='' disabled defaultValue>Service You're Interested In</option>
            {services.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select className='contact__input contact__select'>
            <option value='' disabled defaultValue>Team / Organisation Size</option>
            {sizes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <textarea
            className='contact__input contact__textarea'
            placeholder='Tell us about your requirement'
            rows={5}
          />
          <button className='contact__submit' type='submit'>Submit Request</button>
        </form>
      </div>
    </section>
  )
}
