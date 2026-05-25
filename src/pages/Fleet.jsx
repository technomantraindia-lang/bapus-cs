import { useCallback, useRef, useState } from 'react';
import {
  Anchor,
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  CircleGauge,
  Clock3,
  Cog,
  Droplets,
  Flag,
  Globe2,
  Leaf,
  LifeBuoy,
  Ruler,
  ShieldCheck,
  Ship,
  UsersRound,
  Waves,
} from 'lucide-react';
import { Header } from '../components/Header.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';
import { appHref } from '../lib/routePath.js';
import heroImage from '../assets/hero/hero2.png';
import seap1 from '../assets/hero/feet/seap1.png';
import seap2 from '../assets/hero/feet/seap2.png';
import seap3 from '../assets/hero/feet/seap3.png';
import seap4 from '../assets/hero/feet/seap4.png';
import seap5 from '../assets/hero/feet/seap5.png';

const fleetStats = [
  { icon: Ship, value: '30+', label: 'Marine Assets' },
  { icon: Globe2, value: '25+', label: 'Ports & Locations' },
  { icon: Clock3, value: '24/7', label: 'Operations' },
  { icon: ShieldCheck, value: '100%', label: 'Safety Commitment' },
];

const fleetCategories = [
  {
    slug: 'bunker-barges',
    icon: Ship,
    image: seap1,
    detailImage: seap2,
    title: 'Bunker Barges',
    text: 'Reliable fuel supply for vessel-to-vessel operations.',
    description:
      'Purpose-built bunker barges for efficient ship-to-ship fuel transfer, with robust safety systems and compliance with international standards at every port call.',
    features: [
      {
        icon: ShieldCheck,
        title: 'High Safety Standards',
        text: 'Rigorous protocols, trained crews and systems designed for safe bunkering every voyage.',
      },
      {
        icon: Leaf,
        title: 'Efficient & Environmentally Responsible',
        text: 'Operations aligned with environmental compliance and efficient fuel handling.',
      },
      {
        icon: BadgeCheck,
        title: 'Operational Excellence',
        text: 'Reliable schedules, maintenance discipline and port-ready readiness across our fleet.',
      },
    ],
    specs: [
      { icon: CircleGauge, title: 'Capacity', value: 'Up to 5,000 KL' },
      { icon: Ruler, title: 'Length Overall', value: '70 - 100 m' },
      { icon: Waves, title: 'Breadth', value: '18 - 25 m' },
      { icon: Flag, title: 'Flag', value: 'International / Compliant' },
      { icon: Anchor, title: 'Class', value: 'IRS / IMO Compliant' },
    ],
  },
  {
    slug: 'tug-boats',
    icon: LifeBuoy,
    image: seap3,
    detailImage: seap3,
    title: 'Tug Boats',
    text: 'Strong tug support for berthing and towing.',
    description:
      'Powerful tug boats built for berthing, unberthing, towing and emergency support, helping vessels move safely and efficiently across port waters.',
    features: [
      {
        icon: LifeBuoy,
        title: 'Reliable Towage Support',
        text: 'Responsive tug assistance for vessel movement, berthing and towing requirements.',
      },
      {
        icon: UsersRound,
        title: 'Experienced Crew',
        text: 'Skilled marine teams trained for safe close-quarter vessel handling.',
      },
      {
        icon: BadgeCheck,
        title: 'Port-Ready Operations',
        text: 'Maintained assets available for dependable support during critical port calls.',
      },
    ],
    specs: [
      { icon: CircleGauge, title: 'Bollard Pull', value: 'Up to 32 MT' },
      { icon: Ruler, title: 'Length Overall', value: '20 - 35 m' },
      { icon: Waves, title: 'Operations', value: 'Berthing / Towing' },
      { icon: Flag, title: 'Flag', value: 'Indian / Compliant' },
      { icon: Anchor, title: 'Class', value: 'MS / RSV Class' },
    ],
  },
  {
    slug: 'freshwater-barges',
    icon: Droplets,
    image: seap4,
    detailImage: seap4,
    title: 'Freshwater Barges',
    text: 'Freshwater supply for offshore and anchored vessels.',
    description:
      'Freshwater barges designed to supply clean water to coastal, offshore and anchored vessels with dependable scheduling and safe transfer practices.',
    features: [
      {
        icon: Droplets,
        title: 'Freshwater Supply',
        text: 'Efficient water delivery for vessels at anchorage, offshore locations and port limits.',
      },
      {
        icon: Clock3,
        title: 'Timely Coordination',
        text: 'Planned operations to match vessel schedules and reduce waiting time.',
      },
      {
        icon: ShieldCheck,
        title: 'Safe Transfer Process',
        text: 'Controlled handling practices for consistent and secure freshwater supply.',
      },
    ],
    specs: [
      { icon: CircleGauge, title: 'Capacity', value: 'High-volume supply' },
      { icon: Ruler, title: 'Service Area', value: 'Port / Anchorage' },
      { icon: Waves, title: 'Use Case', value: 'Freshwater Delivery' },
      { icon: Flag, title: 'Flag', value: 'Compliant Operations' },
      { icon: Anchor, title: 'Class', value: 'Marine Supply Asset' },
    ],
  },
  {
    slug: 'offshore-vessels',
    icon: Waves,
    image: seap5,
    detailImage: seap5,
    title: 'Offshore Vessels',
    text: 'Crew transfer, cargo and field support vessels.',
    description:
      'Offshore support vessels equipped for crew transfer, cargo movement and field support across demanding marine operating environments.',
    features: [
      {
        icon: UsersRound,
        title: 'Crew Transfer',
        text: 'Safe and coordinated movement of crew between shore, vessels and offshore sites.',
      },
      {
        icon: Ship,
        title: 'Cargo Support',
        text: 'Flexible support for stores, equipment and operational cargo movement.',
      },
      {
        icon: Globe2,
        title: 'Field Operations',
        text: 'Dependable marine support across offshore and coastal project needs.',
      },
    ],
    specs: [
      { icon: CircleGauge, title: 'Capability', value: 'Crew / Cargo Support' },
      { icon: Ruler, title: 'Range', value: 'Coastal / Offshore' },
      { icon: Waves, title: 'Operations', value: 'Field Support' },
      { icon: Flag, title: 'Flag', value: 'Compliant Fleet' },
      { icon: Anchor, title: 'Class', value: 'Offshore Support' },
    ],
  },
];

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    text: 'Strict safety protocols and regular drills for all operations.',
  },
  {
    icon: UsersRound,
    title: 'Expert Crew',
    text: 'Experienced and trained professionals ensuring smooth operations.',
  },
  {
    icon: Cog,
    title: 'Well Maintained',
    text: 'Regular inspections and maintenance for peak performance.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Operations',
    text: 'Environmentally responsible practices for a better tomorrow.',
  },
];

