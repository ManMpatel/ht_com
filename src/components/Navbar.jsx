import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import './Navbar.css'

const navLinks = [
  { label: 'Home',       to: '/'           },
  { label: 'Services',   to: '/services',  dropdown: true },
  { label: 'Industries', to: '/industries' },
  { label: 'Partners',   to: '/partners'   },
  { label: 'About',      to: '/about'      },
  { label: 'Blog',       to: '/blog'       },
  { label: 'Contact',    to: '/contact'    },
]

const serviceLinks = [
  { label: 'IT Hardware Supply',        to: '/services/hardware'      },
  { label: 'Enterprise Installations',  to: '/services/installations' },
  { label: 'Managed IT Support',        to: '/services/managed-it'    },
  { label: 'IT Resourcing',             to: '/services/resourcing'    },
  { label: 'Cloud & Licensing',         to: '/services/cloud'         },
  { label: 'Networking & Infrastructure', to: '/services/networking'  },
  { label: 'Cybersecurity',             to: '/services/cybersecurity' },
  { label: 'Unified Communications',    to: '/services/unified-comms' },
  { label: 'Custom Accessories',        to: '/services/accessories'   },
  { label: 'Web & Software Dev',        to: '/services/software'      },
]

export default function Navbar() {
  const { pathname }                    = useLocation()
  const [scrolled,     setScrolled]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)

  const closeTimer = useRef(null)
  const linksRef   = useRef(null)
  const mobileRef  = useRef(null)

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close menus on navigation
  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
  }, [pathname])

  // Navbar link hover — GSAP y nudge
  useEffect(() => {
    if (!linksRef.current) return
    const links    = linksRef.current.querySelectorAll('a')
    const cleanups = []
    links.forEach(link => {
      const enter = () => gsap.to(link, { y: -2, duration: 0.2 })
      const leave = () => gsap.to(link, { y:  0, duration: 0.2 })
      link.addEventListener('mouseenter', enter)
      link.addEventListener('mouseleave', leave)
      cleanups.push(() => {
        link.removeEventListener('mouseenter', enter)
        link.removeEventListener('mouseleave', leave)
      })
    })
    return () => cleanups.forEach(fn => fn())
  }, [])

  // Mobile menu animation
  useEffect(() => {
    const el = mobileRef.current
    if (!el) return

    if (mobileOpen) {
      gsap.fromTo(el,
        { xPercent: 100 },
        { xPercent: 0, duration: 0.4, ease: 'power3.inOut' }
      )
      const items = el.querySelectorAll('.mobile-menu__link, .mobile-menu__cta')
      gsap.fromTo(items,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out', delay: 0.15 }
      )
      document.body.style.overflow = 'hidden'
    } else {
      gsap.to(el, { xPercent: 100, duration: 0.35, ease: 'power3.inOut' })
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Dropdown entrance animation — callback ref
  const dropdownRef = el => {
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: -8 },
      { opacity: 1, y:  0, duration: 0.22, ease: 'power2.out' }
    )
  }

  const openDropdown  = () => { clearTimeout(closeTimer.current); setDropdownOpen(true)  }
  const closeDropdown = () => { closeTimer.current = setTimeout(() => setDropdownOpen(false), 150) }

  const isActive = to =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <Link to='/' className='navbar__logo'>HT Computers</Link>

        <ul className='navbar__links' ref={linksRef}>
          {navLinks.map(({ label, to, dropdown }) => (
            <li
              key={label}
              className={dropdown ? 'navbar__item--has-dropdown' : ''}
              onMouseEnter={dropdown ? openDropdown  : undefined}
              onMouseLeave={dropdown ? closeDropdown : undefined}
            >
              <Link
                to={to}
                className={`navbar__link${isActive(to) ? ' navbar__link--active' : ''}`}
              >
                {label}
                {dropdown && <span className='navbar__chevron'>▾</span>}
              </Link>

              {dropdown && dropdownOpen && (
                <div
                  ref={dropdownRef}
                  className='navbar__dropdown'
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  {serviceLinks.map(s => (
                    <Link key={s.to} to={s.to} className='navbar__dropdown-link'>
                      <span className='navbar__dropdown-arrow'>→</span>
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className='navbar__right'>
          <Link to='/contact' className='navbar__cta'>Get a Quote</Link>
          <button
            className={`navbar__hamburger${mobileOpen ? ' is-open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label='Toggle navigation'
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div ref={mobileRef} className='mobile-menu'>
        <button
          className='mobile-menu__close'
          onClick={() => setMobileOpen(false)}
          aria-label='Close menu'
        >
          ✕
        </button>
        <nav className='mobile-menu__nav'>
          {navLinks.map(({ label, to }) => (
            <Link key={label} to={to} className='mobile-menu__link'>
              {label}
            </Link>
          ))}
          <Link to='/contact' className='mobile-menu__cta'>Get a Quote</Link>
        </nav>
      </div>
    </>
  )
}
