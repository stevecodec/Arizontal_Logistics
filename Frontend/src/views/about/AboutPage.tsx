// About Page - Arizontal Transportation

import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import {
  HeroSection,
  CompanyProfile,
  ServicesSection,
  FleetOperations,
  SafetyCompliance,
  WhyPartner,
  IndustriesProcess,
  ContactCTA,
} from './components';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <CompanyProfile />
        <ServicesSection />
        <FleetOperations />
        <SafetyCompliance />
        <WhyPartner />
        <IndustriesProcess />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
