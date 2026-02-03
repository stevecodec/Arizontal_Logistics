// About Page - Arizontal Transportation

import { TopBar } from '@/views/shared/TopBar';
import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { getImageUrl } from '@/data/services/imageService';
import {
  HeroSection,
  CompanyProfile,
  ServicesSection,
  FleetOperations,
  IndustriesProcess,
  ContactCTA,
} from './components';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ 
          backgroundImage: `url(${getImageUrl('overlay1')})`,
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <main className="flex-1 relative">
        <HeroSection />
        <CompanyProfile />
        <ServicesSection />
        <FleetOperations />
        <IndustriesProcess />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
