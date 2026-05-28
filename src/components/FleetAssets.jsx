import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Anchor,
  ArrowRight,
  ChevronRight,
  Clock,
  ShieldCheck,
  Ship,
  Waves,
} from 'lucide-react';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';
import { appHref } from '../lib/routePath.js';
import bunkerBargeImage from '../assets/photo/BUNKERING OPS.png';
import tugBoatImage from '../assets/photo/BARGE SUNSET AT KANDLA.png';
import freshwaterBargeImage from '../assets/photo/BARGE SUNSET KANDLA.png';
import offshoreVesselImage from '../assets/photo/BARGES AT KANDLA.png';

const fleetItems = [
  {
    slug: 'bunker-barges',
    image: bunkerBargeImage,
    title: 'Bunker Barges',
    detail:
      'Reliable bunker barges for efficient fuel supply and vessel-to-vessel marine bunkering operations.',
  },
 
  {
    slug: 'tug-boats',
    image: tugBoatImage,
    title: 'Tug Boats',
    detail:
      'Powerful tug boats for towing, berthing assistance, harbour support and emergency operations.',
  },
  {
    slug: 'freshwater-barges',
    image: freshwaterBargeImage,
    title: 'Freshwater Barges',
    detail:
      'Freshwater barges supporting offshore platforms, anchored vessels and marine logistics needs.',
  },
  {
    slug: 'offshore-vessels',
    image: offshoreVesselImage,
    title: 'Offshore Vessels',
    detail:
      'Offshore support vessels for crew transfer, light cargo movement and marine field operations.',
  },
];

export function FleetAssets() {
  const [active, setActive] = useState(null);

  return (
    <section className="fleet-section">
      <div className="fleet-heading">
        <SectionAnchorRule />
        <span className="fleet-mini-title">Marine Assets</span>
        <h2>Our fleet</h2>
        <p>
          Explore our integrated marine fleet supporting bunkering, offshore
          logistics, tug operations and freshwater supply services.
        </p>
      </div>

      <div className="fleet-hover-area" onMouseLeave={() => setActive(null)}>
        <div className="fleet-stack">
          {fleetItems.map((item, index) => (
            <motion.button
              type="button"
              key={item.title}
              className={`fleet-card ${active?.title === item.title ? 'active' : ''}`}
              onMouseEnter={() => setActive({ ...item, index })}
              onFocus={() => setActive({ ...item, index })}
              initial={{
                opacity: 0,
                y: 60,
                rotate: index % 2 === 0 ? -4 : 4,
              }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -18,
                scale: 1.06,
                zIndex: 90,
                transition: { duration: 0.25 },
              }}
              style={{
                marginLeft: index === 0 ? 0 : -28,
                marginTop: index % 3 === 0 ? 0 : index % 3 === 1 ? 28 : 8,
              }}
            >
              <img src={item.image} alt={item.title} />
              <div className="fleet-card-overlay" />

              <div className="fleet-card-content">
                <Ship size={18} aria-hidden="true" />
                <h3>{item.title}</h3>
              </div>

              <div className="fleet-card-arrow" aria-hidden="true">
                <ChevronRight size={18} />
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              key={active.title}
              className={`fleet-premium-detail fleet-premium-detail--${
                active.index <= 1 ? 'left' : active.index >= fleetItems.length - 2 ? 'right' : 'center'
              }`}
              initial={{ opacity: 0, x: '-50%', y: 35, scale: 0.96 }}
              animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
              exit={{ opacity: 0, x: '-50%', y: 25, scale: 0.96 }}
              transition={{ duration: 0.42, ease: 'easeOut' }}
            >
              <div className="fleet-detail-image-wrap">
                <img src={active.image} alt={active.title} />
                <div className="fleet-detail-image-gradient" />
                <div className="fleet-detail-image-badge">
                  <Anchor size={16} aria-hidden="true" />
                  Marine Asset
                </div>
              </div>

              <div className="fleet-detail-content">
                <div className="fleet-pattern-circle fleet-pattern-one" />
                <div className="fleet-pattern-circle fleet-pattern-two" />

                <span className="fleet-detail-kicker">
                  <Waves size={17} aria-hidden="true" />
                  Selected Marine Asset
                </span>

                <h3>{active.title}</h3>
                <p>{active.detail}</p>

                <div className="fleet-feature-tags">
                  <span>
                    <Clock size={16} aria-hidden="true" />
                    24/7 Operations
                  </span>
                  <span>
                    <ShieldCheck size={16} aria-hidden="true" />
                    Safe Marine Support
                  </span>
                  <span>
                    <Anchor size={16} aria-hidden="true" />
                    Reliable Delivery
                  </span>
                </div>

                <a className="fleet-detail-btn" href={appHref(`/fleet/${active.slug}`)}>
                  View Asset Details
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
