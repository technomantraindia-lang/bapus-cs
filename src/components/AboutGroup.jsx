import {
  Anchor,
  ChevronRight,
  Diamond,
  Globe2,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { AboutPillarsPin } from './AboutPillarsPin.jsx';
import { ScrollReveal } from './ScrollReveal.jsx';
import aboutVideo from '../assets/hero/about.jpg';
import storyVideo from '../assets/hero/cargo-ships-moored-near-urban-coastline-at-sunrise-2026-01-21-12-14-11-utc.mp4';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    copy: 'Upholding the highest standards of ethics and transparency.',
  },
  {
    icon: Diamond,
    title: 'Excellence',
    copy: 'Driven by continuous improvement and operational excellence.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    copy: 'Embracing innovation to create sustainable and future-ready solutions.',
  },
  {
    icon: Users,
    title: 'Commitment',
    copy: 'Committed to nation building and long-term stakeholder value.',
  },
];

const stats = [
  ['20+', 'Years of excellence'],
  ['1000+', 'Vessels chartered'],
  ['24/7', 'Operational support'],
  ['100%', 'Commitment to safety & quality'],
];

const storyPoints = [
  {
    icon: Target,
    title: 'Vision-Driven',
    copy: 'Focused on sustainable growth and nation-building.',
  },
  {
    icon: Users,
    title: 'People-Centric',
    copy: 'Empowering teams and building lasting partnerships.',
  },
  {
    icon: Sparkles,
    title: 'Sustainable Future',
    copy: 'Driving green initiatives and responsible operations.',
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    copy: 'We prioritize the safety of our people, assets, and the environment.',
  },
  {
    icon: Handshake,
    title: 'Reliability',
    copy: 'Delivering on our promises with consistency and accountability.',
  },
  {
    icon: Sparkles,
    title: 'Quality',
    copy: 'Committed to the highest quality in everything we do.',
  },
  {
    icon: Globe2,
    title: 'Sustainability',
    copy: 'Building a better future through responsible practices.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    copy: 'Operating with honesty, fairness, and strong moral values.',
  },
];

export function AboutGroup() {
  return (
    <section className="about-section about-showcase">
      <div className="about-hero-card">
        <ScrollReveal direction="left">
          <div className="about-intro">
            <p className="about-kicker">About Bapu&apos;s Group</p>
            <h2 className="about-hero-title">
              <span className="about-hero-title__line">Building India&apos;s</span>
              <span className="about-hero-title__line">
                Maritime{' '}
                <span className="about-hero-title__line--accent">Future</span>
              </span>
            </h2>

            <div className="about-divider" aria-hidden="true">
              <span />
              <Anchor size={18} />
              <span />
            </div>

            <p className="about-lead">
            Bapu’s Group of Companies is a diversified, asset-backed business group delivering integrated solutions across maritime, energy, logistics, infrastructure and allied sectors. Headquartered in Gujarat, the Group has built a trusted presence in marine bunkering, ship chandling, offshore support, tug operations, engineering, lubricants, automotive dealerships and commercial leasing.
            </p>
          </div>
        </ScrollReveal>

        <div className="about-hero-visual">
          <div className="about-image-panel">
            <ScrollReveal direction="right" delay={100} className="about-image-inner">
              <img src={aboutVideo} alt="About Bapu's Group" />
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={3900} className="about-stat-wrap">
            <div className="about-stat-panel" aria-label="Company statistics">
              {stats.map(([value, label]) => (
                <article key={label}>
                  <Anchor size={28} aria-hidden="true" />
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <AboutPillarsPin pillars={pillars} lockBleedPx={80} />
      </div>

      <div className="about-story-card" id="about-story-anchor">
        <ScrollReveal direction="left">
          <div className="about-story-image">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Cargo ships moored near an urban coastline"
              onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = 1.35;
              }}
            >
              <source src={storyVideo} type="video/mp4" />
            </video>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={90}>
          <div className="about-story-copy">
          <p className="about-kicker">Our Story</p>
          <h3>
            A Legacy of Trust. <br />
            A Vision for <span>Tomorrow.</span>
          </h3>
          <p>
            From humble beginnings to becoming a trusted name in India&apos;s
            maritime and infrastructure landscape, our journey has been guided
            by trust, innovation, and a relentless commitment to excellence.
          </p>
          <a className="section-button" href="/">
            Discover our journey
            <ChevronRight size={17} aria-hidden="true" />
          </a>
        </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160}>
          <div className="about-story-points">
          {storyPoints.map((point) => {
            const Icon = point.icon;

            return (
              <article key={point.title}>
                <span>
                  <Icon size={30} aria-hidden="true" />
                </span>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.copy}</p>
                </div>
              </article>
            );
          })}
        </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="zoom">
        <div className="about-values-card">
        <p className="about-kicker">Our Values</p>
        <h3>
          The Principles That <span>Power</span> Our Purpose
        </h3>
        <div className="about-values-grid">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article key={value.title}>
                <Icon size={42} aria-hidden="true" />
                <h4>{value.title}</h4>
                <p>{value.copy}</p>
              </article>
            );
          })}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
