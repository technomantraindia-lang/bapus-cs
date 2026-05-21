import { useState } from 'react';
import { Award, CheckCircle2, Phone } from 'lucide-react';
import { ContactPopup } from './ContactPopup.jsx';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';
import { appHref, getAppPath } from '../lib/routePath.js';

export function Header() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const path = getAppPath();
  const isAbout = path === '/about' || path === '/about-us';
  const isBusinesses = path === '/businesses' || path === '/category' || path === '/categories';
  const isContact = path === '/contact' || path === '/contact-us';
  const isFleet = path === '/fleet' || path === '/marine-assets';

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="top-strip" aria-label="Company highlights">
          <span>
            <CheckCircle2 size={13} aria-hidden="true" />
            ISO 9001:2015 Certified
          </span>
          <span>
            <Award size={13} aria-hidden="true" />
            DG Shipping Authorized
          </span>
        </div>

        <div className="main-nav">
          <a className="brand" href={appHref('/')} aria-label="Bapu's Group of Companies">
            <img src={bapusLogo} alt="Bapu's Group of Companies" />
          </a>

          <nav aria-label="Main navigation">
            <a
              className={!isAbout && !isBusinesses && !isContact && !isFleet ? 'active' : undefined}
              href={appHref('/')}
            >
              Home
            </a>
            <a className={isAbout ? 'active' : undefined} href={appHref('/about')}>
              About Us
            </a>
            <a className={isBusinesses ? 'active' : undefined} href={appHref('/businesses')}>
              Businesses
            </a>
            <a href={appHref('/')}>Group Companies</a>
            <a className={isFleet ? 'active' : undefined} href={appHref('/fleet')}>
              Fleet
            </a>
            <a href={appHref('/')}>Sustainability</a>

            <a className={isContact ? 'active' : undefined} href={appHref('/contact')}>
              Contact Us
            </a>
          </nav>

          <button className="touch-button" type="button" onClick={() => setIsContactPopupOpen(true)}>
            <Phone size={14} aria-hidden="true" />
            Get in touch
          </button>
        </div>
      </div>
      <ContactPopup isOpen={isContactPopupOpen} onClose={() => setIsContactPopupOpen(false)} />
    </header>
  );
}
