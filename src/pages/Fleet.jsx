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
  Phone,
  Ruler,
  ShieldCheck,
  Ship,
  UsersRound,
  Waves,
} from 'lucide-react';
import { Header } from '../components/Header.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { appHref } from '../lib/routePath.js';
import heroImage from '../assets/hero/hero2.png';
import seap1 from '../assets/hero/feet/seap1.png';
import seap2 from '../assets/hero/feet/seap2.png';
import seap3 from '../assets/hero/feet/seap3.png';
import seap4 from '../assets/hero/feet/seap4.png';
import seap5 from '../assets/hero/feet/seap5.png';
import seap6 from '../assets/hero/feet/seap6.png';

const fleetStats = [
  { icon: Ship, value: '50+', label: 'Marine Assets' },
  { icon: Globe2, value: '20+', label: 'Ports & Locations' },
  { icon: Clock3, value: '24/7', label: 'Operations' },
  { icon: ShieldCheck, value: '100%', label: 'Safety Commitment' },
];

const fleetCategories = [
  {
    icon: Ship,
    image: seap1,
    title: 'Bunker Barges',
    text: 'Reliable fuel supply solutions for vessel-to-vessel operations.',
  },
  {
    icon: LifeBuoy,
    image: seap3,
    title: 'Tug Boats',
    text: 'Powerful tug support for berthing, towing and manoeuvring.',
  },
  {
    icon: Droplets,
    image: seap4,
    title: 'Freshwater Barges',
    text: 'Freshwater supply supporting offshore and anchored vessels.',
  },
  {
    icon: Waves,
    image: seap5,
    title: 'Offshore Vessels',
    text: 'Versatile vessels for crew transfer, cargo and field support operations.',
  },
  {
    icon: Cog,
    image: seap6,
    title: 'Dry Dock Facility',
    text: 'World-class dry dock for repair, maintenance and conversions.',
  },
];

const selectedFeatures = [
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
];

const specs = [
  { icon: CircleGauge, title: 'Capacity', value: 'Up to 5,000 KL' },
  { icon: Ruler, title: 'Length Overall', value: '70 - 100 m' },
  { icon: Waves, title: 'Breadth', value: '18 - 25 m' },
  { icon: Flag, title: 'Flag', value: 'International / Compliant' },
  { icon: Anchor, title: 'Class', value: 'IRS / IMO Compliant' },
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

              <h1>Our Fleet &amp; Marine Assets</h1>
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

      <section className="fleet-page-categories">
        <p className="fleet-page-kicker">Our Fleet Categories</p>
        <h2>Built for Every Maritime Need</h2>
        <p>
          From bunkering to offshore support and dry dock services, our fleet is
          equipped to deliver performance across every operation.
        </p>

        <div className="fleet-page-card-grid">
          {fleetCategories.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className={`fleet-page-card${index === 0 ? ' fleet-page-card--active' : ''}`}
                key={item.title}
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

      <section className="fleet-page-selected">
        <div className="fleet-page-selected__copy">
          <p className="fleet-page-kicker">Selected Asset</p>
          <h2>Bunker Barges</h2>
          <span className="fleet-page-squiggle" aria-hidden="true" />
          <p>
            Purpose-built bunker barges for efficient ship-to-ship fuel transfer,
            with robust safety systems and compliance with international
            standards at every port call.
          </p>

          <div className="fleet-page-feature-row">
            {selectedFeatures.map((feature) => {
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

          <a className="fleet-page-button" href={appHref('/contact')}>
            View all details
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>

        <div className="fleet-page-selected__image" aria-hidden="true">
          <img src={seap2} alt="" />
        </div>

          <div className="fleet-page-specs">
            {specs.map((spec) => {
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

      <section className="fleet-page-cta">
        <div className="fleet-page-cta__image" aria-hidden="true">
          <img src={seap6} alt="" />
        </div>
        <div className="fleet-page-cta__copy">
          <span>
            <Phone size={34} aria-hidden="true" />
          </span>
          <div>
            <h2>Need a Reliable Maritime Partner?</h2>
            <p>Let&apos;s work together to power your operations with trust and excellence.</p>
            <a href={appHref('/contact')}>
              Get in Touch
              <ChevronRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <Anchor className="fleet-page-cta__mark" size={180} aria-hidden="true" />
      </section>

      <FooterCta />
    </main>
  );
}
