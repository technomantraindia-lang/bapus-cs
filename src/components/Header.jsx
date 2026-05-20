import { Award, CheckCircle2, Phone } from 'lucide-react';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';

export function Header() {
  const path = window.location.pathname.toLowerCase();
  const isAbout = path === '/about' || path === '/about-us';
  const isBusinesses = path === '/businesses' || path === '/category' || path === '/categories';
  const isContact = path === '/contact' || path === '/contact-us';

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
          <a className="brand" href="/" aria-label="Bapu's Group of Companies">
            <img src={bapusLogo} alt="Bapu's Group of Companies" />
          </a>

          <nav aria-label="Main navigation">
            <a className={!isAbout && !isBusinesses && !isContact ? 'active' : undefined} href="/">
              Home
            </a>
            <a className={isAbout ? 'active' : undefined} href="/about">About Us</a>
            <a className={isBusinesses ? 'active' : undefined} href="/businesses">Businesses</a>
            <a href="/">Group Companies</a>
            <a href="/">Fleet</a>
            <a href="/">Sustainability</a>

            <a className={isContact ? 'active' : undefined} href="/contact">Contact Us</a>
          </nav>

          <a className="touch-button" href="/contact">
            <Phone size={14} aria-hidden="true" />
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
