import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Cloud & Licensing',
    title: 'Migrate Confidently. Scale Without Limits.',
    sub: `Cloud is no longer a future consideration — it is the foundation of every modern business. HTC helps you get there the right way: planned, secure, optimised, and fully supported as an authorised AWS and Microsoft partner.`,
  },
  extra: [
    {
      label: 'Amazon Web Services — Authorised Partner',
      heading: 'AWS Cloud Services',
      cards: [
        { title: 'Cloud Migration and Modernisation', desc: `We plan and execute smooth migrations from on-premises infrastructure to AWS — minimising disruption and ensuring no data or functionality is lost in the transition.` },
        { title: 'Infrastructure Optimisation', desc: `Already on AWS? We review your EC2, S3, RDS, Lambda, and other resources for performance, cost efficiency, and security gaps.` },
        { title: 'Security and Compliance', desc: `End-to-end security architecture aligned with AWS best practices — including governance frameworks, access control, encryption, and compliance tooling.` },
        { title: 'Hybrid and Multi-Cloud Strategies', desc: `If you need to maintain on-premises workloads alongside cloud environments, HTC architects hybrid solutions that connect your existing infrastructure with AWS seamlessly.` },
        { title: 'Managed AWS Services', desc: `Ongoing monitoring, patching, maintenance, cost management, and support for your AWS environment — handled by HTC's onshore and offshore teams.` },
      ],
    },
    {
      label: 'Microsoft — Authorised Partner',
      heading: 'Microsoft Cloud Services',
      cards: [
        { title: 'Microsoft 365 Deployment', desc: `From initial licensing to full deployment, user onboarding, security configuration, and ongoing management — HTC handles the entire Microsoft 365 lifecycle.` },
        { title: 'Azure Cloud Services', desc: `Infrastructure on Azure, including virtual machines, storage, networking, and identity management — configured, deployed, and managed by HTC engineers.` },
        { title: 'Enterprise Licensing', desc: `We manage Microsoft licensing agreements — ensuring you're on the right tier, not over-licenced, and compliant. We handle renewals, additions, and licence audits.` },
        { title: 'Office 365 Migration', desc: `Moving from on-premises Exchange or older collaboration tools to Office 365? We migrate your mailboxes, files, and data cleanly — with minimal disruption to your team.` },
      ],
    },
  ],
  cta: {
    heading: 'Ready to Move to the Cloud?',
    sub: `Whether you're starting from scratch or optimising an existing cloud environment, HTC's cloud team will build the right strategy for your business.`,
    btn1: 'Book a Cloud Consultation',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Cloud() {
  return <ServicePage service={data} />
}
