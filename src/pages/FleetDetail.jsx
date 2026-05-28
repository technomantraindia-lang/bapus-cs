import {
  ArrowRight,
  BadgeCheck,
  Box,
  ChevronRight,
  Droplets,
  Home,
  Ruler,
  ShieldCheck,
  Ship,
} from 'lucide-react';
import { Header } from '../components/Header.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { appHref, getAppPath } from '../lib/routePath.js';
import heroImage from '../assets/photo/BUNKER LOADING OJ 8.png';
import bunkerOpsImage from '../assets/photo/BUNKERING OPS.png';
import bunkeringImage from '../assets/photo/BUNKERING 2.jpeg';
import tugImage from '../assets/photo/BARGE SUNSET AT KANDLA.png';
import tugAltImage from '../assets/photo/BARGE SUNSET KANDLA.png';
import freshwaterImage from '../assets/photo/BARGES AT KANDLA.png';
import offshoreImage from '../assets/photo/BARGE AT DRYDOCK 4.png';

const detailPages = {
  'bunker-barges': {
    breadcrumb: 'Bunker Barge',
    title: 'Bunker Barge',
    accent: 'Fleet',
    image: heroImage,
    intro:
      'Purpose-built bunker barges designed for safe, efficient and dependable fuel delivery at sea.',
    stats: [
      { icon: Ship, value: '4', label: 'Bunker Barges in Our Fleet' },
      { icon: ShieldCheck, value: '100%', label: 'Certified & Compliant Fleet' },
      { icon: BadgeCheck, value: '99.8%', label: 'Operational Reliability' },
      { icon: Droplets, value: '500 KL - 1200 KL', label: 'Capacity Range to Meet Demand' },
    ],
    listTitle: 'Our Bunker Barge Fleet',
    vessels: [
      { name: 'DWARKESH', image: heroImage, capacity: 'Upto 1200 KL', length: '48 M', breadth: '12 M', className: 'RSV IV' },
      { name: 'VAILANKANNI', image: bunkerOpsImage, capacity: 'Upto 1200 KL', length: '58 M', breadth: '12 M', className: 'RSV II' },
      { name: 'SUCCESS DIGNITY', image: bunkeringImage, capacity: 'Upto 600 KL', length: '46 M', breadth: '9 M', className: 'GMB' },
      { name: 'SOMNATH', image: heroImage, capacity: 'Upto 500 KL', length: '43 M', breadth: '9 M', className: 'GMB' },
    ],
  },
  'tug-boats': {
    breadcrumb: 'Tug Boats',
    title: 'Tug Boat',
    accent: 'Fleet',
    image: tugImage,
    intro:
      'Strong tug assets supporting berthing, towing, harbour movement and emergency marine operations.',
    stats: [
      { icon: Ship, value: '10', label: 'Tug Boats in Our Fleet' },
      { icon: ShieldCheck, value: '100%', label: 'Certified & Compliant Fleet' },
      { icon: BadgeCheck, value: '99.8%', label: 'Operational Reliability' },
      { icon: Droplets, value: '18 M - 29 M', label: 'Length Range to Meet Requirements' },
    ],
    listTitle: 'Our Tug Boat Fleet',
    vessels: [
      { name: 'MANALI 2', image: tugImage, length: '20 M', breadth: '6 M', className: 'GMB' },
      { name: 'MANALI 3', image: tugAltImage, length: '18 M', breadth: '6 M', className: 'GMB' },
      { name: 'MANALI 5', image: tugImage, length: '25 M', breadth: '8 M', className: 'GMB' },
      { name: 'DUL DUL', image: tugAltImage, length: '19 M', breadth: '6 M', className: 'GMB' },
      { name: 'MALARA PRIDE', image: tugImage, length: '22 M', breadth: '6 M', className: 'GMB' },
      { name: 'ADINATH 8', image: tugAltImage, length: '27 M', breadth: '8 M', className: 'GMB' },
      { name: 'SUCCESS KING', image: tugImage, length: '29 M', breadth: '8 M', className: 'GMB' },
      { name: 'SUCCESS NETRAVATI', image: tugAltImage, length: '28 M', breadth: '8 M', className: 'GMB' },
      { name: 'TULIP 1', image: tugImage, length: '24 M', breadth: '7 M', className: 'GMB' },
      { name: 'MAHADEV', image: tugAltImage, length: '20 M', breadth: '6 M', className: 'GMB' },
    ],
  },
  'freshwater-barges': {
    breadcrumb: 'Freshwater Barges',
    title: 'Freshwater Barge',
    accent: 'Fleet',
    image: freshwaterImage,
    intro:
      'Freshwater barges built to support anchored vessels, offshore platforms and coastal marine logistics.',
    stats: [
      { icon: Ship, value: '2', label: 'Fresh Water Barges in Our Fleet' },
      { icon: ShieldCheck, value: '100%', label: 'Certified & Compliant Fleet' },
      { icon: BadgeCheck, value: '99.8%', label: 'Operational Reliability' },
      { icon: Droplets, value: '250 KL - 350 KL', label: 'Capacity Range to Meet Demand' },
    ],
    listTitle: ['Our Freshwater Barge', 'Fleet'],
    vessels: [
      { name: 'RAMA', image: freshwaterImage, capacity: 'Upto 350 KL', length: '41 M', breadth: '9 M', className: 'GMB' },
      { name: 'SUCCESS GLORY', image: tugAltImage, capacity: 'Upto 250 KL', length: '41 M', breadth: '9 M', className: 'GMB' },
    ],
  },
  'offshore-vessels': {
    breadcrumb: 'Offshore Vessels',
    title: 'Offshore Vessel',
    accent: 'Fleet',
    image: offshoreImage,
    intro:
      'Offshore support vessels for crew movement, cargo support and reliable marine field operations.',
    stats: [
      { icon: Ship, value: '2', label: 'Offshore Vessels in Our Fleet' },
      { icon: ShieldCheck, value: '100%', label: 'Certified & Compliant Fleet' },
      { icon: BadgeCheck, value: '99.8%', label: 'Operational Reliability' },
      { icon: Droplets, value: '25 M - 29 M', label: 'Length Range to Meet Requirements' },
    ],
    listTitle: 'Our Offshore Vessel Fleet',
    vessels: [
      { name: 'ADINATH 8', image: offshoreImage, length: '27 M', breadth: '8 M', className: 'GMB' },
      { name: 'IVY', image: freshwaterImage, length: '29 M', breadth: '9 M', className: 'GMB' },
    ],
  },
};

