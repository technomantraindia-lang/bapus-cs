import { AboutGroup } from '../components/AboutGroup.jsx';
import { CoreBusinesses } from '../components/CoreBusinesses.jsx';
import { FleetAssets } from '../components/FleetAssets.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { GroupCompanies } from '../components/GroupCompanies.jsx';
import { Header } from '../components/Header.jsx';
import { Hero } from '../components/Hero.jsx';
import { HowWeDeliver } from '../components/HowWeDeliver.jsx';
import { PresenceSection } from '../components/PresenceSection.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';
import { Testimonials } from '../components/Testimonials.jsx';
import { WhyChooseFuture } from '../components/WhyChooseFuture.jsx';

export function Home() {
  return (
    <main className="app-shell">
      <Header />
      <Hero />
      <div className="home-band home-band--about">
        <AboutGroup />
      </div>
      <div className="home-band home-band--business">
        <ScrollReveal direction="fade" threshold={0.22} rootMargin="0px 0px -28% 0px">
          <CoreBusinesses />
        </ScrollReveal>
      </div>
      <div className="home-band home-band--why">
        <WhyChooseFuture />
      </div>
      <div className="home-band home-band--fleet">
        <ScrollReveal direction="left">
          <FleetAssets />
        </ScrollReveal>
      </div>
      <ScrollReveal direction="up">
        <HowWeDeliver />
      </ScrollReveal>
      <div className="home-band home-band--presence">
        <ScrollReveal direction="right">
          <PresenceSection />
        </ScrollReveal>
      </div>
      <div className="home-band home-band--group">
        <ScrollReveal direction="left">
          <GroupCompanies />
        </ScrollReveal>
      </div>
      <div className="home-band home-band--testimonials">
        <ScrollReveal direction="zoom">
          <Testimonials />
        </ScrollReveal>
      </div>
      <ScrollReveal direction="up">
        <FooterCta />
      </ScrollReveal>
    </main>
  );
}
