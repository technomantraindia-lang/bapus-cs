import '../styles/groupCompanyPage.css';
import {
  Anchor,
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  ChevronRight,
  Globe2,
  HeartHandshake,
  Landmark,
  Leaf,
  Package,
  Ship,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Header } from '../components/Header.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { appHref } from '../lib/routePath.js';
import heroImage from '../assets/hero/hero2.png';
import mapImage from '../assets/hero/map.png';

const heroPillars = [
  { icon: Award, lead: 'Trusted', rest: 'Leadership' },
  { icon: TrendingUp, lead: 'Sustainable', rest: 'Growth' },
  { icon: Target, lead: 'Operational', rest: 'Excellence' },
  { icon: HeartHandshake, lead: 'Shared', rest: 'Values' },
];

const aboutStats = [
  { icon: Building2, value: '12+', label: 'Group Companies' },
  { icon: Anchor, value: '50+', label: 'Marine Assets' },
  { icon: Landmark, value: '20+', label: 'Ports & Locations' },
  { icon: Users, value: '1500+', label: 'Professionals Worldwide' },
  { icon: Ship, value: '25K+', label: 'Vessels Served' },
  { icon: Globe2, value: '30+', label: 'Years of Operations' },
];

const portfolioCards = [
  {
    icon: Ship,
    title: 'Marine Services',
    text: 'Bunkering, chandling, tug & barge operations and offshore support across India\u2019s coastline.',
  },
  {
    icon: Package,
    title: 'Logistics & Supply Chain',
    text: 'Bonded storage, sea transport and integrated logistics for energy and industrial clients.',
  },
  {
    icon: Sparkles,
    title: 'Energy & Lubricants',
    text: 'Authorised distribution and CFA operations with major oil and energy partners.',
  },
  {
    icon: Building2,
    title: 'Infrastructure & Engineering',
    text: 'EPC, industrial development and marine infrastructure that supports long-term growth.',
  },
  {
    icon: Briefcase,
    title: 'Automotive & Leasing',
    text: 'Authorised dealerships and commercial leasing across strategic Gujarat markets.',
  },
];

const values = [
  {
    icon: Landmark,
    title: 'Integrity',
    text: 'Transparent operations and governance in every engagement.',
  },
  {
    icon: Target,
    title: 'Safety',
    text: 'People-first culture with rigorous marine and industrial safety.',
  },
  {
    icon: Award,
    title: 'Excellence',
    text: 'Quality delivery backed by ISO systems and client trust.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    text: 'Responsible growth and future-ready environmental practices.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    text: 'Collaboration across companies, ports and partners.',
  },
];

const globalStats = [
  { icon: Globe2, value: '20+', label: 'Countries & regions served' },
  { icon: Anchor, value: '20+', label: 'Ports & locations' },
  { icon: Ship, value: '200+', label: 'Assets managed' },
  { icon: Users, value: '1500+', label: 'Employees & associates' },
];

/** Pin positions (% of map box) — decorative markers */
const mapPins = [
  { top: '38%', left: '48%' },
  { top: '44%', left: '62%' },
  { top: '52%', left: '72%' },
  { top: '36%', left: '28%' },
  { top: '58%', left: '42%' },
];

const easeSmooth = [0.22, 1, 0.36, 1];

/** Viewport presets for sections */
const viewportOnce = { once: true, margin: '0px 0px -12% 0px', amount: 0.2 };

