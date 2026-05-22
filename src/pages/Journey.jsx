import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Anchor,
  Award,
  ChevronDown,
  Fuel,
  Globe2,
  HardHat,
  Leaf,
  Ship,
  ShipWheel,
  TrendingUp,
  Wrench,
} from 'lucide-react';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';
import journeyImage from '../assets/hero/BAPUS SHIPPING JAMNAGAR PVT LTD.jpg.jpeg';
import bsaImage from '../assets/hero/BSA & BSAPL -1997 & 2007.jpg.jpeg';
import logoImage from '../assets/hero/BSJPL LOGO-  -2007 & 2010.jpg.jpeg';
import malaraImage from '../assets/hero/MALARA SEA LOGISTICS - 2012.jpg.jpeg';
import offshoreImage from '../assets/hero/BSSG OFSHORE - 2022.jpg.jpeg';
import heroImage from '../assets/hero/hero2.png';
import seap2 from '../assets/hero/feet/seap2.png';
import seap4 from '../assets/hero/feet/seap4.png';
import seap5 from '../assets/hero/feet/seap5.png';
import seap6 from '../assets/hero/feet/seap6.png';

const timeline = [
  {
    years: '1997',
    label: 'The Voyage Begins',
    icon: Anchor,
    image: bsaImage,
    title: "The Journey of Bapu's Shipping Agency Begins.",
    copy: [
      'Founded by Shri Bhupendrasinh Jadeja and Shri Hiren Joshi, the company specialized in ship chandling, container work and ship repairing.',
    ],
  },
  {
    years: '1997',
    label: 'The Voyage Begins',
    icon: ShipWheel,
    image: bsaImage,
    title: 'Apex Engineer Strengthens the Foundation.',
    copy: [
      'Another enterprise, Apex Engineer, was born under the leadership of Shri Bhupendrasinh Jadeja and Shri Vishalsinh Jadeja, solidifying the foundation for a successful future.',
    ],
  },
  {
    years: '2007',
    label: 'Gathering Knots',
    icon: Ship,
    image: journeyImage,
    title: "Bapu's Shipping Jamnagar Opens a New Chapter.",
    copy: [
      "Bapu's Shipping Jamnagar was established by Shri Bhupendrasinh and a consortium of like-minded entrepreneurs with the objective of creating a fleet of tugs and barges.",
      'The acquisition of the first fresh water barge, SUCCESS LINE, marked a new era of growth and success.',
    ],
  },
  {
    years: '2007',
    label: 'Gathering Knots',
    icon: Fuel,
    image: logoImage,
    title: "Bapu's Shipping Agency Pvt. Ltd. Is Formed.",
    copy: [
      "The formation of Bapu's Shipping Agency Pvt. Ltd. facilitated the import, storage and re-export of bonded products, expanding the company's presence in the shipping industry.",
    ],
  },
  {
    years: '2008',
    label: 'Expanding Presence',
    icon: Ship,
    image: seap2,
    title: 'Fleet Capabilities Expand Across the Gulf of Kutch.',
    copy: [
      'The fleet expanded with the addition of two tugs, VIKRANTA and VISHNU, and two barges, SAMBA PRASAD and SUCCESS GLORY.',
      'This increased the capability to provide expeditious services including fresh water supplies and tug assistance at all ports of the Gulf of Kutch.',
    ],
  },
  {
    years: '2009',
    label: 'Testing Newer Waters',
    icon: TrendingUp,
    image: heroImage,
    title: 'Apex Lubricant Diversifies the Group.',
    copy: [
      'Apex Lubricant was established as CFA of Hindustan Petroleum Corporation Limited for Kutch and Jamnagar districts for storage and distribution of lubes.',
    ],
  },
  {
    years: '2009',
    label: 'Testing Newer Waters',
    icon: ShipWheel,
    image: seap2,
    title: 'Fresh Water and Tug Services Grow Stronger.',
    copy: [
      'The fleet grew with the addition of the barge SUCCESS QUEEN and the tug SUCCESS NETRAVATI.',
      'The company also secured a sea transportation and launch hire contract from the Shipping Corporation of India for the Gulf of Kutch region.',
    ],
  },
  {
    years: '2010',
    label: 'Navigating Further',
    icon: Fuel,
    image: logoImage,
    title: "Bapu's Shipping Jamnagar Becomes a Private Limited Company.",
    copy: [
      "Bapu's Shipping Jamnagar was transformed into Bapu's Shipping Jamnagar Pvt. Ltd.",
      'The first bunkering barge, MT SUCCESS PRIDE, and the tug MT SUCCESS KING were added, strengthening the company with a wider range of client services.',
    ],
  },
  {
    years: '2011',
    label: 'Charting Success',
    icon: Award,
    image: seap4,
    title: 'Major Bunker Transportation Contracts Are Secured.',
    copy: [
      'A bunker sea transportation contract for the Kandla and Sikka region was secured from Indian Oil Corporation Limited, a Fortune 500 company.',
      "The bunker barge fleet was further strengthened with MT SUCCESS DIGNITY by Bapu's Shipping Jamnagar Pvt. Ltd.",
    ],
  },
  {
    years: '2012',
    label: 'Exploring New Frontiers',
    icon: TrendingUp,
    image: malaraImage,
    title: 'Fresh Water Contracts and Malara Sea Logistics Add Scale.',
    copy: [
      'The company secured its first-ever fresh water supply contract from Indian Oil Corporation Limited.',
      'The maritime fleet grew with the addition of the tug MALARA PRIDE by taking over Malara Sea Logistics.',
    ],
  },
  {
    years: '2013',
    label: 'Making Waves',
    icon: Globe2,
    image: logoImage,
    title: 'Storage, Agency and Fleet Strength Increase.',
    copy: [
      'The company was appointed as official clearing and forwarding agent for Wilhelmsen Maritime Products for the ports of Gujarat.',
      'Storage capability grew with a 20,000 square feet bonded storage facility within the KASEZ area.',
      'The tug SUCCESS JASMINE was acquired to respond to increasing service demand.',
    ],
  },
  {
    years: '2014',
    label: 'Bold Beginnings',
    icon: Fuel,
    image: heroImage,
    title: 'New Contracts and South Gujarat Expansion.',
    copy: [
      "Bapu's Shipping Jamnagar Pvt. Ltd. secured a sea transportation contract for bunker supplies from Hindustan Petroleum Corporation Limited.",
      "Bapu's Shipping South Gujarat was established to serve customers across the Gulf of Khambhat.",
    ],
  },
  {
    years: '2015',
    label: 'Steaming Ahead',
    icon: Ship,
    image: seap2,
    title: 'Fleet Expansion Supports Growing Demand.',
    copy: [
      "Bapu's Shipping Jamnagar Pvt. Ltd. acquired the RSV class bunker barge VAILANKINNI and the RSV-IV tug ADINATH-8.",
      "This pivotal acquisition positioned the company for continued growth and reliable service.",
    ],
  },
  {
    years: '2016',
    label: 'Evolution with Growth',
    icon: ShipWheel,
    image: seap5,
    title: 'Bunker Barge Vidyalaxmi Joins the Fleet.',
    copy: [
      'Shree Krishna Quarry Pvt. Ltd. added the RSV class bunker barge VIDYALAXMI to meet rising operational demand.',
    ],
  },
  {
    years: '2016',
    label: 'Evolution with Growth',
    icon: Wrench,
    image: heroImage,
    title: 'Apex Autolinks Pvt. Ltd. Diversifies the Group.',
    copy: [
      'The group diversified by establishing Apex Autolinks Pvt. Ltd. after acquiring the Renault car dealership in Kutch district, managed by Shri Vishalsinh Jadeja and Shri Bhupendrasinh Jadeja.',
    ],
  },
  {
    years: '2018-20',
    label: 'Cruising Along',
    icon: Ship,
    image: seap6,
    title: 'MS Class Barges and Tug Add to Fleet Strength.',
    copy: [
      "The group added MS Class barges DWARKESH by Bapu's Shipping Jamnagar Pvt. Ltd. and SONAL by Shree Krishna Quarry Pvt. Ltd.",
      "MS Class tug TULIP-1 was added by Bapu's Shipping South Gujarat.",
    ],
  },
  {
    years: '2018-20',
    label: 'Cruising Along',
    icon: TrendingUp,
    image: offshoreImage,
    title: 'Apex Offshore LLP Creates a Larger Operating Platform.',
    copy: [
      'The group joined hands with two-decade-old competitors and formed Apex Offshore LLP.',
      'Fresh water supply barges RAMA and tugs MANALI-II, MANALI-III, MANALI-V and DULDUL were included in the fleet for higher business volume and better administrative control.',
    ],
  },
  {
    years: '2021',
    label: 'New Dawn',
    icon: HardHat,
    image: seap6,
    title: 'State-of-the-Art Graving Dry Dock Facility Is Established.',
    copy: [
      'A 100m x 50m graving dry dock facility was established in the Gulf of Kachchh at Kandla.',
      'The facility supports self-sufficient docking services for the expanding fleet and demonstrates the group’s commitment to seaworthiness and operational excellence.',
    ],
  },
  {
    years: '2021',
    label: 'New Dawn',
    icon: ShipWheel,
    image: seap2,
    title: 'High Bollard Pull Tug IVY Joins the Fleet.',
    copy: [
      "Bapu's Shipping South Gujarat inducted its highest towing capacity 32 MT Bollard Pull MS Class tug IVY, further enhancing maritime capability.",
    ],
  },
  {
    years: '2022',
    label: 'Riding the Waves',
    icon: Ship,
    image: offshoreImage,
    title: 'Tug Mahadev Adds More Marine Capability.',
    copy: [
      "Bapu's Shipping South Gujarat expanded its maritime fleet with the addition of the 20 MT Bollard Pull tug vessel MAHADEV.",
    ],
  },
  {
    years: '2022',
    label: 'Riding the Waves',
    icon: Wrench,
    image: heroImage,
    title: 'D S Infraport & Logistics Moves Toward ATS.',
    copy: [
      'Under the Gujarat Government PPP Scheme and Ministry of Road Transport, approval was received for setting up an Automatic Testing Station in D S Infraport & Logistics.',
      'Fitness test ATS is being made mandatory for vehicles under the new law.',
    ],
  },
  {
    years: '2023',
    label: 'New Seas',
    icon: Globe2,
    image: seap2,
    title: 'ASK Tanker India Pvt. Ltd. Expands the Bunker Platform.',
    copy: [
      'With the participation of professional promoters and directors, the group formed an international JV with ASK Tankers Group under ASK Tanker (India) Pvt. Ltd.',
      'The induction of the 2000 MT bunker barge SAGAR URMIKA was aimed at capturing VLCC bunker demand along the western coast of India.',
    ],
  },
  {
    years: '2023',
    label: 'New Seas',
    icon: Leaf,
    image: heroImage,
    title: 'Apex Renewable Moves Toward an Authorized Scrap Yard.',
    copy: [
      'Apex Renewable is in process under the Gujarat Government PPP Scheme and Ministry of Road Transport.',
      'The group plans to establish an automated authorized scrap yard as mandatory vehicle scrapping requirements come into force from 2024.',
    ],
  },
];

