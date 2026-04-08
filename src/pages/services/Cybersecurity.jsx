import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Cybersecurity',
    title: 'Every Endpoint. Every Network. Protected.',
    sub: `Cyber threats don't announce themselves. They exploit gaps — in your endpoints, your email, your access controls, your cloud environment. HTC builds cybersecurity strategies that close those gaps before they become incidents.`,
  },
  advantages: {
    heading: 'Our Cybersecurity Services',
    items: [
      { title: 'Endpoint Protection', desc: `We deploy and manage industry-leading endpoint protection across your device fleet — antivirus, anti-malware, ransomware defence, and behavioural analysis that catches threats your traditional AV misses.` },
      { title: 'Network Security', desc: `Firewall architecture, intrusion prevention, VPN security, and network segmentation — ensuring your internal network is defended against external attacks and internal threats.` },
      { title: 'Identity and Access Management', desc: `Multi-factor authentication, single sign-on, privileged access management, and Zero-Trust identity policies — controlling exactly who can access what, from where.` },
      { title: 'Email and Communication Security', desc: `Email is the most common attack vector. We deploy email filtering, anti-phishing tools, and secure communication policies that stop threats before they reach your team's inboxes.` },
      { title: 'Cloud Security', desc: `Securing your AWS, Azure, and Microsoft 365 environments — including access controls, data loss prevention, compliance policies, and cloud workload protection.` },
      { title: 'Security Monitoring and Incident Response', desc: `Ongoing monitoring of your environment for suspicious activity — and a clear incident response process to contain, investigate, and recover from any security event quickly.` },
    ],
  },
  vendors: {
    heading: 'Our Security Partner Lineup',
    items: ['Sophos', 'Fortinet', 'Microsoft', 'Cisco', 'WatchGuard', 'Bitdefender'],
  },
  cta: {
    heading: 'Is Your Business Properly Protected?',
    sub: `HTC offers a cybersecurity assessment that maps your current exposure and recommends a practical, prioritised plan to close the gaps. No jargon. Just clear advice.`,
    btn1: 'Request a Security Assessment',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Cybersecurity() {
  return <ServicePage service={data} />
}
