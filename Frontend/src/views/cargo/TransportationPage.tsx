// Transportation Page - Owner-Operator Partnerships

import { TopBar } from '@/views/shared/TopBar';
import { Header } from '@/views/shared/Header';
import { Footer } from '@/views/shared/Footer';
import { useSEO } from '@/hooks';
import { SEO_CONFIG } from '@/constants/seo';
import {
  HeroSection,
  PartnershipOverview,
  PartnerRegistrationForm,
  RequirementsSection,
  IndependentContractor,
  LetUsPartner,
} from './components';

const TransportationPage = () => {
  useSEO(SEO_CONFIG.transportation);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <PartnershipOverview />
        <PartnerRegistrationForm />
        <RequirementsSection />
        <IndependentContractor />
        <LetUsPartner />
      </main>

      <Footer />
    </div>
  );
};

export default TransportationPage;
