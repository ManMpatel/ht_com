import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Custom Accessories & R&D',
    title: 'Built for You. Not Off the Shelf.',
    sub: `Most IT accessories are designed for the mass market. HTC designs them for your business. Our in-house research and development team engineers custom accessories, kits, and connectivity solutions — built to your specification, tested to enterprise standards.`,
  },
  what: {
    heading: 'Our In-House Accessory Range',
    items: [
      'Custom laptop chargers — multi-wattage, universal, and branded configurations',
      'USB-C hubs and adapters — configured for your specific device fleet',
      'High-speed data and power cables — custom length and connector configurations',
      'Docking solutions — enterprise-grade, multi-port, and hot-desk ready',
      'Enterprise accessory kits — branded boxes containing everything a new employee needs',
      'Monitor arms and desk setup solutions',
      'Cable management and power strip systems',
    ],
  },
  advantages: {
    heading: 'Why Businesses Choose Custom Accessories',
    items: [
      { title: 'Eliminate the Mismatch Problem', desc: `Generic accessories often don't match the devices in your fleet — wrong wattage chargers, incompatible hubs, cables that don't quite work. Custom accessories are designed around your exact devices, so everything works first time.` },
      { title: 'Standardise Across Your Organisation', desc: `When every employee has the same accessories, IT support becomes faster, onboarding becomes easier, and replacements are simple. HTC's custom kits create consistency at scale.` },
      { title: 'Brand and Package Your IT', desc: `We can package custom accessory kits in branded boxes — perfect for employee onboarding, new office launches, or corporate gifting. It's IT, but it makes an impression.` },
      { title: 'Buffer Stock for Instant Replacement', desc: `We manufacture and hold buffer stock of your custom accessories — so when a charger fails or a hub needs replacing, your employee is back up and running within hours, not days.` },
    ],
  },
  extra: [
    {
      heading: 'Our Research and Development Team',
      text: `HTC maintains an active R&D programme that continuously develops new accessory solutions — testing new connector standards, materials, and form factors before bringing them to our enterprise clients. If you have an accessory problem that existing products don't solve, our R&D team will build the answer.`,
    },
  ],
  cta: {
    heading: `Let's Design Your Custom Accessory Kit`,
    sub: `Tell us about your device fleet, your team size, and what accessories you need standardised. We'll design a kit and quote that works for your business.`,
    btn1: 'Talk to Our Accessories Team',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Accessories() {
  return <ServicePage service={data} />
}
