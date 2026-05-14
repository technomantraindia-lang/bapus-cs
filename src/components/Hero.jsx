import { useEffect, useRef } from 'react';
import {
  Anchor,
  Building2,
  CalendarDays,
  ChevronRight,
  Globe2,
  SunMedium,
  Users,
  Waves,
} from 'lucide-react';
import heroVideo from '../assets/hero/aerial-follow-footage-of-a-feeder-type-container-s-2025-12-17-04-25-16-utc.mp4';
import { Header } from './Header.jsx';

const stats = [
  {
    icon: CalendarDays,
    value: '30+',
    label: 'Years of legacy',
  },
  {
    icon: Waves,
    value: '15+',
    label: 'Years of marine bunkering excellence',
  },
  {
    icon: Globe2,
    value: 'ISO',
    label: '9001:2015 certified',
  },
  {
    icon: SunMedium,
    value: 'DG',
    label: 'Shipping authorized',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Skilled professionals',
  },
  {
    icon: Building2,
    value: '',
    label: 'Serving all major ports across India',
  },
];

export function Hero() {
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);
  /** `null` = observer abhi start nahi hua; phir `true`/`false` last intersect state */
  const heroPrevIntersectingRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = heroSectionRef.current;
    if (!video || !section) return;

    video.playbackRate = 1.35;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const prev = heroPrevIntersectingRef.current;
        const next = entry.isIntersecting;

        if (next) {
          // Pehle screen se hat chuka tha (prev === false), ab wapas scroll back = revise
          if (prev === false) {
            video.currentTime = 0;
          }
          video.play().catch(() => {});
          heroPrevIntersectingRef.current = true;
        } else if (prev === true) {
          video.pause();
          heroPrevIntersectingRef.current = false;
        }
      },
      { threshold: 0, rootMargin: '0px' }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" ref={heroSectionRef}>
      <div className="hero-background" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <Header />

      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">Integrated maritime solutions</p>
          <h1>
            <span className="heading-line">Integrated maritime,</span>
            <br />
            <span className="heading-line">energy &amp; infrastructure</span>
            <br />
            <span className="heading-line highlight">solutions</span>
          </h1>
          <p>
            A diversified, asset-backed business group delivering excellence in
            marine bunkering, offshore logistics, infrastructure, and beyond.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/">
              Our businesses
              <ChevronRight size={15} aria-hidden="true" />
            </a>
            <a className="secondary-action" href="/">
              About us
              <Anchor size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="stats-bar" aria-label="Company statistics">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <article className="stat-item" key={item.label}>
              <Icon size={25} aria-hidden="true" />
              <div>
                {item.value && <strong>{item.value}</strong>}
                <span>{item.label}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
