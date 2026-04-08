import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'IT Hardware Supply',
    title: 'The Right Hardware. In Stock. Delivered Fast.',
    sub: `Businesses can't afford to wait on hardware. Whether you're equipping a new hire, refreshing a fleet, or rolling out devices across multiple sites — HTC delivers authorised hardware quickly, accurately, and at competitive pricing.`,
  },
  what: {
    heading: 'What We Supply',
    items: [
      'Business laptops and desktops — Dell, HP, Lenovo, Microsoft Surface',
      'Professional monitors and dual-screen setups',
      'Servers and storage solutions',
      'Network switches, routers, and wireless access points',
      'Keyboards, mice, headsets, and peripherals',
      'Docking stations, hubs, and power solutions',
      'Laptop bags, sleeves, and accessories',
      'Enterprise-grade cables and connectivity solutions',
    ],
  },
  advantages: {
    heading: 'Why Hardware Procurement is Better with HTC',
    items: [
      { title: 'Authorised, Not Grey Market', desc: `Every device we supply comes through authorised distribution channels. That means genuine products, valid warranties, and access to vendor support — not the risk and uncertainty of grey market sourcing.` },
      { title: 'Buffer Stock for Zero Delays', desc: `We maintain buffer stock of the most commonly ordered hardware and accessories. We conduct ongoing inventory analysis so we always have the right products on hand when you need them.` },
      { title: 'Same-Day Dispatch Available', desc: `For stocked items, we offer same-day dispatch. For bulk or configured orders, we commit to fast turnaround and reliable delivery windows — so your project timelines stay on track.` },
      { title: 'Bulk and Fleet Supply', desc: `We specialise in fleet-scale procurement. Whether you need 5 laptops or 500 workstations, HTC manages the sourcing, configuration, asset tagging, and distribution — all from a single order.` },
      { title: 'Imaging and Pre-Configuration', desc: `We can image devices, pre-install software, and configure hardware to your SOE before dispatch — so your team is productive from day one, not day three.` },
      { title: 'Multi-Site Distribution', desc: `Need hardware delivered across multiple offices or locations? HTC manages the logistics, packaging, and site-specific delivery — with full documentation for each location.` },
    ],
  },
  vendors: {
    heading: 'Authorised by the Brands You Trust',
    items: ['Cisco', 'Dell', 'HP', 'Lenovo', 'Microsoft', 'AWS', 'Logitech', 'Jabra', 'Yealink', 'ALOGIC'],
  },
  cta: {
    heading: 'Get a Hardware Quote Today',
    sub: `Tell us what you need — device type, quantity, configuration, and timeline. We'll come back to you fast with a competitive, no-obligation quote.`,
    btn1: 'Request a Quote',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Hardware() {
  return <ServicePage service={data} />
}
