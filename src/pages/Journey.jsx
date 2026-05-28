import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Anchor,
  Award,
  ChevronDown,
  Fuel,
  Globe2,
  HardHat,
  Leaf,
  Ship,
  TrendingUp,
  Wrench,
  X,
} from 'lucide-react';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';
import journeyImage from '../assets/hero/BAPUS SHIPPING JAMNAGAR PVT LTD.jpg.jpeg';
import bsaImage from '../assets/hero/BSA & BSAPL -1997 & 2007.jpg.jpeg';
import logoImage from '../assets/hero/BSJPL LOGO-  -2007 & 2010.jpg.jpeg';
import malaraImage from '../assets/hero/MALARA SEA LOGISTICS - 2012.jpg.jpeg';
import offshoreImage from '../assets/hero/BSSG OFSHORE - 2022.jpg.jpeg';
import heroImage from '../assets/photo/BARGES AT KANDLA.png';
import bunkeringImage from '../assets/photo/BUNKERING OPS.png';
import bunkerLoadingImage from '../assets/photo/BUNKER LOADING OJ 8.png';
import bargeSunsetImage from '../assets/photo/BARGE SUNSET AT KANDLA.png';
import dryDockImage from '../assets/photo/DRYDOCK.png';
import dryDockTeamImage from '../assets/photo/DRYDOCK TEAM.png';
import mouImage from '../assets/photo/MOU 1.png';
import mouSigningImage from '../assets/photo/MoU 4.jpeg';
import mouDelegationImage from '../assets/photo/MoU 5.jpeg';
import mouCeremonyImage from '../assets/photo/MoU 6.jpeg';