export function GroupCompanyPage() {
  const reduce = useReducedMotion();

  const yOff = reduce ? 0 : 22;
  const ySection = reduce ? 0 : 44;

  const fadeUp = {
    hidden: { opacity: 0, y: yOff },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.54, ease: easeSmooth },
    },
  };

  const heroIntro = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };

  const pillarStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.09,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  };

  const pillarItem = {
    hidden: { opacity: 0, x: reduce ? 0 : -14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: reduce ? 0.01 : 0.4, ease: easeSmooth },
    },
  };

  const sectionReveal = {
    hidden: { opacity: 0, y: ySection },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.62, ease: easeSmooth },
    },
  };

  const staggerChildren = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.08,
        delayChildren: reduce ? 0 : 0.05,
      },
    },
  };

  const listStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
      },
    },
  };

  const childFade = fadeUp;

  return (
    <main className="app-shell group-company-page">
      <Header />

      <section className="contact-hero contact-hero--gcp" aria-label="Group company overview">
        <img src={heroImage} alt="" aria-hidden="true" className="gcp-hero-bg" />
        <div className="contact-hero__overlay contact-hero__overlay--gcp-shine" aria-hidden="true" />
        <div className="gcp-hero-accent-blob gcp-hero-accent-blob--a" aria-hidden="true" />
        <div className="gcp-hero-accent-blob gcp-hero-accent-blob--b" aria-hidden="true" />

        <motion.div
          className="contact-hero__content"
          variants={heroIntro}
          initial="hidden"
          animate="visible"
        >
          <motion.nav className="contact-breadcrumb" aria-label="Breadcrumb" variants={fadeUp}>
            <a href={appHref('/')}>Home</a>
            <span>/</span>
            <strong>Group Company</strong>
          </motion.nav>
          <motion.h1 variants={fadeUp}>
            One Group.
            <br />
            <span className="gcp-hero-accent">Many Strengths.</span>
          </motion.h1>
          <motion.p variants={fadeUp}>
            Bapu&apos;s Group integrates maritime, logistics, energy, engineering and allied
            services—delivering reliable solutions from Gujarat&apos;s shores to strategic partners
            worldwide.
          </motion.p>
          <motion.div className="contact-hero-points" variants={pillarStagger} aria-label="Group strengths">
            {heroPillars.map(({ icon: Icon, lead, rest }) => (
              <motion.span key={`${lead}-${rest}`} variants={pillarItem} whileHover={reduce ? undefined : { y: -4 }}>
                <Icon size={30} strokeWidth={1.6} aria-hidden="true" />
                <b>{lead}</b>
                {rest}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <motion.section
        className="gcp-about"
        aria-labelledby="gcp-about-heading"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className="gcp-about__grid" variants={staggerChildren}>
          <motion.div className="gcp-about__copy" variants={childFade}>
            <p className="gcp-kicker-line">
              <span>About our group</span>
            </p>
            <h2 id="gcp-about-heading">
              Building a stronger future through collaboration.
            </h2>
            <p>
              From ship chandling and bunkering to offshore support, automotive dealerships and
              infrastructure, our companies work as one ecosystem—with shared governance, disciplined
              capital allocation and relentless focus on service quality.
            </p>
            <p>
              Headquartered in Gujarat, we anchor major port corridors of the Gulf of Kutch while
              expanding partnerships across India&apos;s maritime and industrial value chain.
            </p>
            <motion.a
              className="gcp-btn gcp-btn--dark"
              href={appHref('/our-journey')}
              whileHover={reduce ? undefined : { scale: 1.03, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
            >
              Our Journey
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.div className="gcp-about__stats-card" variants={childFade}>
            <div className="gcp-stats-grid">
              {aboutStats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  className="gcp-stat"
                  key={label}
                  initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: reduce ? 0 : 0.04 * i, duration: 0.42, ease: easeSmooth },
                  }}
                  viewport={{ once: true, amount: 0.35 }}
                  whileHover={reduce ? undefined : { scale: 1.03 }}
                >
                  <span className="gcp-stat__icon">
                    <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <strong className="gcp-stat__value">{value}</strong>
                  <span className="gcp-stat__label">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="gcp-portfolio"
        aria-labelledby="gcp-portfolio-heading"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="gcp-portfolio__mesh" aria-hidden="true" />
        <div className="gcp-portfolio__head">
          <p className="gcp-kicker-line gcp-kicker-line--center">
            <span>Our group companies</span>
          </p>
          <h2 id="gcp-portfolio-heading">A diverse portfolio. United purpose.</h2>
        </div>
        <div className="gcp-portfolio__cards">
          {portfolioCards.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              className="gcp-portfolio-card"
              key={title}
              initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 32 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: reduce ? 0 : 0.07 * index,
                  duration: 0.52,
                  ease: easeSmooth,
                },
              }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: -10,
                      transition: { duration: 0.28, ease: easeSmooth },
                    }
              }
            >
              <div className="gcp-portfolio-card__icon">
                <Icon size={28} strokeWidth={1.65} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <motion.a className="gcp-portfolio-card__link" href={appHref('/businesses')} whileTap={{ x: reduce ? 0 : 2 }}>
                View company
                <ChevronRight size={16} aria-hidden="true" />
              </motion.a>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="gcp-values"
        aria-labelledby="gcp-values-heading"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="gcp-values__inner">
          <div className="gcp-values__intro">
            <h2 id="gcp-values-heading">The principles that guide us.</h2>
          </div>
          <ul className="gcp-values__row">
            {values.map(({ icon: Icon, title, text }) => (
              <motion.li
                key={title}
                initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 0.94 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.45, ease: easeSmooth },
                }}
                viewport={{ once: true, amount: 0.35 }}
                whileHover={reduce ? undefined : { y: -8, transition: { duration: 0.24 } }}
              >
                <span className="gcp-values__icon">
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="gcp-global"
        aria-labelledby="gcp-global-heading"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className="gcp-global__aurora" aria-hidden="true" initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.9 } }} viewport={{ once: true }} />

        <div className="gcp-global__grid">
          <motion.div
            className="gcp-global__map"
            initial={{ opacity: reduce ? 1 : 0, x: reduce ? 0 : -28 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.62, ease: easeSmooth } }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <img src={mapImage} alt="" loading="lazy" />
            {mapPins.map((pos, i) => (
              <span key={i} className={`gcp-map-pin gcp-map-pin--delay-${i % 5}`} style={{ top: pos.top, left: pos.left }} aria-hidden="true" />
            ))}
          </motion.div>
          <motion.div className="gcp-global__copy" variants={staggerChildren} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }}>
            <motion.p className="gcp-kicker-line gcp-kicker-line--on-dark" variants={childFade}>
              <span>Our global presence</span>
            </motion.p>
            <motion.h2 id="gcp-global-heading" variants={childFade}>
              Expanding horizons. Strengthening connections.
            </motion.h2>
            <motion.ul className="gcp-global__stats" variants={listStagger}>
              {globalStats.map(({ icon: Icon, value, label }) => (
                <motion.li key={label} variants={childFade} whileHover={reduce ? undefined : { x: 6 }}>
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="gcp-cta"
        aria-label="Partnership call to action"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.div className="gcp-cta__inner">
          <motion.div
            className="gcp-cta__image"
            initial={{ opacity: reduce ? 1 : 0, scale: reduce ? 1 : 1.06 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.72, ease: easeSmooth } }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <img src={heroImage} alt="" loading="lazy" />
          </motion.div>
          <motion.div className="gcp-cta__copy" variants={heroIntro} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.45 }}>
            <Anchor className="gcp-cta__watermark" aria-hidden="true" />
            <motion.h2 variants={fadeUp}>
              Let&apos;s build the future <strong>Together</strong>
            </motion.h2>
            <motion.p variants={fadeUp}>
              Partner with Bapu&apos;s Group for integrated maritime, logistics and infrastructure
              solutions—built on trust, operational depth and shared long-term ambition.
            </motion.p>
            <motion.div variants={fadeUp}>
              <motion.a className="gcp-btn gcp-btn--gold" href={appHref('/contact')} whileHover={reduce ? undefined : { scale: 1.04, boxShadow: '0 22px 50px rgba(0, 0, 0, 0.42)' }} whileTap={reduce ? undefined : { scale: 0.97 }}>
                Get in touch
                <ArrowRight size={18} aria-hidden="true" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <FooterCta />
    </main>
  );
}
