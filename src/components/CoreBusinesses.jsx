import {
  Building2,
  Car,
  Construction,
  Droplets,
  Ship,
  Waves,
} from 'lucide-react';

const businesses = [
  {
    icon: Ship,
    title: 'Marine bunkering & fuel supply',
    text: 'Reliable 24x7 supply of MGO, VLSFO and marine fuels across major ports.',
  },
  {
    icon: Ship,
    title: 'Ship chandling & ship repairs',
    text: 'Comprehensive ship stores supply and repair services at all major Indian ports.',
  },
  {
    icon: Waves,
    title: 'Offshore support services',
    text: 'Freshwater supply, crew transfer, offshore logistics and emergency support.',
  },
  {
    icon: Ship,
    title: 'Tug, barge & marine transporters',
    text: 'Owned and operated fleet for towing, transportation and marine operations.',
  },
  {
    icon: Construction,
    title: 'Engineering & infrastructure',
    text: 'EPC solutions, construction, infrastructure and industrial development services.',
  },
  {
    icon: Droplets,
    title: 'Lubricant distribution',
    text: 'HPCL-authorised lubricant distributor for Kutch and Saurashtra.',
  },
  {
    icon: Car,
    title: 'Automotive dealership',
    text: 'Authorised dealerships for Renault and Toyota.',
  },
  {
    icon: Building2,
    title: 'Commercial & industrial leasing',
    text: 'Leasing of commercial and industrial properties across strategic locations.',
  },
];

export function CoreBusinesses() {
  return (
    <section className="business-section">
      <div className="section-heading">
        <h2>Our core businesses</h2>
        <p>
          Delivering end-to-end solutions across the maritime and infrastructure
          value chain
        </p>
      </div>

      <div className="business-grid">
        {businesses.map((business) => {
          const Icon = business.icon;

          return (
            <article className="business-card" key={business.title}>
              <Icon size={46} strokeWidth={1.8} aria-hidden="true" />
              <h3>{business.title}</h3>
              <span className="business-rule" />
              <p>{business.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
