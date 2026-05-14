import {
  Award,
  CheckCircle2,
  ChevronRight,
  Handshake,
  ShieldCheck,
  Ship,
  Users,
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal.jsx';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Strong Capital & Financial Foundation',
  },
  {
    icon: Ship,
    title: 'Owned Marine Fleet & Modern Assets',
  },
  {
    icon: Award,
    title: 'ISO 9001:2015 & DG Shipping Compliant',
  },
  {
    icon: Users,
    title: 'Experienced Leadership & Expert Teams',
  },
  {
    icon: Handshake,
    title: 'Trusted by PSUs, Port Authorities & MNCs',
  },
  {
    icon: ShieldCheck,
    title: 'Safety, Quality & Environmental Commitment',
  },
];

const futurePoints = [
  'India\'s first Methanol / Green Fuel Bunkering initiative',
  'Green Methanol Bunkering Infrastructure with OPA',
  'India\'s first Green Methanol Tanker for methanol delivery',
  'Electric Tugs & Sustainable Port Support Vessels',
  'Supporting India\'s decarbonization goals',
];

export function WhyChooseFuture() {
  return (
    <section className="why-future-section">
      <div className="why-future-inner">
        <ScrollReveal direction="left">
          <div className="why-panel">
            <h2>Why choose us</h2>
            <div className="why-reasons">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article key={reason.title}>
                  <Icon size={34} strokeWidth={1.7} aria-hidden="true" />
                  <p>{reason.title}</p>
                </article>
              );
            })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100}>
          <div className="green-panel">
            <div className="green-copy">
            <h2>Green future. Sustainable tomorrow.</h2>
            <ul>
              {futurePoints.map((point) => (
                <li key={point}>
                  <CheckCircle2 size={15} aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
            <a href="/" className="green-learn-button">
              Learn more
              <ChevronRight size={16} aria-hidden="true" />
            </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
