// Home Page View Component

import { Header } from '@/views/shared/Header';
import { HeroSection } from '@/views/home/components/HeroSection';
import { ServicesOverview } from '@/views/home/components/ServicesOverview';
import { CapacitySection } from '@/views/home/components/CapacitySection';
import { TrustIndicators } from '@/views/home/components/TrustIndicators';
import { WhyChooseUs } from '@/views/home/components/WhyChooseUs';
import { CareersTeaser } from '@/views/home/components/CareersTeaser';
import { QuickQuote } from '@/views/home/components/QuickQuote';
import { StatsBar } from '@/views/home/components/StatsBar';
import { Footer } from '@/views/shared/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <CapacitySection />
        <TrustIndicators />
        <WhyChooseUs />
        <StatsBar />
        <QuickQuote />
        <CareersTeaser />
      </main>
      <Footer />
    </div>
  );
};
