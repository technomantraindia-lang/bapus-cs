import {
  Anchor,
  Award,
  ChevronRight,
  Clock3,
  Fuel,
  Globe2,
  HardHat,
  Leaf,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Ship,
  ShipWheel,
  Sparkles,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-react';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';
import { appHref } from '../lib/routePath.js';
import aboutImage from '../assets/hero/about.jpg';
import mapImage from '../assets/hero/map.png';
import storyVideo from '../assets/hero/cargo-ships-moored-near-urban-coastline-at-sunrise-2026-01-21-12-14-11-utc.mp4';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    copy: "We do what's right, always.",
  },
  {
    icon: HardHat,
    title: 'Safety',
    copy: 'People, assets and environment come first.',
  },
  {
    icon: Award,
    title: 'Excellence',
    copy: 'We strive for the highest standards in everything.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    copy: 'Building a better tomorrow through responsible actions.',
  },
];

const presenceStats = [
  {
    icon: MapPin,
    value: '30+',
    label: 'Ports & locations',
  },
  {
    icon: Users,
    value: '25000+',
    label: 'Vessels served',
  },
  {
    icon: Clock3,
    value: '24/7',
    label: 'Operations support',
  },
  {
    icon: Sparkles,
    value: '100%',
    label: 'Customer commitment',
  },
];

const services = [
  {
    icon: Fuel,
    title: 'Marine Fuel Supply',
    copy: 'Reliable and efficient bunkering solutions across major ports.',
  },
  {
    icon: Ship,
    title: 'Tug & Marine Services',
    copy: 'Expert tug operations and marine support services.',
  },
  {
    icon: LifeBuoy,
    title: 'Offshore Support',
    copy: 'Comprehensive offshore logistics and support for marine operations.',
  },
  {
    icon: ShipWheel,
    title: 'Ship Repairs & Dry Dock',
    copy: 'World-class ship repair, maintenance and dry dock services.',
  },
  {
    icon: Wrench,
    title: 'Engineering & Infrastructure',
    copy: 'Infrastructure and engineering solutions that build the future.',
  },
];

const commitments = [
  {
    icon: Users,
    title: 'People Focused',
    copy: 'Empowering our teams and communities.',
  },
  {
    icon: Anchor,
    title: 'Environment Responsible',
    copy: 'Protecting oceans and natural resources.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Driven',
    copy: 'Delivering results with precision and passion.',
  },
  {
    icon: Globe2,
    title: 'Future Ready',
    copy: 'Innovating today for a better tomorrow.',
  },
];

export function About() {
  return (
    <main className="app-shell about-page">
      <Header />

      <section className="about-page-hero">
        <div className="about-page-hero__media" aria-hidden="true">
          <video autoPlay muted loop playsInline preload="metadata">
            <source src={storyVideo} type="video/mp4" />
          </video>
        </div>
        <div className="about-page-hero__overlay" aria-hidden="true" />
        <div className="about-page-hero__content">
          <nav className="about-breadcrumb" aria-label="Breadcrumb">
            <a href={appHref('/')}>Home</a>
            <span>/</span>
            <strong>About Us</strong>
          </nav>
          <h1>About Us</h1>
          <p>
            Delivering trusted maritime and infrastructure solutions with a
            commitment to safety, reliability and excellence across India and
            beyond.
          </p>
        </div>
        <div className="about-wave" aria-hidden="true" />
      </section>

      <section className="about-legacy-section">
        <div className="about-legacy-image">
          <img src={aboutImage} alt="Marine vessel at sea" />
          <div className="about-trust-badge">
            <Anchor size={25} aria-hidden="true" />
            <strong>Built on Trust.</strong>
            <span>Driven by Excellence.</span>
          </div>
        </div>

        <div className="about-legacy-copy">
          <p className="about-page-kicker">Who we are</p>
          <h2>
            A Legacy of Trust. <br />
            A Future of Possibilities.
          </h2>
          <p>
            We are a diversified maritime and infrastructure company offering
            end-to-end solutions across the maritime value chain. With a strong
            foundation built on integrity, innovation and operational
            excellence, we continue to create value for our clients, partners
            and communities.
          </p>

          <div className="about-values-row">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title}>
                  <Icon size={28} aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-presence-panel">
        <div className="about-presence-copy">
          <p className="about-page-kicker">Our presence</p>
          <h2>
            Strategic Presence. <br />
            Stronger Connections.
          </h2>
          <p>
            Operating across key ports and offshore locations along the Indian
            coastline, ensuring seamless service and support.
          </p>
          <a href={appHref('/')} className="about-page-button">
            Explore our presence
            <ChevronRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="about-presence-stats">
          {presenceStats.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label}>
                <Icon size={30} aria-hidden="true" />
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="about-presence-map">
          <img src={mapImage} alt="" aria-hidden="true" />
        </div>
      </section>

      <section className="about-services-section">
        <p className="about-page-kicker">What we do</p>
        <h2>
          Comprehensive Solutions. <br />
          Enduring Value.
        </h2>
        <p>
          From marine fuel supply to offshore support and infrastructure
          development, we deliver integrated solutions tailored to our clients'
          evolving needs.
        </p>

        <div className="about-service-grid">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <span>
                  <Icon size={38} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="about-commitment-section">
        <div className="about-commitment-bg" aria-hidden="true">
          <img src={aboutImage} alt="" />
        </div>
        <div className="about-commitment-copy">
          <p className="about-page-kicker">Our commitment</p>
          <h2>
            Committed to Building <br />
            Stronger Tomorrows.
          </h2>
          <p>
            We are committed to delivering sustainable solutions that drive
            progress, protect the environment and empower communities.
          </p>
        </div>

        <div className="about-commitment-grid">
          {commitments.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title}>
                <Icon size={42} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <ScrollReveal direction="up">
        <FooterCta />
      </ScrollReveal>
    </main>
  );
}
