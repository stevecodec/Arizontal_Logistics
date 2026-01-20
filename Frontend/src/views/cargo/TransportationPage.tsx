// Transportation Page - Owner-Operator Partnerships

import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import {
  HeroSection,
  PartnershipOverview,
  WhatWeOffer,
  RequirementsSection,
  SafetyCompliance,
  IndependentContractor,
  WhyPartner,
  CTASection,
} from './components';

const TransportationPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <PartnershipOverview />
        <WhatWeOffer />
        <RequirementsSection />
        <SafetyCompliance />
        <IndependentContractor />
        <WhyPartner />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default TransportationPage;
