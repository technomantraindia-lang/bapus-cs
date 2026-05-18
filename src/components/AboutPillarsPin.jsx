import { useCallback, useEffect, useRef, useState } from 'react';

const clamp01 = (v) => Math.max(0, Math.min(1, v));

function getScrollY() {
  return window.scrollY ?? document.documentElement.scrollTop ?? 0;
}

function pinDocumentTop(el) {
  if (!el) return 0;
  return Math.round(el.getBoundingClientRect().top + getScrollY());
}

/** Wheel delta → progress; chhota number = zyada scroll gestures */
const stepCooldownMs = 680;
const totalScrollSteps = 6;

function progressToStep(progress) {
  return Math.round(clamp01(progress) * totalScrollSteps);
}

/**
 * Pehle normal page scroll jab tak lockY na pahunche (hero + stats zyada visible).
 * Uske baad scroll clamp + wheel/touch se hi progress (row animation).
 *
 * @param lockBleedPx — pillars block ke top se pehle hi atak: stats row ka hissa visible rahe
 */
export function AboutPillarsPin({
  pillars,
  reduceMotion = false,
  lockBleedPx = 72,
}) {
  const rootRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const autoScrolledRef = useRef(false);
  const lastStepAtRef = useRef(0);
  const shouldOpenStoryRef = useRef(false);

  const n = pillars?.length ?? 0;

  const getLockY = useCallback(() => {
    const el = rootRef.current;
    if (!el) return 0;
    return Math.max(0, pinDocumentTop(el) - lockBleedPx);
  }, [lockBleedPx]);

  const isInPinPath = useCallback((y, lockY) => {
    const anchor = document.getElementById('about-story-anchor');
    const storyY = anchor
      ? Math.round(anchor.getBoundingClientRect().top + getScrollY())
      : lockY + window.innerHeight;

    return y >= lockY - 4 && y <= storyY - 8;
  }, []);

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  const bumpProgress = useCallback((delta) => {
    setProgress((prev) => {
      const next = clamp01(prev + delta);
      if (next < 0.998) {
        autoScrolledRef.current = false;
        shouldOpenStoryRef.current = false;
      } else if (delta > 0 && prev < 0.998) {
        shouldOpenStoryRef.current = true;
      }
      return next;
    });
  }, []);

  const bumpCardStep = useCallback((direction) => {
    const now = performance.now();
    if (now - lastStepAtRef.current < stepCooldownMs) return false;

    const currentStep = progressToStep(progressRef.current);
    const nextStep = Math.max(0, Math.min(totalScrollSteps, currentStep + direction));
    const next = nextStep / totalScrollSteps;
    if (Math.abs(next - progressRef.current) < 0.001) return false;

    lastStepAtRef.current = now;
    if (next < 0.998) {
      autoScrolledRef.current = false;
      shouldOpenStoryRef.current = false;
    } else if (direction > 0 && nextStep === totalScrollSteps) {
      shouldOpenStoryRef.current = true;
    }
    setProgress(next);
    return true;
  }, []);

  useEffect(() => {
    if (reduceMotion || n === 0) return undefined;

    const clampScrollDown = () => {
      if (progressRef.current <= 0.003 || progressRef.current >= 0.999) return;
      const lockY = getLockY();
      if (lockY <= 0) return;
      const y = getScrollY();
      if (isInPinPath(y, lockY) && y > lockY + 2) {
        window.scrollTo({ top: lockY, behavior: 'auto' });
      }
    };

    const onScroll = () => clampScrollDown();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [getLockY, isInPinPath, reduceMotion, n]);

  useEffect(() => {
    if (reduceMotion || n === 0) return undefined;

    function clampScrollDown() {
      if (progressRef.current <= 0.003 || progressRef.current >= 0.999) return;
      const lockY = getLockY();
      if (lockY <= 0) return;
      const y = getScrollY();
      if (isInPinPath(y, lockY) && y > lockY + 2) {
        window.scrollTo({ top: lockY, behavior: 'auto' });
      }
    }

    const onWheel = (e) => {
      const lockY = getLockY();
      const y = getScrollY();

      if (!isInPinPath(y, lockY)) return;

      if (e.deltaY > 0) {
        if (progressRef.current < 0.999) {
          e.preventDefault();
          bumpCardStep(1);
          requestAnimationFrame(clampScrollDown);
        }
      } else if (e.deltaY < 0) {
        if (progressRef.current > 0.003) {
          e.preventDefault();
          window.scrollTo({ top: lockY, behavior: 'auto' });
          bumpCardStep(-1);
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [bumpCardStep, getLockY, isInPinPath, reduceMotion, n]);

  useEffect(() => {
    if (reduceMotion || n === 0) return undefined;

    let lastY = 0;

    const onTouchStart = (e) => {
      lastY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e) => {
      const lockY = getLockY();
      const y = getScrollY();
      if (!isInPinPath(y, lockY)) return;

      const cy = e.touches[0]?.clientY ?? lastY;
      const dy = lastY - cy;
      lastY = cy;

      if (dy > 2 && progressRef.current < 0.999) {
        e.preventDefault();
        bumpProgress(Math.min(dy / 220, 0.15));
      } else if (dy < -2 && progressRef.current > 0.003) {
        e.preventDefault();
        window.scrollTo({ top: lockY, behavior: 'auto' });
        bumpProgress(Math.max(dy / 220, -0.15));
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [bumpProgress, getLockY, isInPinPath, reduceMotion, n]);

  useEffect(() => {
    if (reduceMotion || n === 0) return undefined;

    const onScrollReset = () => {
      const lockY = getLockY();
      if (getScrollY() < lockY - Math.min(220, window.innerHeight * 0.28)) {
        if (progressRef.current > 0) {
          setProgress(0);
          autoScrolledRef.current = false;
          shouldOpenStoryRef.current = false;
        }
      }
    };

    window.addEventListener('scroll', onScrollReset, { passive: true });
    return () => window.removeEventListener('scroll', onScrollReset);
  }, [getLockY, reduceMotion, n]);

  useEffect(() => {
    if (reduceMotion || autoScrolledRef.current || n === 0) return;
    if (!shouldOpenStoryRef.current) return;
    if (progressToStep(progress) < totalScrollSteps) return;

    const anchor = document.getElementById('about-story-anchor');
    if (!anchor) return;

    autoScrolledRef.current = true;
    const top = getScrollY() + anchor.getBoundingClientRect().top - 12;

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    });
  }, [progress, n, reduceMotion]);

  useEffect(() => {
    if (reduceMotion) setProgress(1);
  }, [reduceMotion]);

  if (!pillars?.length) return null;

  const currentStep = progressToStep(progress);
  const visualProgress = currentStep >= totalScrollSteps
    ? 1
    : Math.min(currentStep / Math.max(n, 1), 0.96);
  const p = reduceMotion ? 1 : visualProgress;

  return (
    <div ref={rootRef} className="about-pillars-pin">
      <div className="about-pillars-pin__sticky">
        <div className="about-pillars-wrap about-pillars-wrap--pin">
          <div className="about-pillars-progress" aria-hidden="true">
            <div
              className="about-pillars-progress__fill"
              style={{ width: `${p * 100}%` }}
            />
          </div>

          <div className="about-pillars about-pillars--full" role="list">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              const revealed = reduceMotion || progress >= (i + 1) / totalScrollSteps - 0.001;

              return (
                <article
                  key={item.title}
                  className={revealed ? 'is-revealed' : ''}
                  role="listitem"
                >
                  <strong className="about-pillars-index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </strong>
                  <span>
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
