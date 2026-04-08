# HT Computers Website — Project Context

## Tech Stack
- React + Vite (JavaScript, no TypeScript, no Tailwind)
- GSAP + ScrollTrigger for animations
- Lenis for smooth scroll

## Folder Structure
- `src/components/` — reusable components (Navbar, Cursor, Footer)
- `src/sections/` — page sections
- `src/styles/` — global CSS variables

## Design System

| Token | Value |
|---|---|
| `--bg-primary` | `#080C14` |
| `--bg-surface` | `#0E1420` |
| `--bg-card` | `#111827` |
| `--accent` | `#C9A452` |
| `--accent-light` | `#E8C97A` |
| `--text-primary` | `#F0EDE6` |
| `--text-muted` | `#7A8499` |
| `--border` | `#1E2535` |
| Heading font | Cormorant Garamond (serif), weights 400/600 |
| Body font | DM Sans (sans-serif), weights 400/500 |

## Animation Rules
- All scroll animations use GSAP ScrollTrigger
- Trigger point: `start: 'top 85%'`
- Standard fade-up: `fromTo { opacity:0, y:40 } → { opacity:1, y:0 }`
- Stagger between children: `0.12s`
- All sections have a `1px #1E2535 border-top` as divider

## Section Label Pattern
Small uppercase DM Sans gold text with a thin gold line on each side — used as the eyebrow above every section heading.

## Sections Status
| Section | Status |
|---|---|
| Navbar | ✅ |
| Hero | ✅ |
| StatsBar | ✅ |
| Services | ✅ |
| WhyHTC | ✅ |
| Industries | ✅ |
| Partners | ✅ |
| Testimonials | ✅ |
| FinalCTA | ✅ |
| Contact | ✅ |
| Footer | ✅ |

---

## Website Content

> Source of truth for all copy. Use this when building every section.

**Contact:** +61 493 314 230 | rahul@htcomputers.com.au | htcomputers.com.au

---

### NAVBAR
- Logo: HT Computers
- Links: Home | Services | Industries | Partners | About | Blog | Contact
- CTA: Get a Quote

---

### HERO
**Headline:** One Partner. Every Layer of Your IT.

**Sub:** From hardware supply and enterprise installations to cloud migration, cybersecurity, managed support, and custom software — HT Computers is the single IT partner that handles it all for businesses across Australia and New Zealand.

**Body:** We're authorised by Cisco, Dell, HP, Lenovo, Microsoft, and AWS. We carry buffer stock. We have our own R&D team. We deploy onsite. We support around the clock. Whatever your IT challenge, HTC is ready.

**Buttons:** Get a Quote | Explore Our Services

---

### VALUE STRIP (3 quick wins)
1. **10+ Years of Delivery Excellence** — Over a decade of building, deploying, and supporting IT infrastructure for businesses of every size across Australia and New Zealand.
2. **Authorised by the World's Best Vendors** — Genuine hardware and software from Cisco, Dell, HP, Lenovo, Microsoft, and AWS — with priority support channels and enterprise-grade accountability.
3. **End-to-End. One Roof. No Gaps.** — Supply, installation, support, resourcing, cloud, accessories, and custom software — HTC handles the entire IT lifecycle so your team can focus on what they do best.

---

### SERVICES SECTION
**Label:** What We Do
**Heading:** Everything IT. All Under One Roof.
**Sub:** Whether you're equipping a new office, refreshing a fleet, migrating to the cloud, or building internal tools — HTC has the capability, the stock, and the team to get it done.

| # | Title | Description |
|---|---|---|
| 01 | IT Hardware Supply | Laptops, desktops, monitors, servers, networking gear — sourced from authorised vendors, in stock, and delivered fast. |
| 02 | Enterprise Installations | From single workstations to multi-site deployments — our onsite technicians handle every setup professionally, with full QA and documentation. |
| 03 | Managed IT Support | SLA-based helpdesk, remote monitoring, device management, and dedicated account managers — so your IT never sleeps. |
| 04 | IT Resourcing | Need skilled IT professionals on demand? We provide onsite project technicians and support staff on flexible short and long-term engagements. |
| 05 | Cloud & Licensing | AWS migrations, Microsoft 365 deployments, hybrid cloud architecture, and enterprise licensing — managed from start to finish. |
| 06 | Networking & Infrastructure | Cisco-backed switching, routing, Wi-Fi 6, firewalls, structured cabling, and UPS — the foundation your business runs on. |
| 07 | Cybersecurity | Endpoint protection, network security, identity management, and cloud protection — keeping your business safe at every layer. |
| 08 | Unified Communications | Meeting room design, Zoom and Teams deployments, enterprise headset fleets, and hot-desk solutions — built for how modern teams work. |
| 09 | Custom Accessories & R&D | In-house engineered chargers, hubs, cables, and enterprise accessory kits — built to your spec, not picked off a shelf. |
| 10 | Web & Software Development | Business websites, custom web apps, internal tools, CRM systems, and API integrations — built to solve real business problems. |

**CTA:** View All Services

---

### WHY HTC
**Heading:** Why Businesses Across Australia and New Zealand Choose HTC

