import {
  Anchor,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  Globe2,
  HardHat,
  Layers3,
  LifeBuoy,
  MapPin,
  Sailboat,
  ShieldCheck,
  Ship,
  ShipWheel,
  Wrench,
} from 'lucide-react';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { appHref } from '../lib/routePath.js';
import heroImage from '../assets/hero/feet/seap6.png';
import maintenanceImage from '../assets/hero/BSSG OFSHORE - 2022.jpg.jpeg';
import engineeringImage from '../assets/hero/BAPUS SHIPPING JAMNAGAR PVT LTD.jpg.jpeg';
import constructionImage from '../assets/hero/MALARA SEA LOGISTICS - 2012.jpg.jpeg';
import yardImage from '../assets/hero/feet/seap4.png';

const benefits = [
  { icon: Anchor, title: 'Excellent', text: 'nautical accessibility' },
  { icon: ShieldCheck, title: 'Safe', text: 'maneuvering conditions' },
  { icon: MapPin, title: 'Proximity', text: 'to major ports and anchorages' },
  { icon: ShipWheel, title: 'Strategic', text: 'positioning within Indian trade corridor' },
];

const supports = [
  { icon: Factory, title: 'Dry docking and statutory inspections', image: heroImage },
  { icon: Wrench, title: 'Ship repair and maintenance', image: maintenanceImage },
  { icon: HardHat, title: 'Vessel conversion and retrofitting', image: engineeringImage },
  { icon: Building2, title: 'New vessel construction', image: constructionImage },
];

const vesselTypes = [
  { icon: Sailboat, title: 'Coastal Vessels' },
  { icon: Ship, title: 'Bunker Barges' },
  { icon: LifeBuoy, title: 'Tugs' },
  { icon: ShipWheel, title: 'Offshore Support Vessels' },
  { icon: Anchor, title: 'Mini-Craft' },
];

const assurances = [
  { icon: ShieldCheck, title: 'Modern Infrastructure', text: 'Advanced equipment and facilities for efficient operations.' },
  { icon: Layers3, title: 'Skilled Workforce', text: 'Experienced professionals ensuring quality and precision.' },
  { icon: CheckCircle2, title: 'Safety First', text: 'Strict adherence to safety protocols and best practices.' },
  { icon: BadgeCheck, title: 'Quality Assured', text: 'Committed to delivering high-quality services on every project.' },
  { icon: Clock3, title: 'On-Time Delivery', text: 'Efficient processes to minimize delays and maximize reliability.' },
];

export function DryDockDetail() {
  return (
    <main className="app-shell contact-page drydock-detail-page">
      <Header />

      <section className="contact-hero drydock-detail-contact-hero">
        <img src={heroImage} alt="" aria-hidden="true" />
        <div className="contact-hero__overlay" aria-hidden="true" />
        <div className="contact-hero__content">
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <a href={appHref('/')}>Home</a>
            <span>/</span>
            <a href={appHref('/businesses')}>Our Services</a>
            <span>/</span>
            <strong>Dry Dock Facility</strong>
          </nav>

          <h1>Dry Dock Facility</h1>
          <p>
            State-of-the-art dry dock infrastructure delivering reliable ship repair,
            maintenance and engineering solutions.
          </p>

          <div className="contact-hero-points" aria-label="Dry dock highlights">
            <span>
              <Clock3 size={30} aria-hidden="true" />
              <b>24/7</b>
              Support
            </span>
            <span>
              <ShieldCheck size={30} aria-hidden="true" />
              <b>Safety First</b>
              Always
            </span>
            <span>
              <ShipWheel size={30} aria-hidden="true" />
              <b>Marine</b>
              Engineering
            </span>
          </div>
        </div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <section className="drydock-detail-benefits" aria-label="Facility benefits">
        <h2>The facility benefits from</h2>
        <div className="drydock-detail-benefits__grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={32} strokeWidth={1.55} aria-hidden="true" />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="drydock-detail-support">
        <p className="drydock-detail-eyebrow">Scope of Shipyard</p>
        <h2>The Dry Dock Facility supports:</h2>
        <div className="drydock-detail-support__grid">
          {supports.map(({ icon: Icon, title, image }) => (
            <article key={title}>
              <div className="drydock-detail-support__title">
                <Icon size={28} strokeWidth={1.6} aria-hidden="true" />
                <h3>{title}</h3>
              </div>
              <img src={image} alt="" loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="drydock-detail-vessels" aria-label="Supported vessels">
        <div className="drydock-detail-vessels__intro">
          <Ship size={42} strokeWidth={1.45} aria-hidden="true" />
          <p>
            The yard is designed to serve coastal vessels, bunker barges, tugs,
            offshore support vessels, and other marine craft operating within Indian waters.
          </p>
        </div>
        <div className="drydock-detail-vessels__list">
          {vesselTypes.map(({ icon: Icon, title }) => (
            <span key={title}>
              <Icon size={27} strokeWidth={1.55} aria-hidden="true" />
              {title}
            </span>
          ))}
        </div>
      </section>

      <section className="drydock-detail-info">
        <img src={yardImage} alt="Aerial view of shipyard operations" loading="lazy" />
        <div className="drydock-detail-info__copy">
          <article>
            <ShieldCheck size={36} strokeWidth={1.55} aria-hidden="true" />
            <div>
              <h2>All operations are carried out in strict compliance with applicable maritime regulations.</h2>
              <p>
                Directorate General of Shipping requirements, classification society rules,
                and international safety values guide every activity.
              </p>
            </div>
          </article>
          <article>
            <Globe2 size={36} strokeWidth={1.55} aria-hidden="true" />
            <div>
              <h2>The establishment of the BAPUS Graving Dry Dock reinforces the Group&apos;s vertical integration.</h2>
              <p>
                By combining fleet ownership, marine logistics, vessel operations, and shipyard
                infrastructure, Bapu&apos;s Shipping Jamnagar Pvt. Ltd. strengthens its position
                as a comprehensive maritime solutions provider.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="drydock-detail-assurance" aria-label="Operational assurances">
        {assurances.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon size={31} strokeWidth={1.55} aria-hidden="true" />
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </article>
        ))}
      </section>

      <FooterCta />
    </main>
  );
}
