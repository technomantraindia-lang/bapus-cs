import { useEffect, useId, useRef, useState } from 'react';

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
  staticRow = false,
}) {
  const rootRef = useRef(null);
  const connectorUid = useId().replace(/:/g, '');
  const [step, setStep] = useState(0);
  const stepRef = useRef(0);
  const lastStepAtRef = useRef(0);

  const n = pillars?.length ?? 0;

  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  useEffect(() => {
    if (staticRow || reduceMotion || n === 0) return undefined;

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
  }, [lockBleedPx, reduceMotion, staticRow, n]);

  useEffect(() => {
    if (staticRow || reduceMotion) setStep(n);
  }, [n, reduceMotion, staticRow]);

  if (!pillars?.length) return null;

  const currentStep = staticRow || reduceMotion ? n : step;
  const p = currentStep / Math.max(n, 1);

  return (
    <div
      ref={rootRef}
      className={`about-pillars-pin${staticRow ? ' about-pillars-pin--static-row about-pillars-pin--editorial' : ''}`}
    >
      <div className="about-pillars-pin__sticky">
        <div className="about-pillars-wrap about-pillars-wrap--pin">
          <div className="about-pillars-progress" aria-hidden="true">
            <div
              className="about-pillars-progress__fill"
              style={{ width: `${p * 100}%` }}
            />
          </div>

          <div className="about-pillars about-pillars--full" role="list">
            {staticRow ? (
              <svg
                className="about-pillars-connector"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                focusable="false"
              >
                <defs>
                  <linearGradient
                    id={`about-pillars-connector-grad-${connectorUid}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#9e7028" />
                    <stop offset="35%" stopColor="#f5c86a" />
                    <stop offset="100%" stopColor="#b8872a" />
                  </linearGradient>
                  <marker
                    id={`about-pillars-connector-arrow-${connectorUid}`}
                    markerUnits="userSpaceOnUse"
                    markerWidth="7"
                    markerHeight="7"
                    refX="6"
                    refY="3.5"
                    orient="auto"
                  >
                    <path d="M 0 0 L 7 3.5 L 0 7 Z" fill="#b07820" />
                  </marker>
                </defs>
                <path
                  className="about-pillars-connector__path"
                  pathLength="100"
                  d="M 12.5 50 L 37.5 50 L 62.5 50 L 87.5 50"
                  fill="none"
                  stroke={`url(#about-pillars-connector-grad-${connectorUid})`}
                  markerEnd={`url(#about-pillars-connector-arrow-${connectorUid})`}
                />
              </svg>
            ) : null}
            {pillars.map((item, i) => {
              const Icon = item.icon;
              const revealed = reduceMotion || currentStep > i;

              const icon = (
                <span>
                  <Icon size={staticRow ? 26 : 28} aria-hidden="true" />
                </span>
              );
              const index = (
                <strong className="about-pillars-index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </strong>
              );

              return (
                <article
                  key={item.title}
                  className={revealed ? 'is-revealed' : ''}
                  role="listitem"
                >
                  {staticRow ? (
                    <>
                      {icon}
                      {index}
                    </>
                  ) : (
                    <>
                      {index}
                      {icon}
                    </>
                  )}
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