| Point | Body |
|---|---|
| We Customise Everything | Our in-house R&D team designs and builds custom accessories, workstation kits, and technology bundles tailored to your specific needs. Nothing generic. Everything fit for purpose. |
| Always Stocked. Never Delayed. | We conduct ongoing inventory analysis and maintain smart buffer stock of high-demand hardware and accessories. Your projects don't wait for supply chains — we've already planned ahead. |
| Authorised by the World's Best | As an authorised partner of Cisco, Dell, HP, Lenovo, Microsoft, and AWS, we deliver genuine products, warranted hardware, and priority vendor support — not grey market shortcuts. |
| Robust End-to-End Delivery | From the first purchase order to the last technician sign-off — HTC owns the entire IT lifecycle. One contact. Full accountability. Zero finger-pointing between providers. |
| Onshore + Offshore Strength | Our AU and NZ-based account managers and onsite technicians are backed by a skilled offshore support team — giving you enterprise-grade coverage at a scalable cost. |
| Cost Efficiency at Scale | Our managed supply model reduces per-device costs, eliminates incorrect orders, prevents supply disruptions, and stabilises your IT procurement budget from the very first engagement. |

---

### STATS BAR
10+ Years in Business | Serving Australia & New Zealand | 6 Authorised Global Vendor Partnerships | Hundreds of Businesses Served

---

### INDUSTRIES
**Label:** Who We Serve
**Heading:** Built for Every Industry
**Sub:** HTC delivers IT solutions across a wide range of sectors — each with their own procurement needs, compliance requirements, and operational demands.

- Corporate & Enterprise
- Education — Schools, TAFEs & Universities
- Government & Public Sector
- Healthcare & Medical
- SMBs & Growing Startups
- Legal & Professional Services
- Finance & Insurance

**CTA:** See Industry Solutions

---

### PARTNERS
**Label:** Our Partners
**Heading:** Authorised By the Brands That Matter

**Core 6:** Cisco | Dell | HP | Lenovo | Microsoft | AWS

**Extended — UC:** Zoom | Yealink | Jabra | Logitech | Poly | ALOGIC | eplug it
**Extended — Networking & Security:** Aruba | TP-Link | Fortinet | Ubiquiti | WatchGuard | Sophos | Bitdefender
**Extended — Accessories:** ALOGIC | eplug it | Logitech | Jabra

---

### TESTIMONIALS
**Heading:** What Our Clients Say

1. "HTC managed our entire office IT rollout across three locations. The team was professional, the hardware arrived on time, and everything was configured before it hit the desks. Highly recommended." — IT Manager, Corporate Client
2. "We have been working with HT Computers for over three years. Their buffer stock model means we have never had to wait on hardware. Brilliant team to work with." — Operations Director, Corporate Client

---

### FINAL CTA BANNER
**Heading:** Ready to Simplify Your IT?
**Sub:** Whether you need to refresh a fleet, migrate to the cloud, secure your endpoints, or build something new — HTC is ready. Let's talk.
**Buttons:** Get a Quote Today | Call +61 493 314 230

---

### CONTACT / QUOTE PAGE
**Heading:** Let's Talk.
**Sub:** Whether you need hardware tomorrow, a managed IT partner for the long term, or help figuring out what your business actually needs — HTC is ready to have a straight, honest conversation.

**Form fields:** Name | Company | Phone | Email | Service (dropdown) | Team size (dropdown) | Requirement (textarea)
**Service dropdown options:** Hardware Supply / Installation / Managed IT / Resourcing / Cloud & Licensing / Networking / Cybersecurity / Unified Comms / Custom Accessories / Web & App Development / Other
**Size dropdown options:** 1–10 / 11–50 / 51–200 / 200–500 / 500+

**Response promise:**
- Respond within 4 business hours
- You will speak to a real person — not a ticket system
- First conversation is always obligation-free
- Straight advice — even if the answer is not HTC

---

### FOOTER
**Tagline:** HT Computers — Powering Businesses With Seamless Technology

**Services links:** IT Hardware Supply | Installations | Managed IT | Resourcing | Cloud & Licensing | Networking | Cybersecurity | Unified Communications | Custom Accessories | Web & App Development

**Contact:** +61 493 314 230 | rahul@htcomputers.com.au

**Authorised Partners:** Cisco | Dell | HP | Lenovo | Microsoft | AWS

**Copyright:** © 2025 HT Computers. All rights reserved. Australia & New Zealand.

---

### ABOUT PAGE
**Headline:** Australia and New Zealand's Most Capable End-to-End IT Partner
**Sub:** HT Computers isn't just a hardware reseller or a helpdesk provider. We are a full-spectrum technology partner — equipped to handle your IT from the first device purchase to the last line of support.

**Our Story:** HT Computers (HTC) was founded with a single purpose: to make IT simple, reliable, and stress-free for businesses of every size. Over more than a decade, we have grown from a hardware supply business into a complete technology solutions company — trusted by businesses, schools, corporates, and government teams across Australia and New Zealand.

**Mission:** To deliver a seamless IT lifecycle experience for every business we serve — combining speed, precision, and genuine vendor expertise under one roof.

**Team contact:** Rahul — rahul@htcomputers.com.au | +61 493 314 230

**Coverage:** Australia and New Zealand — metro CBDs to regional sites.
