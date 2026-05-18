import { Binoculars, ShieldCheck, Ship, ShipWheel } from 'lucide-react';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';

const steps = [
  {
    icon: Binoculars,
    number: '01',
    title: 'Understand',
    text:
      'We assess your needs, fleet patterns and operating environment so every decision is grounded in real maritime context.',
  },
  {
    icon: ShipWheel,
    number: '02',
    title: 'Plan',
    text:
      'We design the safest, most efficient and sustainable solution—routes, resources and compliance in one coherent plan.',
  },
  {
    icon: Ship,
    number: '03',
    title: 'Execute',
    text:
      'Our teams and partners run operations with discipline, precision and marine-grade reliability from berth to open sea.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Support',
    text:
      '24/7 monitoring, assistance and performance tuning so your assets keep moving without interruption.',
  },
];

function DeliverWaveRail() {
  return (
    <div className="deliver-steps__rail" aria-hidden="true">
      <svg
        className="deliver-steps__wave"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="deliverWaveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c98b2c" />
            <stop offset="35%" stopColor="#f5d78a" />
            <stop offset="65%" stopColor="#ffd27a" />
            <stop offset="100%" stopColor="#c98b2c" />
          </linearGradient>
          <filter id="deliverWaveGlow" x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          className="deliver-steps__wavePath deliver-steps__wavePath--ambient"
          d="M0,48 C100,92 180,12 280,48 S440,88 520,48 S680,8 760,48 S920,90 1000,48 S1120,14 1200,48"
          fill="none"
          stroke="#f5aa16"
          strokeWidth="6"
          strokeLinecap="round"
          strokeOpacity="0.22"
          filter="url(#deliverWaveGlow)"
        />
        <path
          className="deliver-steps__wavePath deliver-steps__wavePath--main"
          d="M0,48 C100,92 180,12 280,48 S440,88 520,48 S680,8 760,48 S920,90 1000,48 S1120,14 1200,48"
          fill="none"
          stroke="url(#deliverWaveStroke)"
          strokeWidth="2.35"
          strokeLinecap="round"
          filter="url(#deliverWaveGlow)"
        />
        <circle className="deliver-steps__waveDot" cx="280" cy="48" r="3.5" style={{ animationDelay: '0ms' }} />
        <circle className="deliver-steps__waveDot" cx="520" cy="48" r="3.5" style={{ animationDelay: '180ms' }} />
        <circle className="deliver-steps__waveDot" cx="760" cy="48" r="3.5" style={{ animationDelay: '360ms' }} />
        <circle className="deliver-steps__waveDot" cx="1000" cy="48" r="3.5" style={{ animationDelay: '540ms' }} />
      </svg>
    </div>
  );
}

export function HowWeDeliver() {
  return (
    <section className="deliver-section">
      <div className="deliver-section__decor deliver-section__decor--compass" aria-hidden="true" />
      <div className="deliver-section__decor deliver-section__decor--ship" aria-hidden="true" />

      <SectionAnchorRule />
      <h2 className="deliver-section__title">How we deliver</h2>

      <div className="deliver-steps">
        <DeliverWaveRail />
        <div className="deliver-steps__grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article className="deliver-step" key={step.number}>
                <div className="deliver-step__body">
                  <span className="deliver-step__badge">{step.number}</span>
                  <Icon className="deliver-step__icon" size={36} strokeWidth={1.35} aria-hidden="true" />
                  <h3 className="deliver-step__heading">{step.title}</h3>
                  <p className="deliver-step__text">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
