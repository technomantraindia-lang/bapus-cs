import { useEffect, useRef, useState } from 'react';
import { Headphones, Ship, ShipWheel, ShieldCheck } from 'lucide-react';
import mapImage from '../assets/hero/map.png';
import { AnimatedStatValue } from './AnimatedStatValue.jsx';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';
import { appHref } from '../lib/routePath.js';

const presenceStats = [
  {
    icon: Ship,
    value: '30+',
    label: 'PORTS &\nLOCATIONS',
  },
  {
    icon: ShipWheel,
    value: '25000+',
    label: 'VESSELS\nSERVED',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'OPERATIONS\nSUPPORT',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    label: 'CUSTOMER\nCOMMITMENT',
  },
];

/** Approximate % positions on map graphic — gold = key ports, cyan = offshore */
export function PresenceSection() {
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.28, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="presence-section">
      <div className="presence-card">
        <div className="presence-card__decor" aria-hidden="true">
          <div className="presence-card__waves" />
          <svg
            className="presence-card__ship"
            viewBox="0 0 520 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M40 140 L120 118 280 108 420 118 480 135 460 165 60 168 Z M140 118 L160 88 340 82 400 108 280 108 Z"
            />
          </svg>
        </div>

        <div className="presence-copy">
          <div className="presence-eyebrow-line" />
          <p className="presence-eyebrow">Our network. Your advantage.</p>
          <h2 className="presence-title">Our Presence</h2>
          <SectionAnchorRule className="section-anchor-rule--align-start presence-anchor" />
          <p className="presence-lede">
            Operating across key ports and offshore locations along the Indian coastline.
          </p>
          <a className="presence-button" href={appHref('/group-company')}>
            Explore ports
            <span className="presence-button__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div ref={statsRef} className="presence-stats" aria-label="Presence statistics">
          {presenceStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article key={stat.label}>
                <Icon
                  className="presence-stat-icon"
                  size={26}
                  strokeWidth={1.65}
                  aria-hidden="true"
                />
                <strong>
                  <AnimatedStatValue
                    value={stat.value}
                    active={statsActive}
                    delayMs={index * 110}
                    countUp={stat.countUp !== false}
                  />
                </strong>
                <span className="presence-stat-label">{stat.label}</span>
              </article>
            );
          })}
        </div>

        <div className="presence-map-panel">
          <div className="presence-map-visual">
            <img className="presence-map" src={mapImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
