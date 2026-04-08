import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Enterprise Installations & Deployment',
    title: 'From Box to Desk — We Handle It All.',
    sub: `Buying hardware is the easy part. Getting it installed, configured, and running across your business without disrupting operations — that's where most IT projects fall over. HTC's installation team makes sure that never happens to you.`,
  },
  what: {
    heading: 'What We Install and Deploy',
    items: [
      'Workstation builds and desk setups at scale',
      'Docking station installation and configuration',
      'Monitor arm and multi-screen setups',
      'Server rack installation and configuration',
      'Network infrastructure installation — switching, routing, wireless',
      'Meeting room builds — video bars, displays, conferencing systems',
      'Hot-desk stations and shared workspace builds',
      'Reception and huddle space technology setups',
      'Cable management and power integration',
      'Decommissioning and asset disposal',
    ],
  },
  advantages: {
    heading: 'Our Installation Process',
    items: [
      { title: 'Site Assessment', desc: `Before any deployment, our team assesses the site — understanding the physical layout, existing infrastructure, cabling requirements, and any constraints that could affect the installation.` },
      { title: 'Pre-Configuration', desc: `Where possible, hardware is pre-configured, imaged, and tested before it arrives on site. This dramatically reduces installation time and eliminates troubleshooting delays on the day.` },
      { title: 'Onsite Deployment', desc: `Our trained technicians arrive on schedule, work systematically, and communicate clearly throughout the installation. We treat your workplace with care — no mess, no downtime, no surprises.` },
      { title: 'QA and Testing', desc: `Every installation goes through a quality assurance process. Every device is tested. Every connection is verified. Every setup is confirmed as operational before our team leaves.` },
      { title: 'Documentation', desc: `Full installation documentation is provided — including device lists, configuration records, network diagrams, and sign-off sheets. You always have a complete record of what was deployed.` },
    ],
  },
  extra: [
    {
      heading: 'From One Desk to an Entire Campus',
      text: `HTC has experience managing installations of all sizes — from a single workstation upgrade to multi-site enterprise rollouts covering hundreds of devices across multiple buildings or cities. Our logistics and project management capability scales with your requirements.`,
    },
  ],
  cta: {
    heading: 'Planning a Deployment?',
    sub: `Tell us about your project — location, scale, timeline, and what needs to be installed. We'll put together a plan and quote tailored to your requirements.`,
    btn1: 'Talk to Our Installations Team',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Installations() {
  return <ServicePage service={data} />
}