export function Fleet() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedSectionRef = useRef(null);
  const selectedAsset = fleetCategories[selectedIndex];

  const selectFleetCategory = useCallback((index) => {
    setSelectedIndex(index);

    window.requestAnimationFrame(() => {
      const section = selectedSectionRef.current;
      if (!section) return;

      const isMobile = window.matchMedia('(max-width: 720px)').matches;
      const offset = isMobile ? 92 : 112;
      const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: Math.max(0, targetTop),
        left: 0,
        behavior: 'smooth',
      });
    });
  }, []);

  return (
    <main className="app-shell fleet-page">
      <Header />

      <section className="contact-hero fleet-page-hero">
        <img src={heroImage} alt="" aria-hidden="true" />
        <div className="contact-hero__overlay" aria-hidden="true" />
        <div className="contact-hero__content">
          <div className="fleet-page-hero__layout">
            <div className="fleet-page-hero__copy">
              <nav className="contact-breadcrumb fleet-page-breadcrumb" aria-label="Breadcrumb">
                <a href={appHref('/')}>Home</a>
                <span>/</span>
                <strong>Fleet</strong>
              </nav>

              <h1>Our Fleet</h1>
              <p>
                A diversified fleet built for reliability, safety and round-the-clock maritime
                support—trusted across major ports and offshore corridors.
              </p>

              <div className="fleet-page-stats" aria-label="Fleet highlights">
                {fleetStats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <article key={stat.label}>
                      <Icon size={28} aria-hidden="true" />
                      <strong>{stat.value}</strong>
                      <span>{stat.label}</span>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="fleet-page-hero__visual" aria-hidden="true">
              <img src={seap2} alt="" />
            </div>
          </div>
        </div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <ScrollReveal direction="up" className="fleet-page-reveal fleet-page-reveal--categories">
        <section className="fleet-page-categories">
          <p className="fleet-page-kicker">Our Fleet Categories</p>
          <h2>Built for Every Maritime Need</h2>
          <p>
            From bunkering to offshore support services, our fleet is
            equipped to deliver performance across every operation.
          </p>

          <div className="fleet-page-card-grid">
            {fleetCategories.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === selectedIndex;

              return (
                <article
                  className={isActive ? 'fleet-page-card fleet-page-card--active' : 'fleet-page-card'}
                  key={item.title}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onClick={() => selectFleetCategory(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      selectFleetCategory(index);
                    }
                  }}
                >
                  <img src={item.image} alt={item.title} />
                  <span>
                    <Icon size={34} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ChevronRight size={22} aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="left" className="fleet-page-reveal fleet-page-reveal--selected">
        <section className="fleet-page-selected" ref={selectedSectionRef} tabIndex={-1}>
          <div className="fleet-page-selected__copy">
            <p className="fleet-page-kicker">Selected Asset</p>
            <h2>{selectedAsset.title}</h2>
            <span className="fleet-page-squiggle" aria-hidden="true" />
            <p>{selectedAsset.description}</p>

            <div className="fleet-page-feature-row">
              {selectedAsset.features.map((feature) => {
                const Icon = feature.icon;

                  return (
                    <article key={feature.title}>
                      <span className="fleet-page-feature-icon">
                        <Icon size={26} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </article>
                  );
              })}
            </div>

            <a className="fleet-page-button" href={appHref(`/fleet/${selectedAsset.slug}`)}>
              View all details
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="fleet-page-selected__image" aria-hidden="true">
            <img src={selectedAsset.detailImage} alt="" />
          </div>

          <div className="fleet-page-specs">
            {selectedAsset.specs.map((spec) => {
              const Icon = spec.icon;

              return (
                <article key={spec.title}>
                  <span className="fleet-page-spec-icon">
                    <Icon size={22} strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{spec.title}</h3>
                    <p>{spec.value}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal direction="right" className="fleet-page-reveal fleet-page-reveal--capabilities">
        <section className="fleet-page-capabilities">
          <div className="fleet-page-capabilities__intro">
            <p className="fleet-page-kicker">Our Capabilities</p>
            <h2>Driven by Safety. Defined by Performance.</h2>
            <span className="fleet-page-squiggle" aria-hidden="true" />
            <p>
              We combine advanced assets, skilled people and robust processes to
              deliver dependable maritime solutions every day.
            </p>
          </div>

          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article key={capability.title}>
                <span>
                  <Icon size={34} aria-hidden="true" />
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            );
          })}
        </section>
      </ScrollReveal>

      <FooterCta />
    </main>
  );
}
