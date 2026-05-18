import { Anchor } from 'lucide-react';

/** Heading ke upar: anchor + gradient lines (About divider jaisa) */
export function SectionAnchorRule({ className = '' }) {
  return (
    <div
      className={['section-anchor-rule', className].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <span className="section-anchor-rule__line" />
      <Anchor className="section-anchor-rule__icon" size={22} strokeWidth={2.2} />
      <span className="section-anchor-rule__line" />
    </div>
  );
}
