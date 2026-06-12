import {
  ArrowRight,
  Building2,
  Clock3,
  Globe2,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  PencilLine,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { appHref } from '../lib/routePath.js';
import { submitWeb3Form } from '../lib/web3Forms.js';
import heroImage from '../assets/photo/BARGES AT KANDLA.png';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 84888 84888'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@bapus.com'],
  },
  {
    icon: MapPin,
    title: 'Gandhidham (Kandla) Head Office',
    lines: ['Survey No. 26/5, NH 8A Ext., Anjar-Galpadar Road,', 'Galpadar, Kachchh, Gujarat - 370240, India'],
  },
  {
    icon: Globe2,
    title: 'Website',
    lines: ['www.bapus.com'],
  },
];

const offices = [
  {
    icon: Building2,
    title: 'Gandhidham (Kandla)',
    accent: '(Head Office)',
    address: 'Survey No. 26/5, NH 8A Ext., Anjar-Galpadar Road, Galpadar, Kachchh, Gujarat - 370240, India',
  },
  {
    icon: Building2,
    title: 'Jamnagar',
    address: 'Office No. 403, 4th Floor, Corporate House, Opp. St Ann\'s School, P. N. Marg Road, Jamnagar - 361008',
  },
];

export function Contact() {
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setFormStatus({ type: 'submitting', message: '' });

    try {
      await submitWeb3Form(form, 'Contact Page Message');
      form.reset();
      setFormStatus({
        type: 'success',
        message: 'Thank you for your message! Our team will get back to you shortly.',
      });
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Sorry, your message could not be sent. Please try again.',
      });
    }
  };

  return (
    <main className="app-shell contact-page">
      <Header />

      <section className="contact-hero">
        <img src={heroImage} alt="" aria-hidden="true" />
        <div className="contact-hero__overlay" aria-hidden="true" />
        <div className="contact-hero__content">
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <a href={appHref('/')}>Home</a>
            <span>/</span>
            <strong>Contact Us</strong>
          </nav>
          <h1>Contact Us</h1>
          <p>
            We&apos;re here to help and answer any questions you may have. Reach
            out to us for partnerships, services, or any inquiries. Our team
            will get back to you shortly.
          </p>

          <div className="contact-hero-points" aria-label="Contact highlights">
            <span>
              <Clock3 size={30} aria-hidden="true" />
              <b>24/7</b>
              Support
            </span>
            <span>
              <Headphones size={30} aria-hidden="true" />
              <b>Quick</b>
              Response
            </span>
            <span>
              <ShieldCheck size={30} aria-hidden="true" />
              <b>Trusted</b>
              Partnerships
            </span>
          </div>
        </div>
        <div className="contact-wave" aria-hidden="true" />
      </section>

      <section className="contact-main-section">
        <div className="contact-info-column">
          <p className="contact-kicker">Get in touch</p>
          <h2>Let&apos;s Start a Conversation</h2>
          <span className="contact-squiggle" aria-hidden="true" />
          <p>
            Fill out the form or contact us directly using the details below.
            We look forward to hearing from you.
          </p>

          <div className="contact-detail-list">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="contact-detail-card">
                  <span>
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="contact-form-ribbon" aria-hidden="true">
            Operations Desk
          </div>
          <div className="contact-form-heading">
            <span>
              <PencilLine size={30} aria-hidden="true" />
            </span>
            <div>
              <h2>Send Us a Message</h2>
              <i aria-hidden="true" />
              <p>Our team will get back to you as soon as possible.</p>
            </div>
          </div>

          <div className="contact-form-grid">
            <label>
              First Name *
              <input type="text" name="firstName" placeholder="Your first name" required />
            </label>
            <label>
              Last Name *
              <input type="text" name="lastName" placeholder="Your last name" required />
            </label>
            <label>
              Email Address *
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>
            <label>
              Phone Number *
              <input type="tel" name="phone" placeholder="+91 98765 43210" required />
            </label>
            <label className="contact-form-wide">
              Subject *
              <input type="text" name="subject" placeholder="How can we help you?" required />
            </label>
            <label className="contact-form-wide">
              Message *
              <textarea name="message" placeholder="Type your message here..." rows="6" required />
            </label>
          </div>

          <div className="contact-form-actions">
            <div className="contact-form-submit-group">
              <button type="submit" disabled={formStatus.type === 'submitting'}>
                {formStatus.type === 'submitting' ? 'Sending...' : 'Send Message'}
                <ArrowRight size={15} aria-hidden="true" />
              </button>
              {formStatus.message ? (
                <p
                  className={`form-status form-status--${formStatus.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {formStatus.message}
                </p>
              ) : null}
            </div>
            <p>
              <LockKeyhole size={14} aria-hidden="true" />
              Your information is safe with us.
            </p>
          </div>

          <div className="contact-form-tags" aria-label="Service areas">
            <span>Marine Services</span>
            <span>Partnerships</span>
            <span>Urgent Support</span>
          </div>
        </form>
      </section>

      <section className="contact-offices-section">
        <p className="contact-kicker">Our offices</p>
        <h2>Our Global Presence</h2>
        <p>Operating across key ports and offshore locations to serve you better.</p>

        <div className="contact-office-grid">
          {offices.map((office) => {
            const Icon = office.icon;

            return (
              <article key={office.title}>
                <span>
                  <Icon size={34} aria-hidden="true" />
                </span>
                <h3>
                  {office.title}
                  {office.accent ? <em> {office.accent}</em> : null}
                </h3>
                <p>{office.address}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact-help-strip">
        <div className="contact-help-image">
          <img src={heroImage} alt="" aria-hidden="true" />
        </div>
        <div className="contact-help-copy">
          <MessageCircle size={30} aria-hidden="true" />
          <div>
            <h2>Need Immediate Assistance?</h2>
            <p>Our support team is available 24/7 for urgent requirements.</p>
            <a href={appHref('/contact')}>
              Contact our team
              <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="contact-help-details">
          <article>
            <Phone size={27} aria-hidden="true" />
            <div>
              <h3>24/7 Helpline</h3>
              <p>+91 84888 84888</p>
            </div>
          </article>
          <article>
            <Mail size={27} aria-hidden="true" />
            <div>
              <h3>Email Support</h3>
              <p>info@bapus.com</p>
            </div>
          </article>
        </div>
      </section>

      <FooterCta showCta={false} />
    </main>
  );
}
