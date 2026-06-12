import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Anchor,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  FileText,
  Headphones,
  Mail,
  PencilLine,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react';
import heroImage from '../assets/photo/BARGE SUNSET KANDLA.png';
import { submitWeb3Form } from '../lib/web3Forms.js';

export function ContactPopup({ isOpen, onClose }) {
  const [formStatus, setFormStatus] = useState({ type: 'idle', message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    setFormStatus({ type: 'submitting', message: '' });

    try {
      await submitWeb3Form(form, 'Quick Enquiry');
      form.reset();
      setFormStatus({
        type: 'success',
        message: 'Thank you for your enquiry! Our team will contact you shortly.',
      });
    } catch {
      setFormStatus({
        type: 'error',
        message: 'Sorry, your enquiry could not be sent. Please try again.',
      });
    }
  };

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="contact-popup" role="presentation" onMouseDown={onClose}>
      <div
        className="contact-popup__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="contact-popup__close" type="button" onClick={onClose} aria-label="Close enquiry form">
          <X size={28} aria-hidden="true" />
        </button>

        <aside className="contact-popup__side">
          <div className="contact-popup__crest">
            <Anchor className="contact-popup__anchor" size={58} aria-hidden="true" />
          </div>
          <div className="contact-popup__ship">
            <img src={heroImage} alt="" aria-hidden="true" />
          </div>
          <p className="contact-popup__eyebrow">Trusted partner in</p>
          <h3>
            Maritime <span aria-hidden="true">&bull;</span> Energy
            <br />
            Infrastructure
          </h3>
          <span className="contact-popup__side-rule" aria-hidden="true" />

          <div className="contact-popup__cards">
            <article>
              <span>
                <Phone size={22} aria-hidden="true" />
              </span>
              <div>
                <strong>Call Us</strong>
                <p>+91 84888 84888</p>
              </div>
            </article>
            <article>
              <span>
                <Mail size={22} aria-hidden="true" />
              </span>
              <div>
                <strong>Email Us</strong>
                <p>info@bapus.com</p>
              </div>
            </article>
            <article>
              <span>
                <Headphones size={22} aria-hidden="true" />
              </span>
              <div>
                <strong>24/7 Support</strong>
                <p>We are always here to help</p>
              </div>
            </article>
          </div>
        </aside>

        <form className="contact-popup__form" onSubmit={handleSubmit}>
          <div className="contact-popup__heading">
            <h2 id="contact-popup-title">Get in Touch</h2>
            <p>We&apos;d love to hear from you. Send us an enquiry and our team will get back to you shortly.</p>
            <span className="contact-popup__wave" aria-hidden="true" />
          </div>

          <div className="contact-popup__grid">
            <label>
              <UserRound size={20} aria-hidden="true" />
              <input type="text" name="fullName" placeholder="Full Name" required />
            </label>
            <label>
              <Mail size={20} aria-hidden="true" />
              <input type="email" name="email" placeholder="Email Address" required />
            </label>
            <label>
              <Phone size={20} aria-hidden="true" />
              <input type="tel" name="phone" placeholder="Phone Number" required />
            </label>
            <label>
              <Building2 size={20} aria-hidden="true" />
              <input type="text" name="company" placeholder="Company Name" />
            </label>
            <label className="contact-popup__wide">
              <BriefcaseBusiness size={20} aria-hidden="true" />
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select Service
                </option>
                <option>Marine Bunkering</option>
                <option>Offshore Logistics</option>
                <option>Infrastructure Support</option>
                <option>Energy Services</option>
              </select>
            </label>
            <label className="contact-popup__wide">
              <FileText size={20} aria-hidden="true" />
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
            <label className="contact-popup__wide contact-popup__message">
              <PencilLine size={20} aria-hidden="true" />
              <textarea name="message" placeholder="Message" rows="3" required />
            </label>
          </div>

          <button className="contact-popup__submit" type="submit" disabled={formStatus.type === 'submitting'}>
            <Anchor size={26} aria-hidden="true" />
            <span>{formStatus.type === 'submitting' ? 'Sending...' : 'Send Enquiry'}</span>
            <ArrowRight size={28} aria-hidden="true" />
          </button>

          {formStatus.message ? (
            <p
              className={`form-status contact-popup__status form-status--${formStatus.type}`}
              role="status"
              aria-live="polite"
            >
              {formStatus.message}
            </p>
          ) : null}

          <p className="contact-popup__promise">
            <span aria-hidden="true" />
            <ShieldCheck size={20} aria-hidden="true" />
            We&apos;ll respond within 24 hours
            <span aria-hidden="true" />
          </p>
        </form>
      </div>
    </div>,
    document.body
  );
}
