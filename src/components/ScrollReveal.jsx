import { useEffect, useRef, useState } from 'react';

const defaultRootMargin = '0px 0px -10% 0px';

/**
 * Fires once when the block enters the viewport — slide/fade/zoom in.
 * `direction`: left | right | up | down | zoom | fade (opacity only — safe for clipped images)
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.08,
  rootMargin = defaultRootMargin,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const cls = [
    'scroll-reveal',
    `scroll-reveal--${direction}`,
    visible ? 'scroll-reveal--visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls} style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
}
