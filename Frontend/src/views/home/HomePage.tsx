// Home Page View Component

import { Header } from '@/views/shared/Header';
import { HeroSection } from '@/views/home/components/HeroSection';
import { ServicesOverview } from '@/views/home/components/ServicesOverview';
import { CapacitySection } from '@/views/home/components/CapacitySection';
import { TrustIndicators } from '@/views/home/components/TrustIndicators';
import { WhyChooseUs } from '@/views/home/components/WhyChooseUs';
import { CareersTeaser } from '@/views/home/components/CareersTeaser';
import { Footer } from '@/views/shared/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <CapacitySection />
        <TrustIndicators />
        <WhyChooseUs />
        <CareersTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
