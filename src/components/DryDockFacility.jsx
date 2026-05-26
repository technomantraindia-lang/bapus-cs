import {
  Anchor,
  Clock3,
  Cog,
  SearchCheck,
  ShieldCheck,
  ShipWheel,
  UsersRound,
  Wrench,
} from 'lucide-react';
import dryDockImage from '../assets/hero/feet/seap2.png';

const services = [
  { icon: Wrench, title: 'Vessel Repair' },
  { icon: Cog, title: 'Maintenance Support' },
  { icon: SearchCheck, title: 'Inspection & Survey' },
  { icon: ShipWheel, title: 'Marine Engineering' },
];

const stats = [
  { icon: Clock3, value: '24/7', label: 'Support' },
  { icon: Anchor, value: '150+', label: 'Projects' },
  { icon: ShieldCheck, value: 'Safety', label: 'First' },
  { icon: UsersRound, value: 'Experienced', label: 'Team' },
];

export function DryDockFacility() {
  return (
    <section className="drydock-section" aria-labelledby="drydock-title">
      <div className="drydock-shell">
        <div className="drydock-media">
          <img src={dryDockImage} alt="Marine vessel prepared for dry dock support" />
          <span className="drydock-anchor-badge" aria-hidden="true">
            <Anchor size={34} strokeWidth={1.8} />
          </span>
        </div>

        <div className="drydock-content">
          <div className="drydock-kicker">
            <span aria-hidden="true">
              <Anchor size={20} strokeWidth={1.8} />
            </span>
            <p>Bapu&apos;s Group</p>
          </div>

          <h2 id="drydock-title">Dry Dock Facility</h2>
          <div className="drydock-wave" aria-hidden="true" />
          <p className="drydock-lede">
            State-of-the-art dry dock infrastructure delivering reliable ship repair,
            maintenance and engineering solutions.
          </p>

          <div className="drydock-services" aria-label="Dry dock services">
            {services.map(({ icon: Icon, title }) => (
              <article key={title}>
                <Icon size={34} strokeWidth={1.6} aria-hidden="true" />
                <strong>{title}</strong>
              </article>
            ))}
          </div>

          <div className="drydock-stats" aria-label="Dry dock highlights">
            {stats.map(({ icon: Icon, value, label }) => (
              <article key={`${value}-${label}`}>
                <Icon size={30} strokeWidth={1.65} aria-hidden="true" />
                <div>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
