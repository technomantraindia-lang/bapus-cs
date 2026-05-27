import {
  Anchor,
  ArrowRight,
  Clock3,
  Cog,
  SearchCheck,
  ShieldCheck,
  ShipWheel,
  UsersRound,
  Wrench,
} from 'lucide-react';
import dryDockImage from '../assets/hero/feet/seap6.png';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';
import { appHref } from '../lib/routePath.js';

const services = [
  { icon: Wrench, title: 'Vessel Repair' },
  { icon: Cog, title: 'Maintenance Support' },
  { icon: SearchCheck, title: 'Inspection' },
  { icon: ShipWheel, title: 'Marine Engineering' },
];

const stats = [
  { icon: Clock3, value: '24/7', label: 'Support' },
  { icon: ShieldCheck, value: 'Safety First', label: 'Always' },
  { icon: UsersRound, value: 'Experienced', label: 'Team' },
];

export function DryDockFacility() {
  return (
    <section className="drydock-section" aria-labelledby="drydock-title">
      <div className="drydock-shell">
        <div className="drydock-content">
          <div className="drydock-brand">
            <img src={bapusLogo} alt="Bapu's Group" />
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

          <a className="drydock-cta" href={appHref('/dry-dock-facility')}>
            View Detail
            <ArrowRight size={20} strokeWidth={1.9} aria-hidden="true" />
          </a>
        </div>

        <div className="drydock-media">
          <img src={dryDockImage} alt="Marine vessel prepared inside a dry dock facility" />
          <span className="drydock-anchor-badge" aria-hidden="true">
            <Anchor size={34} strokeWidth={1.8} />
          </span>
        </div>
      </div>
    </section>
  );
}
