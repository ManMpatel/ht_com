import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Unified Communications',
    title: 'Rooms That Work. Teams That Connect.',
    sub: `Today's teams collaborate across offices, time zones, and continents. The technology supporting that collaboration has to be invisible — it just works. HTC designs, supplies, and deploys unified communications solutions that make every meeting seamless and every workspace productive.`,
  },
  advantages: {
    heading: 'What We Design and Deploy',
    items: [
      { title: 'Meeting Room Experiences', desc: `Beautifully integrated Zoom and Microsoft Teams-ready rooms with crystal-clear audio, smart cameras, interactive displays, and clean cable-free layouts. Whether it's a boardroom or a huddle space, we design for the way your team actually meets.` },
      { title: 'Hot-Desk and Shared Workstations', desc: `Shared desks equipped with universal docking stations, instant power, single-cable connections, and peripherals configured for any employee to plug in and go.` },
      { title: 'Enterprise Headset Fleets', desc: `We supply and deploy standardised high-quality headsets across departments — ensuring audio clarity for every call, in every team.` },
      { title: 'Docking Stations and Power Solutions', desc: `Docking stations, power rails, and cable management pathways that eliminate clutter and deliver a consistent, professional workstation experience.` },
      { title: 'Desk Setups at Scale', desc: `Plug-and-play workstations for new offices, floor refits, or employee onboarding programmes — configured before delivery so every employee is productive from their first day.` },
      { title: 'Reception and Huddle Spaces', desc: `Small but powerful setups for quick stand-ups, ad-hoc meetings, guest interactions, and reception areas — designed to impress and perform.` },
    ],
  },
  vendors: {
    heading: 'Our UC Technology Partners',
    items: ['Microsoft', 'Zoom', 'Yealink', 'Jabra', 'Cisco', 'Logitech', 'Poly', 'ALOGIC', 'eplug it'],
  },
  cta: {
    heading: 'Upgrade Your Collaboration Spaces',
    sub: `Tell us about your workspace — size, team count, existing technology, and what's not working. We'll design a UC solution that solves the problem.`,
    btn1: 'Request a UC Consultation',
    btn2: 'Call +61 493 314 230',
  },
}

export default function UnifiedComms() {
  return <ServicePage service={data} />
}
