import seap1 from '../assets/hero/feet/seap1.png';
import seap2 from '../assets/hero/feet/seap2.png';
import seap3 from '../assets/hero/feet/seap3.png';
import seap4 from '../assets/hero/feet/seap4.png';
import seap5 from '../assets/hero/feet/seap5.png';
import seap6 from '../assets/hero/feet/seap6.png';

const fleetItems = [
  {
    image: seap1,
    title: 'Bunker barges',
  },
  {
    image: seap2,
    title: 'Bunker tankers',
  },
  {
    image: seap3,
    title: 'Tug boats',
  },
  {
    image: seap4,
    title: 'Freshwater barges',
  },
  {
    image: seap5,
    title: 'Offshore vessels',
  },
  {
    image: seap6,
    title: 'Dry dock facility',
  },
];

export function FleetAssets() {
  return (
    <section className="fleet-section">
      <div className="fleet-heading">
        <h2>Our fleet &amp; marine assets</h2>
      </div>

      <div className="fleet-grid">
        {fleetItems.map((item, index) => (
          <article className={`fleet-card fleet-card-${index + 1}`} key={item.title}>
            <img src={item.image} alt="" aria-hidden="true" />
            <div className="fleet-card-overlay" />
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
