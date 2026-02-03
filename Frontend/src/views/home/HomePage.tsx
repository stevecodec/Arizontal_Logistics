// Home Page View Component

import { TopBar } from '@/views/shared/TopBar';
import { Header } from '@/views/shared/Header';
import { HeroSection } from '@/views/home/components/HeroSection';
import { ServicesOverview } from '@/views/home/components/ServicesOverview';
import { CapacitySection } from '@/views/home/components/CapacitySection';
import { TrustIndicators } from '@/views/home/components/TrustIndicators';
import { CompanyLogos } from '@/views/home/components/CompanyLogos';
import { WhyChooseUs } from '@/views/home/components/WhyChooseUs';
import { CareersTeaser } from '@/views/home/components/CareersTeaser';
import { Footer } from '@/views/shared/Footer';
import { useSEO } from '@/hooks';
import { SEO_CONFIG } from '@/constants/seo';

const HomePage = () => {
  useSEO(SEO_CONFIG.home);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <CapacitySection />
        <TrustIndicators />
        <CompanyLogos />
        <WhyChooseUs />
        <CareersTeaser />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
