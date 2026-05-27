import { useEffect, useState } from 'react';
import { Award, CheckCircle2, Menu, Phone, X } from 'lucide-react';
import { ContactPopup } from './ContactPopup.jsx';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';
import { appHref, getAppPath } from '../lib/routePath.js';

export function Header() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const path = getAppPath();
  const isAbout = path === '/about' || path === '/about-us';
  const isBusinesses = path === '/businesses' || path === '/category' || path === '/categories';
  const isContact = path === '/contact' || path === '/contact-us';
  const isFleet = path === '/fleet' || path === '/marine-assets' || path.startsWith('/fleet/');
  const isJourney = path === '/our-journey' || path === '/journey';
  const isDryDock = path === '/dry-dock-facility' || path === '/drydock-facility';
  const isGroupCompany =
    path === '/group-company' ||
    path === '/group-companies' ||
    path === '/groupcompany';

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 12);
    };

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
    return () => window.removeEventListener('scroll', updateHeaderState);
  }, []);

  return (
    <header
      className={[
        'site-header',
        isMenuOpen ? 'site-header--menu-open' : '',
        isScrolled ? 'site-header--scrolled' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
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

          <button
            className="menu-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>

          <nav className={isMenuOpen ? 'is-open' : undefined} aria-label="Main navigation">
            <a
              className={
                !isAbout && !isBusinesses && !isContact && !isFleet && !isGroupCompany
                  && !isJourney && !isDryDock
                  ? 'active'
                  : undefined
              }
              href={appHref('/')}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a className={isAbout ? 'active' : undefined} href={appHref('/about')} onClick={() => setIsMenuOpen(false)}>
              About Us
            </a>
            <a className={isBusinesses ? 'active' : undefined} href={appHref('/businesses')} onClick={() => setIsMenuOpen(false)}>
              Businesses
            </a>
            <a className={isGroupCompany ? 'active' : undefined} href={appHref('/group-company')} onClick={() => setIsMenuOpen(false)}>
              Group Companies
            </a>
            <a className={isFleet ? 'active' : undefined} href={appHref('/fleet')} onClick={() => setIsMenuOpen(false)}>
              Fleet
            </a>
            <a className={isJourney ? 'active' : undefined} href={appHref('/our-journey')} onClick={() => setIsMenuOpen(false)}>
              Our Journey
            </a>
            <a className={isContact ? 'active' : undefined} href={appHref('/contact')} onClick={() => setIsMenuOpen(false)}>
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
