import {
  Building2,
  Car,
  Construction,
  Droplets,
  Ship,
  Waves,
} from 'lucide-react';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';

const businesses = [
  {
    icon: Ship,
    title: 'Marine Bunkering & Fuel Supply',
    text: 'Reliable 24x7 supply of MGO, VLSFO and marine fuels across major ports.',
  },
  {
    icon: Ship,
    title: 'Ship Chandling & Ship Repairs',
    text: 'Comprehensive ship stores supply and repair services at all major Indian ports.',
  },
  {
    icon: Waves,
    title: 'Offshore Support Services',
    text: 'Offshore logistics and emergency support.',
  },
  {
    icon: Ship,
    title: 'Tug, Barge & Marine Transporters',
    text: 'Freshwater supply, crew transfer, Owned and operated fleet for towing, transportation and marine operations.',
  },
  {
    icon: Construction,
    title: 'Engineering & Infrastructure',
    text: 'EPC solutions, construction, infrastructure and industrial development services.',
  },
  {
    icon: Droplets,
    title: 'Lubricant Distribution',
    text: 'HPCL-authorised lubricant distributor for Kutch and Saurashtra.',
  },
  {
    icon: Car,
    title: 'Automotive Dealership',
    text: 'Authorised dealerships for Renault and Toyota.',
  },
  {
    icon: Building2,
    title: 'Commercial & Industrial Leasing',
    text: 'Leasing of commercial and industrial properties across strategic locations.',
  },
];

export function CoreBusinesses() {
  return (
    <section className="business-section">
      <div className="section-heading">
        <SectionAnchorRule />
        <h2>Our core businesses</h2>
        <p>
          Delivering end-to-end solutions across the maritime and infrastructure
          value chain
        </p>
      </div>

      <div className="business-grid">
        {businesses.map((business, index) => {
          const Icon = business.icon;

          return (
            <article className="business-card" key={business.title}>
              <span className="business-card-number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="business-card-icon">
                <Icon size={46} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3>
                {business.title === 'Tug, Barge & Marine Transporters' ? (
                  <>
                    Tug, Barge & Marine
                    <br />
                    Transporters
                  </>
                ) : (
                  business.title
                )}
              </h3>
              <span className="business-rule" />
              <p>{business.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
