import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Managed IT Support',
    title: 'Your IT Never Sleeps. Neither Do We.',
    sub: `When your technology stops working, your business stops working. HTC's managed IT support services keep your systems, devices, and infrastructure running — with the right people on standby and the right processes in place to resolve issues fast.`,
  },
  what: {
    heading: 'What Our Managed IT Support Covers',
    items: [
      'SLA-based helpdesk support — defined response and resolution times',
      'Remote monitoring of devices, servers, and network infrastructure',
      'Proactive device maintenance and patch management',
      'Incident management and escalation handling',
      'On-site support for critical issues and hardware failures',
      'Dedicated account manager for your organisation',
      'Regular reporting on performance, incidents, and assets',
      'Software licence management and renewal tracking',
    ],
  },
  extra: [
    {
      heading: 'Onshore and Offshore. Around the Clock.',
      text: `HTC operates a hybrid support model — AU and NZ-based account managers and onsite technicians handle your day-to-day relationship and escalations, while our skilled offshore support team provides extended-hours coverage for monitoring and helpdesk. You get the best of both: local accountability and 24/7 capability.`,
    },
  ],
  advantages: {
    heading: 'Flexible Engagements That Fit Your Business',
    items: [
      { title: 'Fully Managed IT', desc: `HTC becomes your complete IT department — handling all hardware, software, support, and infrastructure management on an ongoing basis.` },
      { title: 'Co-Managed IT', desc: `We work alongside your existing internal IT team, filling capability gaps, handling overflow, or taking ownership of specific functions like helpdesk or monitoring.` },
      { title: 'Project-Based Support', desc: `For one-off projects, rollouts, or seasonal peaks, HTC provides skilled resource on demand — without the overhead of a full managed contract.` },
    ],
  },
  cta: {
    heading: 'Talk to Us About Managed IT',
    sub: `We'll assess your current support setup and show you where HTC can reduce risk, improve response times, and cut the cost of IT disruptions.`,
    btn1: 'Book a Consultation',
    btn2: 'Call +61 493 314 230',
  },
}

export default function ManagedIT() {
  return <ServicePage service={data} />
}
