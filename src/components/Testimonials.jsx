import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';

const testimonials = [
  {
    id: 't1',
    quote:
      'Bapu\'s Group has been a dependable maritime partner with prompt support, transparent coordination and strong port-level execution.',
    name: 'Operations Head',
    role: 'Marine Logistics Partner',
  },
  {
    id: 't2',
    quote:
      'Their team understands time-critical vessel requirements and consistently delivers with discipline, safety and professionalism.',
    name: 'Fleet Manager',
    role: 'Shipping Company',
  },
  {
    id: 't3',
    quote:
      'From bunkering to offshore assistance, the experience has been responsive, reliable and backed by practical local expertise.',
    name: 'Procurement Lead',
    role: 'Industrial Client',
  },
  {
    id: 't4',
    quote:
      'Clear contracts, disciplined port calls and reliable bunkering windows—exactly what we need for tight coastal schedules.',
    name: 'Technical Superintendent',
    role: 'Coastal Operator',
  },
  {
    id: 't5',
    quote:
      'A partner that combines Gujarat port knowledge with national compliance standards—support teams are reachable around the clock.',
    name: 'Vessel Commercial Manager',
    role: 'Regional Tramp Owner',
  },
];

function slidesPerViewForWidth(w) {
  if (w < 720) return 1;
  return 3;
}

export function Testimonials() {
  const viewportRef = useRef(null);
  const slideIndexRef = useRef(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const [metrics, setMetrics] = useState({ cardW: 0, step: 0, perView: 3 });
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const pv = metrics.perView;
  const loopSlides = useMemo(
    () => [...testimonials, ...testimonials.slice(0, pv)],
    [pv],
  );
  /** Last index = duplicate first viewport (same as slide 0); animate forward then snap to 0 with no rewind */
  const maxSlideIndex = testimonials.length;

  const measure = useCallback(() => {
    const el = viewportRef.current;
    if (!el) return;
    const w = el.clientWidth;
    const pv = slidesPerViewForWidth(window.innerWidth);
    if (w <= 0) return;
    const gv = Math.min(34, Math.max(20, Math.round(window.innerWidth * 0.022)));
    const cardW = Math.max(0, (w - (pv - 1) * gv) / pv);
    const step = cardW + gv;
    setMetrics({ cardW, step, perView: pv });
  }, []);

  useLayoutEffect(() => {
    measure();
    const el = viewportRef.current;
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (el && ro) ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      if (el && ro) ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  useEffect(() => {
    slideIndexRef.current = slideIndex;
  }, [slideIndex]);

  useEffect(() => {
    setSlideIndex(0);
    setNoTransition(false);
  }, [metrics.perView]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setSlideIndex((i) => {
        if (i >= maxSlideIndex) return i;
        return i + 1;
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, [reduceMotion, maxSlideIndex]);

  const finishLoopJump = useCallback(() => {
    setNoTransition(true);
    setSlideIndex(0);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setNoTransition(false));
    });
  }, []);

  const onTrackTransitionEnd = useCallback(
    (event) => {
      if (event.propertyName !== 'transform') return;
      if (reduceMotion || noTransition) return;
      if (slideIndexRef.current !== maxSlideIndex) return;
      finishLoopJump();
    },
    [reduceMotion, noTransition, maxSlideIndex, finishLoopJump],
  );

  const offset = metrics.step > 0 ? slideIndex * metrics.step : 0;

  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <SectionAnchorRule />
        <p>Client confidence</p>
        <h2>Trusted by maritime and infrastructure partners</h2>
      </div>

      <div className="testimonial-carousel">
        <div
          ref={viewportRef}
          className="testimonial-carousel__viewport testimonial-grid"
          style={
            metrics.cardW > 0
              ? ({ '--testimonial-card-w': `${metrics.cardW}px` })
              : undefined
          }
        >
          <div
            className="testimonial-carousel__track"
            style={{
              transform: `translate3d(${-offset}px, 0, 0)`,
              transition:
                reduceMotion || noTransition
                  ? 'none'
                  : 'transform 0.65s cubic-bezier(0.22, 0.61, 0.36, 1)',
            }}
            onTransitionEnd={onTrackTransitionEnd}
          >
            {loopSlides.map((testimonial, i) => (
              <article className="testimonial-card" key={`${testimonial.id}__${i}`}>
                <Quote className="testimonial-quote-icon" size={34} aria-hidden="true" />
                <div className="testimonial-stars" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} size={15} fill="currentColor" aria-hidden="true" />
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
        </div>
      </div>
    </section>
  );
}