const journeyIntro =
  "Bapu's Group of Companies is the embodiment of the grand vision of late Shri Dilipsinhji Narendrasinhji Jadeja, whose dream to establish a formidable presence in the shipping industry continues to inspire us today. His mentorship, guidance and oversight laid the foundation for our success. With a relentless pursuit of excellence and unwavering commitment to core values, we remain steadfast in our mission to be the trusted partner of choice for owners and operators around the world.";

const rangeGroups = [
  {
    years: '1988',
    label: 'Inception',
    summary:
      "The founding vision of late Shri Dilipsinhji Narendrasinhji Jadeja became the compass for Bapu's Group: reliability, trust and an unwavering commitment to the shipping industry.",
    items: [],
  },
  {
    years: '1994-1999',
    label: 'Evolution',
    summary:
      "This period shaped the group's entrepreneurial foundation, bringing Bapu's Shipping Agency and Apex Engineer into the early operating platform.",
    items: timeline.filter((item) => item.years === '1997'),
  },
  {
    years: '2001-2010',
    label: 'Breakthrough',
    summary:
      'The group moved from early operations into stronger fleet ownership, bonded products, lubrication distribution, fresh water services and bunkering capability.',
    items: timeline.filter((item) => ['2007', '2008', '2009', '2010'].includes(item.years)),
  },
  {
    years: '2011-2023',
    label: 'Expansion',
    summary:
      'From major oil company contracts to dry dock infrastructure, offshore support, ATS and international JV growth, this era expanded scale, capability and market reach.',
    items: timeline.filter((item) =>
      ['2011', '2012', '2013', '2014', '2015', '2016', '2018-20', '2021', '2022', '2023'].includes(item.years)
    ),
  },
  {
    years: '2024-2025',
    label: 'Ascension',
    summary:
      'The journey continues with future-ready services, authorized vehicle scrapping initiatives and a broader commitment to sustainable, reliable operations.',
    items: [],
  },
];

/** Thin horizontal band (~8vh) centered near the timeline read line (~42%); only one milestone card crosses it per scroll beat. */
const journeyCardRevealIO = {
  threshold: 0,
  rootMargin: '-38% 0px -54% 0px',
};

export function Journey() {
  const groupRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

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
    rootEl.classList.add('journey-page-scroll-snap');
    return () => rootEl.classList.remove('journey-page-scroll-snap');
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
    const footer = document.querySelector('.journey-page > .footer-cta');
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        /** Fire while footer still below-fold so fixed nav fades before overlapping the footer block */
        rootMargin: '0px 0px 22vh 0px',
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
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
          <nav className="journey-era-list" aria-label="Journey timeline">
            {navItems.map((era, index) => (
              <a
                key={era.id}
                className={index === activeIndex ? 'journey-era-link journey-era-link--active' : 'journey-era-link'}
                href={`#${era.id}`}
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
                              {era.years === '1988' ? 'A Vision That Set the Course.' : 'The Next Horizon.'}
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
    </main>
  );
}
