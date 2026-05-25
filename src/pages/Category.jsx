import {
  Anchor,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { CoreBusinesses } from '../components/CoreBusinesses.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';
import { appHref } from '../lib/routePath.js';
import heroImage from '../assets/hero/hero2.png';

export function Category() {
  return (
    <main className="app-shell contact-page category-businesses-page">
      <Header />

      <section className="contact-hero category-businesses-hero">
        <img src={heroImage} alt="" aria-hidden="true" />
        <div className="contact-hero__overlay" aria-hidden="true" />
        <div className="contact-hero__content">
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <a href={appHref('/')}>Home</a>
            <span>/</span>
            <strong>Businesses</strong>
          </nav>
          <h1>
            <span>Integrated Maritime</span>
            <span>Solutions</span>
          </h1>
          <p>
           Marine, energy and infrastructure services built on reliability, safety and operational excellence.
          </p>

          <div className="contact-hero-points" aria-label="Business highlights">
            <span>
              <Anchor size={30} aria-hidden="true" />
              <b>Marine</b>
              Integrated operations
            </span>
            <span>
              <Building2 size={30} aria-hidden="true" />
              <b>Infra</b>
              Projects & logistics
            </span>
            <span>
              <ShieldCheck size={30} aria-hidden="true" />
              <b>Trusted</b>
              Governance & reliability
            </span>
          </div>
        </div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <div className="home-band home-band--business category-business-band">
        <ScrollReveal direction="fade" threshold={0.18} rootMargin="0px 0px -24% 0px">
          <CoreBusinesses />
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up">
        <FooterCta />
      </ScrollReveal>
    </main>
  );
}
