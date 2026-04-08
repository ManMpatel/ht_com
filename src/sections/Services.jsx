import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Services.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { number: '01', title: 'IT Hardware Supply',          desc: 'Laptops, desktops, servers, networking gear — sourced from authorised vendors, in stock, delivered fast.',                               to: '/services/hardware'      },
  { number: '02', title: 'Enterprise Installations',    desc: 'From single workstations to multi-site deployments — onsite technicians handle every setup professionally.',                             to: '/services/installations' },
  { number: '03', title: 'Managed IT Support',          desc: 'SLA-based helpdesk, remote monitoring, device management and dedicated account managers.',                                              to: '/services/managed-it'    },
  { number: '04', title: 'IT Resourcing',               desc: 'Skilled IT professionals on demand — onsite project technicians on flexible short and long-term engagements.',                          to: '/services/resourcing'    },
  { number: '05', title: 'Cloud & Licensing',           desc: 'AWS migrations, Microsoft 365 deployments, hybrid cloud architecture — managed start to finish.',                                       to: '/services/cloud'         },
  { number: '06', title: 'Networking & Infrastructure', desc: 'Cisco-backed switching, Wi-Fi 6, firewalls, structured cabling and UPS — the foundation your business runs on.',                       to: '/services/networking'    },
  { number: '07', title: 'Cybersecurity',               desc: 'Endpoint protection, network security, identity management and cloud protection at every layer.',                                      to: '/services/cybersecurity' },
  { number: '08', title: 'Unified Communications',      desc: 'Meeting room design, Zoom and Teams deployments, enterprise headset fleets and hot-desk solutions.',                                   to: '/services/unified-comms' },
  { number: '09', title: 'Custom Accessories & R&D',    desc: 'In-house engineered chargers, hubs, cables and enterprise accessory kits — built to your spec.',                                      to: '/services/accessories'   },
  { number: '10', title: 'Web & Software Development',  desc: 'Business websites, custom web apps, internal tools, CRM systems and API integrations.',                                               to: '/services/software'      },
]

export default function Services() {
  const headingRef = useRef(null)
  const gridRef    = useRef(null)

  useEffect(() => {
    gsap.fromTo(headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
    )
    const cards = gridRef.current.querySelectorAll('.service-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%' } }
    )
  }, [])

  return (
    <section className='services'>
      <div className='section-label'>
        <span className='section-label__line' />
        <span className='section-label__text'>What We Do</span>
        <span className='section-label__line' />
      </div>

      <div className='services-heading' ref={headingRef}>
        <h2 className='services-title char-reveal'>Everything IT. All Under One Roof.</h2>
        <p className='services-sub'>
          Whether you're equipping a new office, refreshing a fleet, migrating to the cloud,
          or building internal tools — HTC has the capability, the stock, and the team to get it done.
        </p>
      </div>

      <div className='services-grid' ref={gridRef}>
        {services.map(s => (
          <Link to={s.to} className='service-card' key={s.number}>
            <span className='service-card__number'>{s.number}</span>
            <h3 className='service-card__title'>{s.title}</h3>
            <p className='service-card__desc'>{s.desc}</p>
            <span className='service-card__arrow'>→</span>
            <div className='service-card__bar' />
          </Link>
        ))}
      </div>

      <div className='services-cta'>
        <Link to='/services' className='services-cta__btn'>View All Services</Link>
      </div>
    </section>
  )
}
