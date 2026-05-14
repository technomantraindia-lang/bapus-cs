import {
  ChevronRight,
  Mail,
  Phone,
  Waves,
} from 'lucide-react';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';
import ctaImage from '../assets/hero/hero2.png';

const quickLinks = [
  'Home',
  'About Us',
  'Our Businesses',
  'Sustainability',
  'Our Presence',
  'Insights',
  'Careers',
  'Contact Us',
];

const businesses = [
  'Marine Bunkering',
  'Ship Chandling',
  'Ship Repairs',
  'Offshore Support',
  'Tug & Barge Operations',
  'Green Methanol & Future Fuels',
  'Engineering & Infrastructure',
  'Lubricants, Automotive & Leasing',
];

const locations = ['Kandla', 'Mundra', 'Sikka', 'Vessels', 'Delhi', 'Other Locations'];

export function FooterCta() {
  return (
    <footer className="site-footer">
      <section className="footer-cta">
        <div className="footer-cta-image">
          <img src={ctaImage} alt="" aria-hidden="true" />
        </div>
        <div className="footer-cta-copy">
          <h2>Let&apos;s build a stronger maritime future together.</h2>
          <p>
            Partner with Bapu&apos;s Group for reliable, sustainable and
            future-ready solutions.
          </p>
        </div>
        <a className="footer-cta-button" href="/">
          Get in touch
          <ChevronRight size={18} aria-hidden="true" />
        </a>
      </section>

      <div className="footer-main">
        <section className="footer-brand">
          <img src={bapusLogo} alt="Bapu's Group of Companies" />
          <p>
            A diversified Gujarat-based group delivering integrated marine,
            energy &amp; infrastructure services with trust, safety and
            excellence.
          </p>
          <div className="social-links" aria-label="Social links">
            <a href="/" aria-label="LinkedIn">
              in
            </a>
            <a href="/" aria-label="X">
              X
            </a>
            <a href="/" aria-label="Facebook">
              f
            </a>
            <a href="/" aria-label="Instagram">
              ig
            </a>
            <a href="/" aria-label="YouTube">
              yt
            </a>
          </div>
        </section>

        <nav className="footer-column" aria-label="Quick links">
          <h3>Quick links</h3>
          {quickLinks.map((link) => (
            <a href="/" key={link}>
              {link}
            </a>
          ))}
        </nav>

        <nav className="footer-column footer-column-wide" aria-label="Our businesses">
          <h3>Our businesses</h3>
          {businesses.map((business) => (
            <a href="/" key={business}>
              {business}
            </a>
          ))}
        </nav>

        <nav className="footer-column" aria-label="Our presence">
          <h3>Our presence</h3>
          {locations.map((location) => (
            <a href="/" key={location}>
              {location}
            </a>
          ))}
        </nav>

        <section className="footer-contact">
          <h3>Get in touch</h3>
          <p>Bapu&apos;s Group of Companies</p>
          <p>Gujarat, India</p>
          <a href="tel:+917940000000">
            <Phone size={17} />
            +91 79 4000 0000
          </a>
          <a href="mailto:info@bapusgroup.com">
            <Mail size={17} />
            info@bapusgroup.com
          </a>
          <a className="footer-enquiry" href="/">
            Send enquiry
            <ChevronRight size={17} />
          </a>
        </section>
      </div>

      <div className="footer-bottom">
        <p>
          <Waves size={16} aria-hidden="true" />
          © 2026 Bapu&apos;s Group of Companies. All Rights Reserved.
        </p>
        <div>
          <a href="/">Privacy Policy</a>
          <span>|</span>
          <a href="/">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
