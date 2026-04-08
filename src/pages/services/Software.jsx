import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Web & Software Development',
    title: `Software That Works the Way Your Business Does.`,
    sub: `Off-the-shelf software rarely fits perfectly. HTC's development team builds websites, web applications, internal tools, and custom systems designed specifically for how your business operates — eliminating the workarounds and inefficiencies that generic software creates.`,
  },
  advantages: {
    heading: 'Our Development Capabilities',
    items: [
      { title: 'Business Websites', desc: `Professional, high-performance websites that reflect your brand, communicate your value clearly, and convert visitors into enquiries. Built on modern frameworks with speed, security, and SEO built in from the start.` },
      { title: 'Custom Web Applications', desc: `Bespoke web-based software built to handle the specific workflows, data, and processes unique to your business — client portals, booking systems, reporting dashboards, and more.` },
      { title: 'Internal Tools and Workflow Automation', desc: `Dashboards, data management tools, approval workflows, and operational systems that genuinely improve how your team works — built around your processes, not the other way around.` },
      { title: 'CRM Development and Integration', desc: `Custom CRM systems from scratch, or integration and extension of existing platforms — giving your sales, operations, and support teams exactly the visibility and workflow they need.` },
      { title: 'Mobile Applications', desc: `iOS and Android applications for your customers or internal team — built to the same standard as our web applications, with a focus on usability and reliability.` },
      { title: 'API Integrations', desc: `Connect your existing systems — accounting software, CRMs, ERPs, eCommerce platforms, payment gateways — through clean, reliable API integrations that eliminate manual data entry.` },
    ],
  },
  extra: [
    {
      heading: 'How We Work',
      bullets: [
        'Discovery and requirements gathering',
        'Architecture and design review',
        'Iterative development with regular check-ins',
        'Testing and quality assurance',
        'Deployment and go-live support',
        'Ongoing maintenance and feature development',
      ],
    },
  ],
  cta: {
    heading: 'Tell Us What You Need Built',
    sub: `Whether you have a detailed brief or just a problem you need solved — talk to HTC's development team. We'll help you define the right solution and build it right.`,
    btn1: 'Start a Development Conversation',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Software() {
  return <ServicePage service={data} />
}
