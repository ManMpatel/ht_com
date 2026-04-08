import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

const serviceLinks = [
  { label: 'IT Hardware Supply',       to: '/services/hardware'      },
  { label: 'Installations',            to: '/services/installations' },
  { label: 'Managed IT',               to: '/services/managed-it'    },
  { label: 'Resourcing',               to: '/services/resourcing'    },
  { label: 'Cloud & Licensing',        to: '/services/cloud'         },
  { label: 'Networking',               to: '/services/networking'    },
  { label: 'Cybersecurity',            to: '/services/cybersecurity' },
  { label: 'Unified Communications',   to: '/services/unified-comms' },
  { label: 'Custom Accessories',       to: '/services/accessories'   },
  { label: 'Web & App Development',    to: '/services/software'      },
]

const companyLinks = [
  { label: 'Home',        to: '/'           },
  { label: 'About',       to: '/about'      },
  { label: 'Industries',  to: '/industries' },
  { label: 'Partners',    to: '/partners'   },
  { label: 'Blog',        to: '/blog'       },
  { label: 'Contact',     to: '/contact'    },
]

const partners = ['Cisco', 'Dell', 'HP', 'Lenovo', 'Microsoft', 'AWS']

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 90%' },
      }
    )
  }, [])

  return (
    <footer className='footer' ref={footerRef}>
      <div className='footer__inner'>
        {/* ── Brand ── */}
        <div className='footer__brand'>
          <Link to='/' className='footer__logo'>HT Computers</Link>
          <p className='footer__tagline'>Powering Businesses With Seamless Technology</p>
          <div className='footer__contact-quick'>
            <a href='tel:+61493314230'>+61 493 314 230</a>
            <a href='mailto:rahul@htcomputers.com.au'>rahul@htcomputers.com.au</a>
          </div>
        </div>

        {/* ── Services ── */}
        <div className='footer__col'>
          <h4 className='footer__col-title'>Services</h4>
          <ul className='footer__links'>
            {serviceLinks.map(s => (
              <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* ── Company ── */}
        <div className='footer__col'>
          <h4 className='footer__col-title'>Company</h4>
          <ul className='footer__links'>
            {companyLinks.map(l => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* ── Partners ── */}
        <div className='footer__col'>
          <h4 className='footer__col-title'>Authorised Partners</h4>
          <ul className='footer__links'>
            {partners.map(p => (
              <li key={p}><Link to='/partners'>{p}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className='footer__bottom'>
        <span>© 2025 HT Computers. All rights reserved. Australia &amp; New Zealand.</span>
        <a href='https://htcomputers.com.au' className='footer__domain'>htcomputers.com.au</a>
      </div>
    </footer>
  )
}
