import { useEffect, useRef, useState } from 'react';

const defaultRootMargin = '0px 0px -10% 0px';

/**
 * Reveals when the block enters the viewport; hides again when it leaves,
 * so scrolling back down replays the animation.
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
}) {
  const ref = useRef(null);
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
          } else {
            setVisible(entry.isIntersecting);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

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
