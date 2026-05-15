import { CoreBusinesses } from '../components/CoreBusinesses.jsx';
import { FooterCta } from '../components/FooterCta.jsx';
import { Header } from '../components/Header.jsx';
import { ScrollReveal } from '../components/ScrollReveal.jsx';

export function Category() {
  return (
    <main className="app-shell category-page">
      <Header />

      <section className="category-hero">
        <p className="category-kicker">Business categories</p>
        <h1>Integrated maritime, energy & infrastructure services</h1>
        <p>
          Explore Bapu&apos;s Group capabilities across marine operations,
          infrastructure, energy distribution and commercial assets.
        </p>
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
