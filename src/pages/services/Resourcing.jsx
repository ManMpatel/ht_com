import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'IT Resourcing',
    title: 'The Right IT Talent. On Your Timeline.',
    sub: `Projects ramp up. Teams get stretched. IT demand doesn't follow a neat schedule. HTC's resourcing service gives you access to skilled IT professionals — on site, when you need them, for as long as you need them.`,
  },
  what: {
    heading: 'Who We Can Place',
    items: [
      'Desktop support and helpdesk technicians',
      'Network engineers and infrastructure specialists',
      'Project managers for IT rollouts and deployments',
      'Installation and deployment technicians',
      'Cloud engineers — AWS and Azure specialists',
      'Cybersecurity analysts and engineers',
      'Systems administrators',
      'IT coordinators and asset management staff',
    ],
  },
  advantages: {
    heading: 'How We Engage',
    items: [
      { title: 'Short-Term / Project Based', desc: `Need extra hands for a specific deployment, office relocation, or system rollout? We provide technicians for the duration of your project — no long-term commitment required.` },
      { title: 'Long-Term Staff Augmentation', desc: `If your internal team has ongoing gaps, HTC places skilled professionals into your organisation on an extended basis — integrated into your team, under your direction.` },
      { title: 'Surge and Overflow Coverage', desc: `During peak periods, tech refresh cycles, or when your team is unavailable, HTC provides immediate resource to keep operations moving without missing a beat.` },
    ],
  },
  extra: [
    {
      heading: 'Why Businesses Use HTC for Resourcing',
      bullets: [
        'AU and NZ-based professionals — no overseas placement delays',
        'Pre-vetted technical skills matched to your specific requirements',
        'HTC-managed — we handle contracts, compliance, and continuity',
        'Flexible engagement terms — weekly, monthly, or project-based',
        'Fast placement — we maintain a talent network ready to mobilise',
      ],
    },
  ],
  cta: {
    heading: 'Need IT Resource Fast?',
    sub: `Tell us the role, the skills, the location, and the timeline. We'll match you with the right person quickly.`,
    btn1: 'Submit a Resourcing Request',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Resourcing() {
  return <ServicePage service={data} />
}
