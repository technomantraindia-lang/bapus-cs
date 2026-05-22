import { ChevronDown, Home, ShipWheel } from 'lucide-react';
import { appHref } from '../lib/routePath.js';
import journeyImage from '../assets/hero/BAPUS SHIPPING JAMNAGAR PVT LTD.jpg.jpeg';

const eras = [
  {
    years: '1988',
    label: 'Inception',
    title: 'Humble Beginnings, Built on Maritime Ambition.',
    copy: "Bapu's Group began with a clear commitment to dependable marine service, strong relationships and work delivered with discipline.",
  },
  {
    years: '1994-1999',
    label: 'Evolution',
    title: 'Evolving Capabilities Across Ports and Clients.',
    copy: 'The group strengthened its operating base, expanded service reliability and earned trust across the maritime value chain.',
  },
  {
    years: '2001-2010',
    label: 'Breakthrough',
    title: 'Breakthrough Growth in Marine and Allied Services.',
    copy: 'New business verticals and sharper execution helped the group move from service delivery to integrated maritime support.',
  },
  {
    years: '2011-2023',
    label: 'Expansion',
    title: 'Expanding with Energy, Logistics and Infrastructure.',
    copy: 'The journey moved beyond single-service operations into a broader platform serving marine, energy, logistics and infrastructure needs.',
  },
  {
    years: '2024-2025',
    label: 'Ascension',
    title: 'A Future-Ready Group with a Stronger Horizon.',
    copy: "Today, Bapu's Group continues to build scale with safety, quality, customer commitment and long-term value at the centre.",
  },
];

export function Journey() {
  const currentEra = eras[0];

  return (
    <main className="journey-page">
      <aside className="journey-era-nav" aria-label="Journey eras">
        <div className="journey-era-nav__spacer" />
        {eras.map((era, index) => (
          <a
            key={era.years}
            className={index === 0 ? 'journey-era-link journey-era-link--active' : 'journey-era-link'}
            href={`#era-${index}`}
          >
            <strong>{era.years}</strong>
            <span>{era.label}</span>
          </a>
        ))}
      </aside>

      <section id="era-0" className="journey-hero">
        <img className="journey-hero__image" src={journeyImage} alt="" aria-hidden="true" />
        <div className="journey-hero__veil" aria-hidden="true" />

        <nav className="journey-breadcrumb" aria-label="Breadcrumb">
          <a href={appHref('/')} aria-label="Home">
            <Home size={14} aria-hidden="true" />
          </a>
          <span>-</span>
          <a href={appHref('/about')}>About Us</a>
          <span>-</span>
          <strong>Our Journey</strong>
        </nav>

        <div className="journey-hero__content">
          <p className="journey-hero__year">{currentEra.years}</p>
          <h1>OUR JOURNEY</h1>
          <h2>{currentEra.title}</h2>
          <p>{currentEra.copy}</p>
        </div>

        <a className="journey-scroll-cue" href="#era-1">
          <span>Scroll to reveal era</span>
          <ChevronDown size={38} aria-hidden="true" />
        </a>
      </section>

      <section className="journey-era-details" aria-label="Journey timeline">
        {eras.slice(1).map((era, index) => (
          <article id={`era-${index + 1}`} className="journey-era-card" key={era.years}>
            <span className="journey-era-card__icon">
              <ShipWheel size={30} aria-hidden="true" />
            </span>
            <div>
              <p>{era.years}</p>
              <h2>{era.title}</h2>
              <span>{era.label}</span>
            </div>
            <p>{era.copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
