import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';
import { SectionAnchorRule } from './SectionAnchorRule.jsx';
import bapusShippingJamnagarImage from '../assets/hero/BAPUS SHIPPING JAMNAGAR PVT LTD.jpg.jpeg';
import bapusLogo from '../assets/hero/BAPUS TITLE.png';
import bsaLogo from '../assets/hero/BSA & BSAPL -1997 & 2007.jpg.jpeg';
import bsjplLogo from '../assets/hero/BSJPL LOGO-  -2007 & 2010.jpg.jpeg';
import bssgLogo from '../assets/hero/BSSG OFSHORE - 2022.jpg.jpeg';
import malaraLogo from '../assets/hero/MALARA SEA LOGISTICS - 2012.jpg.jpeg';
import bharatLogo from '../assets/hero/client/bharat.png';
import gspcLogo from '../assets/hero/client/gspc.png';
import hpLogo from '../assets/hero/client/hp.png';
import indianLogo from '../assets/hero/client/indian.png';
import sciLogo from '../assets/hero/client/sci.png';
import wilhelLogo from '../assets/hero/client/wilhel.png';
import arjunabhImage from '../assets/hero/directors/Arjunabh.png';
import bhupendrasinhImage from '../assets/hero/directors/Bhupendrasinh.png';

import vishalbhaiImage from '../assets/hero/directors/Vishalbhai.png';

const companies = [
  {
    name: 'BAPUS SHIPPING AGENCY',
    logo: bsaLogo,
  },
  {
    name: 'BAPUS SHIPPING AGENCY PVT LTD',
    logo: bsaLogo,
  },
  {
    name: 'BAPUS SHIPPING JAMNAGAR PVT LTD',
    logo: bsjplLogo,
  },
  {
    name: 'BAPUS ENTERPRISE',
    logo: bapusShippingJamnagarImage,
  },
  {
    name: 'BAPUS SHIPPING SOUTH GUJARAT',
    logo: bssgLogo,
  },
  {
    name: 'MALARA SEA LOGISTICS',
    logo: malaraLogo,
  },
  {
    name: 'APEX OFFSHORE LLP',
  },
  {
    name: 'BAPUS VENTURE',
  },
  {
    name: 'APEX ENGINEERS',
  },
  {
    name: 'APEX LUBRICANT',
  },
  {
    name: 'APEX AUTOLINKS PVT LTD (RENAULT CAR DEALERSHIP)',
  },
  {
    name: 'APEX RENEWABLE',
  },
  {
    name: 'BAPUS AUTOBIZ PVT LTD (TOYOTA CAR DEALERSHIP)',
  },
  {
    name: 'APEX ENTERPRISE',
  },
];

const directors = [
  {
    image: vishalbhaiImage,
    name: 'Mr. Vishalsinh Jadeja',
  },

  {
    image: arjunabhImage,
    name: 'Mr. Hiren Joshi',
  },
];

const partners = [
  {
    logo: indianLogo,
    name: 'IndianOil',
  },
  {
    logo: bharatLogo,
    name: 'BPCL',
  },
  {
    logo: hpLogo,
    name: 'HP',
  },
  {
    logo: sciLogo,
    name: 'SCI',
  },
  {
    logo: gspcLogo,
    name: 'GSPC',
  },
  {
    logo: wilhelLogo,
    name: 'Wilhelmsen',
  },
];

export function GroupCompanies() {
  const companyTrack = [...companies, ...companies];
  const [showChairmanDetail, setShowChairmanDetail] = useState(false);

  return (
    <section className="group-section">
      <div className="group-heading">
        <SectionAnchorRule />
        <h2>Our group companies</h2>
      </div>

      <div className="company-strip">
        <button type="button" aria-label="Previous company">
          <ChevronLeft size={24} />
        </button>
        <div className="company-list">
          {companyTrack.map((company, index) => (
            <article className="company-card" key={`${company.name}-${index}`}>
              <img src={company.logo ?? bapusLogo} alt={`${company.name} logo`} />
              <span>{company.name}</span>
            </article>
          ))}
        </div>
        <button type="button" aria-label="Next company">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="group-panels">
        <motion.article
          className="chairman-card"
          tabIndex={0}
          onMouseEnter={() => setShowChairmanDetail(true)}
          onMouseLeave={() => setShowChairmanDetail(false)}
          onFocus={() => setShowChairmanDetail(true)}
          onBlur={() => setShowChairmanDetail(false)}
          whileHover={{ y: -8, scale: 1.01 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <img
            className="portrait-image large"
            src={bhupendrasinhImage}
            alt="Mr. Bhupendrasinh Jadeja"
          />
          <div className="chairman-card-copy">
            <h3>Chairman&apos;s message</h3>
            <p>
              <Quote size={18} aria-hidden="true" />
              Our commitment is to deliver value through excellence, integrity
              and innovation while contributing to India&apos;s maritime growth
              and sustainable future.
            </p>
            <strong>Mr. Bhupendrasinh Jadeja</strong>
            <span>Chairman - Bapu&apos;s Group of Companies</span>
          </div>

        </motion.article>

        <AnimatePresence>
          {showChairmanDetail && (
            <motion.div
              className="chairman-hover-pop"
              initial={{
                opacity: 0,
                x: '-50%',
                y: 'calc(-50% + 28px)',
                scale: 0.88,
                filter: 'blur(10px)',
              }}
              animate={{
                opacity: 1,
                x: '-50%',
                y: '-50%',
                scale: 1,
                filter: 'blur(0px)',
              }}
              exit={{
                opacity: 0,
                x: '-50%',
                y: 'calc(-50% + 20px)',
                scale: 0.92,
                filter: 'blur(10px)',
              }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="chairman-pop-image">
                <img src={bhupendrasinhImage} alt="Mr. Bhupendrasinh Jadeja" />
              </div>
              <div className="chairman-pop-content">
                <span className="chairman-pop-kicker">
                  <Sparkles size={15} aria-hidden="true" />
                  Leadership Detail
                </span>
                <h4>Mr. Bhupendrasinh Jadeja</h4>
                <p>
                  Leading Bapu&apos;s Group with a focus on maritime growth,
                  operational excellence, integrity and sustainable innovation.
                </p>
                <div className="chairman-pop-meta">
                  <span>Excellence</span>
                  <span>Integrity</span>
                  <span>Innovation</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <article className="directors-card">
          <h3>Board of directors</h3>
          <div className="director-list">
            {directors.map((director) => (
              <div className="director-profile" key={director.name}>
                <img
                  className="portrait-image"
                  src={director.image}
                  alt={director.name}
                />
                <strong>{director.name}</strong>
                <span>Director</span>
              </div>
            ))}
          </div>
        </article>

        <article className="partners-card">
          <h3>Clients &amp; partners</h3>
          <div className="partner-grid">
            {partners.map((partner) => (
              <div className="partner-logo" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
