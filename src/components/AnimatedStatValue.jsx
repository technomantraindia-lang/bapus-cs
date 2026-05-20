import { useEffect, useRef, useState } from 'react';

function parseAnimatedStat(value) {
  if (value.includes('/')) {
    const [n, d] = value.split('/');
    return { kind: 'fraction', numTarget: Number(n), den: d };
  }
  const m = value.match(/^(\d+)(.*)$/);
  if (m) {
    return { kind: 'number', target: Number(m[1]), suffix: m[2] };
  }
  return { kind: 'raw', text: value };
}

/**
 * Counts from 0 to the numeric part of `value` when `active` becomes true.
 * Supports suffix after digits (e.g. "30+", "100%"), fractions "24/7", or raw text.
 */
export function AnimatedStatValue({ value, active, delayMs = 0, countUp = true }) {
  const [displayNum, setDisplayNum] = useState(0);
  const frameRef = useRef(0);
  const parsed = parseAnimatedStat(value);

  useEffect(() => {
    if (!countUp) {
      return undefined;
    }

    if (!active) {
      setDisplayNum(0);
      return undefined;
    }

    const parsedInner = parseAnimatedStat(value);

    if (parsedInner.kind === 'raw') {
      return undefined;
    }

    let startTimeout = 0;

    const startAnim = () => {
      const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      if (reduced) {
        if (parsedInner.kind === 'fraction') {
          setDisplayNum(parsedInner.numTarget);
        } else {
          setDisplayNum(parsedInner.target);
        }
        return;
      }

      const target =
        parsedInner.kind === 'fraction' ? parsedInner.numTarget : parsedInner.target;

      if (target === 0) {
        setDisplayNum(0);
        return;
      }

      const duration = target > 5000 ? 2400 : target > 1000 ? 1900 : 1200;
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        setDisplayNum(Math.round(target * eased));

        if (progress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    startTimeout = window.setTimeout(startAnim, delayMs);

    return () => {
      window.clearTimeout(startTimeout);
      cancelAnimationFrame(frameRef.current);
    };
  }, [countUp, active, delayMs, value]);

  if (!countUp) {
    return <>{value}</>;
  }

  if (parsed.kind === 'raw') {
    return <>{parsed.text}</>;
  }

  if (parsed.kind === 'fraction') {
    return (
      <>
        {displayNum}/{parsed.den}
      </>
    );
  }

  return (
    <>
      {displayNum}
      {parsed.suffix}
    </>
  );
}