export function FleetDetail() {
  const slug = getAppPath().split('/').filter(Boolean).pop() || 'bunker-barges';
  const page = detailPages[slug] || detailPages['bunker-barges'];

  return (
    <main className="app-shell fleet-detail-page">
      <Header />

      <section className="contact-hero fleet-detail-hero">
        <img src={page.image} alt="" aria-hidden="true" />
        <div className="contact-hero__overlay fleet-detail-hero__overlay" aria-hidden="true" />
        <div className="contact-hero__content fleet-detail-hero__content">
          <nav className="contact-breadcrumb fleet-detail-breadcrumb" aria-label="Breadcrumb">
            <a href={appHref('/')}>
              <Home size={13} aria-hidden="true" />
              Home
            </a>
            <span>/</span>
            <a href={appHref('/fleet')}>Our Fleet</a>
            <span>/</span>
            <strong>{page.breadcrumb}</strong>
          </nav>

          <h1>
            {page.title}
            <span>{page.accent}</span>
          </h1>
          <p>{page.intro}</p>
        </div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <section className="fleet-detail-statbar" aria-label={`${page.breadcrumb} highlights`}>
        {page.stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <article key={stat.label}>
              <span>
                <Icon size={24} aria-hidden="true" />
              </span>
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
            </article>
          );
        })}
      </section>

      <section className="fleet-detail-list-section">
        <h2>
          {Array.isArray(page.listTitle)
            ? page.listTitle.map((line) => <span key={line}>{line}</span>)
            : page.listTitle}
        </h2>
        <div className="fleet-detail-list">
          {page.vessels.map((vessel) => (
            <article key={vessel.name} className="fleet-detail-vessel">
              <img src={vessel.image} alt={vessel.name} />
              <div className="fleet-detail-vessel__body">
                <h3>{vessel.name}</h3>
                <div className="fleet-detail-vessel__specs">
                  {vessel.capacity ? (
                    <span>
                      <Box size={20} aria-hidden="true" />
                      <small>Capacity</small>
                      <b>{vessel.capacity}</b>
                    </span>
                  ) : null}
                  <span>
                    <Ruler size={20} aria-hidden="true" />
                    <small>Length</small>
                    <b>{vessel.length}</b>
                  </span>
                  <span>
                    <Ruler size={20} aria-hidden="true" />
                    <small>Breadth</small>
                    <b>{vessel.breadth}</b>
                  </span>
                  <span>
                    <ShieldCheck size={20} aria-hidden="true" />
                    <small>Class</small>
                    <b>{vessel.className}</b>
                  </span>
                </div>
              </div>
              <a href={appHref('/contact')} aria-label={`Enquire about ${vessel.name}`}>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <aside className="fleet-detail-enquiry">
          <div>
            <h2>Need more information?</h2>
            <p>Our team is here to support you 24/7.</p>
            <a href={appHref('/contact')}>
              Get in Touch
              <ChevronRight size={15} aria-hidden="true" />
            </a>
          </div>
          <img src={heroImage} alt="" aria-hidden="true" />
        </aside>
      </section>

      <FooterCta showCta={false} />
    </main>
  );
}
