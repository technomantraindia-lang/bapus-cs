import { Award, CheckCircle2, Phone } from 'lucide-react';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';

export function Header() {
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
            <a className="active" href="/">
              Home
            </a>
            <a href="/">About Us</a>
            <a href="/businesses">Businesses</a>
            <a href="/">Group Companies</a>
            <a href="/">Fleet</a>
            <a href="/">Sustainability</a>

            <a href="/">Contact Us</a>
          </nav>

          <a className="touch-button" href="/">
            <Phone size={14} aria-hidden="true" />
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
