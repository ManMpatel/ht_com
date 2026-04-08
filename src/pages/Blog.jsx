import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../styles/pages.css'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    category: 'Hardware',
    posts: [
      'How to Build a Standardised Laptop Fleet for a Growing Business',
      'The Business Case for Authorised Hardware vs Grey Market',
      'What to Consider Before Your Next Device Refresh Cycle',
      'Buffer Stock: Why Smart IT Teams Plan Ahead on Hardware',
    ],
  },
  {
    category: 'Cloud & Microsoft',
    posts: [
      'Microsoft 365 vs Google Workspace: An Honest Comparison for Australian Businesses',
      '5 Signs Your Business Is Ready to Migrate to AWS',
      'How to Reduce Your Microsoft Licensing Costs Without Losing Functionality',
      'Hybrid Cloud Explained: When It Makes Sense and When It Doesn\'t',
    ],
  },
  {
    category: 'Cybersecurity',
    posts: [
      'The 5 Cybersecurity Gaps Most Australian SMBs Have (And How to Close Them)',
      'Why Endpoint Protection Alone Is No Longer Enough',
      'What Is Zero Trust and Should Your Business Care?',
      'Ransomware in 2025: What AU Businesses Need to Know',
    ],
  },
  {
    category: 'IT Management',
    posts: [
      'The Real Cost of IT Downtime — And How Managed IT Changes the Equation',
      'How to Choose the Right Managed IT Provider in Australia',
      'IT Resourcing vs Hiring In-House: A Practical Guide',
      'What Good IT Documentation Looks Like (And Why It Matters)',
    ],
  },
  {
    category: 'Unified Communications',
    posts: [
      'How to Design a Meeting Room That Actually Works',
      'Headset Buying Guide for Enterprise Teams',
      'Zoom vs Teams: Which Is Right for Your Business?',
    ],
  },
]

export default function Blog() {
  useEffect(() => {
    gsap.utils.toArray('.pf').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' } }
      )
    })
    gsap.utils.toArray('.pf-stagger').forEach(container => {
      const children = container.querySelectorAll(':scope > *')
      gsap.fromTo(children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: container, start: 'top 85%' } }
      )
    })
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <section className='page-hero'>
          <div className='page-hero__inner pf'>
            <span className='page-hero__eyebrow'>Blog & Resources</span>
            <h1 className='page-hero__title'>Insights, Guides, and IT Expertise</h1>
            <p className='page-hero__sub'>
              Practical advice, buying guides, and industry updates from the people who deploy,
              manage, and support IT every day. No fluff. Just useful content.
            </p>
          </div>
        </section>

        {categories.map((cat, i) => (
          <section className={`page-section${i % 2 === 1 ? ' page-section--surface' : ''}`} key={cat.category}>
            <div className='page-section__inner'>
              <h2 className='page-section__title pf'>{cat.category}</h2>
              <div className='blog-grid pf-stagger'>
                {cat.posts.map((post, j) => (
                  <div className='blog-card page-card' key={j}>
                    <span className='blog-card__cat'>{cat.category}</span>
                    <h3 className='blog-card__title'>{post}</h3>
                    <span className='blog-card__link'>Read Article →</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className='page-cta pf'>
          <h2 className='page-cta__title'>Want Expert IT Advice for Your Business?</h2>
          <p className='page-cta__sub'>
            Talk to HTC. We'll have an honest conversation about your technology, your
            challenges, and what's worth investing in.
          </p>
          <div className='page-cta__buttons'>
            <Link to='/contact' className='page-btn page-btn--primary'>Contact HTC</Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blog-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
        @media (max-width: 600px) { .blog-grid { grid-template-columns: 1fr; } }
        .blog-card { display: flex; flex-direction: column; gap: 0.5rem; cursor: pointer; }
        .blog-card:hover { border-color: rgba(201,164,82,0.4); transform: translateY(-3px); }
        .blog-card__cat { font-family: 'DM Sans', sans-serif; font-size: 0.65rem; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A452; }
        .blog-card__title { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 600; color: #F0EDE6; line-height: 1.3; margin: 0; }
        .blog-card__link { font-family: 'DM Sans', sans-serif; font-size: 0.78rem; color: #C9A452; margin-top: auto; padding-top: 0.75rem; }
      `}</style>
    </>
  )
}
