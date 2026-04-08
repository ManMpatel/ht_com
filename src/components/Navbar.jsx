import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './Navbar.css'

const navLinks = [
  { label: 'Home',       to: '/'          },
  { label: 'Services',   to: '/services'  },
  { label: 'Industries', to: '/industries'},
  { label: 'Partners',   to: '/partners'  },
  { label: 'About',      to: '/about'     },
  { label: 'Blog',       to: '/blog'      },
  { label: 'Contact',    to: '/contact'   },
]

const LINK_COLOR_DEFAULT = '#F0EDE6'
const LINK_COLOR_HOVER   = '#C9A452'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const linksRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const links    = linksRef.current.querySelectorAll('a')
    const cleanups = []
    links.forEach(link => {
      const onEnter = () => gsap.to(link, { y: -2, color: LINK_COLOR_HOVER,   duration: 0.2 })
      const onLeave = () => gsap.to(link, { y:  0, color: LINK_COLOR_DEFAULT, duration: 0.2 })
      link.addEventListener('mouseenter', onEnter)
      link.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        link.removeEventListener('mouseenter', onEnter)
        link.removeEventListener('mouseleave', onLeave)
      })
    })
    return () => cleanups.forEach(fn => fn())
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <Link to='/' className='navbar__logo'>HT Computers</Link>
      <ul className='navbar__links' ref={linksRef}>
        {navLinks.map(({ label, to }) => (
          <li key={label}><Link to={to}>{label}</Link></li>
        ))}
      </ul>
      <Link to='/contact' className='navbar__cta'>Get a Quote</Link>
    </nav>
  )
}

export default Navbar
