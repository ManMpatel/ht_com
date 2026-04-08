import ServicePage from '../../components/ServicePage'

const data = {
  hero: {
    eyebrow: 'Networking & Infrastructure',
    title: 'The Foundation Your Business Runs On.',
    sub: `Every email sent, every file accessed, every video call made — it all depends on your network. HTC designs, deploys, and manages networking infrastructure that performs, scales, and stays secure — built on market-leading technology from Cisco, Aruba, Fortinet, and more.`,
  },
  what: {
    heading: 'Our Networking Capabilities',
    items: [
      'High-performance switching environments — Cisco, Aruba, Ubiquiti',
      'Wi-Fi 6 enterprise wireless networks',
      'LAN and WAN architecture design and implementation',
      'Firewall deployment and security policy configuration — Fortinet, Cisco, WatchGuard',
      'VPN and remote access solutions',
      'Zero-Trust network architecture',
      'Cloud-managed networking — Cisco Meraki, Aruba Central, UniFi',
      'Structured cabling and data centre cabling',
      'UPS installation for uninterrupted operations',
      'Network monitoring and ongoing management',
    ],
  },
  extra: [
    {
      heading: 'Cisco Authorised Partner',
      text: `HTC is a proud Cisco authorised partner — giving us access to the full Cisco product portfolio, certified technical training, and priority support channels. From Catalyst switching to Meraki cloud networking to Webex collaboration — HTC delivers Cisco solutions for businesses of every scale.`,
    },
    {
      heading: 'Why Choose HTC for Your Network',
      bullets: [
        'Multi-vendor certified engineers who understand real-world network environments',
        'Fast procurement of networking hardware through authorised channels',
        'Scalable designs that grow with your business — from 10 seats to 10,000',
        'Full documentation and network diagrams for every deployment',
        'Ongoing support and monitoring to keep your network healthy',
      ],
    },
  ],
  vendors: {
    heading: 'Our Networking Technology Partners',
    items: ['Cisco', 'Aruba', 'Fortinet', 'Ubiquiti', 'WatchGuard', 'TP-Link'],
  },
  cta: {
    heading: 'Build a Network That Works',
    sub: `Whether you're building from scratch, upgrading ageing infrastructure, or expanding to new sites — HTC's networking team is ready to design and deliver the right solution.`,
    btn1: 'Get a Networking Quote',
    btn2: 'Call +61 493 314 230',
  },
}

export default function Networking() {
  return <ServicePage service={data} />
}
