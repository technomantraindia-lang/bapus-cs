import { ChevronRight } from 'lucide-react';
import mapImage from '../assets/hero/map.png';

const presenceStats = [
  {
    value: '20+',
    label: 'Ports & locations',
  },
  {
    value: '1000+',
    label: 'Vessels served',
  },
  {
    value: '24/7',
    label: 'Operations support',
  },
  {
    value: '100%',
    label: 'Customer commitment',
  },
];

export function PresenceSection() {
  return (
    <section className="presence-section">
      <div className="presence-copy">
        <p className="presence-kicker">Our presence</p>
        <p>
          Operating across key ports and offshore locations along the Indian
          coastline.
        </p>
        <a className="presence-button" href="/">
          Explore ports
          <ChevronRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="presence-stats" aria-label="Presence statistics">
        {presenceStats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>

      <div className="presence-map-panel" aria-hidden="true">
        <img className="presence-map" src={mapImage} alt="" />
      </div>
    </section>
  );
}
