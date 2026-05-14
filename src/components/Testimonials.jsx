import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Bapu\'s Group has been a dependable maritime partner with prompt support, transparent coordination and strong port-level execution.',
    name: 'Operations Head',
    role: 'Marine Logistics Partner',
  },
  {
    quote:
      'Their team understands time-critical vessel requirements and consistently delivers with discipline, safety and professionalism.',
    name: 'Fleet Manager',
    role: 'Shipping Company',
  },
  {
    quote:
      'From bunkering to offshore assistance, the experience has been responsive, reliable and backed by practical local expertise.',
    name: 'Procurement Lead',
    role: 'Industrial Client',
  },
];

export function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <p>Client confidence</p>
        <h2>Trusted by maritime and infrastructure partners</h2>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <Quote className="testimonial-quote-icon" size={34} aria-hidden="true" />
            <div className="testimonial-stars" aria-label="Five star rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p>{testimonial.quote}</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