const timeline = [
  {
    years: '1997',
    label: 'The Voyage Begins',
    icon: Anchor,
    image: bsaImage,
    title: "The journey of Bapu's Shipping Agency commenced.",
    copy: [
      'The journey of "BAPU\'S SHIPPING AGENCY" commenced under the leadership of Shri Bhupendrasinh Jadeja and Shri Hiren Joshi, specializing in ship chandling, container, and ship repairing.',
      '"APEX ENGINEER" was established by Shri Bhupendrasinh Jadeja and Shri Vishalsinh Jadeja, solidifying the foundation for a successful future.',
    ],
  },
  {
    years: '2007',
    label: 'Gathering Knots',
    icon: Ship,
    image: journeyImage,
    title: 'A new chapter unfolded with fleet and bonded products expansion.',
    copy: [
      '"BAPU\'S SHIPPING JAMNAGAR" was established by Shri Bhupendrasinh and a consortium of entrepreneurs, aiming to build a specialized fleet of tugs and barges.',
      'This era marked a significant milestone with the acquisition of our first fresh water barge, "SUCCESS LINE".',
      'To facilitate the import, storage, and re-export of bonded products, "BAPU\'S SHIPPING AGENCY PVT LTD" was formed, expanding our operational footprint.',
    ],
  },
  {
    years: '2008',
    label: 'Expanding Presence',
    icon: Ship,
    image: bargeSunsetImage,
    title: 'The maritime fleet expanded significantly.',
    copy: [
      'The maritime fleet expanded significantly with the induction of tugs "VIKRANTA" and "VISHNU," alongside barges "SAMBA PRASAD" and "SUCCESS GLORY".',
      'This enhanced our capability to deliver expeditious fresh water and tug assistance to coastal and foreign vessels across the ports of the Gulf of Kutch.',
    ],
  },
  {
    years: '2009',
    label: 'Testing Newer Waters',
    icon: TrendingUp,
    image: heroImage,
    title: 'The Group diversified operations and strengthened key partnerships.',
    copy: [
      '"APEX LUBRICANT" was established to operate as the Clearing and Forwarding Agent (CFA) for Hindustan Petroleum Corporation Limited, managing the storage and distribution of lubes for the Kutch and Jamnagar districts.',
      'Our fleet grew with the addition of the barge "SUCCESS QUEEN" and the tug "SUCCESS NETRAVATI".',
      'We forged a pivotal partnership with the Shipping Corporation of India, being entrusted with a sea transportation and launch hire agreement for the Gulf of Kutch region.',
    ],
  },
  {
    years: '2010',
    label: 'Navigating Further',
    icon: Fuel,
    image: logoImage,
    title: 'A stronger corporate framework supported expanding operations.',
    copy: [
      "To support our expanding operations and establish a stronger corporate framework, the firm transitioned into Bapu's Shipping Jamnagar Pvt. Ltd.",
      'We acquired our first bunkering barge, MT "SUCCESS PRIDE," and the tug MT "SUCCESS KING," allowing us to offer a more diverse range of services to our clients.',
    ],
  },
  {
    years: '2011',
    label: 'Charting a Course for Success',
    icon: Award,
    image: bunkerLoadingImage,
    title: 'Indian Oil Corporation Limited selected the company as maritime transport partner.',
    copy: [
      'The company was chosen as the maritime transport partner by Fortune 500 company Indian Oil Corporation Limited for bunker sea transportation in the Kandla and Sikka region.',
      'Our logistical capabilities were further strengthened with the inclusion of the MT "SUCCESS DIGNITY" to our bunker barge fleet.',
    ],
  },
  {
    years: '2012',
    label: 'Exploring New Frontiers',
    icon: TrendingUp,
    image: malaraImage,
    title: 'Service portfolio and maritime logistics capabilities expanded.',
    copy: [
      'Our service portfolio expanded by securing a primary fresh water supply agreement with Indian Oil Corporation Limited.',
      'We further enhanced our maritime logistics capabilities by taking over M/s Malara Sea Logistics and integrating the tug "MALARA PRIDE" into our fleet.',
    ],
  },
  {
    years: '2013',
    label: 'Making Waves',
    icon: Globe2,
    image: logoImage,
    title: 'Wilhelmsen Maritime Products appointed the company across Gujarat ports.',
    copy: [
      'The company was honored to be appointed as the official Clearing and Forwarding Agent for Wilhelmsen Maritime Products across Gujarat ports.',
      'This appointment included the operational launch of a 20,000 square-foot bonded storage facility within the KASEZ area.',
      'Responding to increasing industry demand, the tug "SUCCESS JASMINE" was successfully acquired.',
    ],
  },
  {
    years: '2014',
    label: 'Bold New Beginnings',
    icon: Fuel,
    image: heroImage,
    title: 'The Group expanded service coverage along the Gulf of Khambhat.',
    copy: [
      'We continued to demonstrate our commitment to high-quality service by partnering with Hindustan Petroleum Corporation Limited for bunker sea transportation.',
      'To provide comprehensive services along the entire Gulf of Khambhat, Shri Bhupendrasinh Jadeja and a consortium of prominent entrepreneurs established a new subsidiary, "BAPU\'S SHIPPING SOUTH GUJARAT".',
    ],
  },
  {
    years: '2015',
    label: 'Steaming Ahead',
    icon: Ship,
    image: bunkeringImage,
    title: 'Strategic fleet additions positioned the company for robust growth.',
    copy: [
      'Accommodating growing business requirements, we acquired the RSV class bunker barge "VAILANKINNI" and the RSV-IV tug "ADINATH-8".',
      'These strategic additions positioned the company for continued robust growth.',
    ],
  },
  {
    years: '2016',
    label: 'Evolution with Growth',
    image: heroImage,
    icon: Wrench,
    title: 'The Group diversified into the automotive sector.',
    copy: [
      '"APEX AUTOLINKS PVT.LTD." was established following the acquisition of a RENAULT Car Dealership in the Kutch district, managed by Shri Vishalsinh Jadeja and Shri Bhupendrasinh Jadeja.',
    ],
  },
  {
    years: '2018-2020',
    label: 'Cruising Along',
    icon: Ship,
    image: dryDockImage,
    title: 'Fleet growth and strategic alliances created Apex Offshore LLP.',
    copy: [
      'The Group expanded its fleet with the acquisition of the MS Class barge "DWARKESH" and the MS Class tug "TULIP-1".',
      'In a major strategic leap to capture voluminous business and optimize administrative control, we formed key industry alliances to create a new firm, "APEX OFFSHORE LLP".',
      'This strategic move brought the fresh water supply barge "RAMA" and tugs "MANALI-II," "MANALI-III," "MANALI-V," and "DULDUL" into our fleet.',
    ],
  },
  {
    years: '2021',
    label: 'Sailing into a New Dawn',
    icon: HardHat,
    image: dryDockTeamImage,
    title: 'A major marine infrastructure milestone was achieved.',
    copy: [
      'A major milestone was achieved with the establishment of a self-sufficient marine support facility in the Gulf of Kachchh at Kandla.',
      'This infrastructure showcases our dedication to maintaining the highest seaworthiness of our floating assets and achieving industry excellence.',
      'Furthermore, M/s Bapu\'s Shipping South Gujarat inducted its highest towing capacity asset, the 32 MT Bollard Pull MS class Tug "IVY".',
    ],
  },
  {
    years: '2022',
    label: 'Riding the Waves',
    icon: Ship,
    image: offshoreImage,
    title: 'The Group expanded its fleet and moved toward vehicle fitness infrastructure.',
    copy: [
      'The maritime fleet was expanded again with the addition of the 20 MT Bollard Pull Tug vessel "MAHADEV".',
      'Under the Gujarat Government PPP Scheme and Ministry of Road and Transport, our firm D S Infraport & Logistics received approval to set up an Automatic Testing Station (ATS) to meet new mandatory vehicle fitness laws.',
    ],
  },
  {
    years: '2023',
    label: 'New Seas of Opportunity Beckon',
    icon: Leaf,
    image: heroImage,
    title: 'Apex Renewable advanced sustainable infrastructure plans.',
    copy: [
      'Focusing on sustainable infrastructure, Apex Renewable initiated processes under the Gujarat Government PPP Scheme to establish an Authorized Automated Scrap Yard, seamlessly aligning with upcoming mandatory vehicle scrapping laws.',
    ],
  },
  {
    years: '2024',
    label: 'Expanding Automotive Horizons',
    icon: Wrench,
    image: heroImage,
    title: 'Bapus Autobiz strengthened the Group\'s regional automotive presence.',
    copy: [
      'Broadening our regional automotive presence, Bapus Autobiz Pvt. Ltd. was established to operate as an authorized Toyota dealership under the brand name Apex Toyota.',
      'Serving the Bhuj-Kutch region through a complete 3S facility for Sales, Service, and Spares, our customer-centric approach integrates all dealership services under one roof.',
      'We continue to emphasize quality service, transparency, and long-term customer relationships, ensuring a seamless experience and efficient after-sales support.',
    ],
  },
  {
    years: '2025 - 2026',
    label: 'Pioneering a Sustainable Maritime Future',
    icon: Leaf,
    image: mouImage,
    title: 'A landmark MoU advanced green bunkering, transportation, and shipbuilding at Kandla Port.',
    gallery: [
      { image: mouImage, caption: 'MoU exchange at Indian Maritime Week 2025' },
      { image: mouSigningImage, caption: 'Green bunkering and shipbuilding collaboration' },
      { image: mouDelegationImage, caption: 'Bapu\'s Group and Deendayal Port Authority delegation' },
      { image: mouCeremonyImage, caption: 'Strategic partnership for Kandla Port infrastructure' },
    ],
    copy: [
      'Through its flagship entity Bapu\'s Shipping Jamnagar Pvt. Ltd., the Group signed a comprehensive Memorandum of Understanding with the Deendayal Port Authority, under the Ministry of Ports, Shipping and Waterways, Government of India, during Indian Maritime Week 2025.',
      'The agreement encompasses the development of green methanol bunkering and transportation infrastructure, alongside a state-of-the-art shipbuilding yard at Kandla Port capable of constructing vessels up to 120 meters LOA.',
      'This strategic initiative aligns with Atmanirbhar Bharat and Viksit Bharat 2047 while supporting the Government of India\'s "Make in India" program and strengthening domestic shipbuilding capabilities.',
      'Under this collaboration, Bapu\'s Group will play a pioneering role in India\'s first Methanol and Green Fuel Bunkering initiative, including infrastructure for methanol bunkering and efficient marine fuel transportation.',
      'The Group is also planning next-generation green vessels, including India\'s first green methanol delivery tanker, electric tugs, and other sustainable port support vessels.',
    ],
  },
];

