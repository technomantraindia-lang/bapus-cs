import { Headphones, Ship, ShipWheel, ShieldCheck } from 'lucide-react';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';
import mapImage from '../assets/hero/map.png';

const presenceStats = [
  {
    icon: Ship,
    value: '20+',
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
const mapHotspots = [
  { kind: 'port', top: '34%', left: '29%' },
  { kind: 'port', top: '42%', left: '33%' },
  { kind: 'port', top: '50%', left: '46%' },
  { kind: 'port', top: '48%', left: '54%' },
  { kind: 'port', top: '40%', left: '70%' },
  { kind: 'port', top: '58%', left: '62%' },
  { kind: 'offshore', top: '44%', left: '41%' },
  { kind: 'offshore', top: '52%', left: '38%' },
  { kind: 'offshore', top: '60%', left: '50%' },
  { kind: 'offshore', top: '32%', left: '56%' },
];

export function PresenceSection() {
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
          <a className="presence-button" href="/">
            Explore ports
            <span className="presence-button__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>

        <div className="presence-stats" aria-label="Presence statistics">
          {presenceStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article key={stat.label}>
                <Icon
                  className="presence-stat-icon"
                  size={26}
                  strokeWidth={1.65}
                  aria-hidden="true"
                />
                <strong>{stat.value}</strong>
                <span className="presence-stat-label">{stat.label}</span>
              </article>
            );
          })}
        </div>

        <div className="presence-map-panel">
          <div className="presence-map-visual">
            <img className="presence-map" src={mapImage} alt="" />
            <div className="presence-map-hotspots">
              {mapHotspots.map((dot, i) => (
                <span
                  key={i}
                  className={`presence-dot presence-dot--${dot.kind}`}
                  style={{ top: dot.top, left: dot.left }}
                />
              ))}
            </div>
          </div>
          <div className="presence-map-legend">
            <span className="presence-map-legend__item">
              <i className="presence-legend-swatch presence-legend-swatch--port" />
              Key ports
            </span>
            <span className="presence-map-legend__item">
              <i className="presence-legend-swatch presence-legend-swatch--offshore" />
              Offshore locations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
