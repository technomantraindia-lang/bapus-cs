import '../styles/drydockDetailPage.css';
import {
  Anchor,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  Globe2,
  HardHat,
  Layers3,
  LifeBuoy,
  Sailboat,
  ShieldCheck,
  Ship,
  ShipWheel,
  Wrench,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { appHref } from '../lib/routePath.js';
import dryDockHeroImage from '../assets/photo/DRYDOCK.png';
import dryDockAerialImage from '../assets/photo/DRY DOCK RAW ARIEL 2.jpeg';
import dryDockRawAerialImage from '../assets/photo/BARGE AT DRYDOCK.png';
import bargeAtDryDockImage from '../assets/photo/DRY DOCK ARIEL.jpeg';
import vesselAtDryDockImage from '../assets/photo/VESSEL AT DRYDOCK.png';
import yardImage from '../assets/photo/DRY DOCK ARIEL 3.jpeg';

const supports = [
  {
    icon: Factory,
    title: 'Dry docking and statutory inspections',
    blurb: 'Class surveys, docking plans and regulatory inspections.',
    image: dryDockAerialImage,
    imagePosition: '58% center',
    alt: 'Large vessel positioned inside a graving dry dock',
  },
  {
    icon: Wrench,
    title: 'Ship repair and maintenance',
    blurb: 'Hull, machinery and systems serviced to class standards.',
    image: vesselAtDryDockImage,
    imagePosition: '50% 42%',
    alt: 'Coastal tanker undergoing repair at the shipyard',
  },
  {
    icon: HardHat,
    title: 'Vessel conversion and retrofitting',
    blurb: 'Upgrades, modifications and compliance-driven retrofits.',
    image: bargeAtDryDockImage,
    imagePosition: '48% center',
    alt: 'Vessel alongside jetty for conversion work',
  },
  {
    icon: Building2,
    title: 'New vessel construction',
    blurb: 'New-build support for coastal and support craft.',
    image: dryDockRawAerialImage,
    imagePosition: '52% 38%',
    alt: 'New-build hull and outfitting at the yard',
  },
];

const vesselTypes = [
  { icon: Sailboat, title: 'Coastal Vessels' },
  { icon: Ship, title: 'Bunker Barges' },
  { icon: LifeBuoy, title: 'Tugs' },
  { icon: ShipWheel, title: 'Offshore Support Vessels' },
  { icon: Anchor, title: 'Mini-Craft' },
];

const assurances = [
  { icon: ShieldCheck, title: 'Modern Infrastructure', text: 'Advanced equipment and facilities for efficient operations.' },
  { icon: Layers3, title: 'Skilled Workforce', text: 'Experienced professionals ensuring quality and precision.' },
  { icon: CheckCircle2, title: 'Safety First', text: 'Strict adherence to safety protocols and best practices.' },
  { icon: BadgeCheck, title: 'Quality Assured', text: 'Committed to delivering high-quality services on every project.' },
  { icon: Clock3, title: 'On-Time Delivery', text: 'Efficient processes to minimize delays and maximize reliability.' },
];

const heroPoints = [
  { icon: Clock3, lead: '24/7', rest: 'Support' },
  { icon: ShieldCheck, lead: 'Safety First', rest: 'Always' },
  { icon: ShipWheel, lead: 'Marine', rest: 'Engineering' },
];

const easeSmooth = [0.22, 1, 0.36, 1];
const viewportOnce = { once: true, margin: '0px 0px -12% 0px', amount: 0.18 };

export function DryDockDetail() {
  const reduce = useReducedMotion();
  const yOff = reduce ? 0 : 22;
  const ySection = reduce ? 0 : 40;

  const fadeUp = {
    hidden: { opacity: 0, y: yOff },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.52, ease: easeSmooth },
    },
  };

  const heroIntro = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  };

  const pointStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const pointItem = {
    hidden: { opacity: 0, x: reduce ? 0 : -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0.01 : 0.38, ease: easeSmooth },
    },
  };

  const sectionReveal = {
    hidden: { opacity: 0, y: ySection },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.58, ease: easeSmooth },
    },
  };

  const headStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.04,
      },
    },
  };

  const cardReveal = (index) => ({
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: reduce ? 0 : 0.07 * index,
        duration: reduce ? 0.01 : 0.5,
        ease: easeSmooth,
      },
    },
  });

  return (
    <main className="app-shell contact-page drydock-detail-page">
      <Header />

      <section className="contact-hero drydock-detail-contact-hero drydock-hero--motion" aria-label="Dry dock facility">
        <img src={dryDockHeroImage} alt="" aria-hidden="true" className="drydock-hero-bg" />
        <div className="contact-hero__overlay drydock-hero-overlay-shine" aria-hidden="true" />
        <div className="drydock-hero-blob drydock-hero-blob--a" aria-hidden="true" />
        <div className="drydock-hero-blob drydock-hero-blob--b" aria-hidden="true" />

        <motion.div
          className="contact-hero__content"
          variants={heroIntro}
          initial="hidden"
          animate="visible"
        >
          <motion.nav className="contact-breadcrumb" aria-label="Breadcrumb" variants={fadeUp}>
            <a href={appHref('/')}>Home</a>
            <span>/</span>
            <a href={appHref('/businesses')}>Our Services</a>
            <span>/</span>
            <strong>Dry Dock Facility</strong>
          </motion.nav>

          <motion.h1 variants={fadeUp}>Dry Dock Facility</motion.h1>
          <motion.p variants={fadeUp}>
            State-of-the-art dry dock infrastructure delivering reliable ship repair,
            maintenance and engineering solutions.
          </motion.p>

          <motion.div
            className="contact-hero-points"
            variants={pointStagger}
            aria-label="Dry dock highlights"
          >
            {heroPoints.map(({ icon: Icon, lead, rest }) => (
              <motion.span
                key={`${lead}-${rest}`}
                variants={pointItem}
                whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.22 } }}
              >
                <Icon size={30} aria-hidden="true" />
                <b>{lead}</b>
                {rest}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <div className="drydock-detail-body">
        <motion.section
          className="drydock-detail-support"
          aria-labelledby="drydock-support-heading"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.header className="drydock-detail-head" variants={headStagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <motion.p className="drydock-detail-eyebrow" variants={fadeUp}>Scope of Shipyard</motion.p>
            <motion.h2 id="drydock-support-heading" variants={fadeUp}>
              The Dry Dock Facility supports:
            </motion.h2>
          </motion.header>
          <div className="drydock-detail-support__grid">
            {supports.map(({ icon: Icon, title, blurb, image, imagePosition, alt }, index) => (
              <motion.article
                key={title}
                className="drydock-support-card"
                style={{ '--card-image-position': imagePosition }}
                variants={cardReveal(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                whileHover={
                  reduce
                    ? undefined
                    : { y: -10, transition: { duration: 0.28, ease: easeSmooth } }
                }
              >
                <div className="drydock-support-card__media">
                  <img src={image} alt={alt} loading="lazy" />
                  <div className="drydock-support-card__shade" aria-hidden="true" />
                  <span className="drydock-support-card__index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="drydock-support-card__body">
                  <span className="drydock-support-card__icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.65} />
                  </span>
                  <h3>{title}</h3>
                  <p>{blurb}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="drydock-detail-vessels"
          aria-labelledby="drydock-vessels-heading"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="drydock-vessels-panel">
            <motion.header
              className="drydock-vessels-head"
              variants={headStagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.p className="drydock-detail-eyebrow" variants={fadeUp}>Vessel Coverage</motion.p>
              <motion.h2 id="drydock-vessels-heading" variants={fadeUp}>Vessels we serve</motion.h2>
              <motion.p className="drydock-vessels-lede" variants={fadeUp}>
                The yard is designed to serve coastal vessels, bunker barges, tugs,
                offshore support vessels, and other marine craft operating within Indian waters.
              </motion.p>
            </motion.header>
            <ul className="drydock-vessels-grid">
              {vesselTypes.map(({ icon: Icon, title }, index) => (
                <motion.li
                  key={title}
                  className="drydock-vessel-chip"
                  initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: reduce ? 0 : 0.06 * index,
                      duration: 0.44,
                      ease: easeSmooth,
                    },
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.22 } }}
                >
                  <span className="drydock-vessel-chip__icon" aria-hidden="true">
                    <Icon size={24} strokeWidth={1.6} />
                  </span>
                  <span className="drydock-vessel-chip__label">{title}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="drydock-detail-info"
          aria-labelledby="drydock-info-heading"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="drydock-info-panel">
            <motion.img
              src={yardImage}
              alt="Aerial view of shipyard operations"
              loading="lazy"
              initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 1.06 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: reduce ? 0.01 : 0.65, ease: easeSmooth },
              }}
              viewport={{ once: true, amount: 0.25 }}
            />
            <div className="drydock-detail-info__copy">
              <motion.header
                className="drydock-info-head"
                variants={headStagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.p className="drydock-detail-eyebrow" variants={fadeUp}>
                  Compliance &amp; Integration
                </motion.p>
                <motion.h2 id="drydock-info-heading" variants={fadeUp}>
                  Maritime operations with accountability
                </motion.h2>
              </motion.header>
              <motion.article
                initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : 24 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.48, ease: easeSmooth },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.24 } }}
              >
                <ShieldCheck size={34} strokeWidth={1.55} aria-hidden="true" />
                <div>
                  <h2>All operations are carried out in strict compliance with applicable maritime regulations.</h2>
                  <p>
                    Directorate General of Shipping requirements, classification society rules,
                    and international safety values guide every activity.
                  </p>
                </div>
              </motion.article>
              <motion.article
                initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : 24 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: reduce ? 0 : 0.1, duration: 0.48, ease: easeSmooth },
                }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.24 } }}
              >
                <Globe2 size={34} strokeWidth={1.55} aria-hidden="true" />
                <div>
                  <h2>The establishment of the BAPUS Graving Dry Dock reinforces the Group&apos;s vertical integration.</h2>
                  <p>
                    By combining fleet ownership, marine logistics, vessel operations, and shipyard
                    infrastructure, Bapu&apos;s Shipping Jamnagar Pvt. Ltd. strengthens its position
                    as a comprehensive maritime solutions provider.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="drydock-detail-assurance"
          aria-labelledby="drydock-assurance-heading"
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.header
            className="drydock-detail-head drydock-detail-head--on-dark"
            variants={headStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p className="drydock-detail-eyebrow" variants={fadeUp}>Why choose us</motion.p>
            <motion.h2 id="drydock-assurance-heading" variants={fadeUp}>
              Built for operational excellence
            </motion.h2>
          </motion.header>
          <div className="drydock-assurance-panel">
            {assurances.map(({ icon: Icon, title, text }, index) => (
              <motion.article
                key={title}
                className="drydock-assurance-card"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: reduce ? 0 : 0.07 * index,
                    duration: 0.46,
                    ease: easeSmooth,
                  },
                }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.24 } }}
              >
                <span className="drydock-assurance-card__icon" aria-hidden="true">
                  <Icon size={26} strokeWidth={1.7} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>

      <FooterCta />
    </main>
  );
}
