import { Binoculars, Cog, ShieldCheck, ShipWheel } from 'lucide-react';

const steps = [
  {
    icon: Binoculars,
    number: '01',
    title: 'Understand',
    text: 'We assess your needs and operating environment.',
  },
  {
    icon: ShipWheel,
    number: '02',
    title: 'Plan',
    text: 'We design the most efficient, safe and sustainable solution.',
  },
  {
    icon: Cog,
    number: '03',
    title: 'Execute',
    text: 'Our experienced teams deliver with precision and reliability.',
  },
  {
    icon: ShieldCheck,
    number: '04',
    title: 'Support',
    text: '24/7 support for seamless operations and performance.',
  },
];

export function HowWeDeliver() {
  return (
    <section className="deliver-section">
      <h2>How we deliver</h2>
      <div className="deliver-steps">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article className="deliver-step" key={step.number}>
              <strong>{step.number}</strong>
              <Icon size={34} strokeWidth={1.8} aria-hidden="true" />
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