const journeyIntro =
  "Bapu's Group of Companies is the embodiment of the grand vision of late Shri Dilipsinhji Narendrasinhji Jadeja, whose dream to establish a formidable presence in the shipping industry continues to inspire us today. His unwavering mentorship, guidance, and oversight were instrumental in laying the foundation for our success. Our relentless pursuit of excellence and unwavering commitment to core values have charted a path of creativity, consistency, and determination towards achieving greatness in the maritime sector. The principles and values instilled by our founder serve as our compass, guiding us towards our ultimate goal of becoming a beacon of reliability and trust. We remain steadfast in our mission to be the trusted partner of choice for owners and operators around the world.";

const rangeGroups = timeline.map((item) => ({
  years: item.years,
  label: item.label,
  summary: item.title,
  items: [item],
}));

/** Thin horizontal band (~8vh) centered near the timeline read line (~42%); only one milestone card crosses it per scroll beat. */
const journeyCardRevealIO = {
  threshold: 0.04,
  rootMargin: '0px 0px -18% 0px',
};

export function Journey() {
  const groupRefs = useRef([]);
  const navListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState(null);

  const navItems = useMemo(
    () =>
      rangeGroups.map((group, index) => ({
        ...group,
        id: `journey-era-${index}`,
      })),
    []
  );

  useEffect(() => {
    const rootEl = document.documentElement;
    const desktopQuery = window.matchMedia('(min-width: 721px)');

    const syncScrollSnap = () => {
      rootEl.classList.toggle('journey-page-scroll-snap', desktopQuery.matches);
    };

    rootEl.classList.add('journey-page-active');
    syncScrollSnap();
    desktopQuery.addEventListener('change', syncScrollSnap);

    return () => {
      desktopQuery.removeEventListener('change', syncScrollSnap);
      rootEl.classList.remove('journey-page-active');
      rootEl.classList.remove('journey-page-scroll-snap');
    };
  }, []);

  useEffect(() => {
    let frameId = 0;

    const updateActiveRange = () => {
      const targetLine = window.innerHeight * 0.42;
      let nextIndex = 0;

      groupRefs.current.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= targetLine && rect.bottom > targetLine) {
          nextIndex = index;
        }
      });

      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveRange);
    };

    updateActiveRange();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    /** Direct child is <footer.site-footer>; .footer-cta is nested inside (selector was broken before). */
    const footer = document.querySelector('.journey-page > footer.site-footer');
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        /** Fade nav before footer enters (IO rootMargin: only px or % — not vh). */
        rootMargin: '0px 0px 28% 0px',
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const list = navListRef.current;
    const activeLink = list?.querySelector(`[data-nav-index="${activeIndex}"]`);
    if (!list || !activeLink) return;
    if (window.matchMedia('(max-width: 720px)').matches) return;

    activeLink.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
      behavior: 'smooth',
    });
  }, [activeIndex]);

  useEffect(() => {
    if (!selectedGalleryPhoto) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedGalleryPhoto(null);
      }
    };

    document.body.classList.add('journey-lightbox-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('journey-lightbox-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedGalleryPhoto]);

  const handleEraClick = useCallback((event, index) => {
    event.preventDefault();

    const section = groupRefs.current[index];
    if (!section) return;

    const isMobile = window.matchMedia('(max-width: 720px)').matches;
    const offset = isMobile ? 92 : 142;
    const targetTop = section.getBoundingClientRect().top + window.scrollY - offset;

    setActiveIndex(index);
    window.scrollTo({
      top: Math.max(0, targetTop),
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <main className={isFooterVisible ? 'journey-page journey-page--footer-visible' : 'journey-page'}>
      <Header />

      <div className="journey-body">
        <aside
          className="journey-era-nav"
          aria-label="Journey years"
          aria-hidden={isFooterVisible}
        >
          <nav className="journey-era-list" aria-label="Journey timeline" ref={navListRef}>
            {navItems.map((era, index) => (
              <a
                key={era.id}
                className={index === activeIndex ? 'journey-era-link journey-era-link--active' : 'journey-era-link'}
                href={`#${era.id}`}
                data-nav-index={index}
                onClick={(event) => handleEraClick(event, index)}
              >
                <span className="journey-era-link__indicator" aria-hidden="true" />
                <span className="journey-era-link__text">
                  <strong>{era.years}</strong>
                  <span className="journey-era-link__subtitle">{era.label}</span>
                </span>
              </a>
            ))}
          </nav>
        </aside>

        <section className="journey-scroll">
          <section className="journey-hero" id="journey-top">
            <img className="journey-hero__image" src={journeyImage} alt="" aria-hidden="true" />
            <div className="journey-hero__veil" aria-hidden="true" />

            <ScrollReveal direction="up" threshold={0.12} delay={70} once>
              <div className="journey-hero__content">
                <p className="journey-hero__year">Bapu&apos;s Group of Companies</p>
                <h1>OUR JOURNEY</h1>
                <h2>BAPU&apos;S GROUP OF COMPANIES</h2>
                <p>{journeyIntro}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="fade" threshold={0.08} delay={240} once className="journey-hero-scroll-cue-wrap">
              <a className="journey-scroll-cue" href="#journey-era-0">
                <span>Scroll to reveal era</span>
                <ChevronDown size={38} aria-hidden="true" />
              </a>
            </ScrollReveal>
          </section>

          <section className="journey-era-details journey-timeline-v2" aria-label="Journey timeline">
            {navItems.map((era, index) => (
              <section
                id={era.id}
                className={`journey-timeline-era${
                  index === activeIndex ? ' journey-timeline-era--active' : ''
                }${index % 2 === 1 ? ' journey-timeline-era--band' : ''}`}
                data-index={index}
                key={era.id}
                ref={(node) => {
                  groupRefs.current[index] = node;
                }}
              >
                <ScrollReveal
                  direction="fade"
                  once
                  threshold={0.08}
                  className="journey-era-header-scroll"
                >
                  <header
                    className="journey-timeline-era__header"
                    style={{ zIndex: 42 + index }}
                  >
                    <p className="journey-timeline-era__range">{era.years}</p>
                    <h2>{era.label}</h2>
                    <p className="journey-timeline-era__lede">{era.summary}</p>
                  </header>
                </ScrollReveal>

                <div className="journey-timeline-era__items">
                  <div className="journey-timeline-era__line" aria-hidden="true" />

                  {era.items.length === 0 ? (
                    <article className="journey-milestone journey-milestone--hero journey-milestone--ref">
                      <div className="journey-milestone__pillar">
                        <div className="journey-milestone__year-pin" aria-hidden="true">
                          {era.years}
                        </div>
                      </div>
                      <div className="journey-milestone__rail-slot">
                        <span className="journey-milestone__marker" />
                      </div>
                      <ScrollReveal
                        direction="fade"
                        once
                        {...journeyCardRevealIO}
                        className="journey-milestone-card-reveal"
                      >
                        <div className="journey-milestone__card">
                          <div className="journey-milestone__main">
                            <h3 className="journey-milestone__title-line">
                              {era.years} –{' '}
                              The Next Horizon.
                            </h3>
                            <div className="journey-milestone__copy">
                              <p>{era.summary}</p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    </article>
                  ) : null}

                  {era.items.map((item) => {
                    return (
                      <article className="journey-milestone journey-milestone--ref" key={`${era.id}-${item.title}`}>
                        <div className="journey-milestone__pillar">
                          <div className="journey-milestone__year-pin" aria-hidden="true">
                            {item.years}
                          </div>
                        </div>
                        <div className="journey-milestone__rail-slot">
                          <span className="journey-milestone__marker" />
                        </div>
                        <ScrollReveal
                          direction="fade"
                          once
                          {...journeyCardRevealIO}
                          className="journey-milestone-card-reveal"
                        >
                          <div className="journey-milestone__card">
                            <div className="journey-milestone__main">
                              <h3 className="journey-milestone__title-line">
                                {item.years} – {item.label}
                              </h3>
                              <p className="journey-milestone__dek">{item.title}</p>
                              {item.copy.length > 1 ? (
                                <ul className="journey-milestone__bullet-list">
                                  {item.copy.map((paragraph) => (
                                    <li key={paragraph}>{paragraph}</li>
                                  ))}
                                </ul>
                              ) : (
                                <div className="journey-milestone__copy">
                                  {item.copy.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                  ))}
                                </div>
                              )}
                            </div>
                            <figure className="journey-milestone__figure">
                              <img src={item.image} alt="" loading="lazy" />
                            </figure>
                            {item.gallery ? (
                              <div className="journey-milestone__gallery" aria-label={`${item.years} MoU photo gallery`}>
                                {item.gallery.map((photo) => (
                                  <figure key={photo.caption}>
                                    <button
                                      type="button"
                                      className="journey-milestone__gallery-button"
                                      onClick={() => setSelectedGalleryPhoto(photo)}
                                      aria-label={`Open ${photo.caption}`}
                                    >
                                      <img src={photo.image} alt={photo.caption} loading="lazy" />
                                      <figcaption>{photo.caption}</figcaption>
                                    </button>
                                  </figure>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        </ScrollReveal>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </section>
        </section>
      </div>

      <FooterCta />

      {selectedGalleryPhoto ? (
        <div
          className="journey-photo-lightbox"
          role="presentation"
          onClick={() => setSelectedGalleryPhoto(null)}
        >
          <div
            className="journey-photo-lightbox__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={selectedGalleryPhoto.caption}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="journey-photo-lightbox__close"
              onClick={() => setSelectedGalleryPhoto(null)}
              aria-label="Close image preview"
            >
              <X size={22} aria-hidden="true" />
            </button>
            <img src={selectedGalleryPhoto.image} alt={selectedGalleryPhoto.caption} />
            <p>{selectedGalleryPhoto.caption}</p>
          </div>
        </div>
      ) : null}
    </main>
  );
}
