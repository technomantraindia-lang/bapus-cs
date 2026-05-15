import { useEffect, useRef, useState } from 'react';

const defaultRootMargin = '0px 0px -10% 0px';

/**
 * Reveals when the block enters the viewport.
 * By default it can animate twice: once while scrolling forward and once when
 * the user scrolls back. After that it stays settled to avoid constant replays.
 *
 * `direction`: left | right | up | down | zoom | fade
 *
 * `once`: if true, only animates in the first time (old behaviour).
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.08,
  rootMargin = defaultRootMargin,
  once = false,
  replayLimit = 2,
}) {
  const ref = useRef(null);
  const playCountRef = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (once) {
            if (entry.isIntersecting) {
              setVisible(true);
              observer.disconnect();
            }
            return;
          }

          if (entry.isIntersecting) {
            setVisible(true);

            if (playCountRef.current < replayLimit) {
              playCountRef.current += 1;
            }
          } else if (playCountRef.current < replayLimit) {
            setVisible(false);
          } else {
            setVisible(true);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, replayLimit]);

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
