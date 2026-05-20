import { useEffect, useRef, useState } from 'react';

function getScrollY() {
  return window.scrollY ?? document.documentElement.scrollTop ?? 0;
}

function pinDocumentTop(el) {
  if (!el) return 0;
  return Math.round(el.getBoundingClientRect().top + getScrollY());
}

export function AboutPillarsPin({
  pillars,
  reduceMotion = false,
  lockBleedPx = 72,
}) {
  const rootRef = useRef(null);
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  const lastStepAtRef = useRef(0);

  const n = pillars?.length ?? 0;

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    if (reduceMotion || n === 0) return undefined;

    const getLockY = () => {
      const el = rootRef.current;
      if (!el) return 0;
      return Math.max(0, pinDocumentTop(el) - lockBleedPx);
    };

    const isInPinPath = () => {
      const el = rootRef.current;
      if (!el) return false;

      const lockY = getLockY();
      const endY = pinDocumentTop(el) + Math.max(el.offsetHeight - window.innerHeight, 0);
      const y = getScrollY();
      const rootTop = pinDocumentTop(el);

      return y + window.innerHeight >= rootTop - 12 && y >= lockY - 12 && y <= endY + 6;
    };

    const moveStep = (direction) => {
      const now = performance.now();
      if (now - lastStepAtRef.current < 520) return;

      const next = Math.max(0, Math.min(n, stepRef.current + direction));
      if (next === stepRef.current) return;

      lastStepAtRef.current = now;
      stepRef.current = next;
      setStep(next);
    };

    const onWheel = (event) => {
      const el = rootRef.current;
      if (!el) return;

      const lockY = getLockY();
      const rootTop = pinDocumentTop(el);
      const endY = rootTop + Math.max(el.offsetHeight - window.innerHeight, 0);
      const y = getScrollY();
      const isApproachingPin = y + window.innerHeight >= rootTop - 16 && y < lockY;
      const isInsidePin = isInPinPath();

      if (!isApproachingPin && !isInsidePin) return;

      if (event.deltaY > 0 && stepRef.current < n) {
        event.preventDefault();
        window.scrollTo({ top: lockY, behavior: 'auto' });
        moveStep(1);
      } else if (event.deltaY < 0 && stepRef.current > 0) {
        event.preventDefault();
        window.scrollTo({ top: lockY, behavior: 'auto' });
        moveStep(-1);
      } else if (event.deltaY > 0 && stepRef.current >= n && y < endY) {
        window.scrollTo({ top: endY + 1, behavior: 'auto' });
      }
    };

    const onScroll = () => {
      const el = rootRef.current;
      if (!el) return;

      const lockY = getLockY();
      const y = getScrollY();
      const endY = pinDocumentTop(el) + Math.max(el.offsetHeight - window.innerHeight, 0);

      if (y < lockY - Math.min(220, window.innerHeight * 0.28) && stepRef.current !== 0) {
        stepRef.current = 0;
        setStep(0);
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel, { capture: true });
      window.removeEventListener('scroll', onScroll);
    };
  }, [lockBleedPx, reduceMotion, n]);

  useEffect(() => {
    if (reduceMotion) setStep(n);
  }, [n, reduceMotion]);

  if (!pillars?.length) return null;

  const currentStep = reduceMotion ? n : step;
  const p = currentStep / Math.max(n, 1);

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
              const revealed = reduceMotion || currentStep > i;

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
