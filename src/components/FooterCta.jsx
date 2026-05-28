import {
  ChevronRight,
  Mail,
  Phone,
  Waves,
} from 'lucide-react';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';
import ctaImage from '../assets/photo/BARGE SUNSET AT KANDLA.png';
import { appHref } from '../lib/routePath.js';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';

const quickLinks = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Our Businesses', '/businesses'],
  ['Group Companies', '/group-company'],
  ['Fleet', '/fleet'],
  ['Our Journey', '/our-journey'],
  ['Contact Us', '/contact'],
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

const locations = ['Kandla', 'Mumbai', 'Jamnagar'];

export function FooterCta({ showCta = true }) {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {showCta ? (
        <section className="footer-cta">
          <div className="footer-cta-image">
            <img src={ctaImage} alt="" aria-hidden="true" />
          </div>
          <div className="footer-cta-copy">
            <SectionAnchorRule className="section-anchor-rule--align-start" />
            <h2>Let&apos;s build a stronger maritime future together.</h2>
            <p>
              Partner with Bapu&apos;s Group for reliable, sustainable and
              future-ready solutions.
            </p>
          </div>
          <a className="footer-cta-button" href={appHref('/contact')}>
            Get in touch
            <ChevronRight size={18} aria-hidden="true" />
          </a>
        </section>
      ) : null}

      <footer className="site-footer">
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
            {quickLinks.map(([link, href]) => (
              <a href={appHref(href)} key={link}>
                {link}
              </a>
            ))}
          </nav>

          <nav className="footer-column footer-column-wide" aria-label="Our businesses">
            <h3>Our businesses</h3>
            {businesses.map((business) => (
              <a href={appHref('/businesses')} key={business}>
                {business}
              </a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Our Branch">
            <h3>Our Branch</h3>
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
            <a className="footer-enquiry" href={appHref('/contact')}>
              Send enquiry
              <ChevronRight size={17} />
            </a>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            <Waves size={16} aria-hidden="true" />
            &copy; {currentYear} <span className="footer-credit-brand">Technomantra India</span>. All Rights Reserved.
          </p>
         
        </div>
      </footer>
    </>
  );
}
